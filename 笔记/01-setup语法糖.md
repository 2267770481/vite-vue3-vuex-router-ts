### 介绍
```
1. 在setup中不能使用this，因为setup的调用发生在data,computed或者menthods被解析之前。所以他们无法在setup中获取。
2. 使用setup语法糖(<script setup></script>)代替组合式setup(<script>setup(){}</script>)之后, 
  a.defineProps 不需要引入，vue单文件内自动暴露的API       
  b.省略了组件的组测申明，对象暴露return, methods等```
  ```

### 代码
 *组合式api写法*
  ```
<script lang="ts">
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
</script>
  ```
*语法糖写法*
```
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
```

