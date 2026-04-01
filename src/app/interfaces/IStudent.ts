/** Student row for list/grid views; align field names with your API response. */
export interface IStudent {
  studentId?: number;
  id?: number;
  admissionNo?: string;
  studentName?: string;
  firstName?: string;
  lastName?: string;
  className?: string;
  sectionName?: string;
  rollNo?: string | number;
  phone?: string;
  email?: string;
  fatherName?: string;
}
