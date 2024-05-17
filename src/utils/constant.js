/**
 * @for
 * 声明全局使用变量
 * 例如: 状态码、请求时长...
 */

export const apiCode = {
  SUCCESS: 200,
  UN_AUTH: 401
}

export const appSetting = {
  timeout: 10000,
  contentType: {
    get: 'application/x-www-form-urlencoded;charset=utf-8',
    post: 'application/json;charset=utf-8'
  },
  withCredentials: true,
  keepAliveMax: 10,
}