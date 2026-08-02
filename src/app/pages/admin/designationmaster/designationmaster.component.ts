import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DesignationService } from '../../../services/masterservice/designation.service';
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
import { IApiResponse, IDesignation } from '../../../interfaces/IDesignation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-designationmaster',
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
  templateUrl: './designationmaster.component.html',
  styleUrl: './designationmaster.component.scss',
})
export class DesignationmasterComponent implements OnInit, AfterViewInit {
  private designationService = inject(DesignationService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<IDesignation>([]);
  displayedColumns: string[] = ['index', 'designation', 'actions'];
  newDesignation: IDesignation = { id: 0, designation: '' };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<IDesignation>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) =>
      row.designation?.toLowerCase().includes(filter) ?? false;
    this.getDesignationList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddDialog(): void {
    this.newDesignation = { id: 0, designation: '' };
    this.dialog.open(this.addDialog, { width: 'min(440px, 92vw)', maxWidth: '95vw' });
  }

  addDesignation(): void {
    const name = this.newDesignation.designation?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter a designation name.');
      return;
    }
    this.isSaving = true;
    this.designationService.addDesignation(name).subscribe({
      next: (res: IApiResponse<IDesignation>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Designation added successfully');
          this.dialog.closeAll();
          this.getDesignationList();
        } else {
          this.toast.error(res.message || 'Failed to add designation');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add designation');
      },
    });
  }

  getDesignationList(): void {
    this.isLoading = true;
    this.designationService.getDesignationList().subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load designations');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load designations');
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

  openEditDialog(row: IDesignation): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      data: { ...row },
    });
    dialogRef.afterClosed().subscribe((result: IDesignation | undefined) => {
      if (!result?.designation?.trim()) {
        return;
      }
      this.designationService
        .updateDesignation({
          id: result.id,
          designation: result.designation.trim(),
        })
        .subscribe({
          next: (res) => {
            if (res.success) {
              this.toast.success(res.message || 'Designation updated successfully');
              this.getDesignationList();
            } else {
              this.toast.error(res.message || 'Failed to update designation');
            }
          },
          error: () => this.toast.error('Failed to update designation'),
        });
    });
  }
}
