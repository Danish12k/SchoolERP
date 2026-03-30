import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { ICategory } from '../interfaces/IAdmintMst';
import { IApiResponse } from '../interfaces/ICommon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
     private http = inject(HttpClient);
  private endpoint = apiEndpoint;

   list(): Observable<IApiResponse<ICategory>> {
      return this.http.get<IApiResponse<ICategory>>
      (this.endpoint.category.list);
    }
     add(body: ICategory): Observable<IApiResponse<ICategory>> {
      return this.http.post<IApiResponse<ICategory>>(this.endpoint.category.add, body);
    }
  
    update(body: ICategory): Observable<IApiResponse<ICategory>> {
      debugger;
      return this.http.post<IApiResponse<ICategory>>(this.endpoint.category.update, body);
    }
}
