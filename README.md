# Vue 3 + Typescript + Vite

### 路由
```
/home
  vue3, vuex, router,echart(基础)等的使用
/echarts
  echarts的各种图表的详细使用
```

### 文档地址
```
项目根目录，笔记下边
```

### volar插件
```
插件使用volar 需要禁掉vetur 不然两个插件会冲突
```

### 文件目录
#### demo-01.vue
```
setup语法糖的使用及避坑
1.在setup中不能使用this，因为setup的调用发生在data,computed或者menthods被解析之前。所以他们无法在setup中获取。
2.使用setup语法糖(<script setup></script>)代替组合式setup(<script>setup(){}</script>)之后, 
    a.defineProps 不需要引入，vue单文件内自动暴露的API       
    b.省略了组件的组测申明，对象暴露return, methods等
```
#### demo-02.vue
```
defineProps,defineEmits,defineExpose的使用以及用ts对参数进行限制
1.只能在setup语法糖中使用，且不需要引入。
2.defineProps 定义属性，接收选项与props相同，
3.defineEmits 向上抛事件， 接收选项与emits相同。
4.defineExpose 子组件向父组件抛出自己的属性与方法。
5.对definePropers用ts进行参数限制，并使用默认值是需要用接口widthDefaults。
```

#### demo-03.vue
```
watch，watchEffect的使用
1.watch与watchEffect的比较(推荐使用watch监听)
    a.watchEffect在更新之后会自动执行，watch不会自动执行，想要watch自动执行需要配置{deep:true, immediate:true}
    b.都有懒执行的副作用，watchEffect更加频繁，在vue组件跟新之前执行。
    c.watch更加具体的说明什么状态应该触发侦听器重新运行，watchEffect就没有这么友好。
    d.watch可以访问侦听器状态变化前后的值。
```

#### demo-04.vue
```
veux的使用
```

#### demo-05.vue 
```
router的使用
```

### 运行项目
#### 克隆
```
git clone git@github.com:2267770481/vite-vue3-vuex-router-ts.git
```
#### 运行
```
cd vite-vue3-vuex-router-ts
npm install
npm run dev
```
