import { API_BASE_URLS } from './api-base-urls';

export type ApiModule = 'master' | 'student' | 'onlineExam' | 'exam' | 'fee';

/** Build full module API URL: e.g. moduleApiUrl('master', '/Session/SessionList') */
export function moduleApiUrl(module: ApiModule, path: string): string {
  const base = API_BASE_URLS[module].replace(/\/$/, '');
  const route = path.startsWith('/') ? path : `/${path}`;
  return `${base}${route}`;
}

export const masterApiUrl = (path: string) => moduleApiUrl('master', path);
export const studentApiUrl = (path: string) => moduleApiUrl('student', path);
export const onlineExamApiUrl = (path: string) => moduleApiUrl('onlineExam', path);
export const examApiUrl = (path: string) => moduleApiUrl('exam', path);
export const feeApiUrl = (path: string) => moduleApiUrl('fee', path);
