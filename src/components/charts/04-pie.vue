<script setup lang='ts'>
import { getCurrentInstance, onMounted, ref, inject} from 'vue';
import { pieOption } from '../../assets/ts/charts/pie';

const echarts: any = inject('echarts')

const chart = ref(null)
onMounted(async () => {
  const pie = echarts.init(chart.value)
  pie.setOption(pieOption)
  window.onresize = () => pie.resize()
})

</script>

<template>
  <div class="box" ref="chart"></div>
</template>

<style scoped>
.box {
  width: 600px;
  height: 300px;
  /* background-color: crimson; */
}
</style>
