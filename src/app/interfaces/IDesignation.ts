// i-designation.ts
export interface IDesignation {
  id: number;
  designation: string;
}
export interface IDesignationResponse {
  success: boolean;
  message: string;
  data: IDesignation[];
}

export { IApiResponse } from './ICommon';
