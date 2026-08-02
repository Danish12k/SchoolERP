import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { IAssignSectionList } from '../../../interfaces/IClassAndSection';
import { IClass } from '../../../interfaces/IClassmaster';
import { ICollege } from '../../../interfaces/ICollege';
import { ISession } from '../../../interfaces/isession';
import { IStudent } from '../../../interfaces/IStudent';
import { CollegeService } from '../../../services/masterservice/college.service';
import { SectionService } from '../../../services/masterservice/section.service';
import { SessionService } from '../../../services/masterservice/session.service';
import { StudentService } from '../../../services/studentservice/student.service';

@Component({
  selector: 'app-searchstudent',
  imports: [FormsModule, MaterialModule, MatTableModule],
  templateUrl: './searchstudent.component.html',
  styleUrl: './searchstudent.component.scss',
})
export class SearchstudentComponent {
  private readonly sessionService = inject(SessionService);
  private readonly collegeService = inject(CollegeService);
  private readonly sectionService = inject(SectionService);
  private readonly studentService = inject(StudentService);

  sessions: ISession[] = [];
  schools: ICollege[] = [];
  classes: IClass[] = [];
  sections: IAssignSectionList[] = [];
  dataSource = new MatTableDataSource<IStudent>([]);
  displayedColumns = ['rollNumber', 'admissionNo', 'studentName', 'fatherName', 'motherName', 'mobile', 'className', 'sectionName'];

  sessionId: number | null = null;
  collegeId: number | null = null;
  courseId: number | null = null;
  sectionId: number | null = null;
  searchValue = '';
  loadingClasses = false;
  loadingSections = false;
  searching = false;
  errorMessage: string | null = null;

  constructor() {
    this.loadSessions();
    this.loadSchools();
  }

  loadSessions(): void {
    this.sessionService.getSessionList().subscribe(res => {
      this.sessions = Array.isArray(res.data) ? res.data : [res.data];
    });
  }

  loadSchools(): void {
    this.collegeService.getCollegeList().subscribe(res => {
      this.schools = Array.isArray(res.data) ? res.data : [res.data];
    });
  }

  onSessionOrSchoolChange(): void {
    this.courseId = null;
    this.sectionId = null;
    this.classes = [];
    this.sections = [];
    this.dataSource.data = [];
    this.errorMessage = null;

    if (!this.sessionId || !this.collegeId) {
      return;
    }

    this.loadingClasses = true;
    this.collegeService.getClassListBySessionAndCollege(this.sessionId, this.collegeId).subscribe({
      next: res => {
        this.loadingClasses = false;
        if (res.success && res.data) {
          this.classes = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.errorMessage = res.message || 'No classes found.';
        }
      },
      error: () => {
        this.loadingClasses = false;
        this.errorMessage = 'Could not load classes.';
      },
    });
  }

  onClassChange(): void {
    this.sectionId = null;
    this.sections = [];
    this.dataSource.data = [];
    this.errorMessage = null;

    if (!this.courseId) {
      return;
    }

    this.loadingSections = true;
    this.sectionService.getSectionListByClass(this.courseId).subscribe({
      next: res => {
        this.loadingSections = false;
        if (res.success && res.data) {
          this.sections = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.errorMessage = res.message || 'No sections found.';
        }
      },
      error: () => {
        this.loadingSections = false;
        this.errorMessage = 'Could not load sections.';
      },
    });
  }

  searchStudents(): void {
    const searchParams = {
      ...(this.sessionId ? { SessionId: this.sessionId } : {}),
      ...(this.searchValue.trim() ? { SearchValue: this.searchValue.trim() } : {}),
      ...(this.sectionId ? { SectionId: this.sectionId } : {}),
    };

    if (!Object.keys(searchParams).length) {
      this.errorMessage = 'Please enter search value or select session/section.';
      return;
    }

    this.searching = true;
    this.errorMessage = null;
    this.studentService.searchStudent(searchParams).subscribe({
      next: res => {
        this.searching = false;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.dataSource.data = [];
          this.errorMessage = res.message || 'No students found.';
        }
      },
      error: () => {
        this.searching = false;
        this.dataSource.data = [];
        this.errorMessage = 'Could not search students.';
      },
    });
  }

  displayStudentName(row: IStudent): string {
    return this.cleanValue(row.stuName || row.studentName || [row.firstName, row.lastName].filter(Boolean).join(' ')) || '—';
  }

  displayRollNumber(row: IStudent): string {
    return this.cleanValue(row.rollNumber || row.rollNo) || '—';
  }

  displayAdmission(row: IStudent): string {
    return this.cleanValue(row.stuAdmission || row.admissionNo || row.stuId) || '—';
  }

  displayMobile(row: IStudent): string {
    return this.cleanValue(row.mobile || row.stuMobile || row.phone) || '—';
  }

  displayClass(row: IStudent): string {
    return this.cleanValue(row.courseName || row.className) || '—';
  }

  cleanValue(value: unknown): string {
    return String(value ?? '').replace(/\s+/g, ' ').trim();
  }
}
