import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ISession, SessionResponse } from '../interfaces/isession';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  protected readonly http: HttpClient = inject(HttpClient);
  private baseUrl = environment.baseUrl;
  private addSessionUrl = '/Session/AddSession';
  private updateSessionUrl = '/Session/UpdateSession';
  private deleteSessionUrl = '/Session/DeleteSession';
  private sessionListUrl = '/Session/SessionList';

  //add session
  addSession(session:ISession):Observable<SessionResponse>{
    return this.http.post<SessionResponse>(this.baseUrl + this.addSessionUrl, session);
  }
  updateSession(session:ISession):Observable<SessionResponse>{
    return this.http.post<SessionResponse>(this.baseUrl + this.updateSessionUrl, session);
  }
  deleteSession(id:number):Observable<SessionResponse>{
    return this.http.delete<SessionResponse>(this.baseUrl + this.deleteSessionUrl + `?id=${id}`);
  } 

  //get session list
  getSessionList():Observable<SessionResponse>{
    return this.http.get<SessionResponse>(this.baseUrl + this.sessionListUrl);
  }


}
