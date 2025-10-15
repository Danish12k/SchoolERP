import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IFaculty } from 'app/pages/admin/interfaces/IClassAndSection';
import { IApiResponse } from 'app/pages/admin/interfaces/ICommon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private http = inject(HttpClient);
  private endPoints = apiEndpoint;


getListByCollegeId(collegeId: number): Observable<IApiResponse<IFaculty[]>> {
  return this.http.get<IApiResponse<IFaculty[]>>(
    `${this.endPoints.faculty.listByCollege}${collegeId}`
  );
}


}

