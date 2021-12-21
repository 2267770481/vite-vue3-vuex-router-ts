<script setup lang="ts">
import barVue from '../pages/bar.vue';
</script>

<template>
<h3>组件demo-05 vue-router 的使用</h3>
<div class='router'>
    <barVue />
    <router-view></router-view>
</div>

</template>

<style>
.router {
  width: 600px;
  height: 200px;
  border: 2px solid cadetblue;
  text-align: center;
}
</style>