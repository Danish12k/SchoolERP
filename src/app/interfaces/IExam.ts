export interface IExam {
  examId: number;
  sessionId: number;
  collegeId: number;
  groupName: string;
  term: number;
  assessment: string;
  examName: string;
  weightage: number;
  maxMarks: number;
}

export interface ICreateExamRequest {
  sessionId: number;
  collegeId: number;
  groupName: string;
  term: number;
  assessment: string;
  examName: string;
  weightage: number;
  maxMarks: number;
}

export interface IUpdateExamRequest {
  examId: number;
  examName: string;
  weightage: number;
  maxMarks: number;
}

export interface ISubExam {
  subExamId: number;
  examId?: number;
  examName: string;
}

export interface ICreateSubExamRequest {
  examName: string;
}

export interface IGradePoint {
  gradeId?: number;
  gradePointId?: number;
  id?: number;
  grade: string;
  point: number;
  minMarks: number;
  maxMarks: number;
  sessionId: number;
}

export interface ICreateGradePointRequest {
  grade: string;
  point: number;
  minMarks: number;
  maxMarks: number;
  sessionId: number;
}

export interface IExamListQuery {
  sessionId: number;
  collegeId: number;
  groupName?: string;
  term?: number;
}

export interface IClassGroup {
  classGroupId?: number;
  collegeId: number;
  collegeName?: string;
  groupName: string;
  courseId: number;
  className: string;
  sessionId?: number;
}

export interface ICreateClassGroupRequest {
  collegeId: number;
  groupName: string;
  courseId: number;
  className: string;
  sessionId: number;
}

export interface IClassGroupListQuery {
  collegeId?: number;
  groupName?: string;
}
