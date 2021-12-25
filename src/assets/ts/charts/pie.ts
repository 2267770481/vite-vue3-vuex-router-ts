import { commonOption } from "./common";

export const pieOption = {
  title: commonOption.title('饼图啊'),
  legned: commonOption.legend,
  tooltip: commonOption.tooltip,
  toolbox: commonOption.toolbox,
  series: [
    {
      type: 'pie',
      data: [
        {name: '淘宝', value: 8382},
        {name: '天猫', value: 6425},
        {name: '京东', value: 5624},
        {name: '唯品会', value: 1246},
        {name: '聚美优品', value: 264},
      ],
      // 文字标签
      label: {
        show: true,
        formatter: (args: any)=>{
          // console.log(args);
          return `${args.name}消费${args.value}元\n占比${args.percent}`
        }
      },
      // 设置为圆环
      // radius: ['50%', '80%'],
      // 南丁格尔图
      // roseType: 'radius',
      // 选择效果设置
      selectedMode: 'single',  //single, multiple
      // 选中过之后的偏移量设置
      // selectedOffset: 50
    }
  ]
}