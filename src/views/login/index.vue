<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginTules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          placerholder="username"
          type="text"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          placerholder="password"
          :type="passwordType"
          v-model="loginForm.password"
        ></el-input>
        <span class="show-pwd" @click="onChangePwdType">
          <svg-icon
            :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
          ></svg-icon>
        </span>
      </el-form-item>
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        :loading="loading"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script setup>
import { validatePassword } from './rule'
import { ref } from 'vue'
import { useStore } from 'vuex'
// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

// 验证规则
const loginTules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

const passwordType = ref('password')
/**
 *使用ref声明数据在script中需要.value得到值，在template则不需要
 */
const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
// 处理登录
const loading = ref(false)
const store = useStore()
// loginFormRef实例
const loginFormRef = ref(null)
const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      loading.value = true
      // 触发vuex user模块login方法
      store
        .dispatch('user/login', loginForm.value)
        .then(() => {
          loading.value = false
        })
        .catch((err) => {
          console.log(err)
          loading.value = false
        })
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .title-container {
      position: relative;
      .title {
        font-size: 24px;
        color: $light_gray;
        text-align: center;
      }
    }
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        height: 47px;
        background: transparent;
        border: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;

    .show {
      position: absolute;
      right: 10px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
