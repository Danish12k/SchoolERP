export interface ISubjectType{
    type: string;
    detail: string;
}


export interface ISubject {
  subjectId: number;
  subjectName: string;
  subjectCode: string;
  subjectType: string;
  subjectSeq: number;
}

export interface IAssignSubject{
    classSectionId:number;
    subjectId:number[];
}

export interface IAssignSubjectList {
  subjectId: number;
  classSectionSubjectId: number;
  subjectName: string;
  subjectCode: string;
  subjectType: string;
  subWithCode: string;
  subjectSeq: number;
}


