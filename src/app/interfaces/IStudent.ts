export interface IStudent {
  /** Some APIs use `studentId`, some use `id` */
  studentId?: number;
  id?: number;
  admissionNo?: string;
  studentName?: string; // full name
  firstName?: string;
  lastName?: string;
  className?: string;
  sectionName?: string;
  rollNo?: string | number;
  phone?: string;
  email?: string;
  fatherName?: string;
}
