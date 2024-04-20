<!-- Composition Api -->

<template>
  <div>
    <h1>情况一：监视ref定义的基本类型数据</h1>
    <h2>当前求和：{{ sum }}</h2>
    <button @click="changeSum">+1</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { ref, watch } from "vue";
/**
* watch 监视数据的变化
* vue3中的watch只能监视以下四种数据
* 1. ref定义的数据
* 2. reactive定义的数据
* 3. 函数返回一个值(getter函数)
* 4. 一个包含上述内容的数组
*/

// 情况一，监视ref定义的基本类型数据
let sum = ref(0)

function changeSum() {
  sum.value += 1
}

const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log("sum变化了", newValue, oldValue)
  // 当最新值大于10，停止监视
  if (newValue > 10) {
    stopWatch()
  }
})

</script>

<style></style>