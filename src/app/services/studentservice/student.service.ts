import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '@core';
import { studentApiEndpoint } from '@core/constants/student_api_endpoint';
import { IApiResponse } from '../../interfaces/ICommon';
import { IStudent } from '../../interfaces/IStudent';
import { IStudentTc } from '../../interfaces/IStudentTc';

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

export interface StudentTcListParams {
  StudentName?: string;
  AdmissionNo?: string;
  SlNo?: string;
  ClassSectionId?: number;
  Session?: number;
  tcId?: number;
  DateOfIssue?: string;
}

export interface SearchStudentParams {
  SessionId?: number;
  SearchValue?: string;
  SectionId?: number;
}

export interface StudentHeightWeightPayload {
  studentId: string;
  studentName: string;
  visionRight: string;
  visionLeft: string;
  currentHeight: string;
  currentWeight: string;
  classSectionId: string;
}

export interface StudentAaparDetailsPayload {
  studentId: string;
  studentName: string;
  motherAadhar: string;
  fatherAadhar: string;
  penNo: string;
  apaar: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private api = inject(ApiService);
  private endPoints = studentApiEndpoint;

  listStudents(): Observable<IApiResponse<IStudent[] | IStudent>> {
    return this.api.get<IApiResponse<IStudent[] | IStudent>>(this.endPoints.studentData.sectionStudentList, {
      Active: 1,
    });
  }

  listStudentsByClassSection(classSectionId: number): Observable<IApiResponse<IStudent[] | IStudent>> {
    return this.api.get<IApiResponse<IStudent[] | IStudent>>(this.endPoints.studentData.sectionStudentList, {
      Active: 1,
      SectionId: classSectionId,
    });
  }

  searchStudent(params: SearchStudentParams): Observable<IApiResponse<IStudent[] | IStudent>> {
    return this.api.get<IApiResponse<IStudent[] | IStudent>>(this.endPoints.studentData.searchStudent, params);
  }

  getStudentTcList(params: StudentTcListParams): Observable<IApiResponse<IStudentTc[] | IStudentTc>> {
    return this.api.get<IApiResponse<IStudentTc[] | IStudentTc>>(this.endPoints.studentData.studentTcList, params);
  }

  updateHeightWeight(rows: StudentHeightWeightPayload[]): Observable<IApiResponse<unknown>> {
    return this.api.post<IApiResponse<unknown>>(this.endPoints.studentData.updateHeightWeight, rows);
  }

  updateAaparDetails(rows: StudentAaparDetailsPayload[]): Observable<IApiResponse<unknown>> {
    return this.api.post<IApiResponse<unknown>>(this.endPoints.studentData.updateAaparDetails, rows);
  }

  saveStudentAttendance(payload: StudentAttendancePayload): Observable<IApiResponse<unknown>> {
    return this.api.post<IApiResponse<unknown>>(this.endPoints.attendance.studentAttendance, payload);
  }

  /** Stub: wire endpoint when upload-student-data API is provided. */
  uploadStudentData(rows: Record<string, string | number | null>[]): Observable<IApiResponse<unknown>> {
    console.warn('uploadStudentData API not configured yet', rows);
    return of({ success: false, message: 'Upload API not configured yet', data: null });
  }
}
