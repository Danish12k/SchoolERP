import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiResponse, IDesignation, IDesignationResponse } from '../interfaces/IDesignation';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  protected readonly http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  private addDesignationUrl = '/Designation/AddDesignation';
  private updateDesignationUrl = '/Designation/UpdateDesignation';
  private deleteDesignationUrl = '/Designation/DeleteDesignation';
  private designationListUrl = '/Designation/DesignationList';
    // 🔹 Add designation
  addDesignation(designation: string): Observable<IApiResponse<IDesignation>> {
    const body: IDesignation = { id: 0, designation };
    return this.http.post<IApiResponse<IDesignation>>(this.baseUrl + this.addDesignationUrl, body);
  }
/*   addDesignation(designation: string) {
    return this.http.post(this.addDesignationUrl, { designation });
  } */

  getDesignationList(): Observable<IDesignationResponse> {
    return this.http.get<IDesignationResponse>(this.baseUrl + this.designationListUrl);
  }

  updateDesignation(designation: IDesignation): Observable<any> {
    return this.http.post(this.baseUrl + this.updateDesignationUrl, designation);
  }


  deleteDesignation(id: number): Observable<any> {
    const url = `${this.deleteDesignationUrl}/${id}`;
    return this.http.delete(url);
  }

}
