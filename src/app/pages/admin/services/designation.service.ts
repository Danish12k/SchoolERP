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
    return this.http.post<IApiResponse<IDesignation>>(this.endPoints.designation.add, body);
  }
  /*   addDesignation(designation: string) {
      return this.http.post(this.addDesignationUrl, { designation });
    } */

  getDesignationList(): Observable<IDesignationResponse> {
    return this.http.get<IDesignationResponse>(this.endPoints.designation.list);
  }

  updateDesignation(designation: IDesignation): Observable<any> {
    return this.http.post(this.endPoints.designation.update, designation);
  }


  deleteDesignation(id: number): Observable<any> {
    const url = `${this.endPoints.designation.delete}/${id}`;
    return this.http.delete(url);
  }

}
