import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IAssignSubject, IAssignSubjectList, ISubject, ISubjectType } from '../interfaces/ISubjectMst';
import { IApiResponse } from '../interfaces/ICommon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectmasterService {
  private http = inject(HttpClient);
  private endpoint = apiEndpoint;


  // subject -- START --
  subjectTypeList(): Observable<IApiResponse<ISubjectType>> {
    return this.http.get<IApiResponse<ISubjectType>>(this.endpoint.subject.subjectType);
  }

  addSubject(body: ISubject): Observable<IApiResponse<ISubject>> {
    return this.http.post<IApiResponse<ISubject>>(this.endpoint.subject.add, body);
  }

  updateSubject(body: ISubject): Observable<IApiResponse<ISubject>> {
    return this.http.post<IApiResponse<ISubject>>(this.endpoint.subject.update, body);
  }
  listSubject(subhecttype:string): Observable<IApiResponse<ISubject>> {
    return this.http.get<IApiResponse<ISubject>>(this.endpoint.subject.list+subhecttype);
  }

  //assign subject
  assignSubject(body:IAssignSubject):Observable<IApiResponse<IAssignSubject>>{
return this.http.post<IApiResponse<IAssignSubject>>(this.endpoint.assignSubject.add,body)
  }
   deleteAssignSubject(assingSubjectId:number): Observable<IApiResponse<IAssignSubjectList>> {
    return this.http.get<IApiResponse<IAssignSubjectList>>(this.endpoint.assignSubject.delete+assingSubjectId);
  }

  listAssignSubject(sectionId:string): Observable<IApiResponse<IAssignSubjectList>> {
    return this.http.get<IApiResponse<IAssignSubjectList>>(this.endpoint.assignSubject.list+sectionId);
  }
  
}
