import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/ICommon';
import { ISection } from '../interfaces/ISectionTest';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IAssignSection, IAssignSectionList } from '../interfaces/IClassAndSection';
import { ApiService } from '@core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private readonly api = inject(ApiService);

  private endPoints = apiEndpoint

  getSectionList(): Observable<IApiResponse<ISection>> {
    return this.api.get<IApiResponse<ISection>>(this.endPoints.section.list);
  }

  addSection(sectionName:string):Observable<IApiResponse<ISection>>{
    const body :ISection  =  {sectionId: 0, sectionName: sectionName}
    return this.api.post<IApiResponse<ISection>>(this.endPoints.section.add,body)
  }

  updateSection(SectionBody:ISection):Observable<IApiResponse<ISection>>{
    return this.api.post<IApiResponse<ISection>>(this.endPoints.section.update,SectionBody);
  }

  assignSection(body:IAssignSection[] ):Observable<IApiResponse<IAssignSectionList>>{
    return this.api.post<IApiResponse<IAssignSectionList>>(this.endPoints.section.assignSection,body)
  }
  

}
