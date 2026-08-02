export interface ISubjectType{
    type: string;
    detail: string;
}

export const SUBJECT_TYPE_OPTIONS: { value: string; label: string }[] = [
  { value: '', label: 'Select' },
  { value: 'Mark', label: 'Marks Entry Subject' },
  { value: 'Grade', label: 'Grade Subject' },
];

export function subjectTypeLabel(type: string): string {
  return SUBJECT_TYPE_OPTIONS.find(option => option.value === type)?.label ?? type;
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
