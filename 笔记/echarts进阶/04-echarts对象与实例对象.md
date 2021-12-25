官方文档： https://echarts.apache.org/zh/api.html#echarts
## echarts对象
```
从echarts.js中引入得到的对象。具有很多方法，参见官方文档，常用的有以下：
echarts.init()  // 实例化echarts 得到echarts实例对象
echarts.registerMap()  // 注册地图
echarte.registerTheme()  // 注册主题
echarts.connect()  // 多个图表实例实现联动。toolbox上的操作会直接对两个图表有作用，下载的时候两个图表会拼接成一张
```

## echartsInstance -echarts实例对象
```
用echarts.init()实例化出来的对象。具有很多方法，参见官方文档，常用的有以下：
echartsInstance.setOption()  // 图表配置项设置
echartsInstance.resize()  // 图表自适应窗口大小
echartsInstance.on/off  // 绑定事件
echartsInstance.dispatchAction()  // 触发图表行为
echartsInstance.clear()  // 清空当前实例，会移除实例中所有的组件和图表。
echartsInstance.dispose()  // 销毁实例，销毁后实例无法再被使用。
```