import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { SmsapiService } from '../services/smsapi.service';
import { CollegeService } from '../services/college.service';
import { ICollege } from '../interfaces/ICollege';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ISMSApi } from '../interfaces/Ismsapi';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { error } from 'console';

@Component({
  selector: 'app-smsapi',
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
  templateUrl: './smsapi.component.html',
  styleUrl: './smsapi.component.scss'
})
export class SmsapiComponent implements OnInit {
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  private _smsAPIService = inject(SmsapiService);
  _colloegeService = inject(CollegeService);

  dataSource = new MatTableDataSource<ISMSApi>([]);
  displayedColumns: string[] = ['select', 'school','sender','usename','password', 'provider','status', 'actions'];
  smsapiList: ISMSApi[] = [];
  schoolList: ICollege[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;


  smsForm!: FormGroup;


  ngOnInit(): void {
    this.smsForm = this.fb.group({
      collegeId: [null, [Validators.required, Validators.min(1)]],
      apI_SenderId: [null, [Validators.required]],
      api_UserName: [null, [Validators.required, Validators.minLength(3)]],
      api_Password: [null, [Validators.required, Validators.minLength(6)]],
      apI_Status: [false],
      apI_Provider: [null, [Validators.required, Validators.minLength(1)]]
    });

    this.loadCollege();
  }


  loadCollege() {
    this._colloegeService.getCollegeList().subscribe(res => {
      this.schoolList = Array.isArray(res.data) ? res.data : [res.data];
    })
  };

  getSMSApiList() {
    const collegeId = this.smsForm.get("collegeId")?.value;
    if (!collegeId) {
      return;
    }

    this._smsAPIService.GetSmsListByCollegeId(collegeId).subscribe({
      next: (res) => {
        if (res.success) {
          //  this.smsapiList  =  Array.isArray(res.data)  ? res.data: [res.data];
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    })
  }

  addSMSAPI() {
    debugger;
    if (this.smsForm.valid) {
          const formValue = { ...this.smsForm.value };
         formValue.apI_Status = formValue.apI_Status ? 1 : 0;
      this._smsAPIService.addSMSAPI(formValue).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.getSMSApiList();
          }
          else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.log("error", err);
          alert('An error occurred while adding the class');
        }
      });
    }
    else {
  console.log('Form is invalid:', this.smsForm);
  this.smsForm.markAllAsTouched(); // shows errors in UI
}
  }

    // listing

      openEditDialog(smsapi: ISMSApi) {
        const dialogRef = this.dialog.open(this.editDialog, {
          width: '400px',
          data: { ...smsapi }
        });
        debugger;
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            debugger;
            // Handle the result from the dialog (e.g., save changes)
            console.log('Dialog result:', result);
            result.apI_Status = result.apI_Status ?1:0;
            this._smsAPIService.updateSMSAPI(result).subscribe({
              next: (res) => {
                if (res.success) {
                  alert(res.message);
                  this.getSMSApiList(); // Refresh the list
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
      toggleSelection(row: ISMSApi) {
        if (this.smsapiList.includes(row)) {
          this.smsapiList = this.smsapiList.filter(r => r !== row);
        } else {
          this.smsapiList.push(row);
        }
      }
    
      isAllSelected() {
        return this.smsapiList.length === this.dataSource.data.length;
      }
    
      isPartialSelected() {
        return this.smsapiList.length > 0 && !this.isAllSelected();
      }
    
      masterToggle() {
        if (this.isAllSelected()) {
          this.smsapiList = [];
        } else {
          this.smsapiList = [...this.dataSource.data];
        }
      }

    SMSAPIDelete(smsAPI : ISMSApi){
      debugger;
const id = smsAPI.id;
this._smsAPIService.deleteSMSAPI(id).subscribe({
  next:(res)=>{
    if(res.success){
      alert(res.message);
      this.getSMSApiList();
    }
    else{
      alert(res.message);
    }
  },
  error:(err)=>{
    console.log("error",err);
    alert("Something went wrong!");
  }

});

    }

/* onStatusToggle(event: any) {
  this.data.apI_Status = event.checked ? 1 : 0;
} */

}
