import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../interfaces/IAdmintMst';
import { CategoryService } from '../services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IApiResponse } from '../interfaces/ICommon';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-category',
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
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  private _categoryService = inject(CategoryService);

  dataSource = new MatTableDataSource<ICategory>([]);
  selection: ICategory[] = [];
  displayedColumns: string[] = ['select', 'categoryName', 'actions'];
  CategoryName: string = '';

  constructor(private dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;
  ngOnInit(): void {
    this.getCategoryList();
  }

  addCategory() {
    const name = this.CategoryName.trim();
    if (!name) {
      alert("Please enter category name.")
      return;
    }
    const newSalutution: ICategory = {
      categoryId: 0,
      categoryName: this.CategoryName
    };

    debugger;
    this._categoryService.add(newSalutution).subscribe({
      next: (res: IApiResponse<ICategory>) => {
        debugger;
        if (res.success) {
          alert(res.message);
          this.getCategoryList(); // trigger table update
          this.CategoryName = '';
        }
      }
    })
  }

  getCategoryList() {
    debugger;
    this._categoryService.list().subscribe({
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

  // for common table code 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Checkbox Selection Logic */
  toggleSelection(row: ICategory) {
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

  openEditDialog(category: ICategory) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...category } // Pass a copy of the section data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        this._categoryService.update(result).subscribe({
          next: (res) => {
            alert(res.message);
            this.getCategoryList();
          }
        })
      }
    });
  }
}

