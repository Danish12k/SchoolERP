// fee group
export interface IFeeGroup {
  streamId: number;
  streamName: string;
  activeStatus: number; // 0 = Inactive, 1 = Active
}

export interface IFeeHead {
  feeHeadId: number;
  feeHeadName: string;
  stream: number;
}

export interface IInstallment {
  installmentId: number;
  sessionId: number;
  installmentName: string;
  installMentDate: string;   // ISO date string
  collegeId: number;
  instLateFee: number;
  submitDate: string;
  submitBy: string;
  updateDate: string;
  updatedBy: number;
}
