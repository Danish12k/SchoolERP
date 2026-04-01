<<<<<<< HEAD
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

export interface IFeeInstallment {
  installmentId: number;
  sessionId: number;
  installmentName: string;
  installMentDate: Date;   // ISO date string
  collegeId: number;
  instLateFee: number;
  submitDate: Date;
  submitBy: string;
  updateDate: Date;
  updatedBy: number;
}
=======
export * from '../pages/admin/interfaces/IFeeMaster';
>>>>>>> d232b93b353da02f32dddfd9ba4ee96f6b41d576
