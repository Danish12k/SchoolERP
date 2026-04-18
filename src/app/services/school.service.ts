import { inject, Injectable } from '@angular/core';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IApiResponse } from '../interfaces/ICommon';
import { ISchool } from '../interfaces/IAdmintMst';
import { Observable } from 'rxjs';
import { ApiService } from '@core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private api = inject(ApiService);
  private endpoint = apiEndpoint;

  addFeeGroup(body: ISchool): Observable<IApiResponse<ISchool>> {
    return this.api.post<IApiResponse<ISchool>>(this.endpoint.feeGroup.add, body);
  }

  updateFeeGroup(body: ISchool): Observable<IApiResponse<ISchool>> {
    return this.api.post<IApiResponse<ISchool>>(this.endpoint.feeGroup.update, body);
  }

  listFeeGroup(): Observable<IApiResponse<ISchool>> {
    return this.api.get<IApiResponse<ISchool>>(this.endpoint.feeGroup.list);
  }
}
