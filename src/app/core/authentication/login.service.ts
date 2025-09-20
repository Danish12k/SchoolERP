import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { Menu, MenuChildrenItem, MenuResponse, MenuService } from '@core';
import { Token, User } from './interface';
import { debug } from 'console';

export interface LoginResponse {
  token: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})

export class LoginService {

  private mapApiToMenu(apiItems: any[] = []): Menu[] {
    if (!apiItems || apiItems.length === 0) {
      return [];
    }
    // Deep clone the list first
    const clonedItems = JSON.parse(JSON.stringify(apiItems));
    clonedItems.map((item: any) => ({
      route: item.route ?? '',
      name: item.name ?? '',
      type: item.type ?? 'link',
      icon: item.icon ?? '',
      label: item.label
        ? { color: item.label.color, value: item.label.value }
        : undefined,
      badge: item.badge
        ? { color: item.badge.color, value: item.badge.value }
        : undefined,
      permissions: undefined, // not coming from API
      children: item.children && item.children.length > 0
        ? this.mapApiToChildren(item.children) // go deeper
        : []
    }));
    return clonedItems;
  }



  private mapApiToChildren(apiChildren: any[] = []): MenuChildrenItem[] {
   
    const clonedChildren = JSON.parse(JSON.stringify(apiChildren));

    return clonedChildren.map((child: any) => ({
      route: child.route ?? '',        // one by one
      name: child.name ?? '',
      type: child.type ?? 'link',
      children: child.children && child.children.length > 0
        ? this.mapApiToChildren(child.children) // recurse after clone
        : [],
      permissions: undefined           // extra property (not from API)
    }));
  }
private mapUserDetails(userDetails: any[] = []): User[] {
  if (!userDetails || userDetails.length === 0) {
    return [];
  }

  // Step 1: deep clone the incoming data
  const clonedDetails: any[] = JSON.parse(JSON.stringify(userDetails));

  // Step 2: map cloned items into User[]
  const mappedDetails: User[] = clonedDetails.map((item: any) => ({
    name: item.mobile ?? '',    // careful: "mobile" is being used as name here
    email: item.emailId ?? '',
    avatar: item.photo ?? '',
    // roles: item.roles ?? []
  }));

  // Step 3: return mapped list
  return mappedDetails;
}


  protected readonly http = inject(HttpClient);
  private readonly menuService = inject(MenuService);

  private loginUrl = 'https://api.asterinfotech.com/api/User/ValidateUser';
  login(loginName: string, password: string, rememberMe = false) {
    return this.http.post<LoginResponse>(this.loginUrl, { loginName, password });
    //return this.http.post<Token>('/auth/login', { username, password, rememberMe });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/me');
  }
  ;


  menu(): Observable<Menu[]> {

    return this.http.get<any>('https://api.asterinfotech.com/api/Menu/GetMenu').pipe(
    
      map(res => this.mapApiToMenu(res.data)), // convert API response → Menu[]
     
      catchError(err => {
        console.error('❌ Menu API error:', err);
        return throwError(() => err);
      })
    );
  }


  getUserDetails(): Observable<User> {
    debugger
    return this.http.get<any>('https://api.asterinfotech.com/api/Faculty/GetFacultyDetail').pipe(
      tap(res => {
        console.log('✅ User Details API response:', res);
      }),
      map(res => this.mapUserDetails(res.data)),
      tap(mapped=>{console.log('✅ Mapped UserDetails[]:', mapped);
        }),
      catchError(err => {
        console.error('❌ User Details API error:', err);
        return throwError(() => err);
      })
    );
  }

  /*  menu() {
     //debugger
     return this.http.get<{ menu: Menu[] }>('/me/menu').pipe(map(res => res.menu));
   }
  */

}
