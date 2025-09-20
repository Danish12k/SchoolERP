import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, iif, map, merge, of, share, switchMap, tap } from 'rxjs';
import { filterObject, isEmptyObject } from './helpers';
import { User } from './interface';
import { LoginService } from './login.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginService = inject(LoginService);
  private readonly tokenService = inject(TokenService);

  private user$ = new BehaviorSubject<User>({});
  private change$ = merge(
    this.tokenService.change(),
    this.tokenService.refresh().pipe(switchMap(() => this.refresh()))
  ).pipe(
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
      tap(res => {
        // Map API response to expected Token interface
        const tokenObj = {
          access_token: res.token,  // <--- important
          refresh_token: undefined, // if API returns it later, map here
          exp: this.parseJwtExp(res.token), // optional: extract exp from JWT
          token_type: 'bearer',
        };
        this.tokenService.set(tokenObj);
      }),
      map(() => this.check())
    );
  }

  // Utility to extract exp from JWT
  private parseJwtExp(token: string): number | undefined {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp;
    } catch (e) {
      return undefined;
    }
  }


  refresh() {
    return this.loginService
      .refresh(filterObject({ refresh_token: this.tokenService.getRefreshToken() }))
      .pipe(
        catchError(() => of(undefined)),
        tap(token => this.tokenService.set(token)),
        map(() => this.check())
      );
  }

  logout() {
    return this.loginService.logout().pipe(
      tap(() => this.tokenService.clear()),
      map(() => !this.check())
    );
  }

  user() {
    debugger;
    return this.user$.pipe(share());
  }

  menu() {
    return iif(() => this.check(), this.loginService.menu(), of([]));
  }

  setUser(user: User) {
    debugger;
    this.user$.next(user);
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
    return this.loginService.me().pipe(tap(user => this.user$.next(user)));

    // instead, return the static user if you set it
   /*  return of({ name: 'Admin', email: 'admin@example.com' }).pipe(
      tap(user => this.user$.next(user))
    ); */
    //return iif(() => this.check(), this.loginService.getUserDetails(), of([]));
    return this.loginService.getUserDetails().pipe(tap(user => this.user$.next(user)));
    debugger
   /*  const currentUser1 = this.user$.getValue();
    return of({ name: currentUser1.name, email: currentUser1.email, avatar: currentUser1.avatar }).pipe(
      tap(user => this.user$.next(user))
    ); */
  }


}
