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
import { IFeeGroup, IFeeHead } from '../../../interfaces/IFeeMaster';
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
import { MatSelectModule } from '@angular/material/select';
import { PageHeaderComponent } from '@shared';
import { IApiResponse } from '../../../interfaces/ICommon';
import { ToastrService } from 'ngx-toastr';

type IFeeHeadRow = IFeeHead & { streamName?: string };

interface IFeeHeadForm {
  feeHeadId: number;
  feeHeadName: string;
  streamId: number;
}

@Component({
  selector: 'app-fee-head',
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
    MatSelectModule,
  ],
  templateUrl: './fee-head.component.html',
  styleUrl: './fee-head.component.scss',
})
export class FeeHeadComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private feeService = inject(FeeMasterService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<IFeeHeadRow>([]);
  displayedColumns: string[] = ['index', 'headName', 'feeFor', 'actions'];
  feeGroupList: IFeeGroup[] = [];
  newFeeHead: IFeeHeadForm = { feeHeadId: 0, feeHeadName: '', streamId: 0 };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<IFeeHeadForm>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) => {
      const hay = `${row.feeHeadName} ${row.streamName ?? ''}`.toLowerCase();
      return hay.includes(filter);
    };
    this.loadFeeGroups();
    this.loadList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  feeGroupLabel(streamId: number): string {
    return this.feeGroupList.find(g => g.streamId === streamId)?.streamName ?? String(streamId);
  }

  private toApiBody(form: IFeeHeadForm): IFeeHead {
    return {
      feeHeadId: form.feeHeadId,
      feeHeadName: form.feeHeadName.trim(),
      stream: form.streamId,
    };
  }

  private toForm(row: IFeeHeadRow): IFeeHeadForm {
    return {
      feeHeadId: row.feeHeadId,
      feeHeadName: row.feeHeadName,
      streamId: row.stream,
    };
  }

  loadFeeGroups(): void {
    this.feeService.listFeeGroup().subscribe({
      next: res => {
        if (res.success) {
          this.feeGroupList = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
        }
      },
      error: () => this.toast.error('Failed to load fee groups'),
    });
  }

  openAddDialog(): void {
    this.newFeeHead = {
      feeHeadId: 0,
      feeHeadName: '',
      streamId: this.feeGroupList[0]?.streamId ?? 0,
    };
    this.dialog.open(this.addDialog, { width: 'min(440px, 92vw)', maxWidth: '95vw' });
  }

  addFeeHead(): void {
    const name = this.newFeeHead.feeHeadName?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter fee head name.');
      return;
    }
    if (!this.newFeeHead.streamId) {
      this.toast.warning('Please select a fee group.');
      return;
    }
    this.isSaving = true;
    this.feeService.addFeeHead(this.toApiBody(this.newFeeHead)).subscribe({
      next: (res: IApiResponse<IFeeHead>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Fee head added successfully');
          this.dialog.closeAll();
          this.loadList();
        } else {
          this.toast.error(res.message || 'Failed to add fee head');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add fee head');
      },
    });
  }

  loadList(): void {
    this.isLoading = true;
    this.feeService.listFeeHead().subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load fee heads');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load fee heads');
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

  openEditDialog(row: IFeeHeadRow): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      data: this.toForm(row),
    });
    dialogRef.afterClosed().subscribe((result: IFeeHeadForm | undefined) => {
      const name = result?.feeHeadName?.trim();
      if (!name || !result?.feeHeadId || !result.streamId) {
        return;
      }
      this.feeService.updateFeeHead(this.toApiBody(result)).subscribe({
        next: res => {
          if (res.success) {
            this.toast.success(res.message || 'Fee head updated successfully');
            this.loadList();
          } else {
            this.toast.error(res.message || 'Failed to update fee head');
          }
        },
        error: () => this.toast.error('Failed to update fee head'),
      });
    });
  }
}
