import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFeeGroup, IFeeHead, IFeeInstallment } from '../interfaces/IFeeMaster';
import { Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/ICommon';
import { apiEndpoint } from '@core/constants/apiendpoint';

@Injectable({
  providedIn: 'root'
})
export class FeeMasterService {
  private http = inject(HttpClient);
  private endpoint = apiEndpoint;


  // Fee Group. -- START --
  addFeeGroup(body: IFeeGroup): Observable<IApiResponse<IFeeGroup>> {
    return this.http.post<IApiResponse<IFeeGroup>>(this.endpoint.feeGroup.add, body);
  }

  updateFeeGroup(body: IFeeGroup): Observable<IApiResponse<IFeeGroup>> {
    return this.http.post<IApiResponse<IFeeGroup>>(this.endpoint.feeGroup.update, body);
  }

  deleteFeeGroup(Id: Number): Observable<IApiResponse<IFeeGroup>> {
    debugger;
    return this.http.post<IApiResponse<IFeeGroup>>(this.endpoint.feeGroup.delete + Id, null);
  }
  listFeeGroup(): Observable<IApiResponse<IFeeGroup>> {
    return this.http.get<IApiResponse<IFeeGroup>>(this.endpoint.feeGroup.list);
  }
  // Fee Group. -- END --

  // Fee head. -- START --
  addFeeHead(body: IFeeGroup): Observable<IApiResponse<IFeeHead>> {
    return this.http.post<IApiResponse<IFeeHead>>(this.endpoint.feeHead.add, body);
  }

  updateFeeHead(body: IFeeHead): Observable<IApiResponse<IFeeHead>> {
    debugger;
    return this.http.post<IApiResponse<IFeeHead>>(this.endpoint.feeHead.update, body);
  }

 /*  deleteFeeHead(Id: Number): Observable<IApiResponse<IFeeHead>> {
    return this.http.post<IApiResponse<IFeeHead>>(this.endpoint.feeHead.delete + Id, null);
  } */

  listFeeHead(): Observable<IApiResponse<IFeeHead>> {
    return this.http.get<IApiResponse<IFeeHead>>(this.endpoint.feeHead.list);
  }
  // Fee head. -- END --

// fee installment start
 listFeeInstallment(collegeId:number, sessionId:number): Observable<IApiResponse<IFeeInstallment>> {
    return this.http.get<IApiResponse<IFeeInstallment>>
    (this.endpoint.feeInstallment.listByCollegeAndSession + 'CollegeId='+{collegeId} +'SessionId='+{sessionId});
  }
   addFeeInstallment(body: IFeeInstallment): Observable<IApiResponse<IFeeInstallment>> {
    return this.http.post<IApiResponse<IFeeInstallment>>(this.endpoint.feeInstallment.add, body);
  }

  updateFeeInstallment(body: IFeeInstallment): Observable<IApiResponse<IFeeInstallment>> {
    debugger;
    return this.http.post<IApiResponse<IFeeInstallment>>(this.endpoint.feeInstallment.update, body);
  }

///end -- fee installment 


}
