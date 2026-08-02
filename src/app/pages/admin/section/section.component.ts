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
import { ISection } from '../../../interfaces/ISectionTest';
import { SectionService } from '../../../services/masterservice/section.service';
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

@Component({
  selector: 'app-section',
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
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent implements OnInit, AfterViewInit {
  @Input() embedded = false;

  private sectionService = inject(SectionService);
  private toast = inject(ToastrService);
  private dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<ISection>([]);
  displayedColumns: string[] = ['index', 'sectionName', 'actions'];
  newSection: ISection = { sectionId: 0, sectionName: '' };
  isLoading = false;
  isSaving = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addDialog') addDialog!: TemplateRef<void>;
  @ViewChild('editDialog') editDialog!: TemplateRef<ISection>;

  ngOnInit(): void {
    this.dataSource.filterPredicate = (row, filter) =>
      row.sectionName?.toLowerCase().includes(filter) ?? false;
    this.loadSectionList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddDialog(): void {
    this.newSection = { sectionId: 0, sectionName: '' };
    this.dialog.open(this.addDialog, { width: 'min(440px, 92vw)', maxWidth: '95vw' });
  }

  addSection(): void {
    const name = this.newSection.sectionName?.trim() ?? '';
    if (!name) {
      this.toast.warning('Please enter section name.');
      return;
    }
    this.isSaving = true;
    this.sectionService.addSection(name).subscribe({
      next: (res: IApiResponse<ISection>) => {
        this.isSaving = false;
        if (res.success) {
          this.toast.success(res.message || 'Section added successfully');
          this.dialog.closeAll();
          this.loadSectionList();
        } else {
          this.toast.error(res.message || 'Failed to add section');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toast.error('Failed to add section');
      },
    });
  }

  loadSectionList(): void {
    this.isLoading = true;
    this.sectionService.getSectionList().subscribe({
      next: res => {
        this.isLoading = false;
        if (res.success) {
          const rows = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.toast.error(res.message || 'Failed to load sections');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Failed to load sections');
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

  openEditDialog(row: ISection): void {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: 'min(440px, 92vw)',
      maxWidth: '95vw',
      data: { ...row },
    });
    dialogRef.afterClosed().subscribe((result: ISection | undefined) => {
      const name = result?.sectionName?.trim();
      if (!name || !result?.sectionId) {
        return;
      }
      this.sectionService
        .updateSection({ sectionId: result.sectionId, sectionName: name })
        .subscribe({
          next: res => {
            if (res.success) {
              this.toast.success(res.message || 'Section updated successfully');
              this.loadSectionList();
            } else {
              this.toast.error(res.message || 'Failed to update section');
            }
          },
          error: () => this.toast.error('Failed to update section'),
        });
    });
  }
}
