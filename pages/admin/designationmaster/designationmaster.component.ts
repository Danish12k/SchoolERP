import { AfterViewInit, Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DesignationService } from '../../../services/designation.service';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { IApiResponse, IDesignation } from '../../../interfaces/IDesignation';
import { PageHeaderComponent } from '@shared';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-designationmaster',
  imports: [
    FormsModule,
    MatCardModule,
    MaterialModule,
    PageHeaderComponent,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckbox,
    MatIcon,
    MatDialogModule,
  ],
  templateUrl: './designationmaster.component.html',
  styleUrl: './designationmaster.component.scss',
})
export class DesignationmasterComponent implements OnInit, AfterViewInit {
  private designationService = inject(DesignationService);

  dataSource = new MatTableDataSource<IDesignation>([]);
  displayedColumns: string[] = ['select', 'designation', 'actions'];
  selection: IDesignation[] = [];

  constructor(private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog!: TemplateRef<{ id: number; designation: string }>;

  designationName = '';

  ngOnInit(): void {
    this.getDesignationList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  clearForm(): void {
    this.designationName = '';
  }

  addDesignation(): void {
    const name = this.designationName.trim();
    if (!name) {
      alert('Please enter a designation name.');
      return;
    }

    this.designationService.addDesignation(name).subscribe({
      next: (res: IApiResponse<IDesignation>) => {
        if (res.success) {
          alert(res.message);
          this.getDesignationList();
          this.designationName = '';
        }
      },
      error: (err: Error) => {
        alert(err?.message ?? 'Something went wrong.');
        console.error('Error adding designation', err);
      },
    });
  }

  getDesignationList(): void {
    this.designationService.getDesignationList().subscribe({
      next: (res) => {
        if (res.success && res.data != null) {
          const rows = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        console.error('Error fetching designations:', err);
      },
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleSelection(row: IDesignation): void {
    if (this.selection.includes(row)) {
      this.selection = this.selection.filter((r) => r !== row);
    } else {
      this.selection.push(row);
    }
  }

  isAllSelected(): boolean {
    return this.selection.length > 0 && this.selection.length === this.dataSource.data.length;
  }

  isPartialSelected(): boolean {
    return this.selection.length > 0 && !this.isAllSelected();
  }

  masterToggle(): void {
    if (this.isAllSelected()) {
      this.selection = [];
    } else {
      this.selection = [...this.dataSource.data];
    }
  }

  openEditDialog(row: IDesignation): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(480px, 92vw)',
      maxWidth: '95vw',
      data: { ...row },
    });

    dialogRef.afterClosed().subscribe((result: IDesignation | undefined) => {
      if (result?.designation?.trim()) {
        this.designationService.updateDesignation(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert(res.message ?? 'Designation updated successfully');
              this.getDesignationList();
            }
          },
          error: (err) => {
            console.error('Error updating designation:', err);
            alert('Failed to update designation');
          },
        });
      }
    });
  }
}
