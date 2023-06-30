/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-29 19:36:06
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-30 15:20:09
 * @FilePath: /my-sph-mall-admin/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import pinia from '@/store'

import registerGlobComp from './components'
// svg插件配置
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(ElementPlus)
app.use(registerGlobComp)
app.use(pinia)
app.mount('#app')
