import { loginApi } from '@/api/sys'
import { setItem, getItem } from '@/utils/storage'
import md5 from 'md5'
import { TOKEN } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutation: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    /**
     * 登陆请求动作
     * @param {*} context   {commit,state}
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
          context.commit('user/setToken', data.data.data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
