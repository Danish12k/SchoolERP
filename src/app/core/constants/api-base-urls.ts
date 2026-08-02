import { environment } from '@env/environment';

/** Production API host — all module APIs are served from here. */
export const API_HOST = 'https://api.asterinfotech.in';

const absoluteBases = {
  master: `${API_HOST}/master/api`,
  student: `${API_HOST}/student/api`,
  onlineExam: `${API_HOST}/onlineexam/api`,
  exam: `${API_HOST}/examapi`,
  fee: `${API_HOST}/feeapi`,
} as const;

/** Dev-only: same paths, proxied by `proxy.config.js` → `https://api.asterinfotech.in`. */
const relativeBases = {
  master: '/master/api',
  student: '/student/api',
  onlineExam: '/onlineexam/api',
  exam: '/examapi',
  fee: '/feeapi',
} as const;

/**
 * Dev (`ng serve`): relative URLs avoid browser CORS — proxy forwards to `API_HOST`.
 * Prod build: absolute URLs hit `https://api.asterinfotech.in` directly.
 */
export const API_BASE_URLS = environment.useDevApiProxy ? relativeBases : absoluteBases;
