import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FilterstudentComponent } from '../../fillteCompnent/filterstudent/filterstudent.component';
import { IStudent } from '../../../interfaces/IStudent';
import { StudentAaparDetailsPayload, StudentService } from '../../../services/studentservice/student.service';

interface AaparUpdateRow extends IStudent {
  motherAadharValue: string;
  fatherAadharValue: string;
  penNoValue: string;
  apaarValue: string;
  updating?: boolean;
}

@Component({
  selector: 'app-studentapparupdate',
  imports: [
    FilterstudentComponent,
    FormsModule,
    MaterialModule,
    MatTableModule,
  ],
  templateUrl: './studentapparupdate.component.html',
  styleUrl: './studentapparupdate.component.scss',
})
export class StudentapparupdateComponent {
  private readonly studentService = inject(StudentService);

  dataSource = new MatTableDataSource<AaparUpdateRow>([]);
  displayedColumns = ['rollNumber', 'studentName', 'motherAadhar', 'fatherAadhar', 'penNo', 'apaar', 'actions'];
  selectedClassSectionId: number | null = null;
  loading = false;
  updatingAll = false;
  loadError: string | null = null;
  updateMessage: string | null = null;

  onClassSectionChange(classSectionId: number | null): void {
    this.selectedClassSectionId = classSectionId;
    this.loadError = null;
    this.updateMessage = null;

    if (classSectionId == null) {
      this.dataSource.data = [];
      return;
    }

    this.loadStudents();
  }

  loadStudents(): void {
    if (this.selectedClassSectionId == null) {
      this.dataSource.data = [];
      this.loadError = 'Please select session, school, class and section first.';
      return;
    }

    this.loading = true;
    this.loadError = null;
    this.studentService.listStudentsByClassSection(this.selectedClassSectionId).subscribe({
      next: res => {
        this.loading = false;
        if (res.success && res.data != null) {
          const rows = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.data = rows.map(row => this.toAaparUpdateRow(row));
        } else {
          this.dataSource.data = [];
          this.loadError = res.message || 'No students found for selected section.';
        }
      },
      error: () => {
        this.loading = false;
        this.dataSource.data = [];
        this.loadError = 'Could not load students.';
      },
    });
  }

  updateRow(row: AaparUpdateRow): void {
    row.updating = true;
    this.updateMessage = null;
    this.studentService.updateAaparDetails([this.toPayload(row)]).subscribe({
      next: res => {
        row.updating = false;
        this.updateMessage = res.message || `${this.displayStudentName(row)} updated successfully.`;
      },
      error: () => {
        row.updating = false;
        this.updateMessage = `Could not update ${this.displayStudentName(row)}.`;
      },
    });
  }

  updateAll(): void {
    if (!this.dataSource.data.length) {
      return;
    }

    this.updatingAll = true;
    this.updateMessage = null;
    this.studentService.updateAaparDetails(this.dataSource.data.map(row => this.toPayload(row))).subscribe({
      next: res => {
        this.updatingAll = false;
        this.updateMessage = res.message || 'All student APAAR/Aadhar details updated successfully.';
      },
      error: () => {
        this.updatingAll = false;
        this.updateMessage = 'Could not update all student APAAR/Aadhar details.';
      },
    });
  }

  displayStudentName(row: IStudent): string {
    return this.toTitleCase(this.cleanValue(row.stuName || row.studentName || [row.firstName, row.lastName].filter(Boolean).join(' '))) || '-';
  }

  displayRollNumber(row: IStudent): string {
    return this.cleanValue(row.rollNumber || row.rollNo) || '-';
  }

  getStudentId(row: IStudent): string {
    return this.cleanValue(row.stuId || row.studentId || row.id);
  }

  private toAaparUpdateRow(row: IStudent): AaparUpdateRow {
    return {
      ...row,
      motherAadharValue: this.cleanValue(row.motherAadhar),
      fatherAadharValue: this.cleanValue(row.fatherAadhar),
      penNoValue: this.cleanValue(row.penNo),
      apaarValue: this.cleanValue(row.apaar),
      updating: false,
    };
  }

  private toPayload(row: AaparUpdateRow): StudentAaparDetailsPayload {
    return {
      studentId: this.getStudentId(row),
      studentName: this.displayStudentName(row),
      motherAadhar: this.cleanValue(row.motherAadharValue),
      fatherAadhar: this.cleanValue(row.fatherAadharValue),
      penNo: this.cleanValue(row.penNoValue),
      apaar: this.cleanValue(row.apaarValue),
    };
  }

  private cleanValue(value: unknown): string {
    return String(value ?? '').replace(/\s+/g, ' ').trim();
  }

  private toTitleCase(value: string): string {
    return value.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }
}
