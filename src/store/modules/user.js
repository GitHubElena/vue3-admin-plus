import { loginApi } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({}),
  mutation: {},
  actions: {
    /**
     * 登陆请求动作
     * @param {*} context
     * @param {*} userInfo
     * @returns
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        loginApi({
          username,
          password: md5(password)
        }).then(data => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
