import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { DesignationService } from '../services/designation.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { IApiResponse, IDesignation, IDesignationResponse } from '../interfaces/IDesignation';
import { BreadcrumbComponent, PageHeaderComponent } from '@shared';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { debug } from 'console';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCheckbox } from "@angular/material/checkbox";
import { MatIcon } from "@angular/material/icon";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-designationmaster',
  imports: [FormsModule, MatCardModule, MatInputModule, PageHeaderComponent, MatTableModule,
    MatSortModule,
    MatPaginatorModule, MatCheckbox, MatIcon, MatDialogModule
  ],
  templateUrl: './designationmaster.component.html',
  styleUrl: './designationmaster.component.scss'
})
export class DesignationmasterComponent implements AfterViewInit, OnInit {
  private designationService = inject(DesignationService);
  dataSource = new MatTableDataSource<IDesignation>([]);
  //displayedColumns: string[] = ['id', 'designation'];
  displayedColumns: string[] = ['select', 'designation', 'actions'];
  selection: IDesignation[] = [];
 constructor(private dialog: MatDialog) {} 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   @ViewChild('editDialog') editDialog: any;

  designationName: string = '';

  ngOnInit() {
    this.getDesignationList();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 /*  addDesignation() {
    debugger;
    this.desingnationService.addDesignation(this.designationName).subscribe(response => {
      console.log('Designation added successfully:', response);
      if (response.success){
        alert('Designation added successfully');
        this.getDesignationList();
      }
      // Optionally, clear the input field after successful addition
      this.designationName = '';
    }, error => {
      console.error('Error adding designation:', error);
    });
  } */
   addDesignation() {
    const name = this.designationName.trim();
    if (!name) return alert('Please enter designation');

    this.designationService.addDesignation(name).subscribe({
      next: (res: IApiResponse<IDesignation>) => {
        if (res.success) {
          alert(res.message);
          this.getDesignationList(); // trigger table update
          this.designationName = '';
        }
      },
      error: (err) => {
        alert(err.message);
        console.error('Error adding designation', err);
      }
    });
  }

  getDesignationList() {
    debugger;
    this.designationService.getDesignationList().subscribe({
      next: (res) => {
        if (res.success) {
          this.dataSource.data = res.data;  // ✅ use res.data
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        console.error('Error fetching designations:', err);
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Checkbox Selection Logic */
  toggleSelection(row: IDesignation) {
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

  /** Actions */
  onDelete(row: IDesignation) {
    console.log('Delete clicked:', row);
    if (confirm(`Are you sure you want to delete designation: ${row.designation}?`)) {
      this.designationService.deleteDesignation(row.id).subscribe({
        next: (res) => {
          alert('Designation deleted successfully');
          this.getDesignationList();
        },
        error: (err) => {
          console.error('Error deleting designation:', err);
          alert('Failed to delete designation');
        }
      });
    }
  }

   // 🔹 OPEN EDIT POPUP
  openEditDialog(row: IDesignation) {
    debugger;
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...row } // clone row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        console.log('Updated designation:', result);
        // yaha API call karke update karo
        this.designationService.updateDesignation(result).subscribe({
          next:(res)=>{
            alert('Designation updated successfully');
            this.getDesignationList();
          }
        })
      }
    });
  }
}
