import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IApiResponse } from '../interfaces/ICommon';
import { ISchool } from '../interfaces/IAdmintMst';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private http = inject(HttpClient);
  private endpoint = apiEndpoint;

  addFeeGroup(body: ISchool): Observable<IApiResponse<ISchool>> {
    return this.http.post<IApiResponse<ISchool>>(this.endpoint.feeGroup.add, body);
  }

  updateFeeGroup(body: ISchool): Observable<IApiResponse<ISchool>> {
    return this.http.post<IApiResponse<ISchool>>(this.endpoint.feeGroup.update, body);
  }

  listFeeGroup(): Observable<IApiResponse<ISchool>> {
    return this.http.get<IApiResponse<ISchool>>(this.endpoint.feeGroup.list);
  }
}
