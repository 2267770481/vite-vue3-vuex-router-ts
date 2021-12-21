### 介绍
*推荐使用watch*
```
1.watchEffect在更新之后会自动执行，watch不会自动执行，想要watch自动执行需要配置{deep:true, immediate:true}
2.都有懒执行的副作用，watchEffect更加频繁，在vue组件跟新之前执行。
3.watch更加具体的说明什么状态应该触发侦听器重新运行，watchEffect就没有这么友好。
4.watch可以访问侦听器状态变化前后的值。
```
### 代码
```
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

1. 使用watchEffect进行监听 (【注】:watchEffect会在页面更新时立即执行)
  watchEffect(() => {
    orgData.context1 = 'watchEffect监听的计数器值变化了，现在为：' + count.value
  })
2. 使用watch进行监听
  watch(count, (currentValue, originValue)=>{
   orgData.context2 = `watch监听的计数器值变化了， 从${originValue}变成了${currentValue}`
 })
3. 让watch监听在页面更新时立即执行
  【注】:监听对象用列表去定义，取值的时候用列表索引取相应的值, 只要其中的一个监听对象有变化，就会执行
  watch(count, (n, o)=> {
    orgData.context2 = `watch监听的计数器值变化了， 从${o}变成了${n}`
  }, {deep: true, immediate: true})
4. watch监听多个值
  watch([count, orgData.info], (currentValue, originValue) => {
    orgData.context2 = `watch监听对各值，count:${currentValue[0]},orgData.info.name:${currentValue[1].name}`
    console.log(`watch监听对各值，count:${currentValue[0]},orgData.info.name:${currentValue[1].name}`)
  })
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
```