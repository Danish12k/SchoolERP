/** Fee installment status report row (FeeInstallmentStatusByClass / BySection).
 * Fixed student fields are PascalCase from API; installment months are dynamic keys (APR, MAY, …).
 */
export interface IFeeInstallmentStatus {
  RollNumber?: string | number;
  StuName?: string;
  StuAdmission?: string;
  FatherName?: string;
  Mobile?: string;
  Gender?: string;
  /** Dynamic installment month columns, e.g. MAY: "Paid" | "<span>UnPaid</span>" */
  [key: string]: unknown;
}

/** Known non-month keys on installment status rows. */
export const FEE_INSTALLMENT_STATUS_FIXED_KEYS = [
  'RollNumber',
  'StuName',
  'StuAdmission',
  'FatherName',
  'Mobile',
  'Gender',
] as const;

/** Fee head by section report row (FeeHeadBySection) — dynamic keys from API. */
export interface IFeeHeadBySection {
  BookNo?: string | null;
  'Roll No.'?: string | number;
  'Adm. No'?: string | number;
  'Student Name'?: string;
  'Father Name'?: string;
  Section?: string;
  'Total Amount'?: number | null;
  /** Dynamic fee-head amounts, e.g. "Admission Fee", "Tution Fee" */
  [key: string]: unknown;
}

/** Fee defaulter list row (FeeDefaulterList). Fixed fields + dynamic fee-head amount keys. */
export interface IFeeDefaulter {
  BookNo?: string;
  'Ad.No'?: string | number;
  'Student Name'?: string;
  'F. Name'?: string;
  MobileNo?: string;
  Class?: string;
  'Tot. P.'?: number;
  'Cons.'?: number;
  'Tot. Amt'?: number;
  Balance?: number;
  'Prev Due'?: number;
  Status?: string;
  /** Dynamic fee-head / month amounts, e.g. "Admission Fee", "APR" */
  [key: string]: unknown;
}

/**
 * Preferred display order when these keys exist in a response.
 * Actual columns are always built dynamically from API keys.
 */
export const FEE_DEFAULTER_LEADING_KEYS = [
  'Student Name',
  'F. Name',
  'MobileNo',
  'Class',
] as const;

export const FEE_DEFAULTER_TRAILING_KEYS = [
  'Tot. P.',
  'Cons.',
  'Tot. Amt',
  'Balance',
  'Prev Due',
  'Status',
] as const;

/** @deprecated Prefer dynamic discovery; kept for callers that need a known-key set. */
export const FEE_DEFAULTER_FIXED_KEYS = [
  'BookNo',
  'Ad.No',
  ...FEE_DEFAULTER_LEADING_KEYS,
  ...FEE_DEFAULTER_TRAILING_KEYS,
] as const;

/** Fee collection report row (FeeCollectionReport API). */
export interface IFeeCollection {
  className?: string;
  stuId?: string;
  mobile?: string;
  name?: string;
  pname?: string;
  depositId?: number;
  receipt?: string | null;
  depositDate?: string;
  installmentName?: string;
  headAmount?: number;
  lateFee?: number;
  consession?: number;
  totalFee?: number;
  paidAmount?: number;
  balance?: number;
  feeFrom?: string;
  collegeID?: number;
  prvDue?: number;
  collegeAbreviation?: string;
  balancePaid?: number;
  /** Legacy / alternate keys */
  receiptNo?: string;
  receiptDate?: string;
  studentName?: string;
  stuName?: string;
  admissionNo?: string;
  amount?: number;
  paymentMode?: string;
  collegeId?: number;
  userId?: number;
  userName?: string;
  [key: string]: unknown;
}

/** Params for FeeDefaulterList. classSectionId = 0 means all sections.
 * installmentId may be a single id or multiple ids (sent as comma-separated).
 */
export interface IFeeDefaulterListParams {
  classSectionId: number;
  sessionId: number;
  collegeId: number;
  installmentId: number | number[];
  classId: number;
}

/** Params for FeeCollectionReport. */
export interface IFeeCollectionReportParams {
  startDate: string;
  endDate: string;
  collegeId: number;
  userId: number;
}

/** Filter payload from collection report filter (school/faculty/dates). */
export interface IFeeCollectionFilterSelection {
  collegeId: number;
  userId: number;
  startDate: string;
  endDate: string;
}

/** Visible columns for fee collection report (excludes stuId). */
export const FEE_COLLECTION_REPORT_COLUMNS = [
  'index',
  'className',
  'name',
  'pname',
  'mobile',
  'depositDate',
  'installmentName',
  'headAmount',
  'lateFee',
  'consession',
  'totalFee',
  'paidAmount',
  'balance',
  'feeFrom',
  'prvDue',
  'balancePaid',
] as const;

/** Filter payload from student filter (session/school/class/section). */
export interface IStudentFilterSelection {
  sessionId: number | null;
  collegeId: number | null;
  courseId: number | null;
  classSectionId: number | null;
}

/** Filter payload from fee report filter (multi section + multi installment). */
export interface IFeeReportFilterSelection {
  sessionId: number | null;
  collegeId: number | null;
  courseId: number | null;
  classSectionIds: number[];
  /** True when Select all / every section is selected → use FeeInstallmentStatusByClass. */
  allSectionsSelected: boolean;
  installmentIds: number[];
}
