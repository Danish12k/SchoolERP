import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Generic HTTP wrapper for the app.
 *
 * Use relative URLs (e.g. `/Student/StudentList`) so interceptors can apply:
 * - BASE_URL prefixing
 * - Authorization token
 * - error handling
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  get<T>(url: string, params?: Record<string, any>): Observable<T> {
    return this.http.get<T>(url, { params: this.toParams(params) });
  }

  post<T>(url: string, body?: unknown, params?: Record<string, any>): Observable<T> {
    return this.http.post<T>(url, body ?? {}, { params: this.toParams(params) });
  }

  put<T>(url: string, body?: unknown, params?: Record<string, any>): Observable<T> {
    return this.http.put<T>(url, body ?? {}, { params: this.toParams(params) });
  }

  patch<T>(url: string, body?: unknown, params?: Record<string, any>): Observable<T> {
    return this.http.patch<T>(url, body ?? {}, { params: this.toParams(params) });
  }

  delete<T>(url: string, params?: Record<string, any>): Observable<T> {
    return this.http.delete<T>(url, { params: this.toParams(params) });
  }

  private toParams(params?: Record<string, any>): HttpParams | undefined {
    if (!params) return undefined;
    return new HttpParams({ fromObject: params });
  }
}

