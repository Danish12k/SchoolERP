import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { feeApiEndpoint } from '@core/constants/fee_api_endpoint';
import { IApiResponse } from '../../interfaces/ICommon';
import {
  IFeeCollection,
  IFeeCollectionReportParams,
  IFeeDefaulter,
  IFeeDefaulterListParams,
  IFeeHeadBySection,
  IFeeInstallmentStatus,
} from '../../interfaces/IFeeReport';

@Injectable({
  providedIn: 'root',
})
export class FeeReportService {
  private http = inject(HttpClient);
  private endpoint = feeApiEndpoint.feeReport;

  getInstallmentStatusByClass(
    installmentIds: number | number[],
    classId: number
  ): Observable<IApiResponse<IFeeInstallmentStatus | IFeeInstallmentStatus[]>> {
    return this.http.get<IApiResponse<IFeeInstallmentStatus | IFeeInstallmentStatus[]>>(
      this.endpoint.installmentStatusByClass,
      {
        params: new HttpParams()
          .set('InstallmentId', this.toInstallmentIdParam(installmentIds))
          .set('ClassId', classId),
      }
    );
  }

  getInstallmentStatusBySection(
    installmentIds: number | number[],
    classSectionId: number
  ): Observable<IApiResponse<IFeeInstallmentStatus | IFeeInstallmentStatus[]>> {
    return this.http.get<IApiResponse<IFeeInstallmentStatus | IFeeInstallmentStatus[]>>(
      this.endpoint.installmentStatusBySection,
      {
        params: new HttpParams()
          .set('InstallmentId', this.toInstallmentIdParam(installmentIds))
          .set('ClassSectionId', classSectionId),
      }
    );
  }

  getFeeHeadBySection(
    classSectionId: number,
    sessionId: number,
    collegeId: number
  ): Observable<IApiResponse<IFeeHeadBySection | IFeeHeadBySection[]>> {
    return this.http.get<IApiResponse<IFeeHeadBySection | IFeeHeadBySection[]>>(
      this.endpoint.headBySection,
      {
        params: new HttpParams()
          .set('ClassSectionId', classSectionId)
          .set('SessionId', sessionId)
          .set('CollegeId', collegeId),
      }
    );
  }

  getFeeDefaulterList(
    params: IFeeDefaulterListParams
  ): Observable<IApiResponse<IFeeDefaulter | IFeeDefaulter[]>> {
    return this.http.get<IApiResponse<IFeeDefaulter | IFeeDefaulter[]>>(this.endpoint.defaulterList, {
      params: new HttpParams()
        .set('ClassSectionId', params.classSectionId)
        .set('SessionId', params.sessionId)
        .set('CollegeId', params.collegeId)
        .set('InstallmentId', this.toInstallmentIdParam(params.installmentId))
        .set('ClassId', params.classId),
    });
  }

  getFeeCollectionReport(
    params: IFeeCollectionReportParams
  ): Observable<IApiResponse<IFeeCollection | IFeeCollection[]>> {
    return this.http.get<IApiResponse<IFeeCollection | IFeeCollection[]>>(this.endpoint.collection, {
      params: new HttpParams()
        .set('startDate', params.startDate)
        .set('EndDate', params.endDate)
        .set('CollegeId', params.collegeId)
        .set('UserId', params.userId),
    });
  }

  /** API expects a single id or comma-separated ids: InstallmentId=4,5,6 */
  private toInstallmentIdParam(installmentIds: number | number[]): string {
    const ids = Array.isArray(installmentIds) ? installmentIds : [installmentIds];
    return ids.filter(id => Number.isFinite(id)).join(',');
  }
}
