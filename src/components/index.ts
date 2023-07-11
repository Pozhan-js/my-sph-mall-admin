/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-30 00:08:59
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-12 00:37:19
 * @FilePath: /my-sph-mall-admin/src/components/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App, Component } from 'vue'

// 当组件很多的时候，可以使用
import { SvgIcon } from './SvgIcon'
import { IconifyIcon } from './IconifyIcon'

// 这个地方
const Components: {
  [propName: string]: Component
} = { SvgIcon, IconifyIcon }

export default {
  install: (app: App) => {
    Object.keys(Components).forEach((key) => {
      app.component(key, Components[key])
    })
  },
}
