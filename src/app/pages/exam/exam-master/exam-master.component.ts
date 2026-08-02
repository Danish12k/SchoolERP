import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastrService } from 'ngx-toastr';
import { ICollege } from '../../../interfaces/ICollege';
import { IExam, IUpdateExamRequest } from '../../../interfaces/IExam';
import { ISession } from '../../../interfaces/isession';
import { CollegeService } from '../../../services/masterservice/college.service';
import { SessionService } from '../../../services/masterservice/session.service';
import { ExamSetupService } from '../../../services/examservice/exam-setup.service';

@Component({
  selector: 'app-exam-master',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
  ],
  templateUrl: './exam-master.component.html',
  styleUrl: './exam-master.component.scss',
})
export class ExamMasterComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private readonly fb = inject(FormBuilder);
  private readonly sessionService = inject(SessionService);
  private readonly collegeService = inject(CollegeService);
  private readonly examSetupService = inject(ExamSetupService);
  private readonly toast = inject(ToastrService);
  private readonly dialog = inject(MatDialog);

  examForm!: FormGroup;
  sessions: ISession[] = [];
  colleges: ICollege[] = [];
  isLoading = false;
  isSaving = false;

  readonly groupOptions = ['Nursery', 'Kg', 'Primary', 'VI-VII', 'IX-X', 'XI-XII'];
  readonly termOptions = [
    { value: 1, label: 'Term 1' },
    { value: 2, label: 'Term 2' },
  ];
  readonly assessmentOptions = ['Formative', 'Summative'];

  dataSource = new MatTableDataSource<IExam>([]);
  displayedColumns = ['index', 'examName', 'weightage', 'maxMarks', 'assessment', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog!: TemplateRef<{ exam: IExam }>;

  ngOnInit(): void {
    this.examForm = this.fb.group({
      sessionId: [null, Validators.required],
      collegeId: [null, Validators.required],
      groupName: [null, Validators.required],
      term: [null, Validators.required],
      assessment: [null, Validators.required],
      examName: ['', [Validators.required, Validators.maxLength(150)]],
      weightage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      maxMarks: [null, [Validators.required, Validators.min(1)]],
    });

    this.loadSessions();
    this.loadColleges();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadSessions(): void {
    this.sessionService.getSessionList().subscribe({
      next: res => {
        if (res.success) {
          this.sessions = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
    });
  }

  loadColleges(): void {
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        if (res.success) {
          this.colleges = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
    });
  }

  onFiltersChange(): void {
    this.loadExams();
  }

  loadExams(): void {
    const sessionId = this.examForm.get('sessionId')?.value;
    const collegeId = this.examForm.get('collegeId')?.value;
    const groupName = this.examForm.get('groupName')?.value;
    const term = this.examForm.get('term')?.value;

    if (!sessionId || !collegeId || !groupName || !term) {
      this.dataSource.data = [];
      return;
    }

    this.isLoading = true;
    this.examSetupService.listExams({ sessionId, collegeId, groupName, term }).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.dataSource.data = [];
        }
      },
      error: () => {
        this.isLoading = false;
        this.dataSource.data = [];
        this.toast.error('Failed to load exams.');
      },
    });
  }

  saveExam(): void {
    if (this.examForm.invalid) {
      this.examForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const value = this.examForm.getRawValue();
    this.examSetupService
      .createExam({
        sessionId: value.sessionId,
        collegeId: value.collegeId,
        groupName: value.groupName,
        term: value.term,
        assessment: value.assessment,
        examName: value.examName?.trim(),
        weightage: Number(value.weightage),
        maxMarks: Number(value.maxMarks),
      })
      .subscribe({
        next: res => {
          this.isSaving = false;
          if (res.success) {
            this.toast.success(res.message || 'Exam added successfully.');
            this.examForm.patchValue({ examName: '', weightage: null, maxMarks: null });
            this.loadExams();
          } else {
            this.toast.error(res.message || 'Failed to add exam.');
          }
        },
        error: () => {
          this.isSaving = false;
          this.toast.error('Failed to add exam.');
        },
      });
  }

  openEditDialog(exam: IExam): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '420px',
      data: { exam: { ...exam } },
    });

    dialogRef.afterClosed().subscribe((result?: IUpdateExamRequest) => {
      if (!result) {
        return;
      }

      this.examSetupService.updateExam(result).subscribe({
        next: res => {
          if (res.success) {
            this.toast.success(res.message || 'Exam updated successfully.');
            this.loadExams();
          } else {
            this.toast.error(res.message || 'Failed to update exam.');
          }
        },
        error: () => this.toast.error('Failed to update exam.'),
      });
    });
  }

  deleteExam(exam: IExam): void {
    if (!confirm(`Delete exam "${exam.examName}"?`)) {
      return;
    }

    this.examSetupService.deleteExam(exam.examId).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(res.message || 'Exam deleted.');
          this.loadExams();
        } else {
          this.toast.error(res.message || 'Failed to delete exam.');
        }
      },
      error: () => this.toast.error('Failed to delete exam.'),
    });
  }

  rowIndex(index: number): number {
    const paginator = this.dataSource.paginator;
    return paginator ? paginator.pageIndex * paginator.pageSize + index + 1 : index + 1;
  }
}
