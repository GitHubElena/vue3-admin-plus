import { loginApi, getUserInfoApi } from '@/api/sys'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import md5 from 'md5'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
          setTimeStamp() // 保存登录后的时间
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    /**
     *获取用户信息
     * @param {*} context
     * @returns
     */
    async getUserInfo (context) {
      const res = await getUserInfoApi()
      this.commit('user/setUserInfo', res)
      return res
    },
    /**
   * 退出登录
   * 1.删除vuex数据
   * 2.删除storage缓存数据
   * 3.清理权限配置
   * 4.返回到login页面
   */
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }

}
