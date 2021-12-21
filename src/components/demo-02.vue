<!-- defineProps,defineEmits,defineExpose -->
<script setup lang="ts">
// 定义属性
// defineProps({
//   msg: {
//     type: String,
//     default: () => { return "我是默认" }
//   }
// })
// 向父组件抛出事件(需要在父组件中接收on-handle事件)
// const emit = defineEmits(['on-handle'])

// 向父组件暴露子组件的方法和属性(需要在父组件中接收才能用)
defineExpose({
  label: '我是组件demo-02暴露出来的label',
  pri: () => { return "我是组件demo-02暴露出来的pri方法..." }
})

// **对definePropers用ts进行参数限制
/* 只是进行了参数限制，没有设默认值，注意string 首字母是小写 */
// defineProps<{
//   msg: (string|number)
//   title?: string
// }>()

// **对definePropers用ts进行参数限制,并设置默认值
// withDefaults(defineProps<{
//   msg: (string|number)
//   title?: string
// }>(), {
//   msg: '我是用widthDefaults定义的msg默认值'
// })

// 使用接口的方式，对definePropers设置默认值
interface propers {
  msg: (string | number),
  title?: string
}
withDefaults(defineProps<propers>(), {
  msg: '我是withDefaults使用接口定义的definePropers的msg的默认值'
})

const emit = defineEmits<{
  (event: 'on-handle', params: string): void,
  (event: 'on-color'): void,
}>()
</script>

<template>
  <h3>这是demo-02组件--defineProps,defineEmits,defineExpose---{{ msg }}</h3>
  <button @click="emit('on-handle', '我是组件demo-02')">点我调用父组件方法</button>
  <button @click="emit('on-color')">点我调用父组件的方法修改背景色</button>
</template>

<style>
</style>