import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export enum STATUS {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private readonly router = inject(Router);
  private readonly toast = inject(ToastrService);

  private readonly errorPages = [STATUS.FORBIDDEN, STATUS.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR];

  private getMessage = (error: HttpErrorResponse) => {
    if (error.status === 0) {
      const url = error.url ?? '';
      if (this.isOnlineExamApiUrl(url)) {
        return 'Cannot reach the online exam API (https://api.asterinfotech.in/onlineexam/api). Check your network connection.';
      }
      return 'Cannot reach the server. Check your network connection.';
    }

    if (error.error?.message) {
      return error.error.message;
    }

    if (typeof error.error === 'string' && error.error.trim()) {
      return error.error.trim();
    }

    if (error.error?.msg) {
      return error.error.msg;
    }

    return `${error.status} ${error.statusText}`;
  };

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => this.handleError(error, req)));
  }

  private handleError(error: HttpErrorResponse, req: HttpRequest<unknown>) {
    const isLoginRequest = req.url.includes('ValidateUser');
    const isOptionalProfileRequest =
      req.url.includes('GetFacultyDetail') || req.url.includes('GetMenu');
    const isOnlineExamApi = this.isOnlineExamApiUrl(req.url) || this.isOnlineExamApiUrl(error.url ?? '');

    // Online exam APIs (question bank, paper, online-exams) must not redirect to /404|/403|/500
    // when empty/missing resources return those statuses — keep the current screen and toast.
    if (this.errorPages.includes(error.status) && isOnlineExamApi) {
      console.error('ERROR', error);
      this.toast.error(this.getMessage(error));
      return throwError(() => error);
    }

    if (this.errorPages.includes(error.status)) {
      this.router.navigateByUrl(`/${error.status}`, {
        skipLocationChange: true,
      });
    } else if (!isLoginRequest) {
      console.error('ERROR', error);
      if (!(error.status === STATUS.UNAUTHORIZED && isOptionalProfileRequest)) {
        this.toast.error(this.getMessage(error));
      }
      if (
        error.status === STATUS.UNAUTHORIZED &&
        !this.router.url.includes('/login') &&
        !isOptionalProfileRequest
      ) {
        this.router.navigateByUrl('/login');
      }
    }

    return throwError(() => error);
  }

  private isOnlineExamApiUrl(url: string): boolean {
    const value = url.toLowerCase();
    return (
      value.includes('onlineexam') ||
      value.includes('online-exams') ||
      value.includes('question-bank') ||
      value.includes('onlinequestionpaper')
    );
  }
}
