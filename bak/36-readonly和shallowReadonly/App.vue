<template>
  <div class="container-fluid wraper">
    <h2>sum1: {{ sum1 }}</h2>
    <h2>sum2: {{ sum2 }}</h2>
    <button @click="addSum1">addSum1</button>
    <button @click="addSum2">addSum2</button>
  </div>
</template>


<script lang="ts" setup name="App">
import { ref, readonly } from "vue";
let sum1 = ref(0)
let sum2 = readonly(sum1)

function addSum1() {
  sum1.value += 1
}

function addSum2() {
  // 报错，sum2无法修改
  // sum2.value += 1
}



</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>