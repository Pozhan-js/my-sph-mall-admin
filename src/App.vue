<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-29 20:30:10
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-30 14:23:54
 * @FilePath: /my-sph-mall-admin/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <svg-icon name="shop" :size="60" color="orange" spin></svg-icon>
    <div style="margin-top: 10px; text-align: center">
      <el-button :icon="Search" circle></el-button>
      <el-button type="primary" :icon="Edit" circle></el-button>
      <el-button type="success" :icon="Check" circle></el-button>
      <el-button type="info" :icon="Message" circle></el-button>
      <el-button type="warning" :icon="Star" circle></el-button>
      <el-button type="danger" :icon="Delete" circle></el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
