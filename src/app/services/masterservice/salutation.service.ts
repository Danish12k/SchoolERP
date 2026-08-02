import { inject, Injectable } from '@angular/core';
import { ISalutation } from '../../interfaces/IAdmintMst';
import { IApiResponse } from '../../interfaces/ICommon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { masterApiEndpoint } from '@core/constants/master_api_endpoint';

@Injectable({
  providedIn: 'root'
})
export class SalutationService {
   private http = inject(HttpClient);
  private endpoint = masterApiEndpoint;

   list(): Observable<IApiResponse<ISalutation>> {
      return this.http.get<IApiResponse<ISalutation>>
      (this.endpoint.salutation.list);
    }
     add(body: ISalutation): Observable<IApiResponse<ISalutation>> {
      return this.http.post<IApiResponse<ISalutation>>(this.endpoint.salutation.add, body);
    }
  
    update(body: ISalutation): Observable<IApiResponse<ISalutation>> {
      debugger;
      return this.http.post<IApiResponse<ISalutation>>(this.endpoint.salutation.update, body);
    }
}
