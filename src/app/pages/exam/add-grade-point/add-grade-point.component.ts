import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { IGradePoint } from '../../../interfaces/IExam';
import { ISession } from '../../../interfaces/isession';
import { SessionService } from '../../../services/masterservice/session.service';
import { ExamSetupService } from '../../../services/examservice/exam-setup.service';

@Component({
  selector: 'app-add-grade-point',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTableModule,
  ],
  templateUrl: './add-grade-point.component.html',
  styleUrl: './add-grade-point.component.scss',
})
export class AddGradePointComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private readonly sessionService = inject(SessionService);
  private readonly examSetupService = inject(ExamSetupService);
  private readonly toast = inject(ToastrService);
  private readonly dialog = inject(MatDialog);

  sessions: ISession[] = [];
  selectedSessionId: number | null = null;

  grade = '';
  point: number | null = null;
  minMarks: number | null = null;
  maxMarks: number | null = null;

  isLoading = false;
  isSaving = false;

  dataSource = new MatTableDataSource<IGradePoint>([]);
  displayedColumns = ['index', 'grade', 'point', 'minMarks', 'maxMarks'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;

  ngOnInit(): void {
    this.loadSessions();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadSessions(): void {
    this.sessionService.getSessionList().subscribe({
      next: res => {
        if (res.success) {
          this.sessions = Array.isArray(res.data) ? res.data : [res.data];
          if (this.sessions.length > 0 && this.selectedSessionId == null) {
            this.selectedSessionId = this.sessions[0].sessionId;
            this.loadGradePoints();
          }
        }
      },
    });
  }

  onSessionChange(): void {
    this.loadGradePoints();
  }

  loadGradePoints(): void {
    if (this.selectedSessionId == null) {
      this.dataSource.data = [];
      return;
    }

    this.isLoading = true;
    this.examSetupService.listGradePoints(this.selectedSessionId).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.dataSource.data = [];
          if (res.message) {
            this.toast.info(res.message);
          }
        }
      },
      error: () => {
        this.isLoading = false;
        this.dataSource.data = [];
        this.toast.error('Failed to load grade points.');
      },
    });
  }

  openAddDialog(): void {
    if (this.selectedSessionId == null) {
      this.toast.warning('Please select a session first.');
      return;
    }

    this.resetForm();
    this.dialog.open(this.addDialog, { width: 'min(480px, 92vw)', maxWidth: '95vw' });
  }

  saveGradePoint(): void {
    if (this.selectedSessionId == null) {
      this.toast.warning('Please select a session.');
      return;
    }

    const grade = this.grade.trim();
    if (!grade) {
      this.toast.warning('Please enter grade.');
      return;
    }

    if (this.point == null || this.minMarks == null || this.maxMarks == null) {
      this.toast.warning('Please enter point, min marks, and max marks.');
      return;
    }

    this.isSaving = true;
    this.examSetupService
      .createGradePoint({
        grade,
        point: this.point,
        minMarks: this.minMarks,
        maxMarks: this.maxMarks,
        sessionId: this.selectedSessionId,
      })
      .subscribe({
        next: res => {
          this.isSaving = false;
          if (res.success) {
            this.toast.success(res.message || 'Grade point added successfully.');
            this.dialog.closeAll();
            this.resetForm();
            this.loadGradePoints();
          } else {
            this.toast.error(res.message || 'Failed to add grade point.');
          }
        },
        error: () => {
          this.isSaving = false;
          this.toast.error('Failed to add grade point.');
        },
      });
  }

  resetForm(): void {
    this.grade = '';
    this.point = null;
    this.minMarks = null;
    this.maxMarks = null;
  }

  rowIndex(index: number): number {
    const paginator = this.dataSource.paginator;
    return paginator ? paginator.pageIndex * paginator.pageSize + index + 1 : index + 1;
  }
}
