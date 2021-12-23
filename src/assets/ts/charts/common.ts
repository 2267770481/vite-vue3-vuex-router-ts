// 通用配置项，在所有图表中都能使用
// 參考文档 https://echarts.apache.org/zh/option.html#title.text


export const commonOption = {
  // 标题
  title: (name: string)=>{
    return {
      text: name,
      textStyle: {
        color: '#333',
        fontStyle: 'italic',
        fontWeight: 'bold',
      }
    }
  },

  // 图例
  legend: {
    show: true,
    // right: 0
  },

  // 提示框
  tooltip: {
    show: true,
    formatter: (args:any)=> {
      // console.log(args);
      return `${args.name}的${args.seriesName}是${args.value}`
    }
  },

  // 工具栏
  toolbox: {
    show: true,
    showTitle: true,
    feature: {
      restore: {},
      dataView: {},
      saveAsImage:{},
      magicType: {
        type: ['line', 'bar', 'stack']
    }
    }
  }

} 