<template>
  <div class="app">
    <Person :persons="persons" a="gg" />
  </div>
</template>


<script lang="ts" setup name="app">
import { reactive } from 'vue';
import Person from './components/Person.vue' // 导入组件
import { type PersonInterface } from './types';

let persons = reactive<PersonInterface[]>([
  { id: "as123", name: "Zhangsan", age: 18 },
  { id: "as124", name: "Lisi", age: 16 },
  { id: "as125", name: "Wangwu", age: 20 },
])
</script>

<style>
.app {
  background: papayawhip;
}
</style> ./components/Person.vue