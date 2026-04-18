import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@core';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IApiResponse } from '../interfaces/ICommon';
import { IStudent } from '../interfaces/IStudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private api = inject(ApiService);
  private endPoints = apiEndpoint;

  /** GET student list. Adjust URL in `apiendpoint.ts` if your API path differs. */
  listStudents(): Observable<IApiResponse<IStudent[] | IStudent>> {
    return this.api.get<IApiResponse<IStudent[] | IStudent>>(this.endPoints.student.list);
  }
}
