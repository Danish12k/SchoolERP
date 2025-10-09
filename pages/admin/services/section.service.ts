import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/ICommon';
import { ISection } from '../interfaces/ISectionTest';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '@core/constants/apiendpoint';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  protected readonly http = inject(HttpClient);

  private endPoints = apiEndpoint

  getSectionList(): Observable<IApiResponse<ISection>> {
    return this.http.get<IApiResponse<ISection>>(this.endPoints.section.list);
  }

  addSection(sectionName:string):Observable<IApiResponse<ISection>>{
    const body :ISection  =  {sectionId: 0, sectionName: sectionName}
    return this.http.post<IApiResponse<ISection>>(this.endPoints.section.add,body)
  }

  updateSection(SectionBody:ISection):Observable<IApiResponse<ISection>>{
    return this.http.post<IApiResponse<ISection>>(this.endPoints.section.update,SectionBody);
    //return this.http.put<IApiResponse<ISection>>(this.endPoints.section.update,SectionBody)
  }

}
