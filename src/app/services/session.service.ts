import { inject, Injectable } from '@angular/core';
import { ISession, SessionResponse } from '../interfaces/isession';
import { Observable } from 'rxjs';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { ApiService } from '@core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly api = inject(ApiService);

  private endpoints = apiEndpoint; 

  //add session
  addSession(session: ISession):Observable<SessionResponse>{
    return this.api.post<SessionResponse>(this.endpoints.session.add, session);
  }
  updateSession(session:ISession):Observable<SessionResponse>{
    return this.api.post<SessionResponse>(this.endpoints.session.update, session);
  }
  deleteSession(id:number):Observable<SessionResponse>{
    return this.api.delete<SessionResponse>(this.endpoints.session.delete, { id });
  }

  //get session list
  getSessionList():Observable<SessionResponse>{
    return this.api.get<SessionResponse>(this.endpoints.session.list);
  }


}
