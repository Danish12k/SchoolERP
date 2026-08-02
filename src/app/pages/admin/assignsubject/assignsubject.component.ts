import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { IAssignSectionList } from '../../../interfaces/IClassAndSection';
import { IClass } from '../../../interfaces/IClassmaster';
import { ICollege } from '../../../interfaces/ICollege';
import { ISession } from '../../../interfaces/isession';
import {
  IAssignSubject,
  IAssignSubjectList,
  ISubject,
  SUBJECT_TYPE_OPTIONS,
  subjectTypeLabel,
} from '../../../interfaces/ISubjectMst';
import { CollegeService } from '../../../services/masterservice/college.service';
import { SectionService } from '../../../services/masterservice/section.service';
import { SessionService } from '../../../services/masterservice/session.service';
import { SubjectmasterService } from '../../../services/masterservice/subjectmaster.service';

@Component({
  selector: 'app-assignsubject',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTableModule,
  ],
  templateUrl: './assignsubject.component.html',
  styleUrl: './assignsubject.component.scss',
})
export class AssignsubjectComponent implements OnInit {
  @Input() embedded = false;

  private readonly fb = inject(FormBuilder);
  private readonly sessionService = inject(SessionService);
  private readonly collegeService = inject(CollegeService);
  private readonly sectionService = inject(SectionService);
  private readonly subjectService = inject(SubjectmasterService);
  private readonly toast = inject(ToastrService);

  readonly subjectTypeOptions = SUBJECT_TYPE_OPTIONS;
  readonly subjectTypeLabel = subjectTypeLabel;

  assignSubjectForm!: FormGroup;
  sessions: ISession[] = [];
  colleges: ICollege[] = [];
  classList: IClass[] = [];
  sectionList: IAssignSectionList[] = [];
  availableSubjects: ISubject[] = [];
  selectedSubjectIds = new Set<number>();

  isLoadingClasses = false;
  isLoadingSections = false;
  isLoadingAssigned = false;
  isLoadingSubjects = false;
  isSaving = false;

  dataSource = new MatTableDataSource<IAssignSubjectList>([]);
  displayedColumns: string[] = ['subjectCode', 'subjectName', 'subjectType', 'actions'];

  ngOnInit(): void {
    this.assignSubjectForm = this.fb.group({
      sessionId: [null, Validators.required],
      collegeId: [null, Validators.required],
      courseId: [null, Validators.required],
      classSectionId: [null, Validators.required],
      subjectType: ['', Validators.required],
    });

    this.loadSchool();
    this.loadSessions();
  }

  onSessionOrCollegeChange(): void {
    this.assignSubjectForm.patchValue({ courseId: null, classSectionId: null, subjectType: '' });
    this.classList = [];
    this.sectionList = [];
    this.availableSubjects = [];
    this.selectedSubjectIds.clear();
    this.dataSource.data = [];
    this.loadClassList();
  }

  onClassChange(): void {
    this.assignSubjectForm.patchValue({ classSectionId: null, subjectType: '' });
    this.sectionList = [];
    this.availableSubjects = [];
    this.selectedSubjectIds.clear();
    this.dataSource.data = [];
    this.loadSectionList();
  }

  onSectionChange(): void {
    this.assignSubjectForm.patchValue({ subjectType: '' });
    this.availableSubjects = [];
    this.selectedSubjectIds.clear();
    this.loadAssignedSubjects();
  }

  onSubjectTypeChange(): void {
    this.availableSubjects = [];
    this.selectedSubjectIds.clear();
    this.loadAvailableSubjects();
  }

  isSubjectAssigned(subjectId: number): boolean {
    return this.dataSource.data.some(row => row.subjectId === subjectId);
  }

  isSubjectSelected(subjectId: number): boolean {
    return this.selectedSubjectIds.has(subjectId);
  }

  toggleSubjectSelection(subjectId: number, checked: boolean): void {
    if (checked) {
      this.selectedSubjectIds.add(subjectId);
    } else {
      this.selectedSubjectIds.delete(subjectId);
    }
  }

