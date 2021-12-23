<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue';
import { lineOptions } from '../../assets/ts/charts/line';

const internalInstance = getCurrentInstance()
const echarts = internalInstance?.appContext.config.globalProperties.$echarts

const chart = ref(null)
onMounted(async () => {
  const line = echarts.init(chart.value)
  line.setOption(lineOptions)
  window.onresize = () => line.resize()
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