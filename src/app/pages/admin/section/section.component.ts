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
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { ISection } from '../interfaces/IClassAndSection';
import { SectionService } from '../services/section.service';
import { BreadcrumbComponent } from "@shared";
import { debug } from 'console';
import { IApiResponse } from '../interfaces/IDesignation';

@Component({
  selector: 'app-section',
  imports: [FormsModule,
    MatCardModule,
    MatInputModule,
    PageHeaderComponent,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckbox,
    MatIcon,
    MatDialogModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent implements OnInit {
  private sectionService = inject(SectionService);
  displayedColumns: string[] = ['select', 'sectionName', 'actions'];
  dataSource = new MatTableDataSource<ISection>([])
  selection: ISection[] = [];
  constructor(private dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;

  sectionName: string = '';

  ngOnInit(): void {
    this.getSectionList();
  }


  // for common table code 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Checkbox Selection Logic */
  toggleSelection(row: ISection) {
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

  openEditDialog(section: ISection) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...section } // Pass a copy of the section data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        this.sectionService.updateSection(result).subscribe({
          next: (res) => {
            alert('Section updated successfully');
            this.getSectionList();
          }
        })
      }
    });


  }

  addSection() {
    const name = this.sectionName.trim();
    if (!name) {
      alert("Please enter section name.")
      return;
    }
    debugger;
    this.sectionService.addSection(name).subscribe({
      next: (res: IApiResponse<ISection>) => {
        debugger;
        if (res.success) {
          alert(res.message);
          this.getSectionList(); // trigger table update
          this.sectionName = '';
        }
      }
    })
  }

  getSectionList() {
    debugger;
    this.sectionService.getSectionList().subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];  // Ensure data is always an array
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        debugger;
        console.error('Error fetching sections:', err);
      }
    });
  }



}
