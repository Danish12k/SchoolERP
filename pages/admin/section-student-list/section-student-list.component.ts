import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { SectionFilterComponent } from '../../../shared/components/section-filter/section-filter.component';
import { IStudent } from '../../../interfaces/IStudent';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-section-student-list',
  imports: [
    MatCardModule,
    MaterialModule,
    ReactiveFormsModule,
    SectionFilterComponent,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './section-student-list.component.html',
  styleUrl: './section-student-list.component.scss',
})
export class SectionStudentListComponent implements OnInit, AfterViewInit {
  private fb = inject(FormBuilder);
  private studentService = inject(StudentService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  filterForm!: FormGroup;
  dataSource = new MatTableDataSource<IStudent>([]);
  displayedColumns: string[] = [
    'admissionNo',
    'studentName',
    'className',
    'sectionName',
    'rollNo',
    'phone',
  ];

  loading = false;
  loadError: string | null = null;

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      sectionId: [null as number | null, [Validators.required, Validators.min(1)]],
      active: [1, [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSectionOrActiveChange(): void {
    const sectionId = this.filterForm.get('sectionId')?.value;
    alert(sectionId);
    console.log(sectionId);
    if (sectionId == null || sectionId < 1) {
      this.dataSource.data = [];
      this.loadError = null;
      return;
    }
    this.loadStudents();
  }

  loadStudents(): void {
    const sectionId = this.filterForm.get('sectionId')?.value;
    const active = this.filterForm.get('active')?.value ?? 1;
    if (sectionId == null || sectionId < 1) {
      this.filterForm.get('sectionId')?.markAsTouched();
      return;
    }

    this.loading = true;
    this.loadError = null;
    this.studentService.listStudentsBySection(sectionId, active).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data != null) {
          const rows = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          if (rows.length === 0) {
            this.loadError = res.message || 'No students in this section.';
          }
        } else {
          this.dataSource.data = [];
          this.loadError = res.message || 'No students returned.';
        }
      },
      error: () => {
        this.loading = false;
        this.dataSource.data = [];
        this.loadError =
          'Could not load students. Check SectionStudentList API and network.';
      },
    });
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  displayStudentName(row: IStudent): string {
    const direct = row.studentName?.trim();
    if (direct) {
      return direct;
    }
    const combined = [row.firstName, row.lastName].filter(Boolean).join(' ').trim();
    return combined || '—';
  }
}
