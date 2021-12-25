<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, inject } from 'vue';
import { barChartOptions } from '@/assets/ts/charts/bar';

const echarts:any = inject('echarts')

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
  width: 600px;
  height: 300px;
}
</style>