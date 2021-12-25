import { commonOption } from "./common";

export const gaugeOption ={
  title: commonOption.title('仪表盘'),
  toolbox: commonOption.toolbox,
  series: [
    {
      name: '仪表盘',
      type: 'gauge',  
      data: [
        {
          value: 80,
          name: '当前值'
        }
      ],
      progress: {
        show: true,
        color: 'auto'
      },
      min: 50,
      max: 150,
    }
  ]
}