import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { ISession } from '../interfaces/isession';
import { ICollege } from '../interfaces/ICollege';
import { CollegeService } from '../services/college.service';
import { SessionService } from '../services/session.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IClass } from '../interfaces/IClassmaster';

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
    TranslateModule,
    ReactiveFormsModule
  ],
  templateUrl: './classmaster.component.html',
  styleUrl: './classmaster.component.scss'
})
export class ClassmasterComponent implements OnInit {
  classForm!: FormGroup;
  sessions!: ISession[];
  colleges!: ICollege[];

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  sessionService = inject(SessionService);
  collegeService = inject(CollegeService);


  dataSource = new MatTableDataSource<IClass>([]);
  displayedColumns: string[] = ['select', 'className', 'seqNumber', 'actions'];
  selection: IClass[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;


  ngOnInit(): void {
    debugger;
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
            alert(res.message);
            this.classForm.reset();
          } else {
            alert('Failed to add class');
          }
        },
        error: (err) => {
          console.log('Error adding class:', err);
          alert('An error occurred while adding the class');
        }
      });
    }
    else {
      this.classForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.classForm.reset();
  }


  getSchoolListById() {
    debugger;
    const sessionId = this.classForm.get('sessionId')?.value;
    const colleidId = this.classForm.get('collegeId')?.value;
    if (!sessionId || !colleidId) {
      return;
    }

    this.collegeService.getClassListBySessionAndCollege(sessionId, colleidId).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        else {
          debugger;
          alert(res.message);
        }

      }, error: (err) => {
        debugger;
        console.log("error");
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
        // Handle the result from the dialog (e.g., save changes)
        console.log('Dialog result:', result);
        this.collegeService.updateClass(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert(res.message);
              this.getSchoolListById(); // Refresh the list
            }
          },
          error: (err) => {
            console.error('Error updating session:', err);
            alert('Failed to update session');
          }
        })
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Checkbox Selection Logic */
  toggleSelection(row: IClass) {
    if (this.selection.includes(row)) {
      this.selection = this.selection.filter(r => r !== row);
    } else {
      this.selection.push(row);
    }
  }

  isAllSelected() {
    return this.selection.length === this.dataSource.data.length;
  }

  isPartialSelected() {
    return this.selection.length > 0 && !this.isAllSelected();
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection = [];
    } else {
      this.selection = [...this.dataSource.data];
    }
  }

  classDelete(session: IClass) {
    debugger;
    // Implement delete functionality here
    alert('Delete session:');
  }

}

