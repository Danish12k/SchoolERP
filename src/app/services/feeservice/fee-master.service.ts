import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFeeGroup, IFeeHead, IFeeInstallment } from '../../interfaces/IFeeMaster';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../interfaces/ICommon';
import { feeApiEndpoint } from '@core/constants/fee_api_endpoint';

@Injectable({
  providedIn: 'root'
})
export class FeeMasterService {
  private http = inject(HttpClient);
  private endpoint = feeApiEndpoint;


  // Fee Group. -- START --
  addFeeGroup(body: IFeeGroup): Observable<IApiResponse<IFeeGroup>> {
    return this.http.post<IApiResponse<IFeeGroup>>(this.endpoint.feeGroup.add, body);
  }

  updateFeeGroup(body: IFeeGroup): Observable<IApiResponse<IFeeGroup>> {
    return this.http.post<IApiResponse<IFeeGroup>>(this.endpoint.feeGroup.update, body);
  }

  deleteFeeGroup(Id: number): Observable<IApiResponse<IFeeGroup>> {
    return this.http.delete<IApiResponse<IFeeGroup>>(this.endpoint.feeGroup.delete, {
      params: new HttpParams().set('Id', Id),
    });
  }
  listFeeGroup(): Observable<IApiResponse<IFeeGroup>> {
    return this.http.get<IApiResponse<IFeeGroup>>(this.endpoint.feeGroup.list);
  }
  // Fee Group. -- END --

  // Fee head. -- START --
  addFeeHead(body: IFeeHead): Observable<IApiResponse<IFeeHead>> {
    return this.http.post<IApiResponse<IFeeHead>>(this.endpoint.feeHead.add, body);
  }

  updateFeeHead(body: IFeeHead): Observable<IApiResponse<IFeeHead>> {
    return this.http.post<IApiResponse<IFeeHead>>(this.endpoint.feeHead.update, body);
  }

  listFeeHead(): Observable<IApiResponse<IFeeHead>> {
    return this.http.get<IApiResponse<IFeeHead>>(this.endpoint.feeHead.list);
  }
  // Fee head. -- END --

// fee installment start
 listFeeInstallment(collegeId:number, sessionId:number): Observable<IApiResponse<IFeeInstallment>> {
    return this.http.get<IApiResponse<IFeeInstallment>>(this.endpoint.feeInstallment.list, {
      params: new HttpParams().set('CollegeId', collegeId).set('SessionId', sessionId),
    });
  }
   addFeeInstallment(body: IFeeInstallment): Observable<IApiResponse<IFeeInstallment>> {
    return this.http.post<IApiResponse<IFeeInstallment>>(this.endpoint.feeInstallment.add, body);
  }

  updateFeeInstallment(body: IFeeInstallment): Observable<IApiResponse<IFeeInstallment>> {
    return this.http.post<IApiResponse<IFeeInstallment>>(this.endpoint.feeInstallment.update, body);
  }

///end -- fee installment 


}
