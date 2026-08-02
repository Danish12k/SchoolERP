import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IExpenseHead } from '../../../interfaces/IAdmintMst';
import { ExpenseService } from '../../../services/masterservice/expense.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageHeaderComponent } from '@shared';
import { IApiResponse } from '../../../interfaces/ICommon';
import { ToastrService } from 'ngx-toastr';

interface IExpenseForm {
  id: number;
  expenseHead: string;
  activeStatus: boolean;
}

@Component({
  selector: 'app-expense',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    PageHeaderComponent,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
  ],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss',
})
export class ExpenseComponent implements OnInit, AfterViewInit {
  private expenseService = inject(ExpenseService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<IExpenseHead>([]);
  displayedColumns: string[] = ['index', 'expenseHead', 'status', 'actions'];
  newExpense: IExpenseForm = { id: 0, expenseHead: '', activeStatus: true };
  isLoading = false;
  isSaving = false;
  isUpdating = false;
  deletingIds = new Set<number>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<IExpenseForm>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) =>
      row.expenseHead?.toLowerCase().includes(filter) ?? false;
    this.loadExpenseList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  statusLabel(activeStatus: unknown): string {
    return this.isActive(activeStatus) ? 'Active' : 'Inactive';
  }

  private toApiBody(form: IExpenseForm): IExpenseHead {
    return {
      id: form.id,
      expenseHead: form.expenseHead.trim(),
      activeStatus: form.activeStatus ? 1 : 0,
    };
  }

  private toExpenseForm(row: IExpenseHead): IExpenseForm {
    return {
      id: row.id,
      expenseHead: row.expenseHead,
      activeStatus: this.isActive(row.activeStatus),
    };
  }

  private isActive(activeStatus: unknown): boolean {
    return activeStatus === true || Number(activeStatus) === 1;
  }

  private toRows(data: IExpenseHead | IExpenseHead[] | null | undefined): IExpenseHead[] {
    return (Array.isArray(data) ? data : data ? [data] : []).filter(row => !!row);
  }

  private errorMessage(error: unknown, fallback: string): string {
    const err = error as { error?: { message?: string; title?: string; error?: string }; message?: string; status?: number };
    return err?.error?.message || err?.error?.title || err?.error?.error || err?.message || fallback;
  }

  openAddDialog(): void {
    this.newExpense = { id: 0, expenseHead: '', activeStatus: true };
    this.dialog.open(this.addDialog, { width: 'min(440px, 92vw)', maxWidth: '95vw' });
  }

  addExpense(): void {
    const name = this.newExpense.expenseHead?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter expense head.');
      return;
    }
    this.isSaving = true;
    this.expenseService.addExpense(this.toApiBody(this.newExpense)).subscribe({
      next: (res: IApiResponse<IExpenseHead>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Expense added successfully');
          this.dialog.closeAll();
          this.loadExpenseList();
        } else {
          this.toast.error(res.message || 'Failed to add expense');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add expense');
      },
    });
  }

  loadExpenseList(): void {
    this.isLoading = true;
    this.expenseService.listExpense().subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          this.dataSource.data = this.toRows(res.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load expenses');
        }
      },
      error: error => {
        this.isLoading = false;
        this.toast.error(this.errorMessage(error, 'Failed to load expenses'));
      },
    });
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    this.paginator?.firstPage();
  }

  rowIndex(i: number): number {
    return this.paginator ? this.paginator.pageIndex * this.paginator.pageSize + i + 1 : i + 1;
  }

  openEditDialog(row: IExpenseHead): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      data: this.toExpenseForm(row),
    });
    dialogRef.afterClosed().subscribe((result: IExpenseForm | undefined) => {
      const name = result?.expenseHead?.trim();
      if (!name || !result?.id) {
        return;
      }
      this.isUpdating = true;
      this.expenseService.updateExpense(this.toApiBody(result)).subscribe({
        next: res => {
          this.isUpdating = false;
          if (res.success) {
            this.toast.success(res.message || 'Expense updated successfully');
            this.loadExpenseList();
          } else {
            this.toast.error(res.message || 'Failed to update expense');
          }
        },
        error: error => {
          this.isUpdating = false;
          this.toast.error(this.errorMessage(error, 'Failed to update expense'));
        },
      });
    });
  }

  deleteExpense(row: IExpenseHead): void {
    if (row.id <= 0) {
      return;
    }
    if (!confirm('Delete this expense head?')) {
      return;
    }
    this.deletingIds.add(row.id);
    this.expenseService.deleteExpense(row.id).subscribe({
      next: res => {
        this.deletingIds.delete(row.id);
        if (res.success) {
          this.toast.success(res.message || 'Expense deleted successfully');
          this.loadExpenseList();
        } else {
          this.toast.error(res.message || 'Failed to delete expense');
        }
      },
      error: error => {
        this.deletingIds.delete(row.id);
        this.toast.error(this.errorMessage(error, 'Failed to delete expense'));
      },
    });
  }
}
