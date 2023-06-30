# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


git commit 提交emoji图标对照表
emoji	代码	说明
🎨 (调色板)	:art:	改进代码结构/代码格式
⚡️ (闪电)🐎 (赛马)	:zap:“:racehorse:	提升性能
🔥 (火焰)	:fire:	移除代码或文件
🐛 (bug)	:bug:	修复 bug
🚑 (急救车)	:ambulance:	重要补丁
✨ (火花)	:sparkles:	引入新功能
📝 (备忘录)	:memo:	撰写文档
🚀 (火箭)	:rocket:	部署功能
💄 (口红)	:lipstick:	更新 UI 和样式文件
🎉 (庆祝)	:tada:	初次提交
✅ (白色复选框)	:white_check_mark:	增加测试
🔒 (锁)	:lock:	修复安全问题
🍎 (苹果)	:apple:	修复 macOS 下的问题
🐧 (企鹅)	:penguin:	修复 Linux 下的问题
🏁 (旗帜)	:checked_flag:	修复 Windows 下的问题
🔖 (书签)	:bookmark:	发行/版本标签
🚨 (警车灯)	:rotating_light:	移除 linter 警告
🚧 (施工)	:construction:	工作进行中
💚 (绿心)	:green_heart:	修复 CI 构建问题
⬇️ (下降箭头)	:arrow_down:	降级依赖
⬆️ (上升箭头)	:arrow_up:	升级依赖
👷 (工人)	:construction_worker:	添加 CI 构建系统
📈 (上升趋势图)	:chart_with_upwards_trend:	添加分析或跟踪代码
🔨 (锤子)	:hammer:	重大重构
➖ (减号)	:heavy_minus_sign:	减少一个依赖
🐳 (鲸鱼)	:whale:	Docker 相关工作
➕ (加号)	:heavy_plug_sign:	增加一个依赖
🔧 (扳手)	:wrench:	修改配置文件
🌐 (地球)	:globe_with_meridians:	国际化与本地化
✏️ (铅笔)	:pencil2:	修复 typo


### 功能介绍

使用 Vue3.2.45 + TypeScript 开发
采用 Vite4.0 作为项目开发、打包工具（配置 Gzip 打包、TSX 语法、跨域代理……）
使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范
使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息
使用 Pinia 替代 Vuex，轻量、简单、易用， 集成 Pinia 持久化插件
使用 TypeScript 对 Axios 整个二次封装
基于 Element-plus 二次封装 ProTable 组件，基于配置化去开发常用的表格。
支持页面全屏展示
支持菜单权限的配置和管理
支持三种方式（指令，hooks，组件）的按钮级别的权限控制
支持暗黑模式的切换
支持自定义主题切换
支持i18n 国际化
自定义指令开发

### 项目结构

tree -I "node_modules|test*|LICENSE|README.en.md" -L 2

├── README.md
├── commitlint.config.cjs
├── index.html
├── mock
│   ├── _utils.ts
│   └── user.ts
├── package.json
├── pnpm-lock.yaml
├── public
│   └── vite.svg
├── src
│   ├── App.vue
│   ├── api
│   ├── assets
│   ├── components
│   ├── config
│   ├── enume
│   ├── env.d.ts
│   ├── main.ts
│   ├── router
│   ├── store
│   ├── style.css
│   ├── styles
│   ├── typings
│   └── utils
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts