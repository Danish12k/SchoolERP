import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ISession } from '../../../interfaces/isession';
import { ICollege } from '../../../interfaces/ICollege';
import { CollegeService } from '../../../services/masterservice/college.service';
import { SessionService } from '../../../services/masterservice/session.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IClass } from '../../../interfaces/IClassmaster';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-classmaster',
  standalone: true,
  imports: [
    MatCard,
    MaterialModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTooltipModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  templateUrl: './classmaster.component.html',
  styleUrl: './classmaster.component.scss'
})
export class ClassmasterComponent implements OnInit {
  @Input() embedded = false;

  classForm!: FormGroup;
  sessions!: ISession[];
  colleges!: ICollege[];

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  sessionService = inject(SessionService);
  collegeService = inject(CollegeService);
  private toast = inject(ToastrService);

  dataSource = new MatTableDataSource<IClass>([]);
  displayedColumns: string[] = ['index', 'className', 'seqNumber', 'actions'];
  isLoading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;

  ngOnInit(): void {
    debugger;
    this.dataSource.filterPredicate = (row, filter) =>
      `${row.courseName ?? ''} ${row.seqNumber ?? ''}`.toLowerCase().includes(filter);
    this.classForm = this.fb.group({
      courseId: [0],
      courseName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      sessionId: [null, Validators.required],
      seqNumber: [0, [Validators.required, Validators.min(1)]],
      collegeId: [null, Validators.required]
    });
    debugger;
    this.loadSessions();
    this.loadSchool();
  }


  loadSessions() {
    this.sessionService.getSessionList().subscribe({
      next: (res) => {
        if (res.success) {
          this.sessions = Array.isArray(res.data) ? res.data : [res.data];  // Ensure data is always an array
        }
      },
      error: (err) => {
        console.log('Error fetching sections:', err);
      }
    })
  };

  loadSchool() {
    this.collegeService.getCollegeList().subscribe({
      next: (res) => {
        if (res.success) {
          this.colleges = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: (err) => {
        console.log('Error fetching sections:', err);
      }
    })
  }

  addClass() {
    if (this.classForm.valid) {
      this.collegeService.addClass(this.classForm.value).subscribe({
        next: (res) => {
          if (res.success) {
            this.toast.success(res.message || 'Class added successfully');
            this.getSchoolListById();
            this.classForm.reset();
          } else {
            this.toast.error(res.message || 'Failed to add class');
          }
        },
        error: (err) => {
          console.log('Error adding class:', err);
          this.toast.error('An error occurred while adding the class');
        }
      });
    }
    else {
      this.classForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.classForm.reset();
    this.dataSource.data = [];
  }

  getSchoolListById() {
    debugger;
    const sessionId = this.classForm.get('sessionId')?.value;
    const colleidId = this.classForm.get('collegeId')?.value;
    if (!sessionId || !colleidId) {
      this.dataSource.data = [];
      return;
    }

    this.isLoading = true;
    this.collegeService.getClassListBySessionAndCollege(sessionId, colleidId).subscribe({
      next: (res) => {
        this.isLoading = false;
        debugger;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        else {
          debugger;
          this.dataSource.data = [];
          this.toast.warning(res.message || 'No data returned.');
        }

      }, error: (err) => {
        this.isLoading = false;
        debugger;
        console.log("error");
        this.toast.error('Failed to load classes.');
      }
    });
  }

  openEditDialog(classmaster: IClass) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...classmaster }
    });
    debugger;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        console.log('Dialog result:', result);
        this.collegeService.updateClass(result).subscribe({
          next: (res) => {
            if (res.success) {
              this.toast.success(res.message || 'Class updated successfully');
              this.getSchoolListById();
            } else {
              this.toast.error(res.message || 'Failed to update class');
            }
          },
          error: (err) => {
            console.error('Error updating session:', err);
            this.toast.error('Failed to update class');
          }
        })
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  rowIndex(index: number): number {
    const paginator = this.dataSource.paginator;
    return paginator ? paginator.pageIndex * paginator.pageSize + index + 1 : index + 1;
  }

  classDelete(session: IClass) {
    debugger;
    this.toast.info('Delete not implemented yet.');
  }
}

