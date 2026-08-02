import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ISalutation } from '../../../interfaces/IAdmintMst';
import { SalutationService } from '../../../services/masterservice/salutation.service';
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
  selector: 'app-salutation',
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
  templateUrl: './salutation.component.html',
  styleUrl: './salutation.component.scss',
})
export class SalutationComponent implements OnInit, AfterViewInit {
  private salutationService = inject(SalutationService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<ISalutation>([]);
  displayedColumns: string[] = ['index', 'salutation', 'actions'];
  newSalutation: ISalutation = { salutationId: 0, salutation: '' };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<ISalutation>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) =>
      row.salutation?.toLowerCase().includes(filter) ?? false;
    this.loadList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddDialog(): void {
    this.newSalutation = { salutationId: 0, salutation: '' };
    this.dialog.open(this.addDialog, { width: 'min(440px, 92vw)', maxWidth: '95vw' });
  }

  addSalutation(): void {
    const name = this.newSalutation.salutation?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter salutation.');
      return;
    }
    this.isSaving = true;
    this.salutationService.add({ salutationId: 0, salutation: name }).subscribe({
      next: (res: IApiResponse<ISalutation>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Salutation added successfully');
          this.dialog.closeAll();
          this.loadList();
        } else {
          this.toast.error(res.message || 'Failed to add salutation');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add salutation');
      },
    });
  }

  loadList(): void {
    this.isLoading = true;
    this.salutationService.list().subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load salutations');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load salutations');
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

  openEditDialog(row: ISalutation): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      data: { ...row },
    });
    dialogRef.afterClosed().subscribe((result: ISalutation | undefined) => {
      if (!result?.salutation?.trim()) {
        return;
      }
      this.salutationService
        .update({
          salutationId: result.salutationId,
          salutation: result.salutation.trim(),
        })
        .subscribe({
          next: (res) => {
            if (res.success) {
              this.toast.success(res.message || 'Salutation updated successfully');
              this.loadList();
            } else {
              this.toast.error(res.message || 'Failed to update salutation');
            }
          },
          error: () => this.toast.error('Failed to update salutation'),
        });
    });
  }
}
