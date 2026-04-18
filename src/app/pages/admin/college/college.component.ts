import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ICollege } from '../../../interfaces/ICollege';
import { CollegeService } from '../../../services/college.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-college',
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIcon,
    MatDialogModule
  ],
  templateUrl: './college.component.html',
  styleUrl: './college.component.scss'
})
export class CollegeComponent implements OnInit {
  private collegeService = inject(CollegeService);
  private toast = inject(ToastrService);
  displayedColumns: string[] = [
    'collegeAbreviation',
    'collegeName',
    'collegeAddress',
    'actions',
  ];
  dataSource = new MatTableDataSource<ICollege>([])
  constructor(private dialog: MatDialog) { }
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog!: TemplateRef<ICollege>;
  @ViewChild('addDialog') addDialog!: TemplateRef<ICollege>;
  @ViewChild('detailsDialog') detailsDialog!: TemplateRef<ICollege>;

  newSchool: Partial<ICollege> = {};

 ngOnInit(): void {
    this.getCollegeList();
  }

  // for common table code 
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
 
  openAddDialog() {
    this.newSchool = {
      collegeId: 0,
      collegeAbreviation: '',
      collegeName: '',
      collegeAddress: '',
      email: '',
      phone: '',
      fax: '',
      webSite: '',
      affilicationNo: '',
      board: '',
      collegeLogo: '',
      schoolCode: '',
      dioceseCode: '',
      portalURL: null,
    };

    this.dialog.open(this.addDialog, {
      width: 'min(900px, 96vw)',
      maxWidth: '96vw',
    });
  }

  addSchool(): void {
    const body = this.newSchool as ICollege;
    if (!body.collegeName?.trim() || !body.collegeAbreviation?.trim()) {
      this.toast.warning('Please enter at least College Name and College Abbreviation.');
      return;
    }

    // NOTE: backend endpoint is named "addSchool" in apiendpoint.ts but CollegeService currently exposes addClass().
    this.collegeService.addClass(body).subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success(res.message || 'School added successfully');
          this.getCollegeList();
          this.dialog.closeAll();
        } else {
          this.toast.error(res.message || 'Failed to add school');
        }
      },
      error: (err) => {
        console.error('Error adding school', err);
        this.toast.error('Failed to add school');
      },
    });
  }

  openDetails(college: ICollege): void {
    this.dialog.open(this.detailsDialog, {
      width: 'min(900px, 96vw)',
      maxWidth: '96vw',
      data: { ...college },
    });
  }

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
