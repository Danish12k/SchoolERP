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
import { IFeeGroup, IFeeHead } from '../interfaces/IFeeMaster';
import { MatTableDataSource } from '@angular/material/table';
import { FeeMasterService } from '../services/fee-master.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fee-group',
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
  templateUrl: './fee-group.component.html',
  styleUrl: './fee-group.component.scss'
})
export class FeeGroupComponent implements OnInit {

  dataSource = new MatTableDataSource<IFeeGroup>([]);
  displayedColumns: string[] = ['feeGroup', 'status', 'actions'];

  private _feeGroupService = inject(FeeMasterService);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  feeGroupForm!: FormGroup;
  feeGroupList: IFeeGroup[] = [];
  // expenseName: string = '';
  ngOnInit(): void {
    this.feeGroupForm = this.fb.group({
      streamId: [0],
      streamName: [null, [Validators.required, Validators.minLength(2)]],
      activeStatus: [false]
    })

    this.GetFeeGroupList();
  }

  GetFeeGroupList() {
    this._feeGroupService.listFeeGroup().subscribe({
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
  };

  addFeeGroup() {
    debugger;
    if (this.feeGroupForm.valid) {
      const formValue = this.feeGroupForm.value;
      formValue.activeStatus = formValue.activeStatus ? 1 : 0;
      this._feeGroupService.addFeeGroup(formValue).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.GetFeeGroupList();
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
  openEditDialog(feeGroup: IFeeGroup) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...feeGroup }
    });
    debugger;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        // Handle the result from the dialog (e.g., save changes)
        console.log('Dialog result:', result);
        result.activeStatus = result.activeStatus ? 1 : 0;
        this._feeGroupService.updateFeeGroup(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert(res.message);
              this.GetFeeGroupList(); // Refresh the list
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
  toggleSelection(row: IFeeGroup) {
    if (this.feeGroupList.includes(row)) {
      this.feeGroupList = this.feeGroupList.filter(r => r !== row);
    } else {
      this.feeGroupList.push(row);
    }
  }

  isAllSelected() {
    return this.feeGroupList.length === this.dataSource.data.length;
  }

  isPartialSelected() {
    return this.feeGroupList.length > 0 && !this.isAllSelected();
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.feeGroupList = [];
    } else {
      this.feeGroupList = [...this.dataSource.data];
    }
  }

  DeleteExpense(feeGroup: IFeeGroup) {
    debugger;
    const id = feeGroup.streamId;
    if (id > 0) {
      this._feeGroupService.deleteFeeGroup(id).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);

            this.GetFeeGroupList();
          }
        },
        error: (err) => {
          console.log("error,", err);
          alert("something went wrong");
        }
      });
    }

  }

}
