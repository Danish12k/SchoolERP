import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICollege } from '../interfaces/ICollege';
import { IApiResponse } from '../interfaces/ICommon';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IClass } from '../interfaces/IClassmaster';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  private http = inject(HttpClient);
 private endPoints = apiEndpoint;

  getCollegeList():Observable<IApiResponse<ICollege>> {
    return this.http.get<IApiResponse<ICollege>>(this.endPoints.college.list);
  }
  
  getClassListBySessionAndCollege(sessionId:number,collegeId:number):Observable<IApiResponse<IClass>> {
    return this.http.post<IApiResponse<IClass>>(`${this.endPoints.college.ListBySessionAndCollege}?SessionId=${sessionId}&CollegeId=${collegeId}`,{});
    
  }

  addClass(college:ICollege):Observable<IApiResponse<IClass>> {
    return this.http.post<IApiResponse<IClass>>(this.endPoints.college.add,college);
  }

  updateClass(college:ICollege):Observable<IApiResponse<IClass>> {
    return this.http.post<IApiResponse<IClass>>(this.endPoints.college.update,college);
  }

  deleteClass(collegeId:number):Observable<IApiResponse<IClass>> {
    return this.http.delete<IApiResponse<IClass>>(`${this.endPoints.college.delete}?collegeId=${collegeId}`);
  }
}
