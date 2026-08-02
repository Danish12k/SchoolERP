import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { Menu, MenuChildrenItem, MenuResponse, MenuService } from '@core';
import { masterApiEndpoint } from '@core/constants/master_api_endpoint';
import { Token, User } from './interface';

export interface LoginResponse {
  token?: string;
  access_token?: string;
  accessToken?: string;
  message?: string;
  errorMessage?: string | null;
  data?: any;
  success?: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class LoginService {

  private mapApiToMenu(apiItems: any[] = []): Menu[] {
    if (!apiItems?.length) {
      return [];
    }

    const mapped = apiItems.map(item => ({
      route: item.route ?? '',
      name: item.name ?? '',
      type: item.type ?? 'link',
      icon: item.icon ?? '',
      seqNo: this.readExplicitSeqNo(item),
      label: item.label
        ? { color: item.label.color, value: item.label.value }
        : undefined,
      badge: item.badge
        ? { color: item.badge.color, value: item.badge.value }
        : undefined,
      permissions: undefined,
      children: item.children?.length ? this.mapApiToChildren(item.children) : [],
    }));

    return this.sortBySeqNo(mapped);
  }

  private mapApiToChildren(apiChildren: any[] = []): MenuChildrenItem[] {
    const mapped = apiChildren.map(child => ({
      route: child.route ?? '',
      name: child.name ?? '',
      type: child.type ?? 'link',
      seqNo: this.readExplicitSeqNo(child),
      children: child.children?.length ? this.mapApiToChildren(child.children) : [],
      permissions: undefined,
    }));

    return this.sortBySeqNo(mapped);
  }

  private sortBySeqNo<T extends { seqNo?: number }>(items: T[]): T[] {
    return items
      .map((item, index) => ({ item, index }))
      .sort((a, b) => {
        const seqA = a.item.seqNo ?? Number.MAX_SAFE_INTEGER;
        const seqB = b.item.seqNo ?? Number.MAX_SAFE_INTEGER;
        if (seqA !== seqB) {
          return seqA - seqB;
        }
        return a.index - b.index;
      })
      .map(({ item }) => item);
  }

  private readExplicitSeqNo(item: Record<string, unknown>): number | undefined {
    const value = item['seqNo'] ?? item['SeqNo'] ?? item['sequenceNo'] ?? item['menuSeqNo'];
    if (value == null || value === '') {
      return undefined;
    }
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
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

  /**
   * POST /master/api/User/ValidateUser
   * Headers: Accept star-slash-star, X-School-Code (interceptor), Content-Type application/json
   * Body: { loginName, password }
   */
  login(loginName: string, password: string, rememberMe = false) {
    return this.http
      .post<LoginResponse | string>(
        masterApiEndpoint.user.validate,
        { loginName, password },
        { headers: { Accept: '*/*' } }
      )
      .pipe(
        map(raw => this.normalizeLoginResponse(raw)),
        map((res: LoginResponse) => {
          const token = this.extractToken(res);
          return { ...res, token, access_token: token } as LoginResponse;
        })
      );
  }

  private extractToken(res: LoginResponse): string | undefined {
    return (
      res?.token ??
      res?.access_token ??
      res?.accessToken ??
      res?.data?.token ??
      res?.data?.access_token ??
      res?.data?.accessToken ??
      (typeof res?.data === 'string' ? res.data : undefined)
    );
  }

  private normalizeLoginResponse(raw: string | LoginResponse): LoginResponse {
    if (typeof raw === 'object' && raw !== null) {
      return raw;
    }

    const trimmed = String(raw ?? '').trim();
    if (!trimmed) {
      return {};
    }

    try {
      return JSON.parse(trimmed) as LoginResponse;
    } catch {
      return {};
    }
  }

  /** No refresh-token API — ValidateUser returns only access token. */
  refresh(_params: Record<string, unknown>) {
    return throwError(() => new Error('Refresh token is not supported by this API.'));
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/me');
  }
  ;


  menu(): Observable<Menu[]> {
    return this.http.get<any>(masterApiEndpoint.menu.get).pipe(
      map(res => this.mapApiToMenu(res.data)),
      catchError(err => {
        console.error('❌ Menu API error:', err);
        return throwError(() => err);
      })
    );
  }


  getUserDetails(): Observable<User> {
    return this.http.get<any>(masterApiEndpoint.faculty.getDetail).pipe(
      map(res => {
        const data = res?.data ?? res;
        const rows = Array.isArray(data) ? data : data ? [data] : [];
        const mapped = this.mapUserDetails(rows);
        return mapped[0] ?? {};
      }),
      catchError(err => {
        console.error('User details API error:', err);
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
