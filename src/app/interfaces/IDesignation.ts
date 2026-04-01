<<<<<<< HEAD
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

// Standard API response
export interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;        // single object or array depending on API
  totalRecord?: number;
}
=======
export * from '../pages/admin/interfaces/IDesignation';
>>>>>>> d232b93b353da02f32dddfd9ba4ee96f6b41d576
