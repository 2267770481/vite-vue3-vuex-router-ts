#### 安装
```
cnpm install echarts --save
```

#### main.ts中引用
```
import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'

const app = createApp(App)

// 将echarts加到全局变量中
app.config.globalProperties.$echarts = echarts

app.mount('#app')
```

#### 使用
*【注】: 在setup中用appContext和ctx在开发的时候都能取到全局属性值，但在打包的时候ctx会有所变化，跟开发的时候不一致，所以在取全局属性的时都从appContext中获取*
```
<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue';
import {barChartOptions} from '../assets/ts/my-echarts'

// 获取全局变量实例
const internalInstance = getCurrentInstance()
const aa= internalInstance?.appContext.config.globalProperties.$echarts
// console.log(22, aa);



const myChart = ref(null)

onMounted(async () => {
  // 初始化
  const barChart = internalInstance?.appContext.config.globalProperties.$echarts.init(myChart.value)
  // barChartOptions 配置项，推荐放在外部引入。
  barChart.setOption(barChartOptions());
  window.onresize = function () {
    //自适应大小, 不用的话不会自适应大小。
      barChart.resize();
  };
})
  
</script>

<template>
<h3>echart使用</h3>
<div class="chart" ref="myChart">

</div>
</template>

<style>
.chart {
  width: 500px;
  height: 200px;
}

</style>
```