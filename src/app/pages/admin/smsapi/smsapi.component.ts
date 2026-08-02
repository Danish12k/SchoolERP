import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { SmsapiService } from '../../../services/masterservice/smsapi.service';
import { CollegeService } from '../../../services/masterservice/college.service';
import { ICollege } from '../../../interfaces/ICollege';
import { ISMSApi } from '../../../interfaces/Ismsapi';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageHeaderComponent } from '@shared';
import { ToastrService } from 'ngx-toastr';

interface ISmsApiForm {
  id: number;
  collegeId: number;
  apI_SenderId: string;
  api_UserName: string;
  api_Password: string;
  apI_Provider: string;
  apI_Status: boolean;
}

@Component({
  selector: 'app-smsapi',
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
    MatSlideToggleModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './smsapi.component.html',
  styleUrl: './smsapi.component.scss',
})
export class SmsapiComponent implements OnInit, AfterViewInit {
  private smsService = inject(SmsapiService);
  private collegeService = inject(CollegeService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  schoolList: ICollege[] = [];
  filterCollegeId: number | null = null;
  dataSource = new MatTableDataSource<ISMSApi>([]);
  displayedColumns: string[] = ['index', 'sender', 'usename', 'status', 'actions'];
  newSms: ISmsApiForm = this.emptyForm();
  isLoading = false;
  isSaving = false;
  isUpdating = false;
  deletingIds = new Set<number>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<ISmsApiForm>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) => {
      const hay = `${row.apI_SenderId} ${row.api_UserName} ${row.apI_Provider}`.toLowerCase();
      return hay.includes(filter);
    };
    this.loadColleges();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private emptyForm(): ISmsApiForm {
    return {
      id: 0,
      collegeId: 0,
      apI_SenderId: '',
      api_UserName: '',
      api_Password: '',
      apI_Provider: '',
      apI_Status: true,
    };
  }

  private toApiBody(form: ISmsApiForm): ISMSApi {
    return {
      id: form.id,
      collegeId: form.collegeId,
      apI_SenderId: form.apI_SenderId.trim(),
      api_UserName: form.api_UserName.trim(),
      api_Password: form.api_Password,
      apI_Provider: form.apI_Provider.trim(),
      apI_Status: form.apI_Status ? 1 : 0,
    };
  }

  private toForm(row: ISMSApi): ISmsApiForm {
    return {
      id: row.id,
      collegeId: row.collegeId,
      apI_SenderId: row.apI_SenderId ?? '',
      api_UserName: row.api_UserName ?? '',
      api_Password: row.api_Password ?? '',
      apI_Provider: row.apI_Provider ?? '',
      apI_Status: row.apI_Status === 1,
    };
  }

  statusLabel(status: number): string {
    return status === 1 ? 'Active' : 'Inactive';
  }

  loadColleges(): void {
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        if (res.success) {
          this.schoolList = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
        }
      },
      error: () => this.toast.error('Failed to load schools'),
    });
  }

  onCollegeFilterChange(): void {
    if (this.filterCollegeId) {
      this.loadList();
    } else {
      this.dataSource.data = [];
    }
  }

  loadList(): void {
    const collegeId = Number(this.filterCollegeId);
    if (!collegeId) {
      this.toast.warning('Select a school to load SMS API records.');
      return;
    }
    this.isLoading = true;
    this.smsService.GetSmsListByCollegeId(collegeId).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load SMS API list');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load SMS API list');
      },
    });
  }

  openAddDialog(): void {
    this.newSms = { ...this.emptyForm(), collegeId: this.filterCollegeId ?? 0 };
    this.dialog.open(this.addDialog, {
      width: 'min(680px, 94vw)',
      maxWidth: '96vw',
      panelClass: 'smsapi-add-dialog-panel',
    });
  }

  addSmsApi(): void {
    if (!this.newSms.collegeId) {
      this.toast.warning('Please select a school.');
      return;
    }
    if (!this.newSms.apI_SenderId?.trim() || !this.newSms.api_UserName?.trim() || !this.newSms.api_Password) {
      this.toast.warning('Sender, user name, and password are required.');
      return;
    }
    if (!this.newSms.apI_Provider?.trim()) {
      this.toast.warning('Provider details are required.');
      return;
    }
    this.isSaving = true;
    this.smsService
      .addSMSAPI(this.toApiBody(this.newSms))
      .pipe(finalize(() => (this.isSaving = false)))
      .subscribe({
        next: res => {
          if (res.success) {
            this.toast.success(res.message || 'SMS API added');
            this.dialog.closeAll();
            this.loadList();
          } else {
            this.toast.error(res.message || 'Failed to add SMS API');
          }
        },
        error: () => this.toast.error('Failed to add SMS API'),
      });
  }

  openEditDialog(row: ISMSApi): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(680px, 94vw)',
      maxWidth: '96vw',
      data: this.toForm(row),
    });
    dialogRef.afterClosed().subscribe((result: ISmsApiForm | undefined) => {
      if (!result?.apI_SenderId?.trim()) {
        return;
      }
      if (this.isUpdating) {
        return;
      }
      this.isUpdating = true;
      this.smsService
        .updateSMSAPI(this.toApiBody(result))
        .pipe(finalize(() => (this.isUpdating = false)))
        .subscribe({
          next: res => {
            if (res.success) {
              this.toast.success(res.message || 'SMS API updated');
              this.loadList();
            } else {
              this.toast.error(res.message || 'Failed to update SMS API');
            }
          },
          error: () => this.toast.error('Failed to update SMS API'),
        });
    });
  }

  deleteSmsApi(row: ISMSApi): void {
    const id = Number(row.id);
    if (!id || this.deletingIds.has(id)) {
      return;
    }
    if (!confirm('Delete this SMS API configuration?')) {
      return;
    }
    this.deletingIds.add(id);
    this.smsService
      .deleteSMSAPI(id)
      .pipe(finalize(() => this.deletingIds.delete(id)))
      .subscribe({
        next: res => {
          if (res.success) {
            this.toast.success(res.message || 'SMS API deleted');
            this.loadList();
          } else {
            this.toast.error(res.message || 'Failed to delete SMS API');
          }
        },
        error: () => this.toast.error('Failed to delete SMS API'),
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
}
