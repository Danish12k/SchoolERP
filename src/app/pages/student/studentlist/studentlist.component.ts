import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FilterstudentComponent } from '../../fillteCompnent/filterstudent/filterstudent.component';
import { IStudent } from '../../../interfaces/IStudent';
import { StudentService } from '../../../services/studentservice/student.service';

@Component({
  selector: 'app-studentlist',
  imports: [
    FilterstudentComponent,
    MatCardModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.scss',
})
export class StudentlistComponent implements AfterViewInit {
  private studentService = inject(StudentService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<IStudent>([]);
  readonly columnOptions = [
    { id: 'seqNo', label: 'No.' },
    { id: 'photo', label: 'Photo' },
    { id: 'rollNumber', label: 'Roll Number' },
    { id: 'admissionNo', label: 'Admission' },
    { id: 'stuName', label: 'Name' },
    { id: 'fatherName', label: 'Father Name' },
    { id: 'motherName', label: 'Mother Name' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'stuDob', label: 'Date Of Birth' },
    { id: 'stuGender', label: 'Gender' },
    { id: 'courseName', label: 'Class' },
    { id: 'sectionName', label: 'Section' },
    { id: 'stuDoa', label: 'Admission Date' },
  ];
  selectedColumns: string[] = [
    'seqNo',
    'photo',
    'rollNumber',
    'admissionNo',
    'stuName',
    'fatherName',
    'motherName',
    'mobile',
    'stuDob',
    'stuGender',
    'courseName',
    'sectionName',
  ];

  get displayedColumns(): string[] {
    return [...this.selectedColumns, 'actions'];
  }

  loading = false;
  loadError: string | null = null;
  selectedClassSectionId: number | null = null;
  hasSelectedSection = false;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (row, filter) =>
      [
        row.stuName,
        row.studentName,
        row.stuId,
        row.stuGender,
        row.stuDob,
        row.stuDoa,
        row.stuAdmission,
        row.admissionNo,
        row.fatherName,
        row.motherName,
        row.mobile,
        row.stuMobile,
        row.courseName,
        row.className,
        row.sectionName,
        row.rollNumber,
        row.rollNo,
      ]
        .map(value => this.cleanValue(value))
        .join(' ')
        .toLowerCase()
        .includes(filter);
  }

  onClassSectionChange(classSectionId: number | null): void {
    this.selectedClassSectionId = classSectionId;
    this.hasSelectedSection = classSectionId != null;
    this.loadError = null;

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
      next: (res) => {
        this.loading = false;
        if (res.success && res.data != null) {
          const rows = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.dataSource.data = [];
          this.loadError = res.message || 'No students found for selected section.';
        }
      },
      error: () => {
        this.loading = false;
        this.dataSource.data = [];
        this.loadError =
          'Could not load students. Check student API endpoints and your network.';
      },
    });
  }

  exportExcel(): void {
    const rows = this.dataSource.filteredData.length ? this.dataSource.filteredData : this.dataSource.data;
    const csv = this.toCsv(rows);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    this.downloadFile(blob, `student-list-${Date.now()}.csv`);
  }

  exportPdf(): void {
    const rows = this.dataSource.filteredData.length ? this.dataSource.filteredData : this.dataSource.data;
    const tableRows = rows
      .map(
        row => `
          <tr>
            <td>${this.escapeHtml(this.displayAdmission(row))}</td>
            <td>${this.escapeHtml(this.displayStudentName(row))}</td>
            <td>${this.escapeHtml(row.stuGender || '—')}</td>
            <td>${this.escapeHtml(row.stuDob || '—')}</td>
            <td>${this.escapeHtml(this.displayClass(row))}</td>
            <td>${this.escapeHtml(this.displaySection(row))}</td>
            <td>${this.escapeHtml(this.displayRollNumber(row))}</td>
            <td>${this.escapeHtml(this.displayParentName(row))}</td>
            <td>${this.escapeHtml(row.motherName || '—')}</td>
            <td>${this.escapeHtml(this.displayMobile(row))}</td>
          </tr>`
      )
      .join('');
    const printWindow = window.open('', '_blank', 'width=1200,height=800');
    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Student List</title>
          <style>
            body { font-family: Arial, sans-serif; font-size: 12px; }
            h2 { margin: 0 0 12px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 6px; text-align: left; }
            th { background: #f1f1f1; }
          </style>
        </head>
        <body>
          <h2>Student List</h2>
          <table>
            <thead>
              <tr>
                <th>Admission No.</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Class</th>
                <th>Section</th>
                <th>Roll No.</th>
                <th>Father</th>
                <th>Mother</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>${tableRows}</tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayStudentName(row: IStudent): string {
    const direct = this.cleanValue(row.stuName || row.studentName);
    if (direct) {
      return direct;
    }
    const combined = [row.firstName, row.lastName].map(value => this.cleanValue(value)).filter(Boolean).join(' ');
    return combined || '—';
  }

  displayAdmission(row: IStudent): string {
    return this.cleanValue(row.stuAdmission || row.admissionNo) || '—';
  }

  displayRollNumber(row: IStudent): string {
    return this.cleanValue(row.rollNumber || row.rollNo) || '—';
  }

  displayMobile(row: IStudent): string {
    return this.cleanValue(row.mobile || row.stuMobile || row.phone) || '—';
  }

  displayClass(row: IStudent): string {
    return this.cleanValue(row.courseName || row.className) || '—';
  }

  displaySection(row: IStudent): string {
    return this.cleanValue(row.sectionName) || '—';
  }

  displayParentName(row: IStudent): string {
    return this.cleanValue(row.fatherName || row.gaurdianName) || '—';
  }

  onStudentAction(action: string, row: IStudent): void {
    const studentId = this.getStudentId(row);
    console.log(`${action} selected`, { studentId, row });
  }

  getStudentId(row: IStudent): string {
    return this.cleanValue(row.stuId || row.studentId || row.id);
  }

  photoUrl(row: IStudent): string {
    const photo = this.cleanValue(row.stuThumbPhoto || row.stuPhoto);
    if (!photo || photo.includes('nophotoicon')) {
      return 'https://api.asterinfotech.in/image/nophotoicon.jpg';
    }

    return photo.startsWith('http') ? photo : `https://api.asterinfotech.in${photo}`;
  }

  cleanValue(value: unknown): string {
    return String(value ?? '').replace(/\s+/g, ' ').trim();
  }

  private toCsv(rows: IStudent[]): string {
    const headers = ['Admission No.', 'Name', 'Gender', 'DOB', 'Admission Date', 'Class', 'Section', 'Roll No.', 'Father', 'Mother', 'Mobile'];
    const body = rows.map(row => [
      this.displayAdmission(row),
      this.displayStudentName(row),
      row.stuGender || '',
      row.stuDob || '',
      row.stuDoa || '',
      this.displayClass(row),
      this.displaySection(row),
      this.displayRollNumber(row),
      this.displayParentName(row),
      row.motherName || '',
      this.displayMobile(row),
    ]);

    return [headers, ...body].map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');
  }

  private downloadFile(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  private escapeHtml(value: unknown): string {
    return this.cleanValue(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
