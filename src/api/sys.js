import request from '@/utils/request'
/**
 * 登录
 * return promise
 */

export const loginApi = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
