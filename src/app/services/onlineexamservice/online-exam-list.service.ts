import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { onlineExamApiRelativeRoutes, onlineExamApiUrl } from '@core/constants';
import { IApiResponse } from '../../interfaces/ICommon';
import {
  IOnlineExamAddContext,
  IOnlineExamAddPayload,
  IOnlineExamListItem,
  IOnlineExamListQuery,
  IOnlineExamScheduleRow,
} from '../../interfaces/IOnlineExam';

@Injectable({
  providedIn: 'root',
})
export class OnlineExamListService {
  private readonly http = inject(HttpClient);

  listOnlineExams(query: IOnlineExamListQuery): Observable<IApiResponse<IOnlineExamListItem[] | IOnlineExamListItem>> {
    const params = new HttpParams()
      .set('ExamId', String(query.ExamId))
      .set('ClassId', String(query.ClassId));

    return this.http
      .get(onlineExamApiUrl(onlineExamApiRelativeRoutes.onlineExam.list), {
        params,
        headers: { Accept: '*/*' },
      })
      .pipe(
        map(body => this.normalizeApiResponse(body) as IApiResponse<IOnlineExamListItem[] | IOnlineExamListItem>)
      );
  }

  /** Build POST body — only rows where a calendar date was selected. */
  buildAddPayloads(
    rows: IOnlineExamScheduleRow[],
    context: IOnlineExamAddContext
  ): IOnlineExamAddPayload[] {
    return rows
      .filter(row => row.examDate?.trim())
      .map(row => this.toAddPayload(row, context));
  }

  /** POST https://api.asterinfotech.in/onlineexam/api/online-exams */
  addOnlineExamList(payloads: IOnlineExamAddPayload[]): Observable<IApiResponse<unknown>> {
    if (!payloads.length) {
      return of({
        success: false,
        message: 'No exam schedule selected.',
        data: null,
      });
    }

    return this.http
      .post(onlineExamApiUrl(onlineExamApiRelativeRoutes.onlineExam.add), payloads, {
        headers: { Accept: 'text/plain' },
        responseType: 'text',
      })
      .pipe(map(text => this.normalizeApiResponse(text)));
  }

  private toAddPayload(row: IOnlineExamScheduleRow, context: IOnlineExamAddContext): IOnlineExamAddPayload {
    return {
      examId: Number(context.examId),
      examDate: this.toExamDateIso(row.examDate),
      examTime: this.formatExamTimeForApi(row.examTime),
      examDuration: this.parseDurationMinutes(row.duration),
      subjectId: Number(row.subjectId),
      classId: Number(context.classId),
      publishStatus: true,
      examType: this.formatExamTypeForApi(row.examType),
    };
  }

  private toExamDateIso(dateValue: string): string {
    const [year, month, day] = dateValue.trim().split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0)).toISOString();
  }

  /** API format: 24-hour time `15:00` (e.g. 10:00 PM → `22:00`). */
  private formatExamTimeForApi(timeValue: string): string {
    const trimmed = timeValue.trim();

    const h24Match = trimmed.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
    if (h24Match && !/am|pm/i.test(trimmed)) {
      const hh = String(Number(h24Match[1])).padStart(2, '0');
      return `${hh}:${h24Match[2]}`;
    }

    const match = trimmed.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) {
      return trimmed;
    }

    let hours12 = Number(match[1]);
    const minutes = match[2];
    const meridiem = match[3].toUpperCase();

    let hours24 = hours12;
    if (meridiem === 'PM' && hours12 !== 12) {
      hours24 += 12;
    }
    if (meridiem === 'AM' && hours12 === 12) {
      hours24 = 0;
    }

    const hh = String(hours24).padStart(2, '0');
    return `${hh}:${minutes}`;
  }

  private formatExamTypeForApi(examType: string): string {
    return examType?.trim().toLowerCase() || 'optional';
  }

  private parseDurationMinutes(duration: string): number {
    const match = duration.trim().match(/(\d+)/);
    return match ? Number(match[1]) : 0;
  }

  private normalizeApiResponse(raw: unknown): IApiResponse<unknown> {
    if (typeof raw === 'object' && raw !== null) {
      return this.mapApiBody(raw as Record<string, unknown>);
    }

    const trimmed = String(raw ?? '').trim();
    if (!trimmed) {
      return { success: false, message: 'Empty response from server.', data: null };
    }

    try {
      return this.mapApiBody(JSON.parse(trimmed) as Record<string, unknown>);
    } catch {
      return { success: true, message: trimmed, data: null };
    }
  }

  private mapApiBody(body: Record<string, unknown>): IApiResponse<unknown> {
    const success = this.readSuccessFlag(body);
    const message = String(body['message'] ?? body['Message'] ?? '').trim();
    const data = body['data'] ?? body['Data'] ?? null;
    const totalRecord = body['totalRecord'] ?? body['TotalRecord'];
    return {
      success,
      message,
      data: data as unknown,
      ...(totalRecord != null ? { totalRecord: Number(totalRecord) } : {}),
    };
  }

  private readSuccessFlag(body: Record<string, unknown>): boolean {
    const value = body['success'] ?? body['Success'];
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    if (typeof value === 'number') {
      return value === 1;
    }

    const data = body['data'] ?? body['Data'];
    return Array.isArray(data) && data.length > 0;
  }
}
