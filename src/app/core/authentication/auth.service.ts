import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, iif, map, of, share, switchMap, tap, throwError } from 'rxjs';
import { filterObject, isEmptyObject, readJwtExp } from './helpers';
import { User } from './interface';
import { LoginService } from './login.service';
import { TokenService } from './token.service';
import { JwtToken } from './token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginService = inject(LoginService);
  private readonly tokenService = inject(TokenService);

  private user$ = new BehaviorSubject<User>({});
  private change$ = this.tokenService.change().pipe(
    switchMap(() => this.assignUser()),
    share()
  );

  init() {
    return new Promise<void>(resolve => this.change$.subscribe(() => resolve()));
  }

  change() {
    return this.change$;
  }

  check() {
    return this.tokenService.valid();
  }

  //login(username: string, password: string, rememberMe = false) {
  //return this.loginService.login(username, password, rememberMe).pipe(
  //tap(token => this.tokenService.set({ access_token: token.token })),
  //tap(token => console.log(token.message)),
  //map(() => this.check())
  //);
  //}
  login(username: string, password: string, rememberMe = false) {
    return this.loginService.login(username, password, rememberMe).pipe(
      switchMap(res => {
        const apiError = res?.errorMessage?.trim();
        if (apiError) {
          return throwError(
            () =>
              new HttpErrorResponse({
                status: 401,
                statusText: 'Unauthorized',
                error: { message: apiError },
              })
          );
        }

        const token = res?.token ?? res?.access_token;
        if (!token?.trim()) {
          return throwError(
            () =>
              new HttpErrorResponse({
                status: 401,
                statusText: 'Unauthorized',
                error: { message: res?.message || 'Login failed: token not returned by API.' },
              })
          );
        }

        if (!JwtToken.is(token)) {
          return throwError(
            () =>
              new HttpErrorResponse({
                status: 401,
                statusText: 'Unauthorized',
                error: { message: 'Login failed: API did not return a valid JWT token.' },
              })
          );
        }

        this.tokenService.set({
          access_token: token,
          refresh_token: undefined,
          exp: readJwtExp(token),
          token_type: 'bearer',
        });

        return of(true);
      })
    );
  }


  refresh() {
    if (!this.tokenService.getRefreshToken()) {
      return of(this.check());
    }

    return this.loginService
      .refresh(filterObject({ refresh_token: this.tokenService.getRefreshToken() }))
      .pipe(
        catchError(() => of(undefined)),
        tap(token => this.tokenService.set(token)),
        map(() => this.check())
      );
  }

  logout() {
    this.clearAuthState();
    return of(!this.check());
  }

  user() {
    return this.user$.pipe(share());
  }

  menu() {
    return iif(() => this.check(), this.loginService.menu(), of([]));
  }

  setUser(user: User) {
    this.user$.next(user);
  }

  private clearAuthState() {
    this.tokenService.clear();
    this.user$.next({});
    sessionStorage.clear();
    localStorage.removeItem('schoolCode');
  }

  /*  private assignUser() {
     if (!this.check()) {
       return of({}).pipe(tap(user => this.user$.next(user)));
     }
 
     if (!isEmptyObject(this.user$.getValue())) {
       return of(this.user$.getValue());
     }
 
     return this.loginService.me().pipe(tap(user => this.user$.next(user)));
   } */

  private assignUser() {
    if (!this.check()) {
      return of({}).pipe(tap(user => this.user$.next(user)));
    }

    const currentUser = this.user$.getValue();
    if (!isEmptyObject(currentUser)) {
      return of(currentUser); // user already set, don’t call /me
    }

    // <-- only call /me if you want to fetch from API
    //return this.loginService.me().pipe(tap(user => this.user$.next(user)));

    // instead, return the static user if you set it
    return of({ name: 'Admin', email: 'admin@example.com' }).pipe(
      tap(user => this.user$.next(user))
    );
    //return iif(() => this.check(), this.loginService.getUserDetails(), of([]));
   /*  return this.loginService.getUserDetails().pipe(tap(user => this.user$.next(user)));
    debugger */
   /*  const currentUser1 = this.user$.getValue();
    return of({ name: currentUser1.name, email: currentUser1.email, avatar: currentUser1.avatar }).pipe(
      tap(user => this.user$.next(user))
    ); */
  }


}
