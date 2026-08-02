import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../../interfaces/IAdmintMst';
import { CategoryService } from '../../../services/masterservice/category.service';
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
import { PageHeaderComponent } from '@shared';
import { IApiResponse } from '../../../interfaces/ICommon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
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
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit, AfterViewInit {
  private categoryService = inject(CategoryService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<ICategory>([]);
  displayedColumns: string[] = ['index', 'categoryName', 'actions'];

  newCategory: ICategory = { categoryId: 0, categoryName: '' };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<ICategory>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) =>
      row.categoryName?.toLowerCase().includes(filter) ?? false;
    this.getCategoryList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddDialog(): void {
    this.newCategory = { categoryId: 0, categoryName: '' };
    this.dialog.open(this.addDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      autoFocus: 'first-tabbable',
    });
  }

  addCategory(): void {
    const name = this.newCategory.categoryName?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter category name.');
      return;
    }

    const payload: ICategory = { categoryId: 0, categoryName: name };
    this.isSaving = true;
    this.categoryService.add(payload).subscribe({
      next: (res: IApiResponse<ICategory>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Category added successfully');
          this.dialog.closeAll();
          this.getCategoryList();
        } else {
          this.toast.error(res.message || 'Failed to add category');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add category');
      },
    });
  }

  getCategoryList(): void {
    this.isLoading = true;
    this.categoryService.list().subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load categories');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load categories');
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

  rowIndex(i: number): number {
    if (!this.paginator) {
      return i + 1;
    }
    return this.paginator.pageIndex * this.paginator.pageSize + i + 1;
  }

  openEditDialog(row: ICategory): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      data: { ...row },
    });

    dialogRef.afterClosed().subscribe((result: ICategory | undefined) => {
      if (!result?.categoryName?.trim()) {
        return;
      }
      const payload: ICategory = {
        categoryId: result.categoryId,
        categoryName: result.categoryName.trim(),
      };
      this.categoryService.update(payload).subscribe({
        next: (res) => {
          if (res.success) {
            this.toast.success(res.message || 'Category updated successfully');
            this.getCategoryList();
          } else {
            this.toast.error(res.message || 'Failed to update category');
          }
        },
        error: () => this.toast.error('Failed to update category'),
      });
    });
  }
}
