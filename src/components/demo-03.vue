<!-- watch, watchEffect -->
<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from 'vue';

const count = ref(0)
const orgData = reactive({
  info: {
    name: '张三',
    age: 12,
    idCard: '3242x',
    able: ['c', 'python', 'css']
  },
  context1: "None",
  context2: "watch在页面更新的时候不会立即执行，只有在监听的值发生变化的时候才会执行"
})

const increment = () => {
  count.value++,
    orgData.info.name = "罗翔"
}
const decrement = () => {
  count.value--,
    orgData.info.name = "张三"
}

// watchEffect侦听器
/* watchEffect会在页面更新是立即执行 */
watchEffect(() => {
  orgData.context1 = 'watchEffect监听的计数器值变化了，现在为：' + count.value
})

// watch侦听器
// watch(count, (currentValue, originValue)=>{
//   orgData.context2 = `watch监听的计数器值变化了， 从${originValue}变成了${currentValue}`
// })

// watch监听多个值
/* 监听对象用列表去定义，取值的时候用列表索引取相应的值, 只要其中的一个监听对象有变化，就会执行 */
watch([count, orgData.info], (currentValue, originValue) => {
  orgData.context2 = `watch监听对各值，count:${currentValue[0]},orgData.info.name:${currentValue[1].name}`
  console.log(`watch监听对各值，count:${currentValue[0]},orgData.info.name:${currentValue[1].name}`)
})

  // watch更新立即执行
  // watch(count, (n, o)=> {
  //   orgData.context2 = `watch监听的计数器值变化了， 从${o}变成了${n}`
  // }, {deep: true, immediate: true})
</script>

<template>
  <h3>组件demo-03--watch, watchEffect</h3>
  <div>
    <button @click="increment">+</button>
    <span>计数器: {{ count }}</span>
    <button @click="decrement">-</button>
  </div>
  <div>
    <h3>侦听器监听结果：</h3>
    <div class="watch-res">
      <h4>watchEffect监听结果</h4>
      <p>{{ orgData.context1 }}</p>
      <hr />
      <h4>watch监听结果</h4>
      <p>{{ orgData.context2 }}</p>
    </div>
  </div>
</template>

<style>
.watch-res {
  width: 800px;
  border: 1px dotted green;
  text-align: center;
  padding: 10px;
}
</style>