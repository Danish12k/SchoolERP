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
  IFeeDefaulter,
  IFeeReportFilterSelection,
} from '../../../interfaces/IFeeReport';
import { FeeReportService } from '../../../services/feeservice/fee-report.service';

interface FeeDefaulterColumn {
  /** Safe id for mat-table (no spaces/dots). */
  id: string;
  /** Original API response key. */
  apiKey: string;
  label: string;
}

@Component({
  selector: 'app-feedefaulter',
  imports: [
    FilterfeereportComponent,
    MatCardModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  templateUrl: './feedefaulter.component.html',
  styleUrl: './feedefaulter.component.scss',
})
export class FeedefaulterComponent implements AfterViewInit {
  private feeReportService = inject(FeeReportService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private readonly trailingColumnKeys = [
    'Tot. P.',
    'Cons.',
    'Tot. Amt',
    'Balance',
    'Status',
  ] as const;

  dataSource = new MatTableDataSource<IFeeDefaulter>([]);

  /** Built from each API response — keys vary; summary cols forced to the end. */
  columnDefs: FeeDefaulterColumn[] = [];

  selectedColumns: string[] = [];

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
    return this.columnDefs.map(col => ({ id: col.id, label: col.label }));
  }

  get displayedColumns(): string[] {
    const allowed = new Set(this.columnDefs.map(col => col.id));
    return this.selectedColumns.filter(id => allowed.has(id));
  }

  get tableColumnsKey(): string {
    return this.columnDefs.map(c => c.id).join('|');
  }

  get canLoadReport(): boolean {
    const hasSectionScope =
      this.filterSelection.allSectionsSelected ||
      this.filterSelection.classSectionIds.length > 0;
    return (
      this.filterSelection.sessionId != null &&
      this.filterSelection.collegeId != null &&
      this.filterSelection.courseId != null &&
      hasSectionScope &&
      this.filterSelection.installmentIds.length > 0
    );
  }

  get hasSelectedFilters(): boolean {
    return this.canLoadReport;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (row, filter) => {
      const hay = this.columnDefs
        .map(col => this.displayCell(row[col.apiKey]))
        .join(' ')
        .toLowerCase();
      return hay.includes(filter);
    };
  }

  onFilterChange(selection: IFeeReportFilterSelection): void {
    this.filterSelection = selection;
    this.loadError = null;

    if (!this.canLoadReport) {
      this.dataSource.data = [];
      this.clearColumns();
      return;
    }

    this.loadReport();
  }

  loadReport(): void {
    if (!this.canLoadReport) {
      this.dataSource.data = [];
      this.clearColumns();
      this.loadError =
        'Please select session, school, class, section and installment(s) first.';
      return;
    }

    const {
      sessionId,
      collegeId,
      courseId,
      classSectionIds,
      allSectionsSelected,
      installmentIds,
    } = this.filterSelection;

    // All sections → ClassSectionId=0; otherwise each selected section id.
    // Multiple installments → one call with InstallmentId=1,2,3
    const sectionIds = allSectionsSelected ? [0] : classSectionIds;

    this.loading = true;
    this.loadError = null;

    const requests: Observable<IApiResponse<IFeeDefaulter | IFeeDefaulter[]>>[] = sectionIds.map(
      classSectionId =>
        this.feeReportService
          .getFeeDefaulterList({
            classSectionId,
            sessionId: sessionId!,
            collegeId: collegeId!,
            installmentId: installmentIds,
            classId: courseId!,
          })
          .pipe(
            catchError(() =>
              of({
                success: false,
                message: `Failed for section ${classSectionId}`,
                data: [] as IFeeDefaulter[],
              })
            )
          )
    );

    if (!requests.length) {
      this.loading = false;
      this.dataSource.data = [];
      return;
    }

    forkJoin(requests).subscribe({
      next: responses => {
        this.loading = false;
        const byKey = new Map<string, IFeeDefaulter>();
        let anySuccess = false;
        let lastMessage = '';

        for (const res of responses) {
          if (res.success && res.data != null) {
            anySuccess = true;
            const part = Array.isArray(res.data) ? res.data : [res.data];
            for (const row of part) {
              byKey.set(this.rowKey(row), row);
            }
          } else if (res.message) {
            lastMessage = res.message;
          }
        }

        if (!anySuccess) {
          this.dataSource.data = [];
          this.clearColumns();
          this.loadError = lastMessage || 'No fee defaulters found for selected filters.';
          return;
        }

        this.applyRows([...byKey.values()]);
      },
      error: () => {
        this.loading = false;
        this.dataSource.data = [];
        this.clearColumns();
        this.loadError =
          'Could not load fee defaulters. Check fee report API endpoints and your network.';
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

  exportExcel(): void {
    const rows = this.dataSource.filteredData.length
      ? this.dataSource.filteredData
      : this.dataSource.data;
    const csv = this.toCsv(rows);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    this.downloadFile(blob, `fee-defaulter-${Date.now()}.csv`);
  }

  exportPdf(): void {
    const rows = this.dataSource.filteredData.length
      ? this.dataSource.filteredData
      : this.dataSource.data;
    const cols = this.displayedColumnDefs();
    const headers = cols.map(col => `<th>${this.escapeHtml(col.label)}</th>`).join('');
    const tableRows = rows
      .map(row => {
        const cells = cols
          .map(col => `<td>${this.escapeHtml(this.displayCell(row[col.apiKey]))}</td>`)
          .join('');
        return `<tr>${cells}</tr>`;
      })
      .join('');

    const printWindow = window.open('', '_blank', 'width=1200,height=800');
    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Fee Defaulter List</title>
          <style>
            body { font-family: Arial, sans-serif; font-size: 12px; }
            h2 { margin: 0 0 12px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 6px; text-align: left; }
            th { background: #f1f1f1; }
          </style>
        </head>
        <body>
          <h2>Fee Defaulter List</h2>
          <table>
            <thead><tr>${headers}</tr></thead>
            <tbody>${tableRows}</tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

  displayCell(value: unknown): string {
    if (value == null) {
      return '—';
    }
    const text = String(value).replace(/\s+/g, ' ').trim();
    return text || '—';
  }

  statusClass(value: unknown): string {
    const status = this.displayCell(value).toLowerCase();
    if (status === 'paid') {
      return 'is-paid';
    }
    if (status === 'balance' || status === 'unpaid') {
      return 'is-unpaid';
    }
    return '';
  }

  isStatusColumn(col: FeeDefaulterColumn): boolean {
    return col.apiKey === 'Status';
  }

  private applyRows(rows: IFeeDefaulter[]): void {
    this.columnDefs = this.buildColumnsFromResponse(rows);
    this.selectedColumns = this.columnDefs.map(c => c.id);
    this.dataSource.data = rows;
    this.loadError = null;
    queueMicrotask(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /**
   * Columns from response key order, except summary fields are always last:
   * Tot. P. | Cons. | Tot. Amt | Balance | Status
   */
  private buildColumnsFromResponse(rows: IFeeDefaulter[]): FeeDefaulterColumn[] {
    const discovered = this.discoverAllKeys(rows);
    if (!discovered.length) {
      return [];
    }

    const trailingSet = new Set<string>(this.trailingColumnKeys);
    const leading = discovered.filter(key => !trailingSet.has(key));
    const trailing = this.trailingColumnKeys.filter(key => discovered.includes(key));

    return [...leading, ...trailing].map(apiKey => this.toColumn(apiKey));
  }

  /** Union of all object keys across rows, preserving first-seen (response) order. */
  private discoverAllKeys(rows: IFeeDefaulter[]): string[] {
    const order: string[] = [];
    const seen = new Set<string>();
    for (const row of rows) {
      if (!row || typeof row !== 'object') {
        continue;
      }
      for (const key of Object.keys(row)) {
        if (!seen.has(key)) {
          seen.add(key);
          order.push(key);
        }
      }
    }
    return order;
  }

  private clearColumns(): void {
    this.columnDefs = [];
    this.selectedColumns = [];
  }

  private toColumn(apiKey: string): FeeDefaulterColumn {
    return {
      id: 'col_' + apiKey.replace(/[^a-zA-Z0-9]+/g, '_'),
      apiKey,
      label: apiKey,
    };
  }

  private displayedColumnDefs(): FeeDefaulterColumn[] {
    const byId = new Map(this.columnDefs.map(col => [col.id, col]));
    return this.displayedColumns
      .map(id => byId.get(id))
      .filter((col): col is FeeDefaulterColumn => !!col);
  }

  private toCsv(rows: IFeeDefaulter[]): string {
    const cols = this.displayedColumnDefs();
    const headers = cols.map(col => col.label);
    const body = rows.map(row => cols.map(col => this.displayCell(row[col.apiKey])));
    return [headers, ...body]
      .map(line => line.map(value => `"${String(value).replace(/"/g, '""')}"`).join(','))
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
    return this.displayCell(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  private rowKey(row: IFeeDefaulter): string {
    return [
      this.displayCell(row['Ad.No']),
      this.displayCell(row['Student Name']),
      this.displayCell(row.Class),
      this.displayCell(row.Balance),
      this.displayCell(row.Status),
    ].join('|');
  }
}
