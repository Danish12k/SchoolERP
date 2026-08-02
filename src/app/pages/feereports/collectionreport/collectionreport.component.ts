import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import moment, { Moment } from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ICollege } from '../../../interfaces/ICollege';
import { IFaculty } from '../../../interfaces/IClassAndSection';
import { IFeeCollection } from '../../../interfaces/IFeeReport';
import { CollegeService } from '../../../services/masterservice/college.service';
import { FeeReportService } from '../../../services/feeservice/fee-report.service';
import { FacultyService } from '../../faculty/services/faculty.service';

@Component({
  selector: 'app-collectionreport',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    DatePipe,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  templateUrl: './collectionreport.component.html',
  styleUrl: './collectionreport.component.scss',
})
export class CollectionreportComponent implements OnInit, AfterViewInit {
  private collegeService = inject(CollegeService);
  private facultyService = inject(FacultyService);
  private feeReportService = inject(FeeReportService);
  private toast = inject(ToastrService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  colleges: ICollege[] = [];
  faculties: IFaculty[] = [];
  filterOptions: string[] = ['All'];

  selectedCollegeId: number | null = null;
  selectedFacultyId: number | null = 0; // 0 = All
  startDate: Moment | null = moment();
  endDate: Moment | null = moment();
  selectedFilter = 'All';

  dataSource = new MatTableDataSource<IFeeCollection>([]);
  private allRows: IFeeCollection[] = [];

  displayedColumns: string[] = [
    'index',
    'className',
    'stuId',
    'name',
    'pname',
    'mobile',
    'depositId',
    'depositDate',
    'installmentName',
    'headAmount',
    'lateFee',
    'consession',
    'totalFee',
    'paidAmount',
    'balance',
    'feeFrom',
    'prvDue',
    'balancePaid',
  ];

  loading = false;
  searched = false;

  ngOnInit(): void {
    this.loadColleges();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (row, filter) =>
      [
        row.className,
        row.stuId,
        row.name,
        row.pname,
        row.mobile,
        row.depositId,
        row.depositDate,
        row.installmentName,
        row.feeFrom,
        row.collegeAbreviation,
      ]
        .map(value => String(value ?? '').toLowerCase())
        .join(' ')
        .includes(filter);
  }

  facultyLabel(faculty: IFaculty): string {
    return [faculty.name, faculty.middleName, faculty.lastName]
      .filter(part => !!part && String(part).trim())
      .join(' ')
      .trim();
  }

  onCollegeChange(): void {
    this.selectedFacultyId = 0;
    this.faculties = [];
    this.resetResults();

    if (!this.selectedCollegeId) {
      return;
    }

    this.facultyService.getListByCollegeId(Number(this.selectedCollegeId)).subscribe({
      next: res => {
        this.faculties = res.success && Array.isArray(res.data) ? res.data : [];
      },
      error: () => {
        this.faculties = [];
        this.toast.error('Failed to load faculty list.');
      },
    });
  }

  onFilterChange(): void {
    this.applyClientFilter();
  }

  search(): void {
    if (!this.selectedCollegeId) {
      this.toast.warning('Please select a school.');
      return;
    }
    if (!this.startDate || !this.endDate) {
      this.toast.warning('Please select start and end dates.');
      return;
    }

    const start = moment(this.startDate);
    const end = moment(this.endDate);
    if (!start.isValid() || !end.isValid()) {
      this.toast.warning('Please enter valid start and end dates.');
      return;
    }
    if (end.isBefore(start, 'day')) {
      this.toast.warning('End date cannot be before start date.');
      return;
    }

    this.loading = true;
    this.searched = true;

    this.feeReportService
      .getFeeCollectionReport({
        startDate: start.format('D-MMMM-YYYY').toUpperCase(),
        endDate: end.format('D-MMMM-YYYY').toUpperCase(),
        collegeId: Number(this.selectedCollegeId),
        userId: Number(this.selectedFacultyId ?? 0),
      })
      .subscribe({
        next: res => {
          this.loading = false;
          if (res.success && res.data != null) {
            this.allRows = Array.isArray(res.data) ? res.data : [res.data];
            this.buildFilterOptions();
            this.applyClientFilter();
          } else {
            this.allRows = [];
            this.filterOptions = ['All'];
            this.selectedFilter = 'All';
            this.dataSource.data = [];
            this.toast.info(res.message || 'No fee collection found for selected filters.');
          }
        },
        error: () => {
          this.loading = false;
          this.allRows = [];
          this.dataSource.data = [];
          this.toast.error('Failed to load fee collection report.');
        },
      });
  }

  print(): void {
    const rows = this.dataSource.filteredData.length
      ? this.dataSource.filteredData
      : this.dataSource.data;

    if (!rows.length) {
      this.toast.warning('No data to print. Search first.');
      return;
    }

    const tableRows = rows
      .map(
        (row, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${this.escapeHtml(row.className)}</td>
          <td>${this.escapeHtml(row.stuId)}</td>
          <td>${this.escapeHtml(row.name)}</td>
          <td>${this.escapeHtml(row.pname)}</td>
          <td>${this.escapeHtml(row.mobile)}</td>
          <td>${this.escapeHtml(row.depositId)}</td>
          <td>${this.escapeHtml(row.depositDate)}</td>
          <td>${this.escapeHtml(row.installmentName)}</td>
          <td>${this.escapeHtml(row.headAmount)}</td>
          <td>${this.escapeHtml(row.lateFee)}</td>
          <td>${this.escapeHtml(row.consession)}</td>
          <td>${this.escapeHtml(row.totalFee)}</td>
          <td>${this.escapeHtml(row.paidAmount)}</td>
          <td>${this.escapeHtml(row.balance)}</td>
          <td>${this.escapeHtml(row.feeFrom)}</td>
          <td>${this.escapeHtml(row.prvDue)}</td>
          <td>${this.escapeHtml(row.balancePaid)}</td>
        </tr>`
      )
      .join('');

    const printWindow = window.open('', '_blank', 'width=1400,height=800');
    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Student Fee Collection Report</title>
          <style>
            body { font-family: Arial, sans-serif; font-size: 11px; }
            h2 { margin: 0 0 12px; text-align: center; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 4px; text-align: left; }
            th { background: #1976d2; color: #fff; }
          </style>
        </head>
        <body>
          <h2>Student Fee Collection Report</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Stu Id</th>
                <th>Name</th>
                <th>Father</th>
                <th>Mobile</th>
                <th>Deposit Id</th>
                <th>Deposit Date</th>
                <th>Installment</th>
                <th>Head Amt</th>
                <th>Late Fee</th>
                <th>Concession</th>
                <th>Total Fee</th>
                <th>Paid</th>
                <th>Balance</th>
                <th>Fee From</th>
                <th>Prev Due</th>
                <th>Balance Paid</th>
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

  private loadColleges(): void {
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        if (res.success) {
          this.colleges = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
        }
      },
      error: () => this.toast.error('Failed to load schools.'),
    });
  }

  private buildFilterOptions(): void {
    const classes = new Set<string>();
    for (const row of this.allRows) {
      const className = String(row.className ?? '').trim();
      if (className) {
        classes.add(className);
      }
    }
    this.filterOptions = ['All', ...[...classes].sort((a, b) => a.localeCompare(b))];
    if (!this.filterOptions.includes(this.selectedFilter)) {
      this.selectedFilter = 'All';
    }
  }

  private applyClientFilter(): void {
    const filtered =
      this.selectedFilter === 'All'
        ? [...this.allRows]
        : this.allRows.filter(
            row => String(row.className ?? '').trim() === this.selectedFilter
          );
    this.dataSource.data = filtered;
    queueMicrotask(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  private resetResults(): void {
    this.allRows = [];
    this.dataSource.data = [];
    this.filterOptions = ['All'];
    this.selectedFilter = 'All';
    this.searched = false;
  }

  private escapeHtml(value: unknown): string {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
