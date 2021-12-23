<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue';
import {barChartOptions} from '@/assets/ts/charts/bar';

// 获取全局变量实例
const internalInstance = getCurrentInstance()
const aa= internalInstance?.appContext.config.globalProperties.$echarts
console.log(22, aa);



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