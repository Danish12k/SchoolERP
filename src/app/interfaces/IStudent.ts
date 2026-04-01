<<<<<<< HEAD
/** Student row for list/grid views; align field names with your API response. */
export interface IStudent {
  studentId: number;
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
=======
/** Student row shape for list APIs; extend when backend contract is fixed. */
export interface IStudent {
  id?: number;
  studentName?: string;
  admissionNo?: string;
  className?: string;
  sectionName?: string;
>>>>>>> d232b93b353da02f32dddfd9ba4ee96f6b41d576
}
