<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, inject } from 'vue';
import { scatterOption } from '../../assets/ts/charts/scatter';

const echarts: any = inject('echarts')

const scatterChart = ref(null)

onMounted(async () => {
  const scatter = echarts.init(scatterChart.value)
  scatter.setOption(scatterOption)
  window.onresize = () => scatter.resize()
})

</script>

<template>
  <div div class="box" ref="scatterChart"></div>
</template>

<style>
.box {
  width: 600px;
  height: 300px;
}
</style>