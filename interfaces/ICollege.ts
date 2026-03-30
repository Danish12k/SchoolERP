export interface ICollege {
  collegeId: number;
  collegeAbreviation: string;
  collegeName: string;
  collegeAddress: string;
  email: string;
  phone: string;
  fax: string;
  webSite: string;
  affilicationNo: string;
  board: string;
  collegeLogo: string;
  schoolCode: string;
  dioceseCode: string;
  portalURL: string | null;
  /** Present when API returns session/year range fields */
  yearFrom?: string | number | null;
  yearTo?: string | number | null;
}
