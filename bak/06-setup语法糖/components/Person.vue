<!-- Composition Api -->
<template>
  <div>
    <h1>Name: {{ name }}</h1>
    <h1>Age: {{ age }}</h1>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeName">修改名称</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>


<!-- <script lang="ts">
export default {
  name: "Person-Composition",
}
</script> -->

<!-- setup语法糖，省略return, name表示组件名称，需要安装vite-plugin-vue-setup-extend组件 -->
<script lang="ts" setup name="Person">
let name = "zhangsan"
let age = 18
let tel = "11011011011"
function changeAge() {
  age += 1 // 这样修改age，页面是没有变化的
  console.log("age: ", age)
}

function changeName() {
  name = "lisi" // 这样修改age，页面是没有变化的
  console.log("age: ", name)
}

function showTel() {
  alert(tel)
}
</script>

<style></style>