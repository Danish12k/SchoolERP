import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { mergeMap, of, throwError } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private readonly toast = inject(ToastrService);

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (
      !req.url.includes('/api/') ||
      req.url.includes('ValidateUser') ||
      req.url.includes('onlineexam/api')
    ) {
      return next.handle(req);
    }

    return next.handle(req).pipe(mergeMap((event: HttpEvent<any>) => this.handleOkReq(event)));
  }

  private handleOkReq(event: HttpEvent<any>) {
    if (event instanceof HttpResponse) {
      const body: any = event.body;
      if (body && typeof body === 'object' && 'code' in body && body.code !== 0) {
        if (body.success === true || body.Success === true) {
          return of(event);
        }
        if (body.msg) {
          this.toast.error(body.msg);
        }
        return throwError(() => body);
      }
    }
    return of(event);
  }
}
