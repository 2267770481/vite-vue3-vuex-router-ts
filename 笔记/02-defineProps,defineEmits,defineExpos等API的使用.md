### 介绍
```
1.只能在setup语法糖中使用，且不需要引入。
2.defineProps 定义属性，接收选项与props相同，
3.defineEmits 向上抛事件， 接收选项与emits相同。
4.defineExpose 子组件向父组件抛出自己的属性与方法。
5.对definePropers用ts进行参数限制，并使用默认值是需要用widthDefaults这个API。
```
### 代码
*defineProps,defimeEmits以及defineExpose的使用*
###### 【注】需要在父组件接收与传值具体可看代码demo-02.vue
```
<script setup lang="ts">
// 定义属性
defineProps({
  msg: {
    type: String,
    default: () => { return "我是默认" }
  }
})
// 向父组件抛出事件(需要在父组件中接收on-handle事件)
const emit = defineEmits(['on-handle'])

// 向父组件暴露子组件的方法和属性(需要在父组件中接收才能用)
defineExpose({
  label: '我是组件demo-02暴露出来的label',
  pri: () => { return "我是组件demo-02暴露出来的pri方法..." }
})
</script>

<template>
  <h3>这是demo-02组件--defineProps,defineEmits,defineExpose---{{ msg }}</h3>
  <button @click="emit('on-handle', '我是组件demo-02')">点我调用父组件方法</button>
</template>
```

*用ts对defineProps和defineEmits进行参数限制*
```
1.只进行参数限制(注意string的首字母是小写)
  defineProps<{
    msg: (string|number)
    title?: string
  }>()
2.使用withDefaults进行参数限制并设置默认值
  2.1 方式1
    withDefaults(defineProps<{
      msg: (string|number)
      title?: string
    }>(), {
      msg: '我是用widthDefaults定义的msg默认值'
    })
  2.2 方式2 (使用接口)
    interface propers {
      msg: (string | number),
      title?: string
    }
    withDefaults(defineProps<propers>(), {
      msg: '我是withDefaults使用接口定义的definePropers的msg的默认值'
    })
3.对defineEmits的参数进行限制
  const emit = defineEmits<{
    (event: 'on-handle', params: string): void,
    (event: 'on-color'): void,
  }>()
```
