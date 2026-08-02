import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { QuillEditorComponent } from 'ngx-quill';
import { ToastrService } from 'ngx-toastr';
import {
  ICertificate,
  normalizeCertificate,
  normalizeCertificateList,
} from '../../../interfaces/ICertificate';
import { ICollege } from '../../../interfaces/ICollege';
import { CertificateService } from '../../../services/masterservice/certificate.service';
import { CollegeService } from '../../../services/masterservice/college.service';

@Component({
  selector: 'app-certificate',
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
    QuillEditorComponent,
  ],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss',
})
export class CertificateComponent implements OnInit, AfterViewInit {
  private certificateService = inject(CertificateService);
  private collegeService = inject(CollegeService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  colleges: ICollege[] = [];
  filterCollegeId: number | null = null;
  filterType: string | null = null;
  newCertificate: ICertificate = { id: 0, collegeId: 0, type: '', description: null };

  dataSource = new MatTableDataSource<ICertificate>([]);
  displayedColumns: string[] = ['index', 'type', 'school', 'description', 'actions'];
  isLoading = false;
  isSaving = false;

  readonly certificateTypes: { label: string; value: string }[] = [
    { label: 'Bonafide', value: 'Bonafide' },
    { label: 'Character', value: 'Character' },
    { label: 'TC (Transfer Certificate)', value: 'TC' },
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<ICertificate>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data, filter) => {
      const hay =
        `${data.type} ${this.schoolLabel(data.collegeId)} ${data.collegeId} ${data.description ?? ''}`.toLowerCase();
      return hay.includes(filter);
    };
    this.loadColleges();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  typeOptionsForEdit(rowType: string | null | undefined): { label: string; value: string }[] {
    const t = rowType?.trim() ?? '';
    if (!t || this.certificateTypes.some(o => o.value === t)) {
      return this.certificateTypes;
    }
    return [...this.certificateTypes, { label: `${t} (existing)`, value: t }];
  }

  descriptionPreview(html: string | null | undefined): string {
    if (html == null || !String(html).trim()) {
      return '—';
    }
    const doc = new DOMParser().parseFromString(String(html), 'text/html');
    const text = doc.body.textContent?.replace(/\s+/g, ' ').trim() ?? '';
    return text.length > 120 ? `${text.slice(0, 120)}…` : text || '—';
  }

  private normalizeDescriptionInput(raw: unknown): string | null {
    if (raw == null) {
      return null;
    }
    const s = String(raw).trim();
    if (!s) {
      return null;
    }
    const doc = new DOMParser().parseFromString(s, 'text/html');
    const text = doc.body.textContent?.replace(/\s+/g, ' ').trim() ?? '';
    if (!text) {
      return null;
    }
    return s;
  }

  schoolLabel(collegeId: number | null | undefined): string {
    if (collegeId == null) {
      return '—';
    }
    const c = this.colleges.find(x => x.collegeId === collegeId);
    return c?.collegeAbreviation ?? String(collegeId);
  }

  loadColleges(): void {
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        if (res.success) {
          this.colleges = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
        }
      },
      error: () => this.toast.error('Failed to load schools'),
    });
  }

  onFiltersChange(): void {
    if (this.filterType && this.filterCollegeId) {
      this.loadList();
    } else {
      this.dataSource.data = [];
    }
  }

  loadList(): void {
    const type = String(this.filterType ?? '').trim();
    const collegeId = Number(this.filterCollegeId);
    if (!type || !collegeId) {
      this.toast.warning('Select school and certificate type to load the list.');
      return;
    }
    this.isLoading = true;
    this.certificateService.getCertificate(type, collegeId).subscribe({
      next: res => {
        this.isLoading = false;
        if (!res.success) {
          this.toast.error(res.message || 'Could not load certificates');
          return;
        }
        this.dataSource.data = normalizeCertificateList(res.data, normalizeCertificate);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load certificates');
      },
    });
  }

  openAddDialog(): void {
    if (!this.filterType || !this.filterCollegeId) {
      this.toast.warning('Select school and certificate type first.');
      return;
    }
    this.newCertificate = {
      id: 0,
      collegeId: this.filterCollegeId,
      type: this.filterType,
      description: null,
    };
    this.dialog.open(this.addDialog, { width: 'min(720px, 96vw)', maxWidth: '95vw' });
  }

  addCertificate(): void {
    const type = String(this.newCertificate.type ?? '').trim();
    const collegeId = Number(this.newCertificate.collegeId);
    if (!type || !collegeId) {
      this.toast.warning('School and certificate type are required.');
      return;
    }
    this.isSaving = true;
    const body: ICertificate = {
      id: 0,
      collegeId,
      type,
      description: this.normalizeDescriptionInput(this.newCertificate.description),
    };
    this.certificateService.addCertificate(body).subscribe({
      next: res => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Certificate saved');
          this.dialog.closeAll();
          this.loadList();
        } else {
          this.toast.error(res.message || 'Failed to save certificate');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to save certificate');
      },
    });
  }

  openEditDialog(row: ICertificate): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(720px, 96vw)',
      maxWidth: '95vw',
      data: { ...row },
    });
    dialogRef.afterClosed().subscribe((result: ICertificate | undefined) => {
      if (!result) {
        return;
      }
      const payload: ICertificate = {
        ...result,
        description: this.normalizeDescriptionInput(result.description),
      };
      this.certificateService.updateCertificate(payload).subscribe({
        next: upd => {
          if (upd.success) {
            this.toast.success(upd.message || 'Certificate updated');
            this.loadList();
          } else {
            this.toast.error(upd.message || 'Failed to update certificate');
          }
        },
        error: () => this.toast.error('Failed to update certificate'),
      });
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.paginator?.firstPage();
  }

  rowIndex(i: number): number {
    return this.paginator ? this.paginator.pageIndex * this.paginator.pageSize + i + 1 : i + 1;
  }
}
