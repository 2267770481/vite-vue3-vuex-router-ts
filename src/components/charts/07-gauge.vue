<script setup lang='ts'>
import { inject, onMounted, ref } from 'vue';
import { gaugeOption } from '../../assets/ts/charts/gauge';

const echarts: any = inject('echarts')

const chart = ref(null)

onMounted(async () => {
  const gauge = echarts.init(chart.value)
  gauge.setOption(gaugeOption)
  window.onresize = () => gauge.resize()
})

</script>

<template>
  <div class="box" ref="chart"></div>
</template>

<style scoped>
.box {
  width: 600px;
  height: 300px;
}
</style>