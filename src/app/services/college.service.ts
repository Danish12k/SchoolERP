import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICollege } from '../interfaces/ICollege';
import { IApiResponse } from '../interfaces/ICommon';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IClass } from '../interfaces/IClassmaster';
import { ApiService } from '@core';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  private api = inject(ApiService);
  private endPoints = apiEndpoint;

  getCollegeList():Observable<IApiResponse<ICollege>> {
    return this.api.get<IApiResponse<ICollege>>(this.endPoints.college.list);
  }
  
  getClassListBySessionAndCollege(sessionId:number,collegeId:number):Observable<IApiResponse<IClass>> {
    return this.api.post<IApiResponse<IClass>>(this.endPoints.college.ListBySessionAndCollege, {}, { SessionId: sessionId, CollegeId: collegeId });
    
  }

  addClass(college:ICollege):Observable<IApiResponse<IClass>> {
    return this.api.post<IApiResponse<IClass>>(this.endPoints.college.add,college);
  }

  updateClass(college:ICollege):Observable<IApiResponse<IClass>> {
    return this.api.post<IApiResponse<IClass>>(this.endPoints.college.update,college);
  }

  deleteClass(collegeId:number):Observable<IApiResponse<IClass>> {
    return this.api.delete<IApiResponse<IClass>>(this.endPoints.college.delete, { collegeId });
  }
}
