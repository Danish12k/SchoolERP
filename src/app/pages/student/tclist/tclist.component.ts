import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FilterstudentComponent } from '../../fillteCompnent/filterstudent/filterstudent.component';
import { IStudentTc } from '../../../interfaces/IStudentTc';
import { StudentService } from '../../../services/studentservice/student.service';

@Component({
  selector: 'app-tclist',
  imports: [
    FilterstudentComponent,
    MatCardModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './tclist.component.html',
  styleUrl: './tclist.component.scss',
})
export class TclistComponent implements AfterViewInit {
  private studentService = inject(StudentService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<IStudentTc>([]);
  readonly displayedColumns = [
    'seqNo',
    'dateOfIssue',
    'classStudies',
    'admissionNo',
    'studentName',
    'fatherName',
    'options',
  ];

  loading = false;
  loadError: string | null = null;
  selectedClassSectionId: number | null = null;
  hasSelectedSection = false;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (row, filter) =>
      [
        row.slNo,
        row.dateOfIssue,
        row.classStudies,
        row.admissionNo,
        row.studentName,
        row.fatherName,
        row.motherName,
        row.stuId,
        row.bookNo,
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

    this.loadTcList();
  }

  loadTcList(): void {
    if (this.selectedClassSectionId == null) {
      this.dataSource.data = [];
      this.loadError = 'Please select session, school, class and section first.';
      return;
    }

    this.loading = true;
    this.loadError = null;
    this.studentService.getStudentTcList({ ClassSectionId: this.selectedClassSectionId }).subscribe({
      next: res => {
        this.loading = false;
        if (res.success && res.data != null) {
          const rows = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.dataSource.data = [];
          this.loadError = res.message || 'No transfer certificates found for selected section.';
        }
      },
      error: () => {
        this.loading = false;
        this.dataSource.data = [];
        this.loadError = 'Could not load TC list. Check student API endpoints and your network.';
      },
    });
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  rowNumber(index: number): number {
    const pageIndex = this.paginator?.pageIndex ?? 0;
    const pageSize = this.paginator?.pageSize ?? 10;
    return pageIndex * pageSize + index + 1;
  }

  onTcAction(action: string, row: IStudentTc): void {
    console.log(`${action} selected`, { tcId: row.tcId, stuId: row.stuId, row });
  }

  displayValue(value: unknown): string {
    return this.cleanValue(value) || '—';
  }

  exportExcel(): void {
    const rows = this.dataSource.filteredData.length ? this.dataSource.filteredData : this.dataSource.data;
    const csv = this.toCsv(rows);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    this.downloadFile(blob, `tc-list-${Date.now()}.csv`);
  }

  exportPdf(): void {
    const rows = this.dataSource.filteredData.length ? this.dataSource.filteredData : this.dataSource.data;
    const tableRows = rows
      .map(
        (row, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${this.escapeHtml(row.dateOfIssue)}</td>
            <td>${this.escapeHtml(row.classStudies)}</td>
            <td>${this.escapeHtml(row.admissionNo)}</td>
            <td>${this.escapeHtml(row.studentName)}</td>
            <td>${this.escapeHtml(row.fatherName)}</td>
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
          <title>TC List</title>
          <style>
            body { font-family: Arial, sans-serif; font-size: 12px; }
            h2 { margin: 0 0 12px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 6px; text-align: center; }
            th { background: #d9edf7; }
          </style>
        </head>
        <body>
          <h2>Transfer Certificate List</h2>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Issue Date</th>
                <th>Class</th>
                <th>Admission No.</th>
                <th>Student Name.</th>
                <th>Father Name.</th>
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

  cleanValue(value: unknown): string {
    return String(value ?? '').replace(/\s+/g, ' ').trim();
  }

  private toCsv(rows: IStudentTc[]): string {
    const headers = ['S.No.', 'Issue Date', 'Class', 'Admission No.', 'Student Name.', 'Father Name.'];
    const body = rows.map((row, index) => [
      String(index + 1),
      this.cleanValue(row.dateOfIssue),
      this.cleanValue(row.classStudies),
      this.cleanValue(row.admissionNo),
      this.cleanValue(row.studentName),
      this.cleanValue(row.fatherName),
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
