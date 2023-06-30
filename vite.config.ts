/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-29 19:36:06
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-30 15:23:25
 * @FilePath: /my-sph-mall-admin/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { viteMockServe } from 'vite-plugin-mock'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  const { command, mode } = config
  const env = loadEnv(mode, process.cwd())
  return {
    base: './',
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icon')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
        // * vite-svg-loader支持，可以直接引入svg图标当作组件使用
      }),
      viteMockServe({
        // 只在开发阶段开启 mock 服务,mock和后端服务器接口能共存，可以通过配置来区分
        localEnabled: command === 'serve',
      }),
      svgLoader(),
      VueSetupExtend(),
      // AutoImport({
      //   imports: [
      //     // 自动导入vue相关函数
      //     'vue',
      //   ],
      //   dts: 'src/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   //ElementPlus按需加载
      //   resolvers: [ElementPlusResolver()],
      //   //需要按需加载的目录文件
      //   dirs: ['src/components'],
      //   extensions: ['vue'],
      //   // 生成 `components.d.ts` 全局声明
      //   dts: 'src/components.d.ts',
      // }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    server: {
      host: 'localhost',
      port: Number(env.VITE_APP_PORT),
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://sph-api.atguigu.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
        },
      },
    },
  }
})
