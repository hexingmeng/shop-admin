# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 一.创建项目

*# npm 7+, extra double-dash is needed:*

 npm create vite@latest shop-admin -- --template vue



cd shop-admin

npm install

npm run dev

npm config get registry



## 二.官网

2.1  vite官网：https://cn.vitejs.dev

​                         https://cn.vuejs.org

2.2  淘宝镜像官网：https://npmmirror.com



2.3 windicss官网:  https://cn.windicss.org/



2..4  vue-router官网: https://router.vuejs.org/



## 三.安装插件

3.1 Vue Language Features (Volar)

3.2 Chinese (Simplified) (简体中文) Language Pack for Visual Studio Co

3.3 vue3-snippets

3.4  WindiCSS IntelliSense



## 四.使用git对项目进行版本控制

4.1  git init

4.2  git status

4.3  git add .

4.4 git commit -m "feat(新功能):描述"

4.5  git remote add origin git@github.com:FangWanCai/shop-admin.git

4.6  git remote -v

4.7 git push origin master



## 五.引入并使用element-plus

5.1  npm install element-plus --save

5.2  main.js

```js
    import { createApp } from 'vue'

import './style.css'



// 引入ElementPlus

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import App from './App.vue'


const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
```



5.3  使用 App.vue

```vue
<script setup></script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<style scoped></style>

```



## 六.安装引入并使用windicss

6.1  vite安装:  npm i -D vite-plugin-windicss windicss

6.2  vite.config.js

```js
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```

6.3 main.js

```js
import 'virtual:windi.css'
```

6.4 App.vue使用

```vue
<script setup></script>

<template>
  <div>
    <button class="btn">按钮</button>
  </div>
</template>

<style scoped>
.btn {
  @apply bg-blue-500 text-indigo-50 px-4 py-2 rounded transition-all duration-1000 hover:(bg-purple-500);
}
</style>

```

## 七.安装引入使用vue-router

7.1 npm install vue-router@4 --save

7.2  路由配置   src/router/index

```js
// 引入vue-router
import {
    createRouter,
    createWebHashHistory
} from "vue-router"

// 实例化routes 
const routes=[]

// 实例化router
const router =createRouter({
    history: createWebHashHistory(),
    // 使用实例化routes
    routes
})

// 导出实例化router
export default router
```

7.3  引入挂载router  main.js

```js
// 引入router
import router from "./router"
const app = createApp(App)
app.use(ElementPlus)

import 'virtual:windi.css'
// 挂在router
app.use(router)
app.mount('#app')
```

7.4  App.vue

```vue
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
```

7.5 vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入WindiCSS
import WindiCSS from 'vite-plugin-windicss'
// 引入path
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(),WindiCSS()],
})

```

7.6 router/index.js  路由配置

```js
// 引入vue-router
import {
    createRouter,
    createWebHashHistory
} from "vue-router"
import Index from "~/views/Index.vue"
import About from "~/views/About.vue"
// 实例化routes 
const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    }
]

// 实例化router
const router = createRouter({
    history: createWebHashHistory(),
    // 使用实例化routes
    routes
})

// 导出实例化router
export default router
```

## 八.404页面布局

8.1.  路由配置  router/index.js

```js
// 引入vue-router
import {
    createRouter,
    createWebHashHistory
} from "vue-router"
import Index from "~/views/Index.vue"
import About from "~/views/About.vue"
import NotFound from "~/views/404.vue"
// 实例化routes 
const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

// 实例化router
const router = createRouter({
    history: createWebHashHistory(),
    // 使用实例化routes
    routes
})

// 导出实例化router
export default router
```

8.2  页面布局   views/404.vue

```vue
<template>
  <div>
    <el-col :sm="12" :lg="6">
      <el-result icon="warning" title="404提示" sub-title="你找的页面走丢了~~">
        <template #extra>
          <el-button type="primary" @click="$router.push('/')">回到首页</el-button>
        </template>
      </el-result>
    </el-col>
  </div>
</template>

```

## 九.Network配置

9.1  vite.config.js

```js
// Network配置
  server: {
    port: "8085",
    host: "0.0.0.0",
    open: true
  }
```

## 十.登录页面布局  src/views/Login/Login.vue

```vue
<template>
  <!-- layout布局 -->
  <el-row class="bg-indigo-500 min-h-screen">
    <!-- 左 -->
    <el-col :span="16" class="flex items-center justify-center">
      <div>
        <p class="text-light-50 font-bold text-3xl mb-4">欢迎光临</p>
        <p class="text-gray-200 text-sm">《vue3 + vite》实战项目演示网站</p>
      </div>
    </el-col>
    <!-- 右 -->
    <el-col
      :span="8"
      class="bg-light-50 min-h-screen flex items-center justify-center flex-col"
    >
      <!-- 登录字样 -->
      <h1 class="font-bold text-3xl text-gray-800">欢迎回来</h1>
      <!-- 登录信息字样 -->
      <div class="my-5 text-gray-300 flex items-center justify-center space-x-2">
        <p class="h-[1px] w-16 bg-gray-200"></p>
        <p>账号密码登录</p>
        <p class="h-[1px] w-16 bg-gray-200"></p>
      </div>
      <!-- 表单 -->
      <el-form :model="form" class="w-[250px]">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" round color="#626aef" class="w-[250px]">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
  console.log("form=>", form);
};
</script>

```

## 十一.登录页面响应式布局  src/views/Login/Login.vue

```vue
<template>
  <!-- layout布局 -->
  <el-row class="bg-indigo-500 min-h-screen">
    <!-- 左 -->
    <el-col :lg="16" :md="12" class="flex items-center justify-center">
      <div>
        <p class="text-light-50 font-bold text-3xl mb-4">欢迎光临</p>
        <p class="text-gray-200 text-sm">《vue3 + vite》实战项目演示网站</p>
      </div>
    </el-col>
    <!-- 右 -->
    <el-col
      :lg="8"
      :md="12"
      class="bg-light-50 flex items-center justify-center flex-col"
    >
      <!-- 登录字样 -->
      <h1 class="font-bold text-3xl text-gray-800">欢迎回来</h1>
      <!-- 登录信息字样 -->
      <div class="my-5 text-gray-300 flex items-center justify-center space-x-2">
        <p class="h-[1px] w-16 bg-gray-200"></p>
        <p>账号密码登录</p>
        <p class="h-[1px] w-16 bg-gray-200"></p>
      </div>
      <!-- 表单 -->
      <el-form :model="form" class="w-[250px]">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码" />
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            round
            color="#626aef"
            class="w-[250px]"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
  console.log("form=>", form);
};
</script>

```

