import { Component, DestroyRef, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import moment, { Moment } from 'moment';
import { ToastrService } from 'ngx-toastr';
import { IFaculty } from '../../../interfaces/IClassAndSection';
import { ICollege } from '../../../interfaces/ICollege';
import { IFeeCollectionFilterSelection } from '../../../interfaces/IFeeReport';
import { CollegeService } from '../../../services/masterservice/college.service';
import { FacultyService } from '../../faculty/services/faculty.service';

@Component({
  selector: 'app-filtercollectionreport',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './filtercollectionreport.component.html',
  styleUrl: './filtercollectionreport.component.scss',
})
export class FiltercollectionreportComponent implements OnInit {
  @Output() filterSearch = new EventEmitter<IFeeCollectionFilterSelection>();
  @Output() filterClear = new EventEmitter<void>();

  private collegeService = inject(CollegeService);
  private facultyService = inject(FacultyService);
  private toast = inject(ToastrService);
  private destroyRef = inject(DestroyRef);

  colleges: ICollege[] = [];
  faculties: IFaculty[] = [];

  selectedCollegeId: number | null = null;
  selectedFacultyId: number | null = 0; // 0 = All
  startDate: Moment | null = moment();
  endDate: Moment | null = moment();

  ngOnInit(): void {
    this.loadColleges();
  }

  facultyLabel(faculty: IFaculty): string {
    return [faculty.name, faculty.middleName, faculty.lastName]
      .filter(part => !!part && String(part).trim())
      .join(' ')
      .trim();
  }

  onCollegeChange(): void {
    this.selectedFacultyId = 0;
    this.faculties = [];

    if (!this.selectedCollegeId) {
      return;
    }

    this.facultyService
      .getListByCollegeId(Number(this.selectedCollegeId))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => {
          this.faculties = res.success && Array.isArray(res.data) ? res.data : [];
        },
        error: () => {
          this.faculties = [];
          this.toast.error('Failed to load faculty list.');
        },
      });
  }

  search(): void {
    if (!this.selectedCollegeId) {
      this.toast.warning('Please select a school.');
      return;
    }
    if (!this.startDate || !this.endDate) {
      this.toast.warning('Please select start and end dates.');
      return;
    }

    const start = moment(this.startDate);
    const end = moment(this.endDate);
    if (!start.isValid() || !end.isValid()) {
      this.toast.warning('Please enter valid start and end dates.');
      return;
    }
    if (end.isBefore(start, 'day')) {
      this.toast.warning('End date cannot be before start date.');
      return;
    }

    this.filterSearch.emit({
      collegeId: Number(this.selectedCollegeId),
      userId: Number(this.selectedFacultyId ?? 0),
      startDate: start.format('D-MMMM-YYYY').toUpperCase(),
      endDate: end.format('D-MMMM-YYYY').toUpperCase(),
    });
  }

  clearFilter(): void {
    this.selectedCollegeId = null;
    this.selectedFacultyId = 0;
    this.faculties = [];
    this.startDate = moment();
    this.endDate = moment();
    this.filterClear.emit();
  }

  private loadColleges(): void {
    this.collegeService
      .getCollegeList()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => {
          if (res.success) {
            this.colleges = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
          }
        },
        error: () => this.toast.error('Failed to load schools.'),
      });
  }
}
