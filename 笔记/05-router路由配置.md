## 介绍
```
路由跳转
```

## 操作
### 1. 安装
```
npm install vue-router@4
```
### 2. 配置路由
#### a.创建路由文件(见/src/page/)
#### b.在src新建router文件夹，创建index.ts文件，内容如下:
```
import { createRouter, createWebHashHistory } from 'vue-router';
import LayOut from '../pages/layout.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: LayOut,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: ()=> import('../pages/home.vue'),
          meta:  {
            tiele: '首页',
            icon: ''
          }
        },
        {
          path: '/other',
          name: 'other', 
          component: ()=> import('../pages/other.vue'),
          meta: {
            title: 'other',
            icon: ''
          }
        }
      ]
    }, 
  ]
})

export default router
```

### 3. 在main.ts中导入路由
```
import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'

const app = createApp(App)


app.use(store, key)
app.use(router)
app.mount('#app')

```

### 4. 使用路由
```
<script setup lang="ts">
 import { useRouter } from 'vue-router';
  // 使用路由
  const router = useRouter()
  const routerEvt = (pathName: string): void => {
    console.log(pathName, typeof pathName);
    router.push({name: pathName})
  }
</script>

<template>
  <h4>导航</h4>
  <button @click="routerEvt('home')">home</button>
  <button @click="routerEvt('other')">other</button>
  <hr />
</template>
```