<template>
  <div class="container-fluid wraper">
    <h2>sum: {{ sum }}</h2>
    <h2>User info: </h2>
    <h3>Name: {{ person.name }}</h3>
    <h3>Age: {{ person.age }}</h3>
    <button @click="add">sum+1</button>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
    <button @click="changePerson">changePerson</button>
  </div>
</template>


<script lang="ts" setup name="App">
import { shallowRef } from "vue";
// shallowRef 浅层次的ref，只对顶层数据进行响应式
let sum = shallowRef(0)
let person = shallowRef({
  name: "zhangsan",
  age: 18
})

function add() {
  sum.value += 1
}

function changeAge() {
  person.value.age += 1
}

function changeName() {
  person.value.name = 'lisi'
}

function changePerson() {
  person.value = {
    name: "tony",
    age: 20
  }
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