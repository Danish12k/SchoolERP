import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IApiResponse } from '../interfaces/ICommon';
import { IStudent } from '../interfaces/IStudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http = inject(HttpClient);
  private endPoints = apiEndpoint;

  /** GET student list. Adjust URL in `apiendpoint.ts` if your API path differs. */
  listStudents(): Observable<IApiResponse<IStudent>> {
    return this.http.get<IApiResponse<IStudent>>(this.endPoints.student.list);
  }

  /** Students in a section (`Active`: 1 = active, 0 = inactive). */
  listStudentsBySection(sectionId: number, active: number = 1): Observable<IApiResponse<IStudent>> {
    const url = `${this.endPoints.student.sectionStudentList}?SectionId=${sectionId}&Active=${active}`;
    return this.http.get<IApiResponse<IStudent>>(url);
  }
}
