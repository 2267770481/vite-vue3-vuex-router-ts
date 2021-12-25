import { commonOption } from "./common"

export const mapOption = {
  title: commonOption.title('中国地图'),
  toolbox: commonOption.toolbox,
  geo: [{
    type: 'map',
    map: 'china',
    // 文本标签显示
    label: {
      show: true
    },
    // 拖动与缩放
    roam: true,
    // 初始缩放比例
    // zoom: 1.5
    // 地图中心
    // center: [118.767413, 32.041544]  // 以江苏省为中心 (值为经纬度，将map.vue中的china输出到控制台就可以看到)
  },],
  series: [  // 地图与散点图结合使用
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',  // 让散点图使用地图的坐标
      data: [[118.767413, 32.041544]],  // 数据为地图上的经纬度
      visualMap: false,
      rippleEffect: {  // 让涟漪效果更加明显一点
        scale: 5
      },
      itemStyle: {
        color: 'red'
      },
    },
    
    // 不同区域显示不同颜色
    {
      type: 'map',
      geoIndex: 0,   // 将数据与第一个geo对象关联
      data:[
        { name: "上海", value: 432 },
        { name: "北京", value: 543 },
        { name: "天津", value: 753 },
        { name: "重庆", value: 543 },
        { name: "河北", value: 232 },
        { name: "河南", value: 324 },
        { name: "云南", value: 295 },
        { name: "辽宁", value: 123 },
        { name: "黑龙江", value: 346 },
        { name: "湖南", value: 532 },
        { name: "安徽", value: 234 },
        { name: "山东", value: 452 },
        { name: "新疆", value: 231 },
        { name: "江苏", value: 231 },
        { name: "浙江", value: 342 },
        { name: "江西", value: 159 },
        { name: "湖北", value: 407 },
        { name: "广西", value: 247 },
        { name: "甘肃", value: 687 },
        { name: "山西", value: 244 },
        { name: "内蒙古", value: 635 },
        { name: "陕西", value: 742 },
        { name: "吉林", value: 462 },
        { name: "福建", value: 452},
        { name: "贵州", value: 346},
        { name: "广东", value: 136 },
        { name: "青海", value: 234},
        { name: "西藏", value: 189 },
        { name: "四川", value: 329 },
        { name: "宁夏", value: 298 },
        { name: "海南", value: 308 },
        { name: "台湾", value: 127 },
        { name: "香港", value: 584 },
        { name: "澳门", value: 356 }
      ]
    },
  ],
  visualMap: {
    min: 100,
    max: 900,
    text: ['高', '低'],
    calculable: true,
    seriesIndex: 1,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered']
    }
  }
}