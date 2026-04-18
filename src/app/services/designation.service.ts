import { inject, Injectable } from '@angular/core';
import { IApiResponse, IDesignation, IDesignationResponse } from '../interfaces/IDesignation';
import { Observable } from 'rxjs';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { ApiService } from '@core';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  private readonly api = inject(ApiService);

  private endPoints = apiEndpoint

  // 🔹 Add designation
  addDesignation(designation: string): Observable<IApiResponse<IDesignation>> {
    const body: IDesignation = { id: 0, designation };
    return this.api.post<IApiResponse<IDesignation>>(this.endPoints.designation.add, body);
  }
  /*   addDesignation(designation: string) {
      return this.http.post(this.addDesignationUrl, { designation });
    } */

  getDesignationList(): Observable<IDesignationResponse> {
    return this.api.get<IDesignationResponse>(this.endPoints.designation.list);
  }

  updateDesignation(designation: IDesignation): Observable<any> {
    return this.api.post(this.endPoints.designation.update, designation);
  }


  deleteDesignation(id: number): Observable<any> {
    const url = `${this.endPoints.designation.delete}/${id}`;
    return this.api.delete(url);
  }

}
