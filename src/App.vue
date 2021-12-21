<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Demo01 from './components/demo-01.vue';
import Demo02 from './components/demo-02.vue';
import Demo03 from './components/demo-03.vue';
import Demo04 from './components/demo-04.vue';
import Demo05 from './components/demo-05.vue';

// 从配置文件中读取 在.env.development中定义
const title = import.meta.env.VITE_APP_TITLE

const getChild = ref()
const color = reactive({
  backgroundColor: 'red'
})

const handleEnv = (params: string) => {
  console.log('我是父组件App, 你传的参数是：' + params);
}
const setColor = () => {
  color.backgroundColor = 'green'
}
onMounted(() => {
  console.log('父组件[App]已经加载完了');
  console.log('从子组件中获取到的数据是：' + getChild.value.label);
  console.log('从子组件中获取到的数据是：' + getChild.value.pri());
})
</script>

<template>
  <h1 class="text-color">{{title}}</h1>
  <hr />
  <Demo01 msg="欢迎您demo-01" />
  <hr />
  <div :style="color">
    <Demo02 @on-handle="handleEnv" @on-color="setColor" ref="getChild" msg="欢迎demo-02" />
  </div>
  <hr />
  <Demo03 />

  <hr />
  <Demo04 />

  <hr />
  <Demo05 />
  
</template>

<style lang="scss" scoped>
.text-color {
  color: $color-primary;  // $color-primary 是从定义的全局样式中读取 在assets/styles/global.scss中
}
</style>