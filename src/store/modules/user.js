import { loginApi } from '@/api/sys'
import { setItem, getItem } from '@/utils/storage'
import md5 from 'md5'
import { TOKEN } from '@/constant'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    /**
     * 登陆请求动作
     * @param {*} context   {dispatch, commit, getters, rootGetters }
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
          this.commit('user/setToken', data.token)
          router.push('/')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
