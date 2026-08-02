import { studentApiUrl } from './module-api-url';

/** Relative paths on student API (resolved via `studentApiUrl`). */
export const studentApiRelativeRoutes = {
  studentData: {
    sectionStudentList: '/StudentData/SectionStudentList',
    searchStudent: '/StudentData/SearchStudent',
    studentTcList: '/StudentData/StudentTcList',
    updateHeightWeight: '/StudentData/UpdateHeightWeight',
    updateAaparDetails: '/StudentData/UpdateAaparDetails',
  },
  attendance: {
    studentAttendance: '/Attendance/StudentAttendance',
  },
  faculty: {
    listByCollege: '/Faculty/FacultyList?CollegeId=',
  },
} as const;

/**
 * Student API endpoints (base URL: https://api.asterinfotech.in/student/api)
 */
export const studentApiEndpoint = {
  studentData: {
    sectionStudentList: studentApiUrl(studentApiRelativeRoutes.studentData.sectionStudentList),
    searchStudent: studentApiUrl(studentApiRelativeRoutes.studentData.searchStudent),
    studentTcList: studentApiUrl(studentApiRelativeRoutes.studentData.studentTcList),
    updateHeightWeight: studentApiUrl(studentApiRelativeRoutes.studentData.updateHeightWeight),
    updateAaparDetails: studentApiUrl(studentApiRelativeRoutes.studentData.updateAaparDetails),
  },
  attendance: {
    studentAttendance: studentApiUrl(studentApiRelativeRoutes.attendance.studentAttendance),
  },
  faculty: {
    listByCollege: studentApiUrl(studentApiRelativeRoutes.faculty.listByCollege),
  },
} as const;
