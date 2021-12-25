<script setup lang="ts">
import { getCurrentInstance, provide } from 'vue';
import bar from './01-bar.vue';
import lineVue from './02-line.vue';
import scatterVue from './03-scatter.vue';
import pieVue from './04-pie.vue';
import mapVue from './05-map.vue';
import radarVue from './06-radar.vue';
import gaugeVue from './07-gauge.vue';

// 从全局属性获取echarts对象
const instance = getCurrentInstance()
provide('echarts', instance?.appContext.config.globalProperties.$echarts)

</script>

<template>
<bar/>
<hr />

<lineVue />
<hr>

<scatterVue />
<hr>

<pieVue />
<hr>

<mapVue />
<hr>

<radarVue />
<hr>

<gaugeVue />

</template>  
<style>
</style>