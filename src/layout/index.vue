<template>
  <div class="app-wrapper">
    <!--左侧menu-->
    <Sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <!--顶部navbar -->
      <div class="fixed-header">
        <Navbar />
      </div>
      <!--内容区-->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.scss'
import {} from 'vue'
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';
.app-warpper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
.fixed-hander {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
