/** Student row shape for list APIs; extend when backend contract is fixed. */
export interface IStudent {
  id?: number;
  studentName?: string;
  admissionNo?: string;
  className?: string;
  sectionName?: string;
}
