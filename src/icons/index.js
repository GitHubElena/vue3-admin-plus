// 1. 导入所有的svg图标
// 2. 完成SvgIcon的全局注册

// https://webpack.docschina.org/guides/dependency-management/#requirecontext

import SvgIcon from '@/components/SvgIcon'
// 返回svgRequire函数，可接受一个request参数
const svgRequire = require.context('./svg', false, /\.svg$/)

// 完成本地svg图标的导入
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

// 到vue上的conponent全局注册
export default app => {
  app.component('svg-icon', SvgIcon)
}
