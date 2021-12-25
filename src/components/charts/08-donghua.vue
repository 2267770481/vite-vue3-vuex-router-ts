<script setup lang='ts'>
import { inject, onMounted, ref } from 'vue';

const echarts: any = inject('echarts')

const chart = ref(null)

let xData = ['小明', '小红', '小军', '小花', '小虎', '小马']
let yData = [85, 49, 57, 75, 35, 69]

const option = {
  animation: true,  // 开启动画 默认为true
  animationDuration: 8000,  // 设置动画时长
  animationEasing: 'elasticOut',  // 缓动动画设置
  animationThreshold: 8,   // 动画阈值设置
  xAxis: {
    type: 'category',
    data: xData
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '语文成绩',
      type: 'bar',
      data: yData
    }
  ]
}

onMounted(async () => {
  const animate = echarts.init(chart.value)
  animate.setOption(option)
  window.onresize = animate.resize
})

// 增加元素设置
const add = () => {
  xData.push('小张')
  yData.push(76)
  const animate = echarts.init(chart.value)
  animate.setOption({
    xAxis: {
      data: xData
    },
    series: [
      {
        data: yData
      }
    ]
  })
}

// 减少元素设置
const sub = () => {
  xData.splice(0, 1)
  yData.splice(0, 1)
  console.log(yData);
  
  const animate = echarts.init(chart.value)
  animate.setOption({
    xAxis: {
      data: xData
    },
    series: [
      {
        data: yData
      }
    ]
  })

}

</script>

<template>
  <div class="box" ref="chart"></div>
  <button @click="add">add</button>
  <button @click="sub">sub</button>
</template>

<style scoped>
.box {
  width: 600px;
  height: 300px;
}
</style>