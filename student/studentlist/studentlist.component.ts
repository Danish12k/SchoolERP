import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FilterstudentComponent } from '../../fillteCompnent/filterstudent/filterstudent.component';
import { IStudent } from '../../../interfaces/IStudent';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-studentlist',
  imports: [
    FilterstudentComponent,
    MatCardModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.scss',
})
export class StudentlistComponent implements OnInit, AfterViewInit {
  private studentService = inject(StudentService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<IStudent>([]);
  displayedColumns: string[] = [
    'admissionNo',
    'studentName',
    'className',
    'sectionName',
    'rollNo',
    'phone',
    'actions',
  ];

  loading = false;
  loadError: string | null = null;

  ngOnInit(): void {
    this.loadStudents();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadStudents(): void {
    this.loading = true;
    this.loadError = null;
    this.studentService.listStudents().subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data != null) {
          const rows = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.dataSource.data = [];
          this.loadError = res.message || 'No students returned.';
        }
      },
      error: () => {
        this.loading = false;
        this.dataSource.data = [];
        this.loadError =
          'Could not load students. Check the API URL in apiendpoint.ts and your network.';
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
