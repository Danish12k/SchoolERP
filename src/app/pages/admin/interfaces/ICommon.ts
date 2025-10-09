// Standard API response
export interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;        // single object or array depending on API
  totalRecord?: number;
}