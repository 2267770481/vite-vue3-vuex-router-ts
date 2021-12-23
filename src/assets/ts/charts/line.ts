import { commonOption } from './common'

export const lineOptions = {
  title: commonOption.title('折线图'),
  legend: commonOption.legend,
  tooltip: commonOption.tooltip,
  toolbox: commonOption.toolbox,
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    // 紧挨边缘(与Y轴相交)
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    // 脱离0值比例(y轴坐标值不从0开始)
    scale: true,
  },
  series: [
    {
      name: '降雨量',
      type: 'line',
      data: [544, 345, 675, 245, 764, 334, 667, 546, 347, 435, 753, 643],
      // 最大值、最小值
      markPoint: {
        data: [
          {
            type: 'max', name: '最大值'
          },
          {
            type: 'min', name: '最小值'
          }
        ]
      },
      // 平均线
      markLine: {
        data: [
          {
            type: 'average', name: '平均线'
          }
        ]
      },
      // 平滑曲线
      smooth: true,
      // 线条样式
      lineStyle: {
        color: 'cyan',
        type: 'dotted'
      },
      // 区域填充
      areaStyle: {
        color: 'lightgreen'
      },
      // 堆叠图
      stack: 'wahaha'
    },
    {
      name: '日照量',
      type: 'line',
      data: [666, 443, 467, 854, 346, 432, 854, 568, 765, 643, 854, 783],
      stack: 'wahaha',
      markArea: {
        data: [
          [
            {
                name: '标注一月到二月份之间的区域',
                itemStyle: {
                  color: 'yellow'
                },
                xAxis: '一月',
            },
            {
                xAxis: '二月',
            },
        ]
        ]
      }
    },
  ]
}