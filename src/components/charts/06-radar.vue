<script setup lang='ts'>
import { ref, inject, onMounted } from 'vue';
import { radarOption } from '../../assets/ts/charts/radar';

const echarts:any = inject('echarts')

const chart = ref(null)
onMounted(async () => {
  const radar = echarts.init(chart.value)
  radar.setOption(radarOption)
  window.onresize = () => radar.resize()
})

</script>

<template>
  <div class="box" ref="chart"></div>
</template>

<style scoped>
.box {
  width: 600px;
  height: 400px;
}
</style>