import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private readonly baseUrl = inject(BASE_URL, { optional: true });

  private hasHttpScheme = (url: string) => new RegExp('^http(s)?://', 'i').test(url);

  /**
   * Requests for app-hosted static files (e.g. `/i18n/en-US.json`) must NOT be
   * prefixed with the API base URL, otherwise they will be requested from the API
   * domain and 404 at startup.
   */
  private isAppAssetUrl(url: string) {
    const normalized = url.replace(/^\.?\//, ''); // '/i18n/x' -> 'i18n/x'
    if (normalized.startsWith('i18n/')) return true;
    if (normalized.startsWith('assets/')) return true;

    // Common static file extensions requested from app origin
    return /\.(json|svg|png|jpe?g|gif|webp|ico|css|js|map|txt|woff2?|ttf|eot)$/i.test(normalized);
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    // Absolute URLs (http/https) should never be modified.
    if (this.hasHttpScheme(req.url)) {
      return next.handle(req);
    }

    // Never prefix app static files.
    if (this.isAppAssetUrl(req.url)) {
      return next.handle(req);
    }

    // If no base URL provided, pass through.
    if (!this.baseUrl) {
      return next.handle(req);
    }

    return next.handle(req.clone({ url: this.prependBaseUrl(req.url) }));
  }

  private prependBaseUrl(url: string) {
    return [this.baseUrl?.replace(/\/$/g, ''), url.replace(/^\.?\//, '')]
      .filter(val => val)
      .join('/');
  }
}
