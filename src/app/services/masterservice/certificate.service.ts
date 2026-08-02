import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { masterApiEndpoint } from '@core/constants/master_api_endpoint';
import { ApiService } from '@core';
import { IApiResponse } from '../../interfaces/ICommon';
import { ICertificate, IStringApiResponse } from '../../interfaces/ICertificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  private api = inject(ApiService);
  private endpoint = masterApiEndpoint;

  getCertificate(type: string, collegeId: number): Observable<IApiResponse<ICertificate>> {
    return this.api.get<IApiResponse<ICertificate>>(this.endpoint.certificate.get, {
      type,
      collegeid: collegeId,
    });
  }

  addCertificate(body: ICertificate): Observable<IApiResponse<ICertificate>> {
    return this.api.post<IApiResponse<ICertificate>>(this.endpoint.certificate.add, body);
  }

  updateCertificate(body: ICertificate): Observable<IApiResponse<ICertificate>> {
    return this.api.post<IApiResponse<ICertificate>>(this.endpoint.certificate.update, body);
  }

  getCharacterCertificate(params: {
    collegeid: number;
    Session: number;
    StudentId: string;
    IssueDate: string;
  }): Observable<IStringApiResponse> {
    return this.api.get<IStringApiResponse>(this.endpoint.certificate.getCharacter, params);
  }
}
