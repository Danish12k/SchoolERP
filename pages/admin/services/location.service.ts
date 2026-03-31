import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/ICommon';
import { ICountry } from '../interfaces/ILocation';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '@core/constants/apiendpoint';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
   private http = inject(HttpClient);
  private endpoint = apiEndpoint;

  // country start
   listCountry(): Observable<IApiResponse<ICountry>> {
    debugger;
      return this.http.get<IApiResponse<ICountry>>(this.endpoint.country.list);
    }
     addCountry(body: ICountry): Observable<IApiResponse<ICountry>> {
      return this.http.post<IApiResponse<ICountry>>(this.endpoint.country.add, body);
    }

    updateCountry(body: ICountry): Observable<IApiResponse<ICountry>> {
      debugger;
      return this.http.post<IApiResponse<ICountry>>(this.endpoint.country.update, body);
    }


    deleteCountry(Id: number): Observable<IApiResponse<ICountry>> {
      debugger;
      return this.http.post<IApiResponse<ICountry>>(this.endpoint.country.delete, { Id });
    }
}
