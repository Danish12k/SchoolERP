import { inject, Injectable } from '@angular/core';
import { masterApiEndpoint } from '@core/constants/master_api_endpoint';
import { IApiResponse } from '../../interfaces/ICommon';
import { ISchool } from '../../interfaces/IAdmintMst';
import { Observable } from 'rxjs';
import { ApiService } from '@core';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private api = inject(ApiService);
  private endpoint = masterApiEndpoint;

  addSchool(body: ISchool): Observable<IApiResponse<ISchool>> {
    return this.api.post<IApiResponse<ISchool>>(this.endpoint.addSchool.add, body);
  }

  updateSchool(body: ISchool): Observable<IApiResponse<ISchool>> {
    return this.api.post<IApiResponse<ISchool>>(this.endpoint.addSchool.update, body);
  }

  listSchools(): Observable<IApiResponse<ISchool>> {
    return this.api.get<IApiResponse<ISchool>>(this.endpoint.addSchool.list);
  }
}
