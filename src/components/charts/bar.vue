<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue';
import { barChartOptions } from '@/assets/ts/charts/bar';

// 从全局属性获取echarts对象
const internalInstance = getCurrentInstance()
const echarts = internalInstance?.appContext.config.globalProperties.$echarts

const chart = ref(null)

onMounted(async () => {
  const bar = echarts.init(chart.value)
  bar.setOption(barChartOptions())
  window.onresize = () => bar.resize()  // 自适应大小, 不用的话不会自适应大小。
})

</script>

<template>
  <div class="bar-box" ref="chart"></div>
</template>

<style>
.bar-box {
  width: 49%;
  height: 300px;
}
</style>