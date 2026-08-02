export interface IOnlineExamScheduleRow {
  onlineExamId?: number;
  subjectId: number;
  subjectName: string;
  /** ISO date string (YYYY-MM-DD) for API submit. */
  examDate: string;
  /** Datepicker model — two-way bound; kept in sync with examDate. */
  examDateModel: Date | null;
  examTime: string;
  duration: string;
  examType: string;
}

/** POST /online-exams request item. */
export interface IOnlineExamAddPayload {
  examId: number;
  examDate: string;
  examTime: string;
  examDuration: number;
  subjectId: number;
  classId: number;
  publishStatus: boolean;
  examType: string;
}

export interface IOnlineExamAddContext {
  examId: number;
  classId: number;
  userId?: number;
}

export interface IOnlineExamListItem {
  onlineExamId?: number;
  examId?: number;
  examName?: string;
  classId?: number;
  courseName?: string;
  subjectId?: number;
  subjectName?: string;
  examDate?: string;
  examTime?: string;
  duration?: string;
  examDuration?: number;
  examType?: string;
  publishStatus?: string;
}

export interface IOnlineExamListQuery {
  ExamId: number;
  ClassId: number;
}
