import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IFeeInstallment } from '../../../interfaces/IFeeMaster';
import { FeeMasterService } from '../../../services/feeservice/fee-master.service';
import { SessionService } from '../../../services/masterservice/session.service';
import { CollegeService } from '../../../services/masterservice/college.service';
import { ISession } from '../../../interfaces/isession';
import { ICollege } from '../../../interfaces/ICollege';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PageHeaderComponent } from '@shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fee-installment',
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
    MatDatepickerModule,
    DatePipe,
  ],
  templateUrl: './fee-installment.component.html',
  styleUrl: './fee-installment.component.scss',
})
export class FeeInstallmentComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private feeService = inject(FeeMasterService);
  private sessionService = inject(SessionService);
  private collegeService = inject(CollegeService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<IFeeInstallment>([]);
  displayedColumns: string[] = ['index', 'installment', 'installmentDate', 'actions'];
  sessions: ISession[] = [];
  schools: ICollege[] = [];
  filterSessionId = 0;
  filterCollegeId = 0;
  newInstallment: Partial<IFeeInstallment> = {
    installmentId: 0,
    installmentName: '',
    installMentDate: undefined,
  };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<IFeeInstallment>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) =>
      `${row.installmentName} ${row.installMentDate}`.toLowerCase().includes(filter);
    this.loadSessions();
    this.loadColleges();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadSessions(): void {
    this.sessionService.getSessionList().subscribe({
      next: res => {
        if (res.success) {
          this.sessions = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
        }
      },
      error: () => this.toast.error('Failed to load sessions'),
    });
  }

  loadColleges(): void {
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        if (res.success) {
          this.schools = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
        }
      },
      error: () => this.toast.error('Failed to load schools'),
    });
  }

  onFiltersChange(): void {
    if (this.filterCollegeId > 0 && this.filterSessionId > 0) {
      this.loadList();
    } else {
      this.dataSource.data = [];
    }
  }

  loadList(): void {
    if (this.filterCollegeId <= 0 || this.filterSessionId <= 0) {
      this.toast.warning('Select session and school to load installments.');
      return;
    }
    this.isLoading = true;
    this.feeService.listFeeInstallment(this.filterCollegeId, this.filterSessionId).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load installments');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load installments');
      },
    });
  }

  openAddDialog(): void {
    if (this.filterCollegeId <= 0 || this.filterSessionId <= 0) {
      this.toast.warning('Select session and school first.');
      return;
    }
    this.newInstallment = {
      installmentId: 0,
      sessionId: this.filterSessionId,
      collegeId: this.filterCollegeId,
      installmentName: '',
      installMentDate: undefined,
    };
    this.dialog.open(this.addDialog, { width: 'min(480px, 92vw)', maxWidth: '95vw' });
  }

  addFeeInstallment(): void {
    const name = this.newInstallment.installmentName?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter installment name.');
      return;
    }
    if (!this.newInstallment.installMentDate) {
      this.toast.warning('Please select installment date.');
      return;
    }
    this.isSaving = true;
    const body = {
      ...this.newInstallment,
      installmentName: name,
      sessionId: this.filterSessionId,
      collegeId: this.filterCollegeId,
    } as IFeeInstallment;
    this.feeService.addFeeInstallment(body).subscribe({
      next: res => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Installment added successfully');
          this.dialog.closeAll();
          this.loadList();
        } else {
          this.toast.error(res.message || 'Failed to add installment');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add installment');
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

  openEditDialog(row: IFeeInstallment): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(480px, 92vw)',
      maxWidth: '95vw',
      data: { ...row },
    });
    dialogRef.afterClosed().subscribe((result: IFeeInstallment | undefined) => {
      if (!result?.installmentName?.trim()) {
        return;
      }
      this.feeService.updateFeeInstallment(result).subscribe({
        next: res => {
          if (res.success) {
            this.toast.success(res.message || 'Installment updated successfully');
            this.loadList();
          } else {
            this.toast.error(res.message || 'Failed to update installment');
          }
        },
        error: () => this.toast.error('Failed to update installment'),
      });
    });
  }
}
