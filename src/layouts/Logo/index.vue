<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-09 19:31:42
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-09 19:49:42
 * @FilePath: /my-sph-mall-admin/src/layout/Logo/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="logo-container flex-center">
    <a href="/">
      <img class="logo" alt="logo" src="/logo.png" />
      <h1 class="title" v-if="!collapse">尚品汇后台管理</h1>
    </a>
  </div>
</template>

<script lang="ts" setup>
// 项目首先实现登录页
// 1.登录页
import { computed } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()
const collapse = computed(() => settingsStore.collapse)
</script>

<style lang="scss" scoped>
.logo-container {
  color: red;
}
</style>
