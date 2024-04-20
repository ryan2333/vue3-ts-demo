<template>
  <div class="app">
    <h2>我是App组件</h2>
    <!-- 当子组件中存在异步任务，且字组件加载慢，在子组件加载成功之前需要呈现一些内容时，用suspense -->
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h2>Loading....</h2>
      </template>
    </Suspense>
  </div>
</template>


<script lang="ts" setup name="app">
import { Suspense } from "vue";
import Child from "./Child.vue";

</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>