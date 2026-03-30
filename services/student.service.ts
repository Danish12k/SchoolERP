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
}
