import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { onlineExamApiRelativeRoutes, onlineExamApiUrl } from '@core/constants';
import { IApiResponse } from '../../interfaces/ICommon';
import {
  IOnlineQuestionPaperAddItem,
  IQuestionPaperItem,
} from '../../interfaces/IOnlineQuestionPaper';

@Injectable({
  providedIn: 'root',
})
export class OnlineQuestionPaperService {
  private readonly http = inject(HttpClient);

  /** GET online-question-papers/list?OnlineExamId= — questions allocated to an online exam. */
  listPaperQuestions(
    onlineExamId: number
  ): Observable<IApiResponse<IQuestionPaperItem[] | IQuestionPaperItem>> {
    const params = new HttpParams().set('OnlineExamId', String(onlineExamId));

    return this.http
      .get(onlineExamApiUrl(onlineExamApiRelativeRoutes.questionPaper.allocatedList), {
        params,
        headers: { Accept: 'text/plain' },
        responseType: 'text',
      })
      .pipe(
        map(
          text =>
            this.normalizeApiResponse(text) as IApiResponse<
              IQuestionPaperItem[] | IQuestionPaperItem
            >
        )
      );
  }

  /** POST online-question-papers/DeletePaper?paperId= — removes an allocated question from the paper. */
  deletePaperQuestion(paperId: number): Observable<IApiResponse<unknown>> {
    const params = new HttpParams().set('paperId', String(paperId));

    return this.http
      .post(onlineExamApiUrl(onlineExamApiRelativeRoutes.questionPaper.delete), null, {
        params,
        headers: { Accept: 'text/plain' },
        responseType: 'text',
      })
      .pipe(map(text => this.normalizeApiResponse(text)));
  }

  /**
   * POST /online-question-papers with a JSON array body:
   * [{ onlineExamId, questionId, examMarks }, ...]
   */
  submitQuestionPaper(items: IOnlineQuestionPaperAddItem[]): Observable<IApiResponse<unknown>> {
    if (!items.length) {
      return of({
        success: false,
        message: 'No questions selected for paper.',
        data: null,
      });
    }

    return this.http
      .post(onlineExamApiUrl(onlineExamApiRelativeRoutes.questionPaper.add), items, {
        headers: { Accept: 'text/plain', 'Content-Type': 'application/json' },
        responseType: 'text',
      })
      .pipe(map(text => this.normalizeApiResponse(text)));
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
