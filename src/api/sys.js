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

/**
 * 获取用户信息
 */
export const getUserInfoApi = () => {
  return request({
    url: '/sys/profile'
  })
}
