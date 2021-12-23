## echarts所有图表都能用的配置项
### 1.title -标题
```
title: {
  text: '标题',
  textStyle: {
    color: '#333',
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
}
```

### 2.legend -图例
```
legend: {
  show: true,
  right: 0
},
```

### 3.tooltip -提示框
```
tooltip: {
  show: true,
  formatter: (args:any)=> {
    // console.log(args);
    return `${args.name}的${args.seriesName}是${args.value}`
  }
},
```

### 4.toolbox -工具栏
```
toolbox: {
  show: true,
  showTitle: true,  // 鼠标放上去是否提示文本信息
  feature: {
    restore: {},  // 重置
    dataView: {}, // 数据视图
    saveAsImage:{}, // 保存图片
    magicType: { // 多个图表之前切换
      type: ['line', 'bar', 'stack'] 
    }
  }
}
```