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
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FeeMasterService } from '../services/fee-master.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fee-head',
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
  templateUrl: './fee-head.component.html',
  styleUrl: './fee-head.component.scss'
})
export class FeeHeadComponent implements OnInit{

  dataSource = new MatTableDataSource<IFeeHead>([]);
  displayedColumns: string[] = ['headName', 'feeFor', 'actions'];

  private _feeHeadService = inject(FeeMasterService);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  feeHeadForm!: FormGroup;
  feeHeadList: IFeeHead[] = [];
  feeGroupList!: IFeeGroup[];
  ngOnInit(): void {
    this.feeHeadForm = this.fb.group({
      feeHeadId: [0],
      feeHeadName: [null, [Validators.required, Validators.minLength(2)]],
      stream: [0]
    })

    this.GetFeeGroupList();
   this.getFeeGroupLlist();
  }

  getFeeGroupLlist(){
    this._feeHeadService.listFeeGroup().subscribe({
      next:(res)=>{
        if(res.success){
          this.feeGroupList =Array.isArray(res.data)?  res.data : [res.data]; 
        }
      }
    });
  }


  GetFeeGroupList() {
    this._feeHeadService.listFeeHead().subscribe({
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

  addFeeHead() {
    debugger;
    if (this.feeHeadForm.valid) {
      const formValue = this.feeHeadForm.value;
      this._feeHeadService.addFeeHead(formValue).subscribe({
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
  openEditDialog(feeHead: IFeeHead) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...feeHead }
    });
    debugger;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        // Handle the result from the dialog (e.g., save changes)
        console.log('Dialog result:', result);
        this._feeHeadService.updateFeeHead(result).subscribe({
          next: (res) => {
            if (res.success) {
              this.GetFeeGroupList(); 
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
  toggleSelection(row: IFeeHead) {
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
