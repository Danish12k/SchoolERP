import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, inject, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import {
  FEE_COLLECTION_REPORT_COLUMNS,
  IFeeCollection,
  IFeeCollectionFilterSelection,
} from '../../../interfaces/IFeeReport';
import { FeeReportService } from '../../../services/feeservice/fee-report.service';
import { FiltercollectionreportComponent } from '../../fillteCompnent/filtercollectionreport/filtercollectionreport.component';

const COLUMN_LABELS: Record<string, string> = {
  index: '#',
  className: 'Class',
  name: 'Name',
  pname: 'Father',
  mobile: 'Mobile',
  depositDate: 'Deposit Date',
  installmentName: 'Installment',
  headAmount: 'Head Amt',
  lateFee: 'Late Fee',
  consession: 'Concession',
  totalFee: 'Total Fee',
  paidAmount: 'Paid',
  balance: 'Balance',
  feeFrom: 'Fee From',
  prvDue: 'Prev Due',
  balancePaid: 'Balance Paid',
};

@Component({
  selector: 'app-collectionreport',
  host: { class: 'admin-page-host' },
  imports: [
    DatePipe,
    FiltercollectionreportComponent,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
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
export class CollectionreportComponent implements AfterViewInit {
  private feeReportService = inject(FeeReportService);
  private toast = inject(ToastrService);
  private destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<IFeeCollection>([]);
  private lastFilterSelection: IFeeCollectionFilterSelection | null = null;

  readonly columnOptions = FEE_COLLECTION_REPORT_COLUMNS.map(id => ({
    id,
    label: COLUMN_LABELS[id] ?? id,
  }));

  selectedColumns: string[] = [...FEE_COLLECTION_REPORT_COLUMNS];

  loading = false;
  searched = false;

  get displayedColumns(): string[] {
    const allowed = new Set<string>(this.columnOptions.map(col => col.id));
    return this.selectedColumns.filter(id => allowed.has(id));
  }

  get canRefresh(): boolean {
    return this.lastFilterSelection != null;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (row, filter) =>
      [
        row.className,
        row.name,
        row.pname,
        row.mobile,
        row.depositDate,
        row.installmentName,
        row.feeFrom,
        row.collegeAbreviation,
      ]
        .map(value => String(value ?? '').toLowerCase())
        .join(' ')
        .includes(filter);
  }

  onFilterSearch(selection: IFeeCollectionFilterSelection): void {
    this.lastFilterSelection = selection;
    this.loadReport(selection);
  }

  onFilterClear(): void {
    this.lastFilterSelection = null;
    this.searched = false;
    this.loading = false;
    this.dataSource.data = [];
    this.dataSource.filter = '';
  }

  refresh(): void {
    if (!this.lastFilterSelection) {
      this.toast.warning('Select school, dates, and click Search first.');
      return;
    }
    this.loadReport(this.lastFilterSelection);
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
    if (!rows.length) {
      this.toast.warning('No data to export.');
      return;
    }
    const csv = this.toCsv(rows);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    this.downloadFile(blob, `fee-collection-${Date.now()}.csv`);
  }

  exportPdf(): void {
    const rows = this.dataSource.filteredData.length
      ? this.dataSource.filteredData
      : this.dataSource.data;

    if (!rows.length) {
      this.toast.warning('No data to export. Search first.');
      return;
    }

    const visibleColumns = this.displayedColumns.filter(id => id !== 'index');
    const headerCells = ['#', ...visibleColumns.map(id => COLUMN_LABELS[id] ?? id)]
      .map(label => `<th>${this.escapeHtml(label)}</th>`)
      .join('');

    const tableRows = rows
      .map((row, i) => {
        const cells = visibleColumns
          .map(id => `<td>${this.escapeHtml(this.cellValue(row, id))}</td>`)
          .join('');
        return `<tr><td>${i + 1}</td>${cells}</tr>`;
      })
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
            th { background: #f1f1f1; }
          </style>
        </head>
        <body>
          <h2>Student Fee Collection Report</h2>
          <table>
            <thead>
              <tr>${headerCells}</tr>
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

  private loadReport(selection: IFeeCollectionFilterSelection): void {
    this.loading = true;
    this.searched = true;

    this.feeReportService
      .getFeeCollectionReport({
        startDate: selection.startDate,
        endDate: selection.endDate,
        collegeId: selection.collegeId,
        userId: selection.userId,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => {
          this.loading = false;
          if (res.success && res.data != null) {
            const rows = Array.isArray(res.data) ? res.data : [res.data];
            this.dataSource.data = [...rows];
            queueMicrotask(() => {
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            });
          } else {
            this.dataSource.data = [];
            this.toast.info(res.message || 'No fee collection found for selected filters.');
          }
        },
        error: () => {
          this.loading = false;
          this.dataSource.data = [];
          this.toast.error('Failed to load fee collection report.');
        },
      });
  }

  private cellValue(row: IFeeCollection, columnId: string): unknown {
    if (columnId === 'depositDate' && row.depositDate) {
      const date = new Date(row.depositDate);
      if (!Number.isNaN(date.getTime())) {
        return date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        });
      }
    }
    return row[columnId as keyof IFeeCollection];
  }

  private toCsv(rows: IFeeCollection[]): string {
    const headers = this.displayedColumns.filter(id => id !== 'index');
    const headerLabels = headers.map(id => COLUMN_LABELS[id] ?? id);
    const body = rows.map(row =>
      headers.map(id => String(this.cellValue(row, id) ?? ''))
    );

    return [headerLabels, ...body]
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
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
