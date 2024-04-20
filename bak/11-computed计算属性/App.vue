<template>
  <div class="app">
    <h1>Hello Vue...</h1>
    <PersonComposition />
  </div>
</template>


<script lang="ts">
import Person from './components/Person.vue' // 导入组件
import PersonComposition from "./components/Person.vue"

export default {
  name: "app",
  components: { Person, PersonComposition } // 注册组件
}
</script>

<style>
.app {
  background: blue;
}
</style> ./components/Person.vue