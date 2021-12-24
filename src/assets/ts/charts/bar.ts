import { commonOption } from "./common";

export const barChartOptions = () => {
  return {
		title: commonOption.title('柱状图'),
		legend: commonOption.legend,
		tooltip: commonOption.tooltip,
		toolbox: commonOption.toolbox,
		// 区域缩放
		dataZoom: [
			{
				type: 'slider',
				xAxisIndex: 0,
				start: 20,
				end: 80,
			},
			{
				type: 'inside',
				yAxisIndex: 0,
			}
		],
		xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
				type: 'value',
		},
		series: [{
				name: '降雨量',
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar',
				showBackground: true,  // 是否显示背景色
				backgroundStyle: {
						color: 'rgba(180, 180, 180, 0.2)'
				},
				// 标记最大值最小值 
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
							type: 'average', name: '平均值'
						}
					]
				},
				// 图形上的文本标签
				label: {
					show: true,
					rotate: 45
				},
				// 柱的宽度
				barWidth: 25
		},
		{
			name: '日照量',
			data: [80, 50, 160, 130, 170, 150, 190],
			type: 'bar',
			showBackground: true,  // 是否显示背景色
			backgroundStyle: {
					color: 'rgba(255, 180, 236, 0.2)'
			},
			// 标记最大值最小值 
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
						type: 'average', name: '平均值'
					}
				]
			},
			// 图形上的文本标签
			label: {
				show: true,
				rotate: 45
			},
			// 柱的宽度
			barWidth: 25
	}
	]
	};
}
