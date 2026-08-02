import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '@core';
import { onlineExamApiEndpoint, onlineExamApiRelativeRoutes, onlineExamApiUrl } from '@core/constants';
import { IApiResponse } from '../../interfaces/ICommon';

/** UI / list model used by question master and question paper screens. */
export interface QuestionMasterOption {
  slNo: number;
  opt: string;
  optionDescription: string;
  trueOption: boolean;
}

export interface QuestionMasterPayload {
  questionId?: number;
  question: string;
  className: string;
  examName: string;
  seqNo: number;
  subjectName: string;
  questionType: string;
  questionOptions?: QuestionMasterOption[];
  /** Correct option letter from list API (A/B/C/D). */
  correctAns?: string;
}

/** POST /question-bank request body. */
export interface QuestionBankAnswerOption {
  optionDetail: string;
  answerStatus: boolean;
  ansOption: string;
}

export interface QuestionBankAddRequest {
  question: string;
  className: string;
  examName: string;
  seqNo: number;
  subjectName: string;
  questionType: string;
  questionAnsOptions: QuestionBankAnswerOption[];
}

/** GET /question-bank query params. */
export interface QuestionBankListQuery {
  ClassName: string;
  SubjectName: string;
  ExamName: string;
}

/** Optional filter context applied when API rows omit class/exam/subject. */
export interface QuestionBankListContext {
  className?: string;
  examName?: string;
  subjectName?: string;
}

/** GET /question-bank response item. */
export interface QuestionBankListItem {
  questionId?: number;
  question?: string;
  questionType?: string;
  a?: string;
  b?: string;
  c?: string;
  d?: string;
  correctAns?: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuestionMasterService {
  private readonly api = inject(ApiService);
  private readonly http = inject(HttpClient);
  private readonly endpoints = onlineExamApiEndpoint;

  addQuestion(payload: QuestionMasterPayload): Observable<IApiResponse<unknown>> {
    const body = this.toAddRequest(payload);
    return this.api.post<IApiResponse<unknown>>(this.endpoints.questionMaster.add, body);
  }

  listQuestions(
    query: QuestionBankListQuery
  ): Observable<IApiResponse<QuestionBankListItem[] | QuestionBankListItem>> {
    const params = new HttpParams()
      .set('ClassName', query.ClassName)
      .set('SubjectName', query.SubjectName)
      .set('ExamName', query.ExamName);

    return this.http
      .get(onlineExamApiUrl(onlineExamApiRelativeRoutes.questionMaster.list), {
        params,
        headers: { Accept: 'text/plain' },
        responseType: 'text',
      })
      .pipe(
        map(
          text =>
            this.normalizeApiResponse(text) as IApiResponse<
              QuestionBankListItem[] | QuestionBankListItem
            >
        )
      );
  }

  toPayload(
    item: QuestionBankListItem,
    index = 0,
    context?: QuestionBankListContext
  ): QuestionMasterPayload {
    const correctAns = (item.correctAns ?? '').trim().toUpperCase();
    const optionValues: Array<{ opt: string; description: string }> = [
      { opt: 'A', description: item.a?.trim() ?? '' },
      { opt: 'B', description: item.b?.trim() ?? '' },
      { opt: 'C', description: item.c?.trim() ?? '' },
      { opt: 'D', description: item.d?.trim() ?? '' },
    ];

    return {
      questionId: item.questionId,
      question: item.question?.trim() ?? '',
      className: context?.className?.trim() ?? '',
      examName: context?.examName?.trim() ?? '',
      seqNo: index + 1,
      subjectName: context?.subjectName?.trim() ?? '',
      questionType: item.questionType?.trim() ?? 'MCQ',
      correctAns: correctAns || undefined,
      questionOptions: optionValues.map((option, optionIndex) => ({
        slNo: optionIndex + 1,
        opt: option.opt,
        optionDescription: option.description,
        trueOption: correctAns === option.opt,
      })),
    };
  }

  normalizeListItems(
    data: QuestionBankListItem[] | QuestionBankListItem,
    context?: QuestionBankListContext
  ): QuestionMasterPayload[] {
    const rows = Array.isArray(data) ? data : [data];
    return rows.map((item, index) => this.toPayload(item, index, context)).filter(item => item.question);
  }

  private toAddRequest(payload: QuestionMasterPayload): QuestionBankAddRequest {
    return {
      question: payload.question,
      className: payload.className,
      examName: payload.examName,
      seqNo: payload.seqNo,
      subjectName: payload.subjectName,
      questionType: payload.questionType,
      questionAnsOptions: (payload.questionOptions ?? []).map(option => ({
        optionDetail: option.optionDescription,
        answerStatus: option.trueOption,
        ansOption: option.opt,
      })),
    };
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
