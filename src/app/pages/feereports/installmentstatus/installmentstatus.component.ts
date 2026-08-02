import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FilterfeereportComponent } from '../../fillteCompnent/filterfeereport/filterfeereport.component';
import { IApiResponse } from '../../../interfaces/ICommon';
import {
  FEE_INSTALLMENT_STATUS_FIXED_KEYS,
  IFeeInstallmentStatus,
  IFeeReportFilterSelection,
} from '../../../interfaces/IFeeReport';
import { FeeReportService } from '../../../services/feeservice/fee-report.service';

@Component({
  selector: 'app-installmentstatus',
  imports: [
    FilterfeereportComponent,
    MatCardModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  templateUrl: './installmentstatus.component.html',
  styleUrl: './installmentstatus.component.scss',
})
export class InstallmentstatusComponent implements AfterViewInit {
  private feeReportService = inject(FeeReportService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private readonly fixedKeys = new Set<string>(FEE_INSTALLMENT_STATUS_FIXED_KEYS);

  dataSource = new MatTableDataSource<IFeeInstallmentStatus>([]);

  /** Dynamic installment month columns discovered from API (APR, MAY, …). */
  installmentColumns: string[] = [];

  readonly fixedColumnOptions = FEE_INSTALLMENT_STATUS_FIXED_KEYS.map(id => ({
    id,
    label: id,
  }));

  selectedColumns: string[] = [...FEE_INSTALLMENT_STATUS_FIXED_KEYS];

  loading = false;
  loadError: string | null = null;

  filterSelection: IFeeReportFilterSelection = {
    sessionId: null,
    collegeId: null,
    courseId: null,
    classSectionIds: [],
    allSectionsSelected: false,
    installmentIds: [],
  };

  get columnOptions(): { id: string; label: string }[] {
    const monthOptions = this.installmentColumns.map(id => ({ id, label: id }));
    return [...this.fixedColumnOptions, ...monthOptions];
  }

  get displayedColumns(): string[] {
    const allowed = new Set(this.columnOptions.map(col => col.id));
    return this.selectedColumns.filter(id => allowed.has(id));
  }

  get canLoadReport(): boolean {
    const hasClass = this.filterSelection.courseId != null;
    const hasInstallments = this.filterSelection.installmentIds.length > 0;
    const hasSectionScope =
      this.filterSelection.allSectionsSelected ||
      this.filterSelection.classSectionIds.length > 0;
    return hasClass && hasInstallments && hasSectionScope;
  }

  get hasSelectedFilters(): boolean {
    return this.canLoadReport;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (row, filter) => {
      const fixed = FEE_INSTALLMENT_STATUS_FIXED_KEYS.map(key => this.cleanValue(row[key]));
      const months = this.installmentColumns.map(key => this.displayStatus(row[key]));
      return [...fixed, ...months].join(' ').toLowerCase().includes(filter);
    };
  }

  onFilterChange(selection: IFeeReportFilterSelection): void {
    this.filterSelection = selection;
    this.loadError = null;

    if (!this.canLoadReport) {
      this.dataSource.data = [];
      this.installmentColumns = [];
      this.selectedColumns = this.selectedColumns.filter(id => this.fixedKeys.has(id));
      if (!this.selectedColumns.length) {
        this.selectedColumns = [...FEE_INSTALLMENT_STATUS_FIXED_KEYS];
      }
      return;
    }

    this.loadReport();
  }

  loadReport(): void {
    if (!this.canLoadReport) {
      this.dataSource.data = [];
      this.installmentColumns = [];
      this.loadError =
        'Please select session, school, class, section and installment(s) first.';
      return;
    }

    const { courseId, classSectionIds, allSectionsSelected, installmentIds } =
      this.filterSelection;

    this.loading = true;
    this.loadError = null;

    if (allSectionsSelected) {
      // Class-wide: FeeInstallmentStatusByClass?InstallmentId=1,2,3&ClassId=4
      this.feeReportService
        .getInstallmentStatusByClass(installmentIds, courseId!)
        .subscribe({
          next: res => this.applyReportResponse(res),
          error: () => this.applyReportError(),
        });
      return;
    }

    if (classSectionIds.length === 1) {
      this.feeReportService
        .getInstallmentStatusBySection(installmentIds, classSectionIds[0])
        .subscribe({
          next: res => this.applyReportResponse(res),
          error: () => this.applyReportError(),
        });
      return;
    }

    // Multiple specific sections: one BySection call each, merge by student
    const requests: Observable<
      IApiResponse<IFeeInstallmentStatus | IFeeInstallmentStatus[]>
    >[] = classSectionIds.map(classSectionId =>
      this.feeReportService.getInstallmentStatusBySection(installmentIds, classSectionId).pipe(
        catchError(() =>
          of({
            success: false,
            message: `Failed to load section ${classSectionId}`,
            data: [] as IFeeInstallmentStatus[],
          })
        )
      )
    );

    forkJoin(requests).subscribe({
      next: responses => {
        this.loading = false;
        const byStudent = new Map<string, IFeeInstallmentStatus>();
        let anySuccess = false;
        let lastMessage = '';

        for (const res of responses) {
          if (res.success && res.data != null) {
            anySuccess = true;
            const part = Array.isArray(res.data) ? res.data : [res.data];
            for (const row of part) {
              const key = this.studentKey(row);
              const existing = byStudent.get(key);
              byStudent.set(key, existing ? { ...existing, ...row } : { ...row });
            }
          } else if (res.message) {
            lastMessage = res.message;
          }
        }

        const rows = [...byStudent.values()];
        if (!anySuccess) {
          this.dataSource.data = [];
          this.installmentColumns = [];
          this.loadError =
            lastMessage || 'No installment status found for selected filters.';
          return;
        }

        this.applyRows(rows);
      },
      error: () => this.applyReportError(),
    });
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportExcel(): void {
    const rows = this.dataSource.filteredData.length
      ? this.dataSource.filteredData
      : this.dataSource.data;
    const csv = this.toCsv(rows);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    this.downloadFile(blob, `installment-status-${Date.now()}.csv`);
  }

  exportPdf(): void {
    const rows = this.dataSource.filteredData.length
      ? this.dataSource.filteredData
      : this.dataSource.data;
    const monthHeaders = this.installmentColumns.map(col => `<th>${this.escapeHtml(col)}</th>`).join('');
    const tableRows = rows
      .map(row => {
        const months = this.installmentColumns
          .map(col => `<td>${this.escapeHtml(this.displayStatus(row[col]))}</td>`)
          .join('');
        return `
          <tr>
            <td>${this.escapeHtml(row.RollNumber)}</td>
            <td>${this.escapeHtml(row.StuName)}</td>
            <td>${this.escapeHtml(row.StuAdmission)}</td>
            <td>${this.escapeHtml(row.FatherName)}</td>
            <td>${this.escapeHtml(row.Mobile)}</td>
            <td>${this.escapeHtml(row.Gender)}</td>
            ${months}
          </tr>`;
      })
      .join('');

    const printWindow = window.open('', '_blank', 'width=1200,height=800');
    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Fee Installment Status</title>
          <style>
            body { font-family: Arial, sans-serif; font-size: 12px; }
            h2 { margin: 0 0 12px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 6px; text-align: left; }
            th { background: #f1f1f1; }
          </style>
        </head>
        <body>
          <h2>Fee Installment Status</h2>
          <table>
            <thead>
              <tr>
                <th>RollNumber</th>
                <th>StuName</th>
                <th>StuAdmission</th>
                <th>FatherName</th>
                <th>Mobile</th>
                <th>Gender</th>
                ${monthHeaders}
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

  displayStatus(value: unknown): string {
    const raw = this.cleanValue(value);
    if (!raw) {
      return '—';
    }
    return raw.replace(/<[^>]*>/g, '').trim() || '—';
  }

  statusClass(value: unknown): string {
    const status = this.displayStatus(value).toLowerCase();
    if (status === 'paid') {
      return 'is-paid';
    }
    if (status === 'unpaid') {
      return 'is-unpaid';
    }
    return '';
  }

  cleanValue(value: unknown): string {
    return String(value ?? '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private applyReportResponse(
    res: IApiResponse<IFeeInstallmentStatus | IFeeInstallmentStatus[]>
  ): void {
    this.loading = false;
    if (res.success && res.data != null) {
      const rows = Array.isArray(res.data) ? res.data : [res.data];
      this.applyRows(rows);
    } else {
      this.dataSource.data = [];
      this.installmentColumns = [];
      this.loadError = res.message || 'No installment status found for selected filters.';
    }
  }

  private applyRows(rows: IFeeInstallmentStatus[]): void {
    this.installmentColumns = this.discoverMonthColumns(rows);
    this.syncSelectedColumnsWithMonths();
    this.dataSource.data = [...rows].sort((a, b) =>
      this.compareRoll(a.RollNumber, b.RollNumber)
    );
    queueMicrotask(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.loadError = null;
  }

  private applyReportError(): void {
    this.loading = false;
    this.dataSource.data = [];
    this.installmentColumns = [];
    this.loadError =
      'Could not load installment status. Check fee report API endpoints and your network.';
  }

  private studentKey(row: IFeeInstallmentStatus): string {
    return `${this.cleanValue(row.RollNumber)}|${this.cleanValue(row.StuName)}`;
  }

  private discoverMonthColumns(rows: IFeeInstallmentStatus[]): string[] {
    const monthOrder: string[] = [];
    const monthSeen = new Set<string>();
    for (const row of rows) {
      for (const key of Object.keys(row)) {
        if (!this.fixedKeys.has(key) && !monthSeen.has(key)) {
          monthSeen.add(key);
          monthOrder.push(key);
        }
      }
    }
    return monthOrder;
  }

  /** Keep fixed selections; add any new month columns by default. */
  private syncSelectedColumnsWithMonths(): void {
    const fixedSelected = this.selectedColumns.filter(id => this.fixedKeys.has(id));
    const previousMonths = this.selectedColumns.filter(id => !this.fixedKeys.has(id));
    const keptMonths = previousMonths.filter(id => this.installmentColumns.includes(id));
    const newMonths = this.installmentColumns.filter(id => !previousMonths.includes(id));
    this.selectedColumns = [
      ...(fixedSelected.length ? fixedSelected : [...FEE_INSTALLMENT_STATUS_FIXED_KEYS]),
      ...keptMonths,
      ...newMonths,
    ];
  }

  private compareRoll(a: unknown, b: unknown): number {
    const na = Number(a);
    const nb = Number(b);
    if (Number.isFinite(na) && Number.isFinite(nb)) {
      return na - nb;
    }
    return this.cleanValue(a).localeCompare(this.cleanValue(b));
  }

  private toCsv(rows: IFeeInstallmentStatus[]): string {
    const headers = [...FEE_INSTALLMENT_STATUS_FIXED_KEYS, ...this.installmentColumns];
    const body = rows.map(row =>
      headers.map(key =>
        this.fixedKeys.has(key) ? this.cleanValue(row[key]) : this.displayStatus(row[key])
      )
    );

    return [headers, ...body]
      .map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(','))
      .join('\n');
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
