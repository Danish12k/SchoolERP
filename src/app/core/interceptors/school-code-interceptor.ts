import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URLS } from '@core/constants';

@Injectable()
export class SchoolCodeInterceptor implements HttpInterceptor {
  private hasHttpScheme = (url: string) => new RegExp('^http(s)?://', 'i').test(url);

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

  private includeKnownApiBase(url: string) {
    if (!this.hasHttpScheme(url)) {
      return this.isModuleApiUrl(url);
    }

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

  private isAppAssetUrl(url: string) {
    const normalized = url.replace(/^\.?\//, '');
    if (normalized.startsWith('i18n/')) return true;
    if (normalized.startsWith('assets/')) return true;

    return /\.(json|svg|png|jpe?g|gif|webp|ico|css|js|map|txt|woff2?|ttf|eot)$/i.test(normalized);
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    if (this.hasHttpScheme(req.url) && !this.includeKnownApiBase(req.url)) {
      return next.handle(req);
    }

    if (this.isAppAssetUrl(req.url)) {
      return next.handle(req);
    }

    const schoolCode =
      sessionStorage.getItem('schoolCode')?.trim() ||
      localStorage.getItem('schoolCode')?.trim();
    if (!schoolCode) {
      return next.handle(req);
    }

    return next.handle(
      req.clone({
        headers: req.headers.set('X-School-Code', schoolCode),
      })
    );
  }
}

