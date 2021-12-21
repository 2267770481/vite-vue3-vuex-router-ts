## 介绍
```
数据管理仓库，与全局变量最大的区别是，若某个引用的组件修改数据之后，其他组件会自动更新，更改数据需要通过提交(commit)mutations来操作。
```
### 5个基本对象
```
Store
    每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。

State
    驱动应用的数据源，用于保存所有组件的公共数据.。

Getter
    可以将 getter 理解为 store 的计算属性, getters 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

Mutation
    mutations 对象中保存着更改数据的回调函数,该函数名官方规定叫 type, 第一个参数是 state, 第二参数是payload, 也就是自定义的参数。mutation 必须是同步函数。mutations 对象里的方法需要使用 store.commit 调用

Action
    Action 提交的是 mutation 而不是直接变更状态。action 可以包含任意异步操作。actions 对象里的方法需要使用 store.dispatch 调用。
    Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。

Module
    由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割。
```

## 操作
### 1. 安装vuex
```
npm install vuex@next --save 
或
yarn add vuex@next --save
```
##### 【注】：需要安装4.0及以上版本

### 2. 在src目录下新建store文件夹，并新建文件index.ts,文件内容如下：
```
import { InjectionKey } from "vue";
import {useStore as baseUseStore, createStore, Store} from 'vuex'

// 定义injection key
interface State{
  name: string
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  state:{
    name: '张三'
  },
  getters: {
    getName: (state)=>{
      return state.name
    }
  },
  // 操作数据
  mutations: {
    // 重置名字
    SET_NAME(state, name:string ) {
      state.name = name
    }
  },
  actions: {}
})

// 定义自己的组合式函数
export function useStore() {
  return baseUseStore(key)
}
```
##### 【注】：引入InjectionKey并将其传入userStore使用过的任何地方，很快就会成为一种重复性的工作，为了简化问题，可以自己定义组合式函数类检索类型化的store。

### 3. 在项目的根目录下新建vuex-d.ts文件，内容如下
#### 【目的】：告诉ts识别vuex中的数据数据参数类型
```
import {ComponentCustomOptions} from 'vue'
import {Store} from 'vuex';

declare module '@vue/runtime-core' {
  // 申明自己的 store state （与store/index.ts中定义的state一样）
  interface State {
    name: string
  }

  // 为 this.$store 提供类型声明
  interface ComponentCustomOptions {
    $store: Store<State>
  }
}
```


### 4. 在main.ts中注入store模块
```
import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'

const app = createApp(App)
app.use(store, key)
app.mount('#app')

```

### 5. 使用
```
// vuex的使用
<script setup lang="ts">
// 引入自己写的组合式函数
import { compile, computed, reactive, ref, watch } from 'vue';
import { useStore } from '../store';

// 解构api 获取全局的store对象
const store = useStore()

// 从store中获取数据 (一般都用计算属性去获取)
const name = computed(() => {return store.state.name})

const inputName = ref('')

// 修改store中的值
const resetName = (name: string):void => {
  console.log(name);
  store.commit('SET_NAME', name)
}

</script>

<template>
<h3>这是组件demo-04---vuex的使用</h3>
<h4>从store中获取到的姓名是: {{name}}</h4>
<label for="name">重置store中的姓名</label>
<input type="text" id="name" v-model="inputName" @blur="resetName(inputName)">
</template>

<style>
</style>
```