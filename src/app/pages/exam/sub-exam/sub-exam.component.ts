import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ISubExam } from '../../../interfaces/IExam';
import { ExamSetupService } from '../../../services/examservice/exam-setup.service';

@Component({
  selector: 'app-sub-exam',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTableModule,
  ],
  templateUrl: './sub-exam.component.html',
  styleUrl: './sub-exam.component.scss',
})
export class SubExamComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private readonly examSetupService = inject(ExamSetupService);
  private readonly toast = inject(ToastrService);

  examName = '';
  isLoadingSubExams = false;
  isSaving = false;

  dataSource = new MatTableDataSource<ISubExam>([]);
  displayedColumns = ['index', 'examName'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadSubExams();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadSubExams(): void {
    this.isLoadingSubExams = true;
    this.examSetupService.listSubExams().subscribe({
      next: res => {
        this.isLoadingSubExams = false;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.dataSource.data = [];
        }
      },
      error: () => {
        this.isLoadingSubExams = false;
        this.dataSource.data = [];
        this.toast.error('Failed to load sub exams.');
      },
    });
  }

  saveSubExam(): void {
    const name = this.examName.trim();
    if (!name) {
      this.toast.warning('Please enter exam name.');
      return;
    }

    this.isSaving = true;
    this.examSetupService.createSubExam({ examName: name }).subscribe({
      next: res => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Sub exam added successfully.');
          this.examName = '';
          this.loadSubExams();
        } else {
          this.toast.error(res.message || 'Failed to add sub exam.');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add sub exam.');
      },
    });
  }

  rowIndex(index: number): number {
    const paginator = this.dataSource.paginator;
    return paginator ? paginator.pageIndex * paginator.pageSize + index + 1 : index + 1;
  }
}
