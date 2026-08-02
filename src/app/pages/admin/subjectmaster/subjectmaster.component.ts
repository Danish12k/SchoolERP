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
import { NgTemplateOutlet } from '@angular/common';
import {
  ISubject,
  SUBJECT_TYPE_OPTIONS,
  subjectTypeLabel,
} from '../../../interfaces/ISubjectMst';
import { SubjectmasterService } from '../../../services/masterservice/subjectmaster.service';
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

@Component({
  selector: 'app-subjectmaster',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    NgTemplateOutlet,
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
  templateUrl: './subjectmaster.component.html',
  styleUrl: './subjectmaster.component.scss',
})
export class SubjectmasterComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private readonly subjectService = inject(SubjectmasterService);
  private readonly toast = inject(ToastrService);
  private readonly dialog = inject(MatDialog);

  readonly subjectTypeOptions = SUBJECT_TYPE_OPTIONS;
  readonly subjectTypeLabel = subjectTypeLabel;

  dataSource = new MatTableDataSource<ISubject>([]);
  displayedColumns: string[] = ['subjectCode', 'subjectName', 'subjectSeq', 'actions'];

  selectedSubjectType = '';
  newSubject: ISubject = {
    subjectId: 0,
    subjectName: '',
    subjectCode: '',
    subjectType: '',
    subjectSeq: 0,
  };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog!: TemplateRef<ISubject>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) => {
      const hay = `${row.subjectCode} ${row.subjectName} ${row.subjectSeq}`.toLowerCase();
      return hay.includes(filter);
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSubjectTypeChange(type: string): void {
    this.selectedSubjectType = type ?? '';
    this.newSubject.subjectType = this.selectedSubjectType;
    if (!this.selectedSubjectType) {
      this.dataSource.data = [];
      return;
    }
    this.loadSubjectList();
  }

  loadSubjectList(): void {
    if (!this.selectedSubjectType) {
      return;
    }
    this.isLoading = true;
    this.subjectService.listSubject(this.selectedSubjectType).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load subjects');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load subjects');
      },
    });
  }

  addSubject(): void {
    const name = this.newSubject.subjectName?.trim() ?? '';
    const code = this.newSubject.subjectCode?.trim() ?? '';
    const type = this.selectedSubjectType?.trim() ?? '';
    const seq = Number(this.newSubject.subjectSeq);
    if (!name || !code || !type || !seq) {
      this.toast.warning('Please fill all required fields.');
      return;
    }
    const payload: ISubject = {
      subjectId: 0,
      subjectName: name,
      subjectCode: code,
      subjectType: type,
      subjectSeq: seq,
    };
    this.isSaving = true;
    this.subjectService.addSubject(payload).subscribe({
      next: (res: IApiResponse<ISubject>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Subject added successfully');
          this.newSubject = {
            subjectId: 0,
            subjectName: '',
            subjectCode: '',
            subjectType: type,
            subjectSeq: 0,
          };
          this.loadSubjectList();
        } else {
          this.toast.error(res.message || 'Failed to add subject');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add subject');
      },
    });
  }

  openEditDialog(row: ISubject): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(480px, 92vw)',
      maxWidth: '95vw',
      data: { ...row },
    });
    dialogRef.afterClosed().subscribe((result: ISubject | undefined) => {
      const name = result?.subjectName?.trim();
      const code = result?.subjectCode?.trim();
      const type = result?.subjectType?.trim();
      const seq = Number(result?.subjectSeq);
      if (!name || !code || !type || !seq || !result?.subjectId) {
        return;
      }
      const payload: ISubject = {
        subjectId: result.subjectId,
        subjectName: name,
        subjectCode: code,
        subjectType: type,
        subjectSeq: seq,
      };
      this.subjectService.updateSubject(payload).subscribe({
        next: res => {
          if (res.success) {
            this.toast.success(res.message || 'Subject updated successfully');
            this.loadSubjectList();
          } else {
            this.toast.error(res.message || 'Failed to update subject');
          }
        },
        error: () => this.toast.error('Failed to update subject'),
      });
    });
  }
}
