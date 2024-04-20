<!-- Composition Api -->

<template>
  <div>
    <h2>当前水温： {{ temp }}</h2>
    <h2>当前水位：{{ height }}</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from "vue";

let temp = ref(10)
let height = ref(0)

function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}
// watch实现,需明确定指定监视的内容
// watch([temp, height], (val) => {
//   let [newT, newH] = val
//   if (newT >= 60 || newH >= 80) {
//     console.log("send requests...");
//   }
// })

// watchEffect实现，无需明确指定监视的内容，函数中用到哪些属性，就监视哪些属性
watchEffect(() => {
  console.log("@");
  if (temp.value >= 60 || height.value >= 80) {
    console.log("send requests...");
  }
})

</script>

<style></style>