import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ISession, SessionResponse } from '../interfaces/isession';
import { Observable } from 'rxjs';
import { apiEndpoint } from '@core/constants/apiendpoint';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  protected readonly http: HttpClient = inject(HttpClient);

  private endpoints = apiEndpoint; 

  //add session
  addSession(session:ISession):Observable<SessionResponse>{
    return this.http.post<SessionResponse>(this.endpoints.ADD_SESSION, session);
  }
  updateSession(session:ISession):Observable<SessionResponse>{
    return this.http.post<SessionResponse>(this.endpoints.UPDATE_SESSION, session);
  }
  deleteSession(id:number):Observable<SessionResponse>{
    return this.http.delete<SessionResponse>(this.endpoints.DELETE_SESSION + `?id=${id}`);
  }

  //get session list
  getSessionList():Observable<SessionResponse>{
    return this.http.get<SessionResponse>(this.endpoints.SESSION_LIST);
  }


}
