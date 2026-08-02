import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@core/authentication';
import { API_BASE_URLS } from '@core/constants';
import { catchError, tap, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private readonly router = inject(Router);
  private readonly tokenService = inject(TokenService);

  private hasHttpScheme = (url: string) => new RegExp('^http(s)?://', 'i').test(url);

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const handler = () => {
      if (req.url.includes('/auth/logout')) {
        this.router.navigateByUrl('/login');
      }
    };

    if (this.tokenService.valid() && this.shouldAppendToken(req.url)) {
      return next
        .handle(
          req.clone({
            headers: req.headers.append('Authorization', this.tokenService.getBearerToken()),
            withCredentials: false,
          })
        )
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.tokenService.clear();
              sessionStorage.removeItem('schoolCode');
              localStorage.removeItem('schoolCode');
            }
            return throwError(() => error);
          }),
          tap(() => handler())
        );
    }

    return next.handle(req).pipe(tap(() => handler()));
  }

  private shouldAppendToken(url: string) {
    if (!this.hasHttpScheme(url)) {
      return this.isModuleApiUrl(url);
    }

    return this.includeKnownApiBaseUrl(url);
  }

  private isModuleApiUrl(url: string): boolean {
    const normalized = url.replace(/^\.?\//, '');
    return (
      normalized.startsWith('master/api') ||
      normalized.startsWith('student/api') ||
      normalized.startsWith('onlineexam/api') ||
      normalized.startsWith('examapi') ||
      normalized.startsWith('feeapi')
    );
  }

  private includeKnownApiBaseUrl(url: string) {
    const masterBase = API_BASE_URLS.master.replace(/\/$/, '');
    const studentBase = API_BASE_URLS.student.replace(/\/$/, '');
    const onlineExamBase = API_BASE_URLS.onlineExam.replace(/\/$/, '');
    const examBase = API_BASE_URLS.exam.replace(/\/$/, '');
    const feeBase = API_BASE_URLS.fee.replace(/\/$/, '');
    return (
      new RegExp(`^${masterBase}`, 'i').test(url) ||
      new RegExp(`^${studentBase}`, 'i').test(url) ||
      new RegExp(`^${onlineExamBase}`, 'i').test(url) ||
      new RegExp(`^${examBase}`, 'i').test(url) ||
      new RegExp(`^${feeBase}`, 'i').test(url)
    );
  }
}
