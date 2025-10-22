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
import { IFeeInstallment } from '../interfaces/IFeeMaster';
import { MatTableDataSource } from '@angular/material/table';
import { FeeMasterService } from '../services/fee-master.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ISession } from '../interfaces/isession';
import { ICollege } from '../interfaces/ICollege';
import { SessionService } from '../services/session.service';
import { CollegeService } from '../services/college.service';

@Component({
  selector: 'app-fee-installment',
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
    ReactiveFormsModule,
  ],
  templateUrl: './fee-installment.component.html',
  styleUrl: './fee-installment.component.scss'
})
export class FeeInstallmentComponent implements OnInit {

  dataSource = new MatTableDataSource<IFeeInstallment>([]);
  displayedColumns: string[] = ['headName', 'feeFor', 'actions'];

  private _feeMstService = inject(FeeMasterService);
  private sessionService = inject(SessionService);
  private collegeService = inject(CollegeService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  feeInstallmentForm!: FormGroup;
  feeHeadList: IFeeInstallment[] = [];
  sessions!: ISession[];
  schools!: ICollege[];
  ngOnInit(): void {
    this.feeInstallmentForm = this.fb.group({
      installmentId: [0],
      sessionId: [0],
      collegeId: [0],
      installmentName: [null],
      installMentDate: [null],

    })

    this.loadSession();
    this.loadCollege();
  }

  loadSession() {
    this.sessionService.getSessionList().subscribe(res => {
      this.sessions = Array.isArray(res.data) ? res.data : [res.data];
    })
  }
  loadCollege() {
    this.collegeService.getCollegeList().subscribe(res => {
      this.schools = Array.isArray(res.data) ? res.data : [res.data];
    })
  };


  GetFeeInsallmentList() {
    const CollegeId = this.feeInstallmentForm.get('collegeId')?.value;
    const sessionId = this.feeInstallmentForm.get('sessionId')?.value;
    if (CollegeId > 0 && sessionId > 0) {
      this._feeMstService.listFeeInstallment(CollegeId, sessionId).subscribe({
        next: (res) => {
          if (res.success) {
            this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        },
        error: (err) => {
          console.log("error to fetch expense list", err);
        }

      });
    }
  };

  addFeeInstallment() {
    debugger;
    if (this.feeInstallmentForm.valid) {
      const formValue = this.feeInstallmentForm.value;
      this._feeMstService.addFeeInstallment(formValue).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.GetFeeInsallmentList();
          }
          else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.log("add expense error", err);
          alert("Something went wrong.");
        }
      });
    }
  }


  // listing
  openEditDialog(feeInstallment: IFeeInstallment) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...feeInstallment }
    });
    debugger;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        // Handle the result from the dialog (e.g., save changes)
        console.log('Dialog result:', result);

        this._feeMstService.updateFeeInstallment(result).subscribe({
          next: (res) => {
            if (res.success) {
              this.GetFeeInsallmentList();
              alert(res.message);
              // Refresh the list
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
  toggleSelection(row: IFeeInstallment) {
    if (this.feeHeadList.includes(row)) {
      this.feeHeadList = this.feeHeadList.filter(r => r !== row);
    } else {
      this.feeHeadList.push(row);
    }
  }

  isAllSelected() {
    return this.feeHeadList.length === this.dataSource.data.length;
  }

  isPartialSelected() {
    return this.feeHeadList.length > 0 && !this.isAllSelected();
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.feeHeadList = [];
    } else {
      this.feeHeadList = [...this.dataSource.data];
    }
  }



}
