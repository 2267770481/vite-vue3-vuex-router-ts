<script setup lang='ts'>
import { inject, onMounted, ref } from 'vue';
import china from '@/assets/json/map-data/china.json'
import { mapOption } from '../../assets/ts/charts/map';

const echarts: any= inject('echarts')
echarts.registerMap('china', china);  // 注册的时候 别名要与引入的数据名保持一致，不然会有异常
// console.log(11111, china);

const chart = ref(null)

onMounted(async ()=>{
  const map = echarts.init(chart.value)
  map.setOption(mapOption)
  window.onresize = map.resize()
})

</script>

<template>
<div class="box" ref="chart"></div>
</template>

<style scoped>
.box{
  width: 600px;
  height: 300px;
  border: 1px solid rebeccapurple;
}
</style>