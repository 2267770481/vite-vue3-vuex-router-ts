<script setup lang="ts">
 import { useRouter } from 'vue-router';
  // 使用路由
  const router = useRouter()
  const routerEvt = (pathName: string): void => {
    console.log(pathName, typeof pathName);
    router.push({name: pathName})
  }
</script>

<template>
  <h4>导航</h4>
  <button @click="routerEvt('a')">home</button>
  <button @click="routerEvt('b')">other</button>
  <hr />
</template>

