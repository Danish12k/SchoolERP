import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PageHeaderComponent } from '@shared';
import { ToastrService } from 'ngx-toastr';
import { IApiResponse } from '../../../interfaces/ICommon';
import { ICollege } from '../../../interfaces/ICollege';
import { CollegeService } from '../../../services/masterservice/college.service';

@Component({
  selector: 'app-getlatestdata',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    PageHeaderComponent,
  ],
  templateUrl: './getlatestdata.component.html',
  styleUrl: './getlatestdata.component.scss',
})
export class GetlatestdataComponent implements OnInit {
  private readonly collegeService = inject(CollegeService);
  private readonly toast = inject(ToastrService);

  colleges: ICollege[] = [];
  selectedCollegeId: number | null = null;
  loadingColleges = false;
  loading = false;

  ngOnInit(): void {
    this.loadColleges();
  }

  getLatestData(): void {
    if (this.selectedCollegeId == null) {
      this.toast.warning('Please select a college.');
      return;
    }

    this.loading = true;
    this.collegeService.getLatestData(this.selectedCollegeId).subscribe({
      next: res => this.handleLatestDataResponse(res),
      error: err => this.handleLatestDataError(err),
    });
  }

  collegeLabel(college: ICollege): string {
    return college.collegeAbreviation?.trim() || college.collegeName?.trim() || String(college.collegeId);
  }

  private handleLatestDataResponse(res: IApiResponse<unknown>): void {
    this.loading = false;
    const message = res.message?.trim() ?? '';
    const isSuccess = res.success === true || String(res.success).toLowerCase() === 'true';

    if (isSuccess) {
      this.toast.success(message || 'Latest data fetched successfully.');
      return;
    }

    this.toast.error(message || 'Failed to fetch latest data.');
  }

  private handleLatestDataError(err: unknown): void {
    this.loading = false;
    this.toast.error(this.extractErrorMessage(err));
  }

  private loadColleges(): void {
    this.loadingColleges = true;
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        this.loadingColleges = false;
        this.colleges = res.success && res.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
      },
      error: err => {
        this.loadingColleges = false;
        this.colleges = [];
        this.toast.error(this.extractErrorMessage(err, 'Failed to load colleges.'));
      },
    });
  }

  private extractErrorMessage(err: unknown, fallback = 'Failed to fetch latest data.'): string {
    if (err instanceof HttpErrorResponse) {
      const body = err.error;
      if (typeof body === 'string' && body.trim()) {
        return body;
      }
      if (body && typeof body === 'object' && 'message' in body && typeof body.message === 'string') {
        return body.message;
      }
    }
    return fallback;
  }
}
