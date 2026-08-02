import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICountry, normalizeCountry, normalizeList } from '../../../interfaces/ILocation';
import { LocationService } from '../../../services/masterservice/location.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PageHeaderComponent } from '@shared';
import { IApiResponse } from '../../../interfaces/ICommon';
import { ToastrService } from 'ngx-toastr';

interface ICountryForm {
  countryId: number;
  countryName: string;
}

@Component({
  selector: 'app-country',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    PageHeaderComponent,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private locationService = inject(LocationService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<ICountry>([]);
  displayedColumns: string[] = ['index', 'countryName', 'actions'];
  newCountry: ICountryForm = { countryId: 0, countryName: '' };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<ICountryForm>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) =>
      row.countryName?.toLowerCase().includes(filter) ?? false;
    this.loadCountryList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddDialog(): void {
    this.newCountry = { countryId: 0, countryName: '' };
    this.dialog.open(this.addDialog, { width: 'min(440px, 92vw)', maxWidth: '95vw' });
  }

  addCountry(): void {
    const name = this.newCountry.countryName?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter country name.');
      return;
    }
    this.isSaving = true;
    this.locationService.addCountry({ countryName: name }).subscribe({
      next: (res: IApiResponse<ICountry>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Country added successfully');
          this.dialog.closeAll();
          this.loadCountryList();
        } else {
          this.toast.error(res.message || 'Failed to add country');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add country');
      },
    });
  }

  loadCountryList(): void {
    this.isLoading = true;
    this.locationService.listCountry().subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.success) {
          this.dataSource.data = normalizeList(res.data, normalizeCountry);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load countries');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load countries');
      },
    });
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    this.paginator?.firstPage();
  }

  rowIndex(i: number): number {
    return this.paginator ? this.paginator.pageIndex * this.paginator.pageSize + i + 1 : i + 1;
  }

  openEditDialog(row: ICountry): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      data: { countryId: row.id, countryName: row.countryName },
    });
    dialogRef.afterClosed().subscribe((result: ICountryForm | undefined) => {
      const name = result?.countryName?.trim();
      if (!name || !result?.countryId) {
        return;
      }
      this.locationService
        .updateCountry({ id: result.countryId, countryName: name })
        .subscribe({
          next: (res) => {
            if (res.success) {
              this.toast.success(res.message || 'Country updated successfully');
              this.loadCountryList();
            } else {
              this.toast.error(res.message || 'Failed to update country');
            }
          },
          error: () => this.toast.error('Failed to update country'),
        });
    });
  }

  deleteCountry(row: ICountry): void {
    if (row.id <= 0) {
      return;
    }
    if (!confirm('Delete this country?')) {
      return;
    }
    this.locationService.deleteCountry(row.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.toast.success(res.message || 'Country deleted successfully');
          this.loadCountryList();
        } else {
          this.toast.error(res.message || 'Failed to delete country');
        }
      },
      error: () => this.toast.error('Failed to delete country'),
    });
  }
}
