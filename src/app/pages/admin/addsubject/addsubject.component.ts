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
import { ISubject, ISubjectType } from '../interfaces/ISubjectMst';
import { MatDialog } from '@angular/material/dialog';
import { SubjectmasterService } from '../services/subjectmaster.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-addsubject',
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
  templateUrl: './addsubject.component.html',
  styleUrl: './addsubject.component.scss'
})
export class AddsubjectComponent implements OnInit {
  subjectForm!: FormGroup;

  subjectTypeList!: ISubjectType[];

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  _subjectService = inject(SubjectmasterService);

  dataSource = new MatTableDataSource<ISubject>([]);
  displayedColumns: string[] = ['subjectCode', 'subjectName', 'subjectType', 'subjectSeq', 'actions'] ;
   subjectList!: ISubject[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;


  ngOnInit(): void {
    debugger;
    this.subjectForm = this.fb.group({
      subjectId: [0],
      subjectName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      subjectCode: [null, Validators.required],
      subjectType: [0, [Validators.required]],
      subjectSeq: [null, Validators.required]
    });

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


  addSubject() {
    if (this.subjectForm.valid) {
      this._subjectService.addSubject(this.subjectForm.value).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.subjectForm.reset();
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
      this.subjectForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.subjectForm.reset();
  }


  getSubjectList() {
    debugger;
    const subjectType = this.subjectForm.get('subjectType')?.value;
    if (!subjectType ) {
      return;
    }

    this._subjectService.listSubject(subjectType).subscribe({
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
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Checkbox Selection Logic */
  toggleSelection(row: ISubject) {
    if (this.subjectList.includes(row)) {
      this.subjectList = this.subjectList.filter(r => r !== row);
    } else {
      this.subjectList.push(row);
    }
  }

  isAllSelected() {
    return this.subjectList.length === this.dataSource.data.length;
  }

  isPartialSelected() {
    return this.subjectList.length > 0 && !this.isAllSelected();
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.subjectList = [];
    } else {
      this.subjectList = [...this.dataSource.data];
    }
  }

}
