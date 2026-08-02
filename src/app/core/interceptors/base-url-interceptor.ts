import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private hasHttpScheme = (url: string) => new RegExp('^http(s)?://', 'i').test(url);

  /**
   * Requests for app-hosted static files (e.g. `/i18n/en-US.json`) must NOT be
   * prefixed with an API base URL.
   */
  private isAppAssetUrl(url: string) {
    const normalized = url.replace(/^\.?\//, '');
    if (normalized.startsWith('i18n/')) return true;
    if (normalized.startsWith('assets/')) return true;

    return /\.(json|svg|png|jpe?g|gif|webp|ico|css|js|map|txt|woff2?|ttf|eot)$/i.test(normalized);
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    if (this.hasHttpScheme(req.url) || this.isAppAssetUrl(req.url)) {
      return next.handle(req);
    }

    // All module APIs use absolute URLs from *_api_endpoint.ts — pass through unchanged.
    return next.handle(req);
  }
}
