import { examApiUrl } from './module-api-url';

/** Relative paths on exam API (resolved via `examApiUrl`). */
export const examApiRelativeRoutes = {
  setup: {
    list: '/api/exams',
    create: '/api/exams',
    showSubExam: '/api/exams/ShowSubExam',
    addSubExam: '/api/exams/AddSubExam',
    subjectMaxMarks: '/api/exams/subject-max-marks',
    addGradePoint: '/api/exams/AddGradePoint',
    showGradePoint: '/api/exams/ShowGradePoint',
    addScholasticArea: '/api/exams/AddScholasticArea',
    showCCEScholastic: '/api/exams/ShowCCEScholastic',
    addCCEScholasticSkill: '/api/exams/AddCCEScholasticSkill',
    showCCEskillAll: '/api/exams/ShowCCEskillAll',
    addClassGroup: '/api/exams/AddClassGroup',
    showClassGroup: '/api/exams/ShowClassGroup',
  },
  marks: {
    entrySheet: '/api/exams/marks-entry-sheet',
    save: '/api/exams/marks',
    upload: '/api/exams/marks/upload',
    transfer: '/api/exams/marks/transfer',
  },
  timetable: {
    list: '/api/exams/timetable',
    save: '/api/exams/timetable',
  },
  reports: {
    admitCards: '/api/exams/admit-cards',
  },
  results: {
    classSection: '/api/exam-results/class-section',
  },
} as const;

/**
 * Exam API endpoints (base URL: https://api.asterinfotech.in/examapi)
 * Auth: Bearer token from Master API POST /User/ValidateUser
 * Tenant: X-School-Code header (set by SchoolCodeInterceptor)
 */
export const examApiEndpoint = {
  setup: {
    list: examApiUrl(examApiRelativeRoutes.setup.list),
    create: examApiUrl(examApiRelativeRoutes.setup.create),
    update: (examId: number) => examApiUrl(`/api/exams/${examId}`),
    delete: (examId: number) => examApiUrl(`/api/exams/${examId}`),
    showSubExam: examApiUrl(examApiRelativeRoutes.setup.showSubExam),
    addSubExam: examApiUrl(examApiRelativeRoutes.setup.addSubExam),
    deleteSubExam: (examId: number, subExamId: number) =>
      examApiUrl(`/api/exams/${examId}/sub-exams/${subExamId}`),
    subjectMaxMarks: examApiUrl(examApiRelativeRoutes.setup.subjectMaxMarks),
    addGradePoint: examApiUrl(examApiRelativeRoutes.setup.addGradePoint),
    showGradePoint: examApiUrl(examApiRelativeRoutes.setup.showGradePoint),
    addScholasticArea: examApiUrl(examApiRelativeRoutes.setup.addScholasticArea),
    showCCEScholastic: examApiUrl(examApiRelativeRoutes.setup.showCCEScholastic),
    addCCEScholasticSkill: examApiUrl(examApiRelativeRoutes.setup.addCCEScholasticSkill),
    showCCEskillAll: examApiUrl(examApiRelativeRoutes.setup.showCCEskillAll),
    addClassGroup: examApiUrl(examApiRelativeRoutes.setup.addClassGroup),
    showClassGroup: examApiUrl(examApiRelativeRoutes.setup.showClassGroup),
  },
  marks: {
    entrySheet: examApiUrl(examApiRelativeRoutes.marks.entrySheet),
    save: examApiUrl(examApiRelativeRoutes.marks.save),
    upload: examApiUrl(examApiRelativeRoutes.marks.upload),
    transfer: examApiUrl(examApiRelativeRoutes.marks.transfer),
  },
  timetable: {
    list: examApiUrl(examApiRelativeRoutes.timetable.list),
    save: examApiUrl(examApiRelativeRoutes.timetable.save),
  },
  reports: {
    admitCards: examApiUrl(examApiRelativeRoutes.reports.admitCards),
  },
  results: {
    student: (studentId: string) => examApiUrl(`/api/exam-results/student/${studentId}`),
    classSection: examApiUrl(examApiRelativeRoutes.results.classSection),
  },
} as const;
