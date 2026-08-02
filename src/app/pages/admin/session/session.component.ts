import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ISession } from '../../../interfaces/isession';
import { SessionService } from '../../../services/masterservice/session.service';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PageHeaderComponent } from '@shared';
import { ToastrService } from 'ngx-toastr';

interface ISessionForm {
  sessionId: number;
  sessionName: string;
  description: string;
  yearFrom: Date | null;
  yearTo: Date | null;
}

@Component({
  selector: 'app-session',
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
    MatDatepickerModule,
  ],
  providers: [DatePipe],
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss',
})
export class SessionComponent implements OnInit, AfterViewInit {
  private sessionService = inject(SessionService);
  private datePipe = inject(DatePipe);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<ISession>([]);
  displayedColumns: string[] = ['index', 'sessionName', 'description', 'yearFrom', 'yearTo', 'actions'];
  newSession: ISessionForm = this.emptySessionForm();
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<ISessionForm>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) => {
      const hay = `${row.sessionName} ${row.description} ${row.yearFrom} ${row.yearTo}`.toLowerCase();
      return hay.includes(filter);
    };
    this.loadSessionList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private emptySessionForm(): ISessionForm {
    return {
      sessionId: 0,
      sessionName: '',
      description: '',
      yearFrom: null,
      yearTo: null,
    };
  }

  private parseDate(value: string): Date | null {
    if (!value) {
      return null;
    }
    const parts = value.split('/');
    if (parts.length !== 3) {
      return null;
    }
    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);
    if (!day || !month || !year) {
      return null;
    }
    return new Date(year, month - 1, day);
  }

  private formatDate(value: Date | null): string {
    return this.datePipe.transform(value, 'dd/MM/yyyy') ?? '';
  }

  private toApiPayload(form: ISessionForm): ISession {
    return {
      sessionId: form.sessionId,
      sessionName: form.sessionName.trim(),
      description: form.description.trim(),
      yearFrom: this.formatDate(form.yearFrom),
      yearTo: this.formatDate(form.yearTo),
    };
  }

  private toSessionForm(row: ISession): ISessionForm {
    return {
      sessionId: row.sessionId,
      sessionName: row.sessionName,
      description: row.description,
      yearFrom: this.parseDate(row.yearFrom),
      yearTo: this.parseDate(row.yearTo),
    };
  }

  openAddDialog(): void {
    this.newSession = this.emptySessionForm();
    this.dialog.open(this.addDialog, { width: 'min(480px, 92vw)', maxWidth: '95vw' });
  }

  addSession(): void {
    const name = this.newSession.sessionName?.trim() ?? '';
    const description = this.newSession.description?.trim() ?? '';
    if (!name || !description || !this.newSession.yearFrom || !this.newSession.yearTo) {
      this.toast.warning('Please fill all required fields.');
      return;
    }
    this.isSaving = true;
    this.sessionService.addSession(this.toApiPayload(this.newSession)).subscribe({
      next: res => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Session added successfully');
          this.dialog.closeAll();
          this.loadSessionList();
        } else {
          this.toast.error(res.message || 'Failed to add session');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add session');
      },
    });
  }

  loadSessionList(): void {
    this.isLoading = true;
    this.sessionService.getSessionList().subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load sessions');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load sessions');
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

  openEditDialog(row: ISession): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(480px, 92vw)',
      maxWidth: '95vw',
      data: this.toSessionForm(row),
    });
    dialogRef.afterClosed().subscribe((result: ISessionForm | undefined) => {
      if (!result?.sessionName?.trim() || !result.description?.trim()) {
        return;
      }
      if (!result.yearFrom || !result.yearTo) {
        return;
      }
      this.sessionService.updateSession(this.toApiPayload(result)).subscribe({
        next: res => {
          if (res.success) {
            this.toast.success(res.message || 'Session updated successfully');
            this.loadSessionList();
          } else {
            this.toast.error(res.message || 'Failed to update session');
          }
        },
        error: () => this.toast.error('Failed to update session'),
      });
    });
  }

  deleteSession(row: ISession): void {
    if (row.sessionId <= 0) {
      return;
    }
    if (!confirm('Delete this session?')) {
      return;
    }
    this.sessionService.deleteSession(row.sessionId).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(res.message || 'Session deleted successfully');
          this.loadSessionList();
        } else {
          this.toast.error(res.message || 'Failed to delete session');
        }
      },
      error: () => this.toast.error('Failed to delete session'),
    });
  }
}
