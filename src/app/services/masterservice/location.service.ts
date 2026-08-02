import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../interfaces/ICommon';
import { ICountry, IDistrict, IState } from '../../interfaces/ILocation';
import { masterApiEndpoint } from '@core/constants/master_api_endpoint';
import { ApiService } from '@core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private api = inject(ApiService);
  private endpoint = masterApiEndpoint;

  listCountry(): Observable<IApiResponse<ICountry>> {
    return this.api.get<IApiResponse<ICountry>>(this.endpoint.country.list);
  }

  /** GET `/Country/GetCountry?CountryId=` */
  getCountry(countryId: number): Observable<IApiResponse<ICountry>> {
    return this.api.get<IApiResponse<ICountry>>(this.endpoint.country.get, {
      CountryId: countryId,
    });
  }

  /** Matches API: `{ "countryName": "..." }` for create. */
  addCountry(body: { countryName: string }): Observable<IApiResponse<ICountry>> {
    return this.api.post<IApiResponse<ICountry>>(this.endpoint.country.add, body);
  }

  updateCountry(body: { id: number; countryName: string }): Observable<IApiResponse<ICountry>> {
    return this.api.post<IApiResponse<ICountry>>(this.endpoint.country.update, body);
  }

  deleteCountry(id: number): Observable<IApiResponse<ICountry>> {
    return this.api.delete<IApiResponse<ICountry>>(this.endpoint.country.delete, { Id: id });
  }

  listState(countryId?: number): Observable<IApiResponse<IState>> {
    const params =
      countryId != null && countryId > 0 ? { CountryId: countryId } : undefined;
    // API uses GET `/State/GetState` for listing (optionally supports filters).
    return this.api.get<IApiResponse<IState>>(this.endpoint.state.get, params);
  }

  getState(stateId: number): Observable<IApiResponse<IState>> {
    return this.api.get<IApiResponse<IState>>(this.endpoint.state.get, {
      StateId: stateId,
    });
  }

  addState(body: { stateName: string }): Observable<IApiResponse<IState>> {
    return this.api.post<IApiResponse<IState>>(this.endpoint.state.add, body);
  }

  updateState(body: {
    id: number;
    stateName: string;
    countryId: number;
  }): Observable<IApiResponse<IState>> {
    return this.api.post<IApiResponse<IState>>(this.endpoint.state.update, body);
  }

  deleteState(id: number): Observable<IApiResponse<IState>> {
    return this.api.post<IApiResponse<IState>>(this.endpoint.state.delete, {}, { Id: id });
  }

  listDistrict(stateId?: number): Observable<IApiResponse<IDistrict>> {
    const params = stateId != null && stateId > 0 ? { StateId: stateId } : undefined;
    return this.api.get<IApiResponse<IDistrict>>(this.endpoint.district.list, params);
  }

  addDistrict(body: { cityName: string; stateId: number }): Observable<IApiResponse<IDistrict>> {
    return this.api.post<IApiResponse<IDistrict>>(this.endpoint.district.add, body);
  }

  updateDistrict(body: {
    cityId: number;
    cityName: string;
    stateId: number;
  }): Observable<IApiResponse<IDistrict>> {
    return this.api.post<IApiResponse<IDistrict>>(this.endpoint.district.update, body);
  }

  deleteDistrict(id: number): Observable<IApiResponse<IDistrict>> {
    return this.api.delete<IApiResponse<IDistrict>>(this.endpoint.district.delete, { Id: id });
  }
}
