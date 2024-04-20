<!-- Composition Api -->

<template>
  <div>
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>昌平</h3>
    <button @click="showLog">showLog</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { ref, defineExpose } from 'vue'

// 创建一个tittle2，用于存储ref标记的内容
let title2 = ref()

function showLog() {
  console.log(title2.value);
}

defineExpose({ title2 })
</script>

<style scoped></style>