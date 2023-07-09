/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-29 19:36:06
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-09 23:55:17
 * @FilePath: /my-sph-mall-admin/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
import pinia from './store/index'
import router from './router'
import registerGlobComp from '@/components'
//获取用户按钮权限
// import directives from '@/directives/index'

// element默认主题
import 'element-plus/dist/index.css'
// 公共样式，包含自定义暗黑模式，element重置样式
import '@/styles/index.scss'
// 字体样式
import '@/assets/fonts/font.scss'

/** 加载异步路由 */
import '@/router/initDynamicRouter'

// svg插件配置
import 'virtual:svg-icons-register'

// 入口文件

const app = createApp(App)

/** 导入全部Element-icon */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)

app.use(registerGlobComp)

app.use(pinia)

app.use(router)

app.mount('#app')
