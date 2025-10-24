import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IHouse } from '../interfaces/IAdmintMst';
import { IApiResponse } from '../interfaces/ICommon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private http = inject(HttpClient);
  private endpoint = apiEndpoint;

   list(): Observable<IApiResponse<IHouse>> {
      return this.http.get<IApiResponse<IHouse>>
      (this.endpoint.house.list);
    }
     add(body: IHouse): Observable<IApiResponse<IHouse>> {
      return this.http.post<IApiResponse<IHouse>>(this.endpoint.house.add, body);
    }
  
    update(body: IHouse): Observable<IApiResponse<IHouse>> {
      debugger;
      return this.http.post<IApiResponse<IHouse>>(this.endpoint.house.update, body);
    }
}
