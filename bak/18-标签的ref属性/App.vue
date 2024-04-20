<template>
  <div class="app">
    <h1>Hello Vue...</h1>
    <button @click="showLog">测试</button>
    <Person ref="person" />
  </div>
</template>


<script lang="ts" setup name="app">
import Person from './components/Person.vue' // 导入组件

import { ref } from "vue";

let person = ref()
function showLog() {
  // 打印的是Person的实例组件，但无法拿到子组件的数据，如果想要拿到子组件的数据，需要子组件主动暴露
  console.log("app: ", person.value);
}
</script>

<style>
.app {
  background: papayawhip;
}
</style> ./components/Person.vue