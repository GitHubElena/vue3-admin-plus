const getters = {
  token: state => state.user.token,
  /**
   *
   * @param {*} state
   * @returns  true标识有用户信息
   */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: state => state.user.userInfo
}

export default getters
