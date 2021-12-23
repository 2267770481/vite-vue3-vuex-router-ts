import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'
import * as echarts from 'echarts'

const app = createApp(App)

// 将echarts加到全局变量中
app.config.globalProperties.$echarts = echarts

app.use(store, key)
app.use(router)
app.mount('#app')