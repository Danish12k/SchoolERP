import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@core';
import { studentApiEndpoint } from '@core/constants/student_api_endpoint';
import { IApiResponse } from '../../interfaces/ICommon';

export interface StudentAttendanceDetail {
  stuId: string;
  status: string;
}

export interface StudentAttendancePayload {
  attendanceDate: string;
  classSectionId: number;
  isAbsentMessage: boolean;
  attendanceDetails: StudentAttendanceDetail[];
}

@Injectable({
  providedIn: 'root',
})
export class StudentAttendanceService {
  private readonly api = inject(ApiService);
  private readonly endPoints = studentApiEndpoint;

  saveStudentAttendance(payload: StudentAttendancePayload): Observable<IApiResponse<unknown>> {
    return this.api.post<IApiResponse<unknown>>(this.endPoints.attendance.studentAttendance, payload);
  }
}
