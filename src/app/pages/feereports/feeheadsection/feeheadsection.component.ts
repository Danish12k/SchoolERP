import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FilterstudentComponent } from '../../fillteCompnent/filterstudent/filterstudent.component';
import {
  IFeeHeadBySection,
  IStudentFilterSelection,
} from '../../../interfaces/IFeeReport';
import { FeeReportService } from '../../../services/feeservice/fee-report.service';

interface FeeHeadSectionColumn {
  id: string;
  apiKey: string;
  label: string;
}

@Component({
  selector: 'app-feeheadsection',
  imports: [
    FilterstudentComponent,
    MatCardModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  templateUrl: './feeheadsection.component.html',
  styleUrl: './feeheadsection.component.scss',
})
export class FeeheadsectionComponent implements AfterViewInit {
  private feeReportService = inject(FeeReportService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private readonly trailingColumnKeys = ['Total Amount'] as const;

  dataSource = new MatTableDataSource<IFeeHeadBySection>([]);
  columnDefs: FeeHeadSectionColumn[] = [];
  selectedColumns: string[] = [];

  loading = false;
  loadError: string | null = null;

  filterSelection: IStudentFilterSelection = {
    sessionId: null,
    collegeId: null,
    courseId: null,
    classSectionId: null,
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
    return (
      this.filterSelection.sessionId != null &&
      this.filterSelection.collegeId != null &&
      this.filterSelection.classSectionId != null
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

  onFilterChange(selection: IStudentFilterSelection): void {
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
      this.loadError = 'Please select session, school, class and section first.';
      return;
    }

    const { sessionId, collegeId, classSectionId } = this.filterSelection;

    this.loading = true;
    this.loadError = null;

    this.feeReportService
      .getFeeHeadBySection(classSectionId!, sessionId!, collegeId!)
      .subscribe({
        next: res => {
          this.loading = false;
          if (res.success && res.data != null) {
            const rows = Array.isArray(res.data) ? res.data : [res.data];
            this.applyRows(rows);
          } else {
            this.dataSource.data = [];
            this.clearColumns();
            this.loadError = res.message || 'No fee head data found for selected filters.';
          }
        },
        error: () => {
          this.loading = false;
          this.dataSource.data = [];
          this.clearColumns();
          this.loadError =
            'Could not load fee head by section. Check fee report API endpoints and your network.';
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
    this.downloadFile(blob, `fee-head-by-section-${Date.now()}.csv`);
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
          <title>Fee Head By Section</title>
          <style>
            body { font-family: Arial, sans-serif; font-size: 12px; }
            h2 { margin: 0 0 12px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 6px; text-align: left; }
            th { background: #f1f1f1; }
          </style>
        </head>
        <body>
          <h2>Fee Head By Section</h2>
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

  private applyRows(rows: IFeeHeadBySection[]): void {
    this.columnDefs = this.buildColumnsFromResponse(rows);
    this.selectedColumns = this.columnDefs.map(c => c.id);
    this.dataSource.data = rows;
    this.loadError = null;
    queueMicrotask(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /** Response key order, with Total Amount forced last when present. */
  private buildColumnsFromResponse(rows: IFeeHeadBySection[]): FeeHeadSectionColumn[] {
    const discovered = this.discoverAllKeys(rows);
    if (!discovered.length) {
      return [];
    }

    const trailingSet = new Set<string>(this.trailingColumnKeys);
    const leading = discovered.filter(key => !trailingSet.has(key));
    const trailing = this.trailingColumnKeys.filter(key => discovered.includes(key));

    return [...leading, ...trailing].map(apiKey => this.toColumn(apiKey));
  }

  private discoverAllKeys(rows: IFeeHeadBySection[]): string[] {
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

  private toColumn(apiKey: string): FeeHeadSectionColumn {
    return {
      id: 'col_' + apiKey.replace(/[^a-zA-Z0-9]+/g, '_'),
      apiKey,
      label: apiKey,
    };
  }

  private displayedColumnDefs(): FeeHeadSectionColumn[] {
    const byId = new Map(this.columnDefs.map(col => [col.id, col]));
    return this.displayedColumns
      .map(id => byId.get(id))
      .filter((col): col is FeeHeadSectionColumn => !!col);
  }

  private toCsv(rows: IFeeHeadBySection[]): string {
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
}
