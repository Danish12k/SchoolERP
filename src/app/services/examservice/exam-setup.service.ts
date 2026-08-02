import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@core';
import { examApiEndpoint } from '@core/constants';
import { IApiResponse } from '../../interfaces/ICommon';
import {
  IClassGroup,
  IClassGroupListQuery,
  ICreateClassGroupRequest,
  ICreateExamRequest,
  ICreateGradePointRequest,
  ICreateSubExamRequest,
  IExam,
  IExamListQuery,
  IGradePoint,
  ISubExam,
  IUpdateExamRequest,
} from '../../interfaces/IExam';
import {
  ICreateScholasticAreaRequest,
  ICreateScholasticSkillRequest,
  IScholasticArea,
  IScholasticAreaListQuery,
  IScholasticSkill,
  IScholasticSkillListQuery,
} from '../../interfaces/IScholastic';

@Injectable({
  providedIn: 'root',
})
export class ExamSetupService {
  private readonly api = inject(ApiService);
  private readonly endpoints = examApiEndpoint.setup;

  listExams(query: IExamListQuery): Observable<IApiResponse<IExam[] | IExam>> {
    return this.api.get<IApiResponse<IExam[] | IExam>>(this.endpoints.list, query);
  }

  createExam(payload: ICreateExamRequest): Observable<IApiResponse<IExam>> {
    return this.api.post<IApiResponse<IExam>>(this.endpoints.create, payload);
  }

  updateExam(payload: IUpdateExamRequest): Observable<IApiResponse<IExam>> {
    return this.api.put<IApiResponse<IExam>>(this.endpoints.update(payload.examId), payload);
  }

  deleteExam(examId: number): Observable<IApiResponse<unknown>> {
    return this.api.delete<IApiResponse<unknown>>(this.endpoints.delete(examId));
  }

  listSubExams(): Observable<IApiResponse<ISubExam[] | ISubExam>> {
    return this.api.get<IApiResponse<ISubExam[] | ISubExam>>(this.endpoints.showSubExam);
  }

  createSubExam(payload: ICreateSubExamRequest): Observable<IApiResponse<ISubExam>> {
    return this.api.post<IApiResponse<ISubExam>>(this.endpoints.addSubExam, payload);
  }

  deleteSubExam(examId: number, subExamId: number): Observable<IApiResponse<unknown>> {
    return this.api.delete<IApiResponse<unknown>>(this.endpoints.deleteSubExam(examId, subExamId));
  }

  listGradePoints(sessionId: number): Observable<IApiResponse<IGradePoint[] | IGradePoint>> {
    return this.api.get<IApiResponse<IGradePoint[] | IGradePoint>>(this.endpoints.showGradePoint, {
      sessionId,
    });
  }

  createGradePoint(payload: ICreateGradePointRequest): Observable<IApiResponse<IGradePoint>> {
    return this.api.post<IApiResponse<IGradePoint>>(this.endpoints.addGradePoint, payload);
  }

  listScholasticAreas(
    query: IScholasticAreaListQuery
  ): Observable<IApiResponse<IScholasticArea[] | IScholasticArea>> {
    return this.api.get<IApiResponse<IScholasticArea[] | IScholasticArea>>(
      this.endpoints.showCCEScholastic,
      query
    );
  }

  createScholasticArea(
    payload: ICreateScholasticAreaRequest
  ): Observable<IApiResponse<IScholasticArea>> {
    return this.api.post<IApiResponse<IScholasticArea>>(this.endpoints.addScholasticArea, payload);
  }

  listScholasticSkills(
    query: IScholasticSkillListQuery
  ): Observable<IApiResponse<IScholasticSkill[] | IScholasticSkill>> {
    return this.api.get<IApiResponse<IScholasticSkill[] | IScholasticSkill>>(
      this.endpoints.showCCEskillAll,
      query
    );
  }

  createScholasticSkill(
    payload: ICreateScholasticSkillRequest
  ): Observable<IApiResponse<IScholasticSkill>> {
    return this.api.post<IApiResponse<IScholasticSkill>>(
      this.endpoints.addCCEScholasticSkill,
      payload
    );
  }

  listClassGroups(
    query?: IClassGroupListQuery
  ): Observable<IApiResponse<IClassGroup[] | IClassGroup>> {
    return this.api.get<IApiResponse<IClassGroup[] | IClassGroup>>(
      this.endpoints.showClassGroup,
      query
    );
  }

  createClassGroup(payload: ICreateClassGroupRequest): Observable<IApiResponse<IClassGroup>> {
    return this.api.post<IApiResponse<IClassGroup>>(this.endpoints.addClassGroup, payload);
  }
}
