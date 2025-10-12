import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICollege } from '../interfaces/ICollege';
import { IApiResponse } from '../interfaces/ICommon';
import { apiEndpoint } from '@core/constants/apiendpoint';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  private http = inject(HttpClient);
 private endPoints = apiEndpoint;

  getCollegeList():Observable<IApiResponse<ICollege>> {
    debugger;
    return this.http.get<IApiResponse<ICollege>>(this.endPoints.college.list);
  }
  
}
