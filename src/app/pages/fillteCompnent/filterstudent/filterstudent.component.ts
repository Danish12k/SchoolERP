import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionService } from '../../../services/masterservice/session.service';
import { SectionService } from '../../../services/masterservice/section.service';
import { CollegeService } from '../../../services/masterservice/college.service';
import { ISession } from '../../../interfaces/isession';
import { IAssignSectionList } from '../../../interfaces/IClassAndSection';
import { ICollege } from '../../../interfaces/ICollege';
import { IClass } from '../../../interfaces/IClassmaster';
import { IStudentFilterSelection } from '../../../interfaces/IFeeReport';

@Component({
  selector: 'app-filterstudent',
  imports: [
    MaterialModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './filterstudent.component.html',
  styleUrl: './filterstudent.component.scss'
})
export class FilterstudentComponent implements OnInit {
  @Output() classSectionChange = new EventEmitter<number | null>();
  @Output() filterChange = new EventEmitter<IStudentFilterSelection>();

  constructor(private fb: FormBuilder) { }

  sessionService = inject(SessionService);
  sectionService = inject(SectionService);
  collegeService = inject(CollegeService);

  studentFilterForm!: FormGroup;
  sessions: ISession[] = [];
  sections: IAssignSectionList[] = [];
  schools: ICollege[] = [];
  classs: IClass[] = [];
  loadingClasses = false;
  loadingSections = false;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.studentFilterForm = this.fb.group({
      sessionId: [null, [Validators.required, Validators.min(1)]],
      collegeId: [null, [Validators.required, Validators.min(1)]],
      courseId: [null, [Validators.required, Validators.min(1)]],
      classSectionId: [null, [Validators.required, Validators.min(1)]],
    });

    this.loadSession();
    this.loadCollege();
  };

  loadSession() {
    this.sessionService.getSessionList().subscribe(res => {
      this.sessions = Array.isArray(res.data) ? res.data : [res.data];
    })
  }

  loadCollege() {
    this.collegeService.getCollegeList().subscribe(res => {
      this.schools = Array.isArray(res.data) ? res.data : [res.data];
    })
  };

  onSessionOrSchoolChange() {
    this.studentFilterForm.patchValue({ courseId: null, classSectionId: null });
    this.classs = [];
    this.sections = [];
    this.errorMessage = null;
    this.emitFilterChange();

    const sessionIdControl = this.studentFilterForm.get('sessionId');
    const collegeIdControl = this.studentFilterForm.get('collegeId');

    const sessionId = sessionIdControl?.value;
    const collegeId = collegeIdControl?.value;

    if (!sessionId || !collegeId) {
      return;
    }

    this.loadingClasses = true;
    this.collegeService.getClassListBySessionAndCollege(sessionId, collegeId).subscribe({
      next: (res) => {
        this.loadingClasses = false;
        if (res.success && res.data) {
          this.classs = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.errorMessage = res.message || 'No assigned classes found.';
        }
      },
      error: () => {
        this.loadingClasses = false;
        this.errorMessage = 'Could not load assigned classes.';
      }
    });
  }

  onClassChange() {
    this.studentFilterForm.patchValue({ classSectionId: null });
    this.sections = [];
    this.errorMessage = null;
    this.emitFilterChange();

    const courseId = this.studentFilterForm.get('courseId')?.value;
    if (!courseId) {
      return;
    }

    this.loadingSections = true;
    this.sectionService.getSectionListByClass(courseId).subscribe({
      next: (res) => {
        this.loadingSections = false;
        if (res.success && res.data) {
          this.sections = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.errorMessage = res.message || 'No assigned sections found.';
        }
      },
      error: () => {
        this.loadingSections = false;
        this.errorMessage = 'Could not load assigned sections.';
      }
    });
  }

  onSectionChange() {
    this.emitFilterChange();
  }

  clearFilter() {
    this.studentFilterForm.reset();
    this.classs = [];
    this.sections = [];
    this.errorMessage = null;
    this.emitFilterChange();
  }

  private emitFilterChange(): void {
    const selection = this.currentSelection();
    this.filterChange.emit(selection);
    this.classSectionChange.emit(selection.classSectionId);
  }

  private currentSelection(): IStudentFilterSelection {
    const value = this.studentFilterForm?.value ?? {};
    return {
      sessionId: value.sessionId ?? null,
      collegeId: value.collegeId ?? null,
      courseId: value.courseId ?? null,
      classSectionId: value.classSectionId ?? null,
    };
  }
}

