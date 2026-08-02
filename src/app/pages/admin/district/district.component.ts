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
import {
  ICountry,
  IDistrict,
  IState,
  normalizeCountry,
  normalizeDistrict,
  normalizeList,
  normalizeState,
} from '../../../interfaces/ILocation';
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
import { MatSelectModule } from '@angular/material/select';
import { PageHeaderComponent } from '@shared';
import { IApiResponse } from '../../../interfaces/ICommon';
import { ToastrService } from 'ngx-toastr';

interface IDistrictEdit extends IDistrict {
  editCountryId: number;
}

interface IDistrictAdd {
  countryId: number | null;
  stateId: number | null;
  cityName: string;
}

@Component({
  selector: 'app-district',
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
    MatSelectModule,
  ],
  templateUrl: './district.component.html',
  styleUrl: './district.component.scss',
})
export class DistrictComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private locationService = inject(LocationService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<IDistrict>([]);
  displayedColumns: string[] = ['index', 'stateName', 'cityName', 'actions'];
  countries: ICountry[] = [];
  allStates: IState[] = [];
  statesForAdd: IState[] = [];
  listFilterStateId?: number;
  newDistrict: IDistrictAdd = { countryId: null, stateId: null, cityName: '' };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<IDistrictEdit>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) => {
      const hay = `${this.stateLabel(row.stateId)} ${row.cityName}`.toLowerCase();
      return hay.includes(filter);
    };
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'stateName':
          return this.stateLabel(item.stateId);
        case 'cityName':
          return item.cityName;
        default:
          return '';
      }
    };
    this.loadCountries();
    this.loadAllStatesForLabels();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  stateLabel(stateId: number): string {
    return this.allStates.find(s => s.id === stateId)?.stateName ?? '';
  }

  statesForCountry(countryId: number): IState[] {
    return this.allStates.filter(s => s.countryId === countryId);
  }

  countryIdForState(stateId: number): number {
    return this.allStates.find(s => s.id === stateId)?.countryId ?? 0;
  }

  loadCountries(): void {
    this.locationService.listCountry().subscribe({
      next: res => {
        if (res.success) {
          this.countries = normalizeList(res.data, normalizeCountry);
        }
      },
      error: () => this.toast.error('Failed to load countries'),
    });
  }

  loadAllStatesForLabels(): void {
    this.locationService.listState().subscribe({
      next: res => {
        if (res.success) {
          this.allStates = normalizeList(res.data, normalizeState);
        }
      },
      error: () => this.toast.error('Failed to load states'),
    });
  }

  onAddCountryChange(countryId: number | null): void {
    this.newDistrict.stateId = null;
    this.statesForAdd = [];
    if (countryId == null || countryId <= 0) {
      return;
    }
    this.locationService.listState(countryId).subscribe({
      next: res => {
        if (res.success) {
          this.statesForAdd = normalizeList(res.data, normalizeState);
        }
      },
      error: () => this.toast.error('Failed to load states'),
    });
  }

  onFilterStateChange(stateId: number | null): void {
    if (stateId == null || stateId <= 0) {
      this.listFilterStateId = undefined;
      this.dataSource.data = [];
      return;
    }
    this.listFilterStateId = stateId;
    this.loadDistrictList(stateId);
  }

  loadDistrictList(stateId: number): void {
    this.isLoading = true;
    this.locationService.listDistrict(stateId).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          this.dataSource.data = normalizeList(res.data, normalizeDistrict);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load cities');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load cities');
      },
    });
  }

  openAddDialog(): void {
    this.newDistrict = { countryId: null, stateId: null, cityName: '' };
    this.statesForAdd = [];
    this.dialog.open(this.addDialog, { width: 'min(480px, 92vw)', maxWidth: '95vw' });
  }

  addDistrict(): void {
    const stateId = Number(this.newDistrict.stateId);
    const cityName = this.newDistrict.cityName?.trim() ?? '';
    if (!stateId || !cityName) {
      this.toast.warning('Please select state and enter city name.');
      return;
    }
    this.isSaving = true;
    this.locationService.addDistrict({ stateId, cityName }).subscribe({
      next: (res: IApiResponse<IDistrict>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'City added successfully');
          this.dialog.closeAll();
          if (this.listFilterStateId === stateId) {
            this.loadDistrictList(stateId);
          }
        } else {
          this.toast.error(res.message || 'Failed to add city');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add city');
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

  openEditDialog(row: IDistrict): void {
    const data: IDistrictEdit = {
      ...row,
      editCountryId: this.countryIdForState(row.stateId),
    };
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(480px, 92vw)',
      maxWidth: '95vw',
      data,
    });
    dialogRef.afterClosed().subscribe((result: IDistrictEdit | undefined) => {
      const cityName = result?.cityName?.trim();
      if (!cityName || !result?.id || !result.stateId) {
        return;
      }
      this.locationService
        .updateDistrict({ cityId: result.id, cityName, stateId: result.stateId })
        .subscribe({
          next: res => {
            if (res.success) {
              this.toast.success(res.message || 'City updated successfully');
              if (this.listFilterStateId) {
                this.loadDistrictList(this.listFilterStateId);
              }
            } else {
              this.toast.error(res.message || 'Failed to update city');
            }
          },
          error: () => this.toast.error('Failed to update city'),
        });
    });
  }

  deleteDistrict(row: IDistrict): void {
    if (row.id <= 0) {
      return;
    }
    if (!confirm('Delete this city?')) {
      return;
    }
    this.locationService.deleteDistrict(row.id).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(res.message || 'City deleted successfully');
          if (this.listFilterStateId) {
            this.loadDistrictList(this.listFilterStateId);
          }
        } else {
          this.toast.error(res.message || 'Failed to delete city');
        }
      },
      error: () => this.toast.error('Failed to delete city'),
    });
  }
}
