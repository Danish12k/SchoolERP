// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

export const environment = {
  production: false,
  useHash: false,
  /**
   * Dev: `/master/api` etc. are proxied to https://api.asterinfotech.in (see proxy.config.js).
   * Requires `ng serve` — opening dist/IIS without a reverse proxy will cause CORS errors.
   */
  useDevApiProxy: true,
};
