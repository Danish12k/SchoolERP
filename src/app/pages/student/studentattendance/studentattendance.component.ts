import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FilterstudentComponent } from '../../fillteCompnent/filterstudent/filterstudent.component';
import { IStudent } from '../../../interfaces/IStudent';
import { StudentAttendanceService } from '../../../services/studentservice/student-attendance.service';
import { StudentService } from '../../../services/studentservice/student.service';

type AttendanceStatus = 'P' | 'A' | 'M';

interface AttendanceRow extends IStudent {
  attendanceStatus: AttendanceStatus;
}

interface AttendanceReviewData {
  rows: AttendanceRow[];
}

@Component({
  selector: 'app-student-attendance-review-dialog',
  imports: [MaterialModule, MatTableModule],
  template: `
    <h2 mat-dialog-title>Attendance Review</h2>
    <mat-dialog-content class="attendance-review-dialog">
      @if (data.rows.length) {
        <p class="attendance-review-dialog__summary">
          Please review students marked Absent or Medical Leave.
        </p>
        <table mat-table [dataSource]="data.rows" class="attendance-review-dialog__table">
          <ng-container matColumnDef="rollNumber">
            <th mat-header-cell *matHeaderCellDef>Roll No.</th>
            <td mat-cell *matCellDef="let row">{{ row.rollNumber || row.rollNo || '—' }}</td>
          </ng-container>

          <ng-container matColumnDef="studentName">
            <th mat-header-cell *matHeaderCellDef>Student Name</th>
            <td mat-cell *matCellDef="let row">{{ displayStudentName(row) }}</td>
          </ng-container>

          <ng-container matColumnDef="fatherName">
            <th mat-header-cell *matHeaderCellDef>Father Name</th>
            <td mat-cell *matCellDef="let row">{{ row.fatherName || row.gaurdianName || '—' }}</td>
          </ng-container>

          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let row">{{ statusLabel(row.attendanceStatus) }}</td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
      } @else {
        <p class="attendance-review-dialog__summary">All students are marked Present.</p>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button type="button" (click)="dialogRef.close(false)">Cancel</button>
      <button mat-flat-button color="primary" type="button" (click)="dialogRef.close(true)">
        Final Submit
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    :host {
      display: block;
      background: #fff !important;
      color: #000 !important;
    }

    h2[mat-dialog-title],
    mat-dialog-actions {
      background: #fff !important;
      color: #000 !important;
    }

    .attendance-review-dialog {
      min-width: min(720px, 80vw);
      background: #fff !important;
      color: #000 !important;
    }

    .attendance-review-dialog__summary {
      margin: 0 0 12px;
      color: #000 !important;
    }

    .attendance-review-dialog__table {
      width: 100%;
      background: #fff !important;
      color: #000 !important;
    }

    .attendance-review-dialog__table th,
    .attendance-review-dialog__table td {
      background: #fff !important;
      color: #000 !important;
    }
  `],
})
export class StudentAttendanceReviewDialogComponent {
  displayedColumns = ['rollNumber', 'studentName', 'fatherName', 'status'];

  constructor(
    public dialogRef: MatDialogRef<StudentAttendanceReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AttendanceReviewData
  ) {}

  displayStudentName(row: AttendanceRow): string {
    return (row.stuName || row.studentName || [row.firstName, row.lastName].filter(Boolean).join(' ') || '—')
      .replace(/\s+/g, ' ')
      .trim();
  }

  statusLabel(status: AttendanceStatus): string {
    if (status === 'A') return 'Absent';
    if (status === 'M') return 'Medical Leave';
    return 'Present';
  }
}

@Component({
  selector: 'app-studentattendance',
  imports: [
    FilterstudentComponent,
    FormsModule,
    MaterialModule,
    MatTableModule,
  ],
  templateUrl: './studentattendance.component.html',
  styleUrl: './studentattendance.component.scss',
})
export class StudentattendanceComponent {
  private readonly studentService = inject(StudentService);
  private readonly studentAttendanceService = inject(StudentAttendanceService);
  private readonly dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<AttendanceRow>([]);
  displayedColumns = ['rollNumber', 'studentName', 'fatherName', 'attendance'];
  attendanceDate = new Date();
  readonly maxDate = new Date();
  selectedClassSectionId: number | null = null;
  loading = false;
  submitting = false;
  loadError: string | null = null;
  submitMessage: string | null = null;

  onClassSectionChange(classSectionId: number | null): void {
    this.selectedClassSectionId = classSectionId;
    this.loadError = null;
    this.submitMessage = null;

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
          this.dataSource.data = rows.map(row => ({
            ...row,
            attendanceStatus: 'P',
          }));
        } else {
          this.dataSource.data = [];
          this.loadError = res.message || 'No students found for selected section.';
        }
      },
      error: () => {
        this.loading = false;
        this.dataSource.data = [];
        this.loadError = 'Could not load students for attendance.';
      },
    });
  }

  blockFutureDates = (date: Date | { toDate: () => Date } | null): boolean => {
    if (!date) return false;
    const selected = this.startOfDay(date);
    const today = this.startOfDay(new Date());
    return selected.getTime() <= today.getTime();
  };

  viewAttendance(): void {
    const reviewRows = this.dataSource.data.filter(row => row.attendanceStatus === 'A' || row.attendanceStatus === 'M');
    const dialogRef = this.dialog.open(StudentAttendanceReviewDialogComponent, {
      width: '760px',
      maxWidth: '95vw',
      panelClass: 'student-attendance-review-panel',
      data: { rows: reviewRows },
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.submitAttendance();
      }
    });
  }

  submitAttendance(): void {
    if (this.selectedClassSectionId == null || !this.attendanceDate || !this.dataSource.data.length) {
      return;
    }

    const payload = {
      attendanceDate: this.toIsoDate(this.attendanceDate),
      classSectionId: this.selectedClassSectionId,
      isAbsentMessage: true,
      attendanceDetails: this.dataSource.data.map(row => ({
        stuId: row.stuId || '',
        status: row.attendanceStatus,
      })),
    };

    this.submitting = true;
    this.submitMessage = null;
    this.studentAttendanceService.saveStudentAttendance(payload).subscribe({
      next: res => {
        this.submitting = false;
        this.submitMessage = res.message || 'Attendance submitted successfully.';
      },
      error: () => {
        this.submitting = false;
        this.submitMessage = 'Could not submit attendance. Please try again.';
      },
    });
  }

  displayStudentName(row: AttendanceRow): string {
    return (row.stuName || row.studentName || [row.firstName, row.lastName].filter(Boolean).join(' ') || '—')
      .replace(/\s+/g, ' ')
      .trim();
  }

  displayRollNumber(row: AttendanceRow): string {
    return String(row.rollNumber || row.rollNo || '—').trim();
  }

  canViewAttendance(): boolean {
    return !!this.selectedClassSectionId && !!this.attendanceDate && !!this.dataSource.data.length && !this.loading && !this.submitting;
  }

  private toIsoDate(date: Date | { toDate: () => Date }): string {
    return this.toDate(date).toISOString();
  }

  private startOfDay(date: Date | { toDate: () => Date }): Date {
    const parsedDate = this.toDate(date);
    return new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate());
  }

  private toDate(date: Date | { toDate: () => Date }): Date {
    return date instanceof Date ? date : date.toDate();
  }
}
