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
  IState,
  normalizeCountry,
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

@Component({
  selector: 'app-statemaster',
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
  templateUrl: './statemaster.component.html',
  styleUrl: './statemaster.component.scss',
})
export class StatemasterComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private locationService = inject(LocationService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<IState>([]);
  displayedColumns: string[] = ['index', 'countryName', 'stateName', 'actions'];
  countries: ICountry[] = [];
  newState: IState = { id: 0, stateName: '', countryId: 0 };
  listFilterCountryId?: number;
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<IState>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) => {
      const hay = `${this.countryLabel(row.countryId)} ${row.stateName}`.toLowerCase();
      return hay.includes(filter);
    };
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'countryName':
          return this.countryLabel(item.countryId);
        case 'stateName':
          return item.stateName;
        default:
          return '';
      }
    };
    this.loadCountries();
    this.loadStateList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  countryLabel(countryId: number): string {
    return this.countries.find(c => c.id === countryId)?.countryName ?? '';
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

  loadStateList(countryId?: number): void {
    this.isLoading = true;
    this.locationService.listState(countryId).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          this.dataSource.data = normalizeList(res.data, normalizeState);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load states');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load states');
      },
    });
  }

  onFilterCountryChange(countryId: number | null): void {
    this.listFilterCountryId = countryId ?? undefined;
    this.loadStateList(this.listFilterCountryId);
    this.paginator?.firstPage();
  }

  openAddDialog(): void {
    this.newState = { id: 0, stateName: '', countryId: 0 };
    this.dialog.open(this.addDialog, { width: 'min(440px, 92vw)', maxWidth: '95vw' });
  }

  addState(): void {
    const name = this.newState.stateName?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter state name.');
      return;
    }
    this.isSaving = true;
    this.locationService.addState({ stateName: name }).subscribe({
      next: (res: IApiResponse<IState>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'State added successfully');
          this.dialog.closeAll();
          this.loadStateList(this.listFilterCountryId);
        } else {
          this.toast.error(res.message || 'Failed to add state');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add state');
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

  openEditDialog(row: IState): void {
    this.locationService.getState(row.id).subscribe({
      next: res => {
        if (!res.success || res.data == null) {
          this.toast.error(res.message || 'Could not load state');
          return;
        }
        const raw = res.data as unknown;
        const record = (Array.isArray(raw) ? raw[0] : raw) as Record<string, unknown>;
        const data = normalizeState(record ?? {});
        const dialogRef = this.dialog.open(this.editDialog, {
          width: 'min(440px, 92vw)',
          maxWidth: '95vw',
          data: { ...data },
        });
        dialogRef.afterClosed().subscribe((result: IState | undefined) => {
          const name = result?.stateName?.trim();
          if (!name || !result?.id || !result.countryId) {
            return;
          }
          this.locationService
            .updateState({ id: result.id, stateName: name, countryId: result.countryId })
            .subscribe({
              next: upd => {
                if (upd.success) {
                  this.toast.success(upd.message || 'State updated successfully');
                  this.loadStateList(this.listFilterCountryId);
                } else {
                  this.toast.error(upd.message || 'Failed to update state');
                }
              },
              error: () => this.toast.error('Failed to update state'),
            });
        });
      },
      error: () => this.toast.error('Could not load state'),
    });
  }

  deleteState(row: IState): void {
    if (row.id <= 0) {
      return;
    }
    if (!confirm('Delete this state?')) {
      return;
    }
    this.locationService.deleteState(row.id).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(res.message || 'State deleted successfully');
          this.loadStateList(this.listFilterCountryId);
        } else {
          this.toast.error(res.message || 'Failed to delete state');
        }
      },
      error: () => this.toast.error('Failed to delete state'),
    });
  }
}
