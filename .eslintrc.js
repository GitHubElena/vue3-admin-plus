module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  /**
   * 错误分为三种级别
   * "off" 或 0   - 关闭规则
   * "warn" 或 1   - 开启规则,使用警告级别的错误(不会退出程序)
   * "error" 或 2  - 开启规则,使用错误级别的错误（程序会退出）
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren':'off'
  }
}
