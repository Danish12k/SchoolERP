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
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastrService } from 'ngx-toastr';
import { IApiResponse } from '../../../interfaces/ICommon';
import { ISubject, SUBJECT_TYPE_OPTIONS } from '../../../interfaces/ISubjectMst';
import { SubjectmasterService } from '../../../services/masterservice/subjectmaster.service';

@Component({
  selector: 'app-add-grade-subject',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
  ],
  templateUrl: './add-grade-subject.component.html',
  styleUrl: './add-grade-subject.component.scss',
})
export class AddGradeSubjectComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private readonly subjectService = inject(SubjectmasterService);
  private readonly toast = inject(ToastrService);
  private readonly dialog = inject(MatDialog);

  readonly gradeSubjectType = 'Grade';
  readonly subjectTypeOptions = SUBJECT_TYPE_OPTIONS;

  newSubject: ISubject = {
    subjectId: 0,
    subjectName: '',
    subjectCode: '',
    subjectType: 'Grade',
    subjectSeq: 0,
  };

  dataSource = new MatTableDataSource<ISubject>([]);
  displayedColumns: string[] = ['subjectCode', 'subjectName', 'subjectSeq', 'actions'];
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog!: TemplateRef<ISubject>;

  ngOnInit(): void {
    this.loadSubjectList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addSubject(): void {
    const name = this.newSubject.subjectName?.trim() ?? '';
    const code = this.newSubject.subjectCode?.trim() ?? '';
    const seq = Number(this.newSubject.subjectSeq);
    if (!name || !code || !seq) {
      this.toast.warning('Please fill all required fields.');
      return;
    }

    const payload: ISubject = {
      subjectId: 0,
      subjectName: name,
      subjectCode: code,
      subjectType: this.gradeSubjectType,
      subjectSeq: seq,
    };

    this.isSaving = true;
    this.subjectService.addSubject(payload).subscribe({
      next: (res: IApiResponse<ISubject>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Grade subject added successfully.');
          this.newSubject = {
            subjectId: 0,
            subjectName: '',
            subjectCode: '',
            subjectType: this.gradeSubjectType,
            subjectSeq: 0,
          };
          this.loadSubjectList();
        } else {
          this.toast.error(res.message || 'Failed to add grade subject.');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add grade subject.');
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
      const seq = Number(result?.subjectSeq);
      if (!name || !code || !seq || !result?.subjectId) {
        return;
      }

      this.subjectService
        .updateSubject({
          subjectId: result.subjectId,
          subjectName: name,
          subjectCode: code,
          subjectType: this.gradeSubjectType,
          subjectSeq: seq,
        })
        .subscribe({
          next: res => {
            if (res.success) {
              this.toast.success(res.message || 'Grade subject updated successfully.');
              this.loadSubjectList();
            } else {
              this.toast.error(res.message || 'Failed to update grade subject.');
            }
          },
          error: () => this.toast.error('Failed to update grade subject.'),
        });
    });
  }

  private loadSubjectList(): void {
    this.isLoading = true;
    this.subjectService.listSubject(this.gradeSubjectType).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load grade subjects.');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load grade subjects.');
      },
    });
  }
}
