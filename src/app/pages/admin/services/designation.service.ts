import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiResponse, IDesignation, IDesignationResponse } from '../interfaces/IDesignation';
import { Observable } from 'rxjs';
import { apiEndpoint } from '@core/constants/apiendpoint';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  protected readonly http = inject(HttpClient);

  private endPoints = apiEndpoint

  // 🔹 Add designation
  addDesignation(designation: string): Observable<IApiResponse<IDesignation>> {
    const body: IDesignation = { id: 0, designation };
    return this.http.post<IApiResponse<IDesignation>>(this.endPoints.ADD_DESIGNATION, body);
  }
  /*   addDesignation(designation: string) {
      return this.http.post(this.addDesignationUrl, { designation });
    } */

  getDesignationList(): Observable<IDesignationResponse> {
    return this.http.get<IDesignationResponse>(this.endPoints.DESIGNATION_LIST);
  }

  updateDesignation(designation: IDesignation): Observable<any> {
    return this.http.post(this.endPoints.UPDATE_DESIGNATION, designation);
  }


  deleteDesignation(id: number): Observable<any> {
    const url = `${this.endPoints.DELETE_DESIGNATION}/${id}`;
    return this.http.delete(url);
  }

}
