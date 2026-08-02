import { inject, Injectable } from '@angular/core';
import { masterApiEndpoint } from '@core/constants/master_api_endpoint';
import { ApiService } from '@core';
import { IAssignSubject, IAssignSubjectList, ISubject, ISubjectType } from '../../interfaces/ISubjectMst';
import { IApiResponse } from '../../interfaces/ICommon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectmasterService {
  private readonly api = inject(ApiService);
  private endpoint = masterApiEndpoint;


  // subject -- START --
  subjectTypeList(): Observable<IApiResponse<ISubjectType>> {
    return this.api.get<IApiResponse<ISubjectType>>(this.endpoint.subject.subjectType);
  }

  addSubject(body: ISubject): Observable<IApiResponse<ISubject>> {
    return this.api.post<IApiResponse<ISubject>>(this.endpoint.subject.add, body);
  }

  updateSubject(body: ISubject): Observable<IApiResponse<ISubject>> {
    return this.api.post<IApiResponse<ISubject>>(this.endpoint.subject.update, body);
  }

  listSubject(subhecttype: string): Observable<IApiResponse<ISubject>> {
    return this.api.get<IApiResponse<ISubject>>(this.endpoint.subject.list + subhecttype);
  }

  listClassSubjects(classId: number): Observable<IApiResponse<ISubject[] | ISubject>> {
    return this.api.get<IApiResponse<ISubject[] | ISubject>>(this.endpoint.subject.classSubjectList, {
      ClassId: classId,
    });
  }

  //assign subject
  assignSubject(body: IAssignSubject): Observable<IApiResponse<IAssignSubject>> {
    return this.api.post<IApiResponse<IAssignSubject>>(this.endpoint.assignSubject.add, body);
  }

  deleteAssignSubject(assingSubjectId: number): Observable<IApiResponse<IAssignSubjectList>> {
    return this.api.get<IApiResponse<IAssignSubjectList>>(this.endpoint.assignSubject.delete + assingSubjectId);
  }

  listAssignSubject(sectionId: string): Observable<IApiResponse<IAssignSubjectList>> {
    return this.api.get<IApiResponse<IAssignSubjectList>>(this.endpoint.assignSubject.list + sectionId);
  }
}
