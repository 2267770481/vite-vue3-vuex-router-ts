<!-- vue3 setup 语法糖使用及避坑 -->

<!-- 使用组合式api的写法 -->
<!-- <script lang="ts">
import { defineComponent, ref } from 'vue'
import Children from './Children.vue'
export default defineComponent({
  name: "Demo-01",
  components: { Children },
  props: {
    msg: {
      type: String,
      default: () => { return '这是默认值' }
    }
  },
  setup() {
    const num = ref(0)
    return {
      num
    }
  }
})
</script> -->

<!-- 使用setup语法糖写法 -->
<script setup lang="ts">
import { ref } from 'vue';
import Children from './children.vue'
defineProps({
  msg: {
    type: String,
    default: () => { return '这是默认值' }
  }
})
const num = ref(0)
</script>

<template>
  <h3>这是demo-01组件--setup语法糖使用---{{ msg }}</h3>
  <button @click="num++">{{ num }}</button>
  <Children />
</template>

<style>
</style>