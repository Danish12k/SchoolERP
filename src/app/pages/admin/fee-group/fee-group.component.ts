import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFeeGroup } from '../../../interfaces/IFeeMaster';
import { FeeMasterService } from '../../../services/feeservice/fee-master.service';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageHeaderComponent } from '@shared';
import { IApiResponse } from '../../../interfaces/ICommon';
import { ToastrService } from 'ngx-toastr';

interface IFeeGroupForm {
  streamId: number;
  streamName: string;
  activeStatus: boolean;
}

@Component({
  selector: 'app-fee-group',
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
    MatSlideToggleModule,
  ],
  templateUrl: './fee-group.component.html',
  styleUrl: './fee-group.component.scss',
})
export class FeeGroupComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private feeService = inject(FeeMasterService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<IFeeGroup>([]);
  displayedColumns: string[] = ['index', 'feeGroup', 'status', 'actions'];
  newFeeGroup: IFeeGroupForm = { streamId: 0, streamName: '', activeStatus: true };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<IFeeGroupForm>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) =>
      row.streamName?.toLowerCase().includes(filter) ?? false;
    this.loadList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  statusLabel(activeStatus: number): string {
    return activeStatus === 1 ? 'Active' : 'Inactive';
  }

  private toApiBody(form: IFeeGroupForm): IFeeGroup {
    return {
      streamId: form.streamId,
      streamName: form.streamName.trim(),
      activeStatus: form.activeStatus ? 1 : 0,
    };
  }

  private toForm(row: IFeeGroup): IFeeGroupForm {
    return {
      streamId: row.streamId,
      streamName: row.streamName,
      activeStatus: row.activeStatus === 1,
    };
  }

  openAddDialog(): void {
    this.newFeeGroup = { streamId: 0, streamName: '', activeStatus: true };
    this.dialog.open(this.addDialog, { width: 'min(440px, 92vw)', maxWidth: '95vw' });
  }

  addFeeGroup(): void {
    const name = this.newFeeGroup.streamName?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter fee group name.');
      return;
    }
    this.isSaving = true;
    this.feeService.addFeeGroup(this.toApiBody(this.newFeeGroup)).subscribe({
      next: (res: IApiResponse<IFeeGroup>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Fee group added successfully');
          this.dialog.closeAll();
          this.loadList();
        } else {
          this.toast.error(res.message || 'Failed to add fee group');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add fee group');
      },
    });
  }

  loadList(): void {
    this.isLoading = true;
    this.feeService.listFeeGroup().subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load fee groups');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load fee groups');
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

  openEditDialog(row: IFeeGroup): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      data: this.toForm(row),
    });
    dialogRef.afterClosed().subscribe((result: IFeeGroupForm | undefined) => {
      const name = result?.streamName?.trim();
      if (!name || !result?.streamId) {
        return;
      }
      this.feeService.updateFeeGroup(this.toApiBody(result)).subscribe({
        next: res => {
          if (res.success) {
            this.toast.success(res.message || 'Fee group updated successfully');
            this.loadList();
          } else {
            this.toast.error(res.message || 'Failed to update fee group');
          }
        },
        error: () => this.toast.error('Failed to update fee group'),
      });
    });
  }

  deleteFeeGroup(row: IFeeGroup): void {
    if (row.streamId <= 0) {
      return;
    }
    if (!confirm('Delete this fee group?')) {
      return;
    }
    this.feeService.deleteFeeGroup(row.streamId).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(res.message || 'Fee group deleted successfully');
          this.loadList();
        } else {
          this.toast.error(res.message || 'Failed to delete fee group');
        }
      },
      error: () => this.toast.error('Failed to delete fee group'),
    });
  }
}
