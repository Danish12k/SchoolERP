import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { IHouse } from '../interfaces/IAdmintMst';
import { MatTableDataSource } from '@angular/material/table';
import { HouseService } from '../services/house.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IApiResponse } from '../interfaces/ICommon';

@Component({
  selector: 'app-house',
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
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss'
})
export class HouseComponent implements OnInit{
 private _houseService = inject(HouseService);

 dataSource = new MatTableDataSource<IHouse>([]);
   selection: IHouse[] = [];
  displayedColumns: string[] = ['select', 'houseName', 'actions'];
  houseName: string = '';
  
    constructor(private dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;
  ngOnInit(): void {
     this.getHouseList();
  }

addHouse() {
    const name = this.houseName.trim();
    if (!name) {
      alert("Please enter house name.")
      return;
    }
 const newHouse: IHouse = {
  houseId: 0,
  houseName: this.houseName
};

    debugger;
    this._houseService.add(newHouse).subscribe({
      next: (res: IApiResponse<IHouse>) => {
        debugger;
        if (res.success) {
          alert(res.message);
          this.getHouseList(); // trigger table update
          this.houseName = '';
        }
      }
    })
  }

  getHouseList() {
    debugger;
    this._houseService.list().subscribe({
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
  toggleSelection(row: IHouse) {
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

  openEditDialog(house: IHouse) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...house } // Pass a copy of the section data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        this._houseService.update(result).subscribe({
          next: (res) => {
            alert(res.message);
           this.getHouseList();
          }
        })
      }
    });


  }

}
