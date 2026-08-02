import { onlineExamApiUrl } from './module-api-url';

/** Relative paths on online exam API (resolved via `onlineExamApiUrl`). */
export const onlineExamApiRelativeRoutes = {
  questionMaster: {
    add: '/question-bank',
    list: '/question-bank',
  },
  questionPaper: {
    add: '/online-question-papers',
    list: '/OnlineQuestionPaper/List',
    allocatedList: '/online-question-papers/list',
    delete: '/online-question-papers/DeletePaper',
  },
  onlineExam: {
    add: '/online-exams',
    list: '/online-exams/list',
  },
} as const;

/**
 * Online exam API endpoints (base URL: https://api.asterinfotech.in/onlineexam/api)
 */
export const onlineExamApiEndpoint = {
  questionMaster: {
    add: onlineExamApiUrl(onlineExamApiRelativeRoutes.questionMaster.add),
    list: onlineExamApiUrl(onlineExamApiRelativeRoutes.questionMaster.list),
  },
  questionPaper: {
    add: onlineExamApiUrl(onlineExamApiRelativeRoutes.questionPaper.add),
    list: onlineExamApiUrl(onlineExamApiRelativeRoutes.questionPaper.list),
    allocatedList: onlineExamApiUrl(onlineExamApiRelativeRoutes.questionPaper.allocatedList),
    delete: onlineExamApiUrl(onlineExamApiRelativeRoutes.questionPaper.delete),
  },
  onlineExam: {
    add: onlineExamApiUrl(onlineExamApiRelativeRoutes.onlineExam.add),
    list: onlineExamApiUrl(onlineExamApiRelativeRoutes.onlineExam.list),
  },
} as const;
