import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '@core/ui/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private readonly loading = inject(LoadingService);

  private hasHttpScheme = (url: string) => new RegExp('^http(s)?://', 'i').test(url);

  private isAppAssetUrl(url: string) {
    const normalized = url.replace(/^\.?\//, ''); // '/i18n/x' -> 'i18n/x'
    if (normalized.startsWith('i18n/')) return true;
    if (normalized.startsWith('assets/')) return true;
    return /\.(json|svg|png|jpe?g|gif|webp|ico|css|js|map|txt|woff2?|ttf|eot)$/i.test(normalized);
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    // Only show spinner for API calls, not for app static files.
    if (!this.hasHttpScheme(req.url) && this.isAppAssetUrl(req.url)) {
      return next.handle(req);
    }

    this.loading.start();
    return next.handle(req).pipe(finalize(() => this.loading.stop()));
  }
}

