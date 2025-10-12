import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ICollege } from '../interfaces/ICollege';
import { CollegeService } from '../services/college.service';

@Component({
  selector: 'app-college',
  imports: [
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckbox,
    MatIcon,
    MatDialogModule
  ],
  templateUrl: './college.component.html',
  styleUrl: './college.component.scss'
})
export class CollegeComponent implements OnInit {
  private collegeService = inject(CollegeService);
  displayedColumns: string[] = ['select', 'collegeAbreviation', 'collegeName','collegeAddress','email','phone','webSite','affilicationNo','board','actions'];
  dataSource = new MatTableDataSource<ICollege>([])
  selection: ICollege[] = [];
  constructor(private dialog: MatDialog) { }
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;

 ngOnInit(): void {
    this.getCollegeList();
  }

  // for common table code 
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
 
   /** Checkbox Selection Logic */
   toggleSelection(row: ICollege) {
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
   // end here
   openEditDialog(college: ICollege) {
     const dialogRef = this.dialog.open(this.editDialog, {
       width: '400px',
       data: { ...college } // Pass a copy of the section data
     });
     dialogRef.afterClosed().subscribe(result => {
       if (result) {
         debugger;
         
        /*  this.sectionService.updateSection(result).subscribe({
           next: (res) => {
             alert('Section updated successfully');
             this.getSectionList();
           }
         }) */
       }
     });
   }

  getCollegeList() {
    debugger;
    this.collegeService.getCollegeList().subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          debugger;
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];  // Ensure data is always an array
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        debugger;
        console.log('Error fetching sections:', err);
      }
    });
  }




}
