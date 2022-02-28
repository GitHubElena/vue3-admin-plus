import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer${store.state.user.token}`
    }
    config.headers.icode = 'E8AF9385004C4804'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    // 判断当前请求是否成功
    if (success) {
      // 返回成功后解析数据
      return data
    } else {
      // 失败 （ 请求成功  业务失败
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(new Error(error))
  }
)
export default service
