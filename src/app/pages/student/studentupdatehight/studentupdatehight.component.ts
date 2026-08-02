import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FilterstudentComponent } from '../../fillteCompnent/filterstudent/filterstudent.component';
import { IStudent } from '../../../interfaces/IStudent';
import { StudentHeightWeightPayload, StudentService } from '../../../services/studentservice/student.service';

interface HeightWeightRow extends IStudent {
  visionRight: string;
  visionLeft: string;
  currentHeight: string;
  currentWeight: string;
  updating?: boolean;
}

@Component({
  selector: 'app-studentupdatehight',
  imports: [
    FilterstudentComponent,
    FormsModule,
    MaterialModule,
    MatTableModule,
  ],
  templateUrl: './studentupdatehight.component.html',
  styleUrl: './studentupdatehight.component.scss',
})
export class StudentupdatehightComponent {
  private readonly studentService = inject(StudentService);

  dataSource = new MatTableDataSource<HeightWeightRow>([]);
  displayedColumns = ['rollNumber', 'studentName', 'visionRight', 'visionLeft', 'currentHeight', 'currentWeight', 'actions'];
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
          this.dataSource.data = rows.map(row => this.toHeightWeightRow(row));
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

  updateRow(row: HeightWeightRow): void {
    row.updating = true;
    this.updateMessage = null;
    this.studentService.updateHeightWeight([this.toPayload(row)]).subscribe({
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
    this.studentService.updateHeightWeight(this.dataSource.data.map(row => this.toPayload(row))).subscribe({
      next: res => {
        this.updatingAll = false;
        this.updateMessage = res.message || 'All student height/weight details updated successfully.';
      },
      error: () => {
        this.updatingAll = false;
        this.updateMessage = 'Could not update all student details.';
      },
    });
  }

  displayStudentName(row: IStudent): string {
    return this.cleanValue(row.stuName || row.studentName || [row.firstName, row.lastName].filter(Boolean).join(' ')) || '—';
  }

  displayRollNumber(row: IStudent): string {
    return this.cleanValue(row.rollNumber || row.rollNo) || '—';
  }

  getStudentId(row: IStudent): string {
    return this.cleanValue(row.stuId || row.studentId || row.id);
  }

  private toHeightWeightRow(row: IStudent): HeightWeightRow {
    return {
      ...row,
      visionRight: this.cleanValue(row.visionR),
      visionLeft: this.cleanValue(row.visonL),
      currentHeight: this.cleanValue(row.height),
      currentWeight: this.cleanValue(row.weight),
      updating: false,
    };
  }

  private toPayload(row: HeightWeightRow): StudentHeightWeightPayload {
    return {
      studentId: this.getStudentId(row),
      studentName: this.displayStudentName(row),
      visionRight: this.cleanValue(row.visionRight),
      visionLeft: this.cleanValue(row.visionLeft),
      currentHeight: this.cleanValue(row.currentHeight),
      currentWeight: this.cleanValue(row.currentWeight),
      classSectionId: String(this.selectedClassSectionId ?? row.classSectionId ?? ''),
    };
  }

  private cleanValue(value: unknown): string {
    return String(value ?? '').replace(/\s+/g, ' ').trim();
  }
}
