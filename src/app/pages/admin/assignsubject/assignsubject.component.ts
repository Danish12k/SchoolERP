import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { ISession } from '../interfaces/isession';
import { ICollege } from '../interfaces/ICollege';
import { SessionService } from '../services/session.service';
import { CollegeService } from '../services/college.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IAssignSubject, IAssignSubjectList, ISubject, ISubjectType } from '../interfaces/ISubjectMst';
import { MatPaginator } from '@angular/material/paginator';
import { IClass } from '../interfaces/IClassmaster';
import { ISection } from '../interfaces/IClassAndSection';
import { SectionService } from '../services/section.service';
import { SubjectmasterService } from '../services/subjectmaster.service';

@Component({
  selector: 'app-assignsubject',
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
  templateUrl: './assignsubject.component.html',
  styleUrl: './assignsubject.component.scss'
})
export class AssignsubjectComponent implements OnInit {
  assignSubjectForm!: FormGroup;
  sessions!: ISession[];
  colleges!: ICollege[];
  classList: IClass[] = [];
  sectionList: ISection[] = [];
  subjectList!: ISubject[]; subjectTypeList!: ISubjectType[];

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  sessionService = inject(SessionService);
  collegeService = inject(CollegeService);
  sectionService = inject(SectionService);
  _subjectService = inject(SubjectmasterService);

  dataSource = new MatTableDataSource<IAssignSubjectList>([]);
  displayedColumns: string[] = ['subjectCode', 'subjectName', 'subjectType', 'actions'];
  assignSubjectList: IAssignSubjectList[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;

  ngOnInit(): void {

    this.assignSubjectForm = this.fb.group({
      sessionId: [null, Validators.required ],
      collegeId: [null, Validators.required],
      courseId: [null, Validators.required],
      classSectionId: [null, Validators.required],
      subjectId: [[], Validators.required],
      subjectType: [null, Validators.required]

    })


    this.loadSchool();
    this.loadSessions();
    this.loadSectionList();
    this.loadSubjectTypeList();
  }
  loadSubjectTypeList() {
    this._subjectService.subjectTypeList().subscribe({
      next: (res) => {
        this.subjectTypeList = Array.isArray(res.data) ? res.data : [res.data];
      },
      error: (err) => {
        alert("something went wrong");
        console.log("subject type list error", err);
      }
    })
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

  loadClassList() {
    debugger;
    const sessionId = this.assignSubjectForm.get('sessionId')?.value;
    const colleidId = this.assignSubjectForm.get('collegeId')?.value;
    if (!sessionId || !colleidId) {
      return;
    }

    this.collegeService.getClassListBySessionAndCollege(sessionId, colleidId).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.classList = Array.isArray(res.data) ? res.data : [res.data];
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

  loadSectionList() {
    debugger;
    this.sectionService.getSectionList().subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          this.sectionList = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: (err) => {
        debugger;
        console.error('Error fetching sections:', err);
      }
    });
  }


  getSubjectList() {
    debugger;
    const subjectType = this.assignSubjectForm.get('subjectType')?.value;
    if (!subjectType) {
      return;
    }

    this._subjectService.listSubject(subjectType).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.subjectList = Array.isArray(res.data) ? res.data : [res.data];
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
  addSubject() {
    debugger;
    if (!this.assignSubjectForm.valid) {
      return;
    }

    const assignSubject: IAssignSubject = {
      classSectionId: this.assignSubjectForm.get('classSectionId')?.value,
      subjectId: this.assignSubjectForm.get('subjectId')?.value
    }

    this._subjectService.assignSubject(assignSubject).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.assignSubjectForm.reset();
        }
        else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.log("assign subject error", err);
      }

    })
  };

  getAssignSubjectList() {
    debugger;
    const sectionId = this.assignSubjectForm.get('classSectionId')?.value;
    if (!sectionId) {
      return;
    }

    this._subjectService.listAssignSubject(sectionId).subscribe({
      next: (res) => {
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Checkbox Selection Logic */
  toggleSelection(row: IAssignSubjectList) {
    if (this.subjectList.includes(row)) {
      this.subjectList = this.subjectList.filter(r => r !== row);
    } else {
      this.subjectList.push(row);
    }
  }

  isAllSelected() {
    return this.assignSubjectList.length === this.dataSource.data.length;
  }

  isPartialSelected() {
    return this.assignSubjectList.length > 0 && !this.isAllSelected();
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.assignSubjectList = [];
    } else {
      this.assignSubjectList = [...this.dataSource.data];
    }
  }


  deleteAssignSub(body: IAssignSubjectList) {
    debugger;
    const classSectionSubjectId = body.classSectionSubjectId;
    if (!classSectionSubjectId) {
      return;
    }

    this._subjectService.deleteAssignSubject(classSectionSubjectId).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.getAssignSubjectList();
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.log("delete error ", err);
      }
    })

  }

   onCancel() {
    this.assignSubjectForm.reset();
  }

}
