import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { IClass } from '../../../interfaces/IClassmaster';
import { ICollege } from '../../../interfaces/ICollege';
import { IClassGroup } from '../../../interfaces/IExam';
import { ISession } from '../../../interfaces/isession';
import { CollegeService } from '../../../services/masterservice/college.service';
import { SessionService } from '../../../services/masterservice/session.service';
import { ExamSetupService } from '../../../services/examservice/exam-setup.service';

@Component({
  selector: 'app-class-group',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTableModule,
  ],
  templateUrl: './class-group.component.html',
  styleUrl: './class-group.component.scss',
})
export class ClassGroupComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private readonly sessionService = inject(SessionService);
  private readonly collegeService = inject(CollegeService);
  private readonly examSetupService = inject(ExamSetupService);
  private readonly toast = inject(ToastrService);

  sessions: ISession[] = [];
  colleges: ICollege[] = [];
  classes: IClass[] = [];

  selectedSessionId: number | null = null;
  selectedCollegeId: number | null = null;
  selectedGroupName: string | null = null;
  selectedCourseId: number | null = null;

  readonly groupOptions = ['Nursery', 'Kg', 'Primary', 'VI-VII', 'IX-X', 'XI-XII'];

  isLoadingClasses = false;
  isLoadingList = false;
  isSaving = false;

  dataSource = new MatTableDataSource<IClassGroup>([]);
  displayedColumns = ['index', 'collegeName', 'groupName', 'className'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadSessions();
    this.loadColleges();
    this.loadClassGroups();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onCollegeChange(): void {
    this.selectedCourseId = null;
    this.classes = [];
    this.loadClasses();
    this.loadClassGroups();
  }

  onGroupChange(): void {
    this.loadClassGroups();
  }

  submit(): void {
    if (!this.isValid()) {
      this.toast.warning('Please select school, group, and class.');
      return;
    }

    const selectedClass = this.classes.find(item => item.courseId === this.selectedCourseId);
    if (!selectedClass) {
      this.toast.warning('Please select a valid class.');
      return;
    }

    this.isSaving = true;
    this.examSetupService
      .createClassGroup({
        collegeId: this.selectedCollegeId!,
        groupName: this.selectedGroupName!,
        courseId: selectedClass.courseId,
        className: selectedClass.courseName,
        sessionId: this.selectedSessionId!,
      })
      .subscribe({
        next: res => {
          this.isSaving = false;
          if (res.success) {
            this.toast.success(res.message || 'Class group assigned successfully.');
            this.selectedCourseId = null;
            this.loadClassGroups();
          } else {
            this.toast.error(res.message || 'Failed to assign class group.');
          }
        },
        error: () => {
          this.isSaving = false;
          this.toast.error('Failed to assign class group.');
        },
      });
  }

  rowIndex(index: number): number {
    const paginator = this.dataSource.paginator;
    return paginator ? paginator.pageIndex * paginator.pageSize + index + 1 : index + 1;
  }

  collegeLabel(collegeId: number): string {
    return this.colleges.find(item => item.collegeId === collegeId)?.collegeAbreviation ?? '';
  }

  private isValid(): boolean {
    return (
      this.selectedSessionId != null &&
      this.selectedCollegeId != null &&
      Boolean(this.selectedGroupName) &&
      this.selectedCourseId != null
    );
  }

  private loadSessions(): void {
    this.sessionService.getSessionList().subscribe({
      next: res => {
        if (res.success && res.data) {
          this.sessions = Array.isArray(res.data) ? res.data : [res.data];
          if (this.sessions.length && this.selectedSessionId == null) {
            this.selectedSessionId = this.sessions[0].sessionId;
            if (this.selectedCollegeId != null) {
              this.loadClasses();
            }
          }
        }
      },
      error: () => this.toast.error('Failed to load sessions.'),
    });
  }

  private loadColleges(): void {
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        if (res.success && res.data) {
          this.colleges = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: () => this.toast.error('Failed to load schools.'),
    });
  }

  private loadClasses(): void {
    if (this.selectedSessionId == null || this.selectedCollegeId == null) {
      this.classes = [];
      return;
    }

    this.isLoadingClasses = true;
    this.collegeService
      .getClassListBySessionAndCollege(this.selectedSessionId, this.selectedCollegeId)
      .subscribe({
        next: res => {
          this.isLoadingClasses = false;
          if (res.success && res.data) {
            this.classes = Array.isArray(res.data) ? res.data : [res.data];
          } else {
            this.classes = [];
          }
        },
        error: () => {
          this.isLoadingClasses = false;
          this.classes = [];
          this.toast.error('Failed to load classes.');
        },
      });
  }

  private loadClassGroups(): void {
    const query =
      this.selectedCollegeId != null || this.selectedGroupName
        ? {
            collegeId: this.selectedCollegeId ?? undefined,
            groupName: this.selectedGroupName ?? undefined,
          }
        : undefined;

    this.isLoadingList = true;
    this.examSetupService.listClassGroups(query).subscribe({
      next: res => {
        this.isLoadingList = false;
        if (res.success && res.data) {
          const rows = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.data = rows.map(row => ({
            ...row,
            collegeName: row.collegeName || this.collegeLabel(row.collegeId),
          }));
        } else {
          this.dataSource.data = [];
        }
      },
      error: () => {
        this.isLoadingList = false;
        this.dataSource.data = [];
        this.toast.error('Failed to load class groups.');
      },
    });
  }
}
