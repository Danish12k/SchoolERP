import { QuestionMasterPayload } from '../services/onlineexamservice/question-master.service';

export interface IOnlineQuestionPaperListQuery {
  ClassName: string;
  ExamName: string;
  SubjectName: string;
}

/** POST /online-question-papers body item (sent as an array). */
export interface IOnlineQuestionPaperAddItem {
  onlineExamId: number;
  questionId: number;
  examMarks: number;
}

/** UI row for master / selected paper lists. */
export interface IQuestionPaperItem extends QuestionMasterPayload {
  marks?: number;
  paperId?: number;
  onlineExamId?: number;
}
