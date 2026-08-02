import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IHouse } from '../../../interfaces/IAdmintMst';
import { HouseService } from '../../../services/masterservice/house.service';
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
  selector: 'app-house',
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
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss',
})
export class HouseComponent implements OnInit, AfterViewInit {
  private houseService = inject(HouseService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<IHouse>([]);
  displayedColumns: string[] = ['index', 'houseName', 'actions'];
  newHouse: IHouse = { houseId: 0, houseName: '' };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<IHouse>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) =>
      row.houseName?.toLowerCase().includes(filter) ?? false;
    this.loadList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddDialog(): void {
    this.newHouse = { houseId: 0, houseName: '' };
    this.dialog.open(this.addDialog, { width: 'min(440px, 92vw)', maxWidth: '95vw' });
  }

  addHouse(): void {
    const name = this.newHouse.houseName?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter house name.');
      return;
    }
    this.isSaving = true;
    this.houseService.add({ houseId: 0, houseName: name }).subscribe({
      next: (res: IApiResponse<IHouse>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'House added successfully');
          this.dialog.closeAll();
          this.loadList();
        } else {
          this.toast.error(res.message || 'Failed to add house');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add house');
      },
    });
  }

  loadList(): void {
    this.isLoading = true;
    this.houseService.list().subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load houses');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load houses');
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

  openEditDialog(row: IHouse): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      data: { ...row },
    });
    dialogRef.afterClosed().subscribe((result: IHouse | undefined) => {
      if (!result?.houseName?.trim()) {
        return;
      }
      this.houseService
        .update({ houseId: result.houseId, houseName: result.houseName.trim() })
        .subscribe({
          next: (res) => {
            if (res.success) {
              this.toast.success(res.message || 'House updated successfully');
              this.loadList();
            } else {
              this.toast.error(res.message || 'Failed to update house');
            }
          },
          error: () => this.toast.error('Failed to update house'),
        });
    });
  }
}
