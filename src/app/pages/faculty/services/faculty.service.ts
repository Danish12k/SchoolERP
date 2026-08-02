import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { studentApiEndpoint } from '@core/constants/student_api_endpoint';
import { IFaculty } from '../../../interfaces/IClassAndSection';
import { IApiResponse } from '../../../interfaces/ICommon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private http = inject(HttpClient);
  private endPoints = studentApiEndpoint;


getListByCollegeId(collegeId: number): Observable<IApiResponse<IFaculty[]>> {
  return this.http.get<IApiResponse<IFaculty[]>>(
    `${this.endPoints.faculty.listByCollege}${collegeId}`
  );
}


}

