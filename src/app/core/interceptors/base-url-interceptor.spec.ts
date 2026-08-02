import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BASE_URL, BaseUrlInterceptor } from './base-url-interceptor';

describe('BaseUrlInterceptor', () => {
  let httpMock: HttpTestingController;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: BASE_URL, useValue: 'https://api.asterinfotech.in/master/api' },
        { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
  });

  afterEach(() => httpMock.verify());

  it('should pass through relative API paths unchanged', () => {
    http.get('/me').subscribe(data => expect(data).toEqual({ success: true }));
    httpMock.expectOne('/me').flush({ success: true });
  });

  it('should pass through absolute module API URLs unchanged', () => {
    const url = 'https://api.asterinfotech.in/master/api/User/ValidateUser';
    http.post(url, {}).subscribe(data => expect(data).toEqual({ success: true }));
    httpMock.expectOne(url).flush({ success: true });
  });

  it('should not rewrite i18n asset paths', () => {
    http.get('/i18n/en-US.json').subscribe(data => expect(data).toEqual({}));
    httpMock.expectOne('/i18n/en-US.json').flush({});
  });
});
