import { masterApiUrl } from './module-api-url';

/** Relative paths on master API (resolved via `masterApiUrl`). */
export const masterApiRelativeRoutes = {
  user: {
    validate: '/User/ValidateUser',
  },
  menu: {
    get: '/Menu/GetMenu',
  },
  faculty: {
    getDetail: '/Faculty/GetFacultyDetail',
  },
} as const;

/**
 * Master API endpoints (base URL: https://api.asterinfotech.in/master/api)
 */
export const masterApiEndpoint = {
  user: {
    validate: masterApiUrl(masterApiRelativeRoutes.user.validate),
  },

  session: {
    add: masterApiUrl('/Session/AddSession'),
    update: masterApiUrl('/Session/UpdateSession'),
    delete: masterApiUrl('/Session/DeleteSession'),
    list: masterApiUrl('/Session/SessionList'),
  },

  designation: {
    add: masterApiUrl('/Designation/AddDesignation'),
    update: masterApiUrl('/Designation/UpdateDesignation'),
    delete: masterApiUrl('/Designation/DeleteDesignation'),
    list: masterApiUrl('/Designation/DesignationList'),
  },

  section: {
    add: masterApiUrl('/Section/AddSection'),
    update: masterApiUrl('/Section/UpdateSection'),
    get: masterApiUrl('/Section/GetSection?SectionId='),
    delete: masterApiUrl('/Section/DeleteSection'),
    list: masterApiUrl('/Section/SectionList'),
    classSectionList: masterApiUrl('/Course/SectionList'),
    assignSection: masterApiUrl('/Course/AssignSection'),
  },

  college: {
    add: masterApiUrl('/Course/AddClass'),
    update: masterApiUrl('/Course/UpdateClass'),
    get: masterApiUrl(''),
    list: masterApiUrl('/College/CollegeList'),
    getLatestData: masterApiUrl('/College/GetLatestData'),
    ListBySessionAndCollege: masterApiUrl('/Course/ClassList'),
    delete: masterApiUrl('/College/DeleteCollege'),
  },

  faculty: {
    getDetail: masterApiUrl(masterApiRelativeRoutes.faculty.getDetail),
  },

  SMSAPI: {
    listByCollegeId: masterApiUrl('/SmsApi/SmsApiList?CollegeId='),
    add: masterApiUrl('/SmsApi/AddApi'),
    update: masterApiUrl('/SmsApi/UpdateAPI'),
    delete: masterApiUrl('/SmsApi/Delete'),
  },

  expensehead: {
    add: masterApiUrl('/Expense/AddExpenseHead'),
    update: masterApiUrl('/Expense/UpdateExpenseHead'),
    delete: masterApiUrl('/Expense/DeleteExpense?Id='),
    list: masterApiUrl('/Expense/ExpenseHeadList'),
  },

  house: {
    add: masterApiUrl('/House/AddHouse'),
    update: masterApiUrl('/House/UpdateHouse'),
    list: masterApiUrl('/House/HouseList'),
  },

  salutation: {
    add: masterApiUrl('/Salutaion/AddSalutaion'),
    update: masterApiUrl('/Salutaion/UpdateSalutaion'),
    list: masterApiUrl('/Salutaion/SalutationList'),
  },

  country: {
    add: masterApiUrl('/Country/AddCountry'),
    update: masterApiUrl('/Country/UpdateCountry'),
    delete: masterApiUrl('/Country/DeleteCountry'),
    list: masterApiUrl('/Country/CountryList'),
    get: masterApiUrl('/Country/GetCountry'),
  },

  state: {
    add: masterApiUrl('/State/AddState'),
    update: masterApiUrl('/State/UpdateState'),
    delete: masterApiUrl('/State/DeleteState'),
    list: masterApiUrl('/State/StateList'),
    get: masterApiUrl('/State/GetState'),
  },

  district: {
    add: masterApiUrl('/District/AddDistrict'),
    update: masterApiUrl('/District/UpdateDistrict'),
    delete: masterApiUrl('/District/DeleteDistrict'),
    list: masterApiUrl('/District/GetDistrictList'),
  },

  category: {
    add: masterApiUrl('/Category/AddCategory'),
    update: masterApiUrl('/Category/UpdateCategory'),
    list: masterApiUrl('/Category/CategoryList'),
  },

  addSchool: {
    add: masterApiUrl('/College/AddSchool'),
    update: masterApiUrl('/College/UpdateCollege'),
    list: masterApiUrl('/College/CollegeList'),
  },

  subject: {
    subjectType: masterApiUrl('/Subject/SubjectType'),
    add: masterApiUrl('/Subject/AddSubject'),
    update: masterApiUrl('/Subject/UpdateSubject'),
    list: masterApiUrl('/Subject/SubjectList?SubjectType='),
    classSubjectList: masterApiUrl('/Subject/ClassSubjectList'),
  },

  assignSubject: {
    add: masterApiUrl('/Subject/AssignSubject'),
    delete: masterApiUrl('/Subject/DeleteAssignSubject?ClassSectionSubjectId='),
    list: masterApiUrl('/Subject/AssignSubjectList?classSectionId='),
  },

  certificate: {
    get: masterApiUrl('/Certificate/GetCertificate'),
    add: masterApiUrl('/Certificate/AddCertificate'),
    update: masterApiUrl('/Certificate/UpdateCertificate'),
    getCharacter: masterApiUrl('/Certificate/GetCharacterCertificate'),
  },

  menu: {
    get: masterApiUrl(masterApiRelativeRoutes.menu.get),
  },
} as const;
