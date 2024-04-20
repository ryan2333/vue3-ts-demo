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


<script lang="ts">

export default {
  name: "Person-Composition",
  data() { }, // vue2和vue3语法可以共存，vue2可以读取vue3中的数据，反之不可以
  methods: {},
  setup() {
    console.log(this) // Setup函数中的this是undefined, Vue3中已经弱化this了
    // 数据, 原来是写在data中的，此时数据不是响应式的
    let name = "zhangsan"
    let age = 18
    let tel = "11011011011"

    // 方法
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

    // 数据和方法返回出去，模板才能使用
    return {
      name, age,
      changeAge,
      changeName,
      showTel
    }
  }
}
</script>

<style></style>