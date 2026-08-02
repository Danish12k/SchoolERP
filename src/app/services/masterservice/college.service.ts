import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICollege } from '../../interfaces/ICollege';
import { IApiResponse } from '../../interfaces/ICommon';
import { masterApiEndpoint } from '@core/constants/master_api_endpoint';
import { IClass } from '../../interfaces/IClassmaster';
import { ApiService } from '@core';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  private api = inject(ApiService);
  private http = inject(HttpClient);
  private endPoints = masterApiEndpoint;

  getCollegeList(): Observable<IApiResponse<ICollege>> {
    return this.api.get<IApiResponse<ICollege>>(this.endPoints.college.list);
  }

  getLatestData(collegeId: number): Observable<IApiResponse<unknown>> {
    const params = new HttpParams().set('CollegeId', String(collegeId));
    return this.http
      .get(masterApiEndpoint.college.getLatestData, {
        params,
        responseType: 'text',
      })
      .pipe(map(text => this.normalizeApiResponse(text)));
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

  private normalizeApiResponse(raw: string | IApiResponse<unknown>): IApiResponse<unknown> {
    const body = this.parseResponseBody(raw);
    const success = this.readSuccessFlag(body);
    const message = String(body['message'] ?? body['Message'] ?? '').trim();
    const data = body['data'] ?? body['Data'] ?? null;
    const totalRecord = body['totalRecord'] ?? body['TotalRecord'];

    return {
      success,
      message,
      data: data as unknown,
      ...(totalRecord != null ? { totalRecord: Number(totalRecord) } : {}),
    };
  }

  private parseResponseBody(raw: string | IApiResponse<unknown>): Record<string, unknown> {
    if (typeof raw === 'object' && raw !== null) {
      return raw as unknown as Record<string, unknown>;
    }

    const trimmed = String(raw ?? '').trim();
    if (!trimmed) {
      return { success: false, message: 'Empty response from server.' };
    }

    try {
      return JSON.parse(trimmed) as Record<string, unknown>;
    } catch {
      return { success: true, message: trimmed };
    }
  }

  private readSuccessFlag(body: Record<string, unknown>): boolean {
    const value = body['success'] ?? body['Success'];
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    if (typeof value === 'number') {
      return value === 1;
    }
    return false;
  }
}
