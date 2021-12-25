<script setup lang="ts">
import { getCurrentInstance, provide } from 'vue';
import bar from './bar.vue';
import lineVue from './line.vue';
import scatterVue from './scatter.vue';
import pieVue from './pie.vue';
import mapVue from './map.vue';
import radarVue from './radar.vue';

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

</template>  
<style>
</style>