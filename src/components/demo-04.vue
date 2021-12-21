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