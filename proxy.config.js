// https://angular.io/guide/build#proxying-to-a-backend-server

const API_TARGET = 'https://api.asterinfotech.in';

const moduleProxy = {
  target: API_TARGET,
  changeOrigin: true,
  secure: false,
  logLevel: 'debug',
};

const PROXY_CONFIG = {
  '/master/api': moduleProxy,
  '/student/api': moduleProxy,
  '/onlineexam/api': moduleProxy,
  '/examapi': moduleProxy,
  '/feeapi': moduleProxy,
};

module.exports = PROXY_CONFIG;
