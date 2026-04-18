import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/ICommon';
import { ICountry } from '../interfaces/ILocation';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { ApiService } from '@core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private api = inject(ApiService);
  private endpoint = apiEndpoint;

  // country start
   listCountry(): Observable<IApiResponse<ICountry>> {
      return this.api.get<IApiResponse<ICountry>>(this.endpoint.country.list);
    }
     addCountry(body: ICountry): Observable<IApiResponse<ICountry>> {
      return this.api.post<IApiResponse<ICountry>>(this.endpoint.country.add, body);
    }

    updateCountry(body: ICountry): Observable<IApiResponse<ICountry>> {
      return this.api.post<IApiResponse<ICountry>>(this.endpoint.country.update, body);
    }


    deleteCountry(Id: number): Observable<IApiResponse<ICountry>> {
      return this.api.post<IApiResponse<ICountry>>(this.endpoint.country.delete, { Id });
    }
}
