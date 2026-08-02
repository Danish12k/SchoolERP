import { feeApiUrl } from './module-api-url';

/** Relative paths on fee API (resolved via `feeApiUrl`). */
export const feeApiRelativeRoutes = {
  feeGroup: {
    add: '/api/FeeGroup/AddFeeGroup',
    update: '/api/FeeGroup/UpdateFeeGroup',
    delete: '/api/FeeGroup/DeleteFeeGroup',
    list: '/api/FeeGroup/GetGroupList',
  },
  feeHead: {
    add: '/api/FeeHead/AddFeeHead',
    update: '/api/FeeHead/UpdateFeeHead',
    list: '/api/FeeHead/FeeHeadList',
  },
  feeInstallment: {
    add: '/api/FeeInstallment/AddFeeInstallment',
    update: '/api/FeeInstallment/UpdateInstallment',
    list: '/api/FeeInstallment/FeeInstallmentList',
  },
  feeAllocation: {
    allocate: '/api/FeeAllocation/AllocateFeeHead',
    update: '/api/FeeAllocation/UpdateAllocatedFeeHead',
    list: '/api/FeeAllocation/FeeAllcatedList',
  },
  feeReport: {
    collection: '/api/FeeReport/FeeCollectionReport',
    defaulterList: '/api/FeeReport/FeeDefaulterList',
    headBySection: '/api/FeeReport/FeeHeadBySection',
    installmentStatusByClass: '/api/FeeReport/FeeInstallmentStatusByClass',
    installmentStatusBySection: '/api/FeeReport/FeeInstallmentStatusBySection',
  },
} as const;

/**
 * Fee API endpoints (base URL: https://api.asterinfotech.in/feeapi)
 * Auth: Bearer token from Master API POST /User/ValidateUser
 * Tenant: X-School-Code header (set by SchoolCodeInterceptor)
 *
 * Query parameters are supplied by callers via `HttpParams`:
 * - feeGroup.delete: Id
 * - feeInstallment.list: CollegeId, SessionId
 * - feeAllocation.list: ClassId, InstallmentId
 * - feeReport.collection: startDate, EndDate, CollegeId, UserId
 * - feeReport.defaulterList: ClassSectionId (0 = all sections), SessionId, CollegeId, InstallmentId (single or comma-separated), ClassId
 * - feeReport.headBySection: ClassSectionId, SessionId, CollegeId
 * - feeReport.installmentStatusByClass: InstallmentId (single or comma-separated), ClassId
 * - feeReport.installmentStatusBySection: InstallmentId (single or comma-separated), ClassSectionId
 */
export const feeApiEndpoint = {
  feeGroup: {
    add: feeApiUrl(feeApiRelativeRoutes.feeGroup.add),
    update: feeApiUrl(feeApiRelativeRoutes.feeGroup.update),
    delete: feeApiUrl(feeApiRelativeRoutes.feeGroup.delete),
    list: feeApiUrl(feeApiRelativeRoutes.feeGroup.list),
  },

  feeHead: {
    add: feeApiUrl(feeApiRelativeRoutes.feeHead.add),
    update: feeApiUrl(feeApiRelativeRoutes.feeHead.update),
    list: feeApiUrl(feeApiRelativeRoutes.feeHead.list),
  },

  feeInstallment: {
    add: feeApiUrl(feeApiRelativeRoutes.feeInstallment.add),
    update: feeApiUrl(feeApiRelativeRoutes.feeInstallment.update),
    list: feeApiUrl(feeApiRelativeRoutes.feeInstallment.list),
  },

  feeAllocation: {
    allocate: feeApiUrl(feeApiRelativeRoutes.feeAllocation.allocate),
    update: feeApiUrl(feeApiRelativeRoutes.feeAllocation.update),
    list: feeApiUrl(feeApiRelativeRoutes.feeAllocation.list),
  },

  feeReport: {
    collection: feeApiUrl(feeApiRelativeRoutes.feeReport.collection),
    defaulterList: feeApiUrl(feeApiRelativeRoutes.feeReport.defaulterList),
    headBySection: feeApiUrl(feeApiRelativeRoutes.feeReport.headBySection),
    installmentStatusByClass: feeApiUrl(feeApiRelativeRoutes.feeReport.installmentStatusByClass),
    installmentStatusBySection: feeApiUrl(
      feeApiRelativeRoutes.feeReport.installmentStatusBySection
    ),
  },
} as const;
