import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/ICommon';
import { ISMSApi } from '../interfaces/Ismsapi';

@Injectable({
  providedIn: 'root'
})
export class SmsapiService {
  private http = inject(HttpClient);
  private endpoint = apiEndpoint;

  GetSmsListByCollegeId(collegeid: number): Observable<IApiResponse<ISMSApi>> {
    return this.http.get<IApiResponse<ISMSApi>>(this.endpoint.SMSAPI.listByCollegeId + collegeid);
  }

  addSMSAPI(body: ISMSApi): Observable<IApiResponse<ISMSApi>> {
    return this.http.post<IApiResponse<ISMSApi>>(this.endpoint.SMSAPI.add, body);
  }

  updateSMSAPI(body: ISMSApi): Observable<IApiResponse<ISMSApi>> {
    return this.http.post<IApiResponse<ISMSApi>>(this.endpoint.SMSAPI.update, body);
  }

  deleteSMSAPI(id: number): Observable<IApiResponse<ISMSApi>> {
    return this.http.post<IApiResponse<ISMSApi>>(`${this.endpoint.SMSAPI.delete}`, id);
  }

}
