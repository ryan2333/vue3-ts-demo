<!-- Options Api -->
<template>
  <div class="person">
    <h1>Name: {{ name }}</h1>
    <h1>Age: {{ age }}</h1>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeName">修改名称</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>


<script lang="ts">
export default {
  name: "Person",
  data() {
    return {
      name: "zhangsan",
      age: 18,
      tel: '11011011011'
    }
  },
  methods: {
    showTel() {
      alert(this.tel)
    },
    changeAge() {
      this.age += 1
    },

    changeName() {
      this.name = "lisi"
    }
  }
}
</script>

<style></style>