  assignSubjects(): void {
    const classSectionId = this.assignSubjectForm.get('classSectionId')?.value;
    if (!classSectionId) {
      this.toast.warning('Please select section.');
      return;
    }
    if (!this.selectedSubjectIds.size) {
      this.toast.warning('Please select at least one subject.');
      return;
    }

    const payload: IAssignSubject = {
      classSectionId,
      subjectId: Array.from(this.selectedSubjectIds),
    };

    this.isSaving = true;
    this.subjectService.assignSubject(payload).subscribe({
      next: res => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Subjects assigned successfully.');
          this.selectedSubjectIds.clear();
          this.loadAssignedSubjects();
          this.loadAvailableSubjects();
        } else {
          this.toast.error(res.message || 'Failed to assign subjects.');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to assign subjects.');
      },
    });
  }

  deleteAssignSub(row: IAssignSubjectList): void {
    if (!row.classSectionSubjectId) {
      return;
    }

    this.subjectService.deleteAssignSubject(row.classSectionSubjectId).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(res.message || 'Subject removed successfully.');
          this.loadAssignedSubjects();
          this.loadAvailableSubjects();
        } else {
          this.toast.error(res.message || 'Failed to remove subject.');
        }
      },
      error: () => this.toast.error('Failed to remove subject.'),
    });
  }

  private loadSessions(): void {
    this.sessionService.getSessionList().subscribe({
      next: res => {
        if (res.success && res.data) {
          this.sessions = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: () => this.toast.error('Failed to load sessions.'),
    });
  }

  private loadSchool(): void {
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        if (res.success && res.data) {
          this.colleges = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: () => this.toast.error('Failed to load schools.'),
    });
  }

  private loadClassList(): void {
    const sessionId = this.assignSubjectForm.get('sessionId')?.value;
    const collegeId = this.assignSubjectForm.get('collegeId')?.value;
    if (!sessionId || !collegeId) {
      return;
    }

    this.isLoadingClasses = true;
    this.collegeService.getClassListBySessionAndCollege(sessionId, collegeId).subscribe({
      next: res => {
        this.isLoadingClasses = false;
        if (res.success && res.data) {
          this.classList = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.classList = [];
        }
      },
      error: () => {
        this.isLoadingClasses = false;
        this.classList = [];
        this.toast.error('Failed to load classes.');
      },
    });
  }

  private loadSectionList(): void {
    const courseId = this.assignSubjectForm.get('courseId')?.value;
    if (!courseId) {
      return;
    }

    this.isLoadingSections = true;
    this.sectionService.getSectionListByClass(courseId).subscribe({
      next: res => {
        this.isLoadingSections = false;
        if (res.success && res.data) {
          this.sectionList = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.sectionList = [];
        }
      },
      error: () => {
        this.isLoadingSections = false;
        this.sectionList = [];
        this.toast.error('Failed to load sections.');
      },
    });
  }

  private loadAssignedSubjects(): void {
    const classSectionId = this.assignSubjectForm.get('classSectionId')?.value;
    if (!classSectionId) {
      this.dataSource.data = [];
      return;
    }

    this.isLoadingAssigned = true;
    this.subjectService.listAssignSubject(String(classSectionId)).subscribe({
      next: res => {
        this.isLoadingAssigned = false;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.dataSource.data = [];
        }
      },
      error: () => {
        this.isLoadingAssigned = false;
        this.dataSource.data = [];
        this.toast.error('Failed to load assigned subjects.');
      },
    });
  }

  private loadAvailableSubjects(): void {
    const subjectType = this.assignSubjectForm.get('subjectType')?.value;
    if (!subjectType) {
      this.availableSubjects = [];
      return;
    }

    this.isLoadingSubjects = true;
    this.subjectService.listSubject(subjectType).subscribe({
      next: res => {
        this.isLoadingSubjects = false;
        if (res.success && res.data) {
          this.availableSubjects = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.availableSubjects = [];
        }
      },
      error: () => {
        this.isLoadingSubjects = false;
        this.availableSubjects = [];
        this.toast.error('Failed to load subjects.');
      },
    });
  }
}
