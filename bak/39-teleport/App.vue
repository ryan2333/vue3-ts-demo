<template>
  <div class="outer">
    <h2>我是App组件</h2>
    <img src="https://cn.vuejs.org/logo.svg" alt="111">
    <br>
    <Modal />
  </div>
</template>


<script lang="ts" setup name="app">
import Modal from './Modal.vue'


</script>

<style scoped>
.outer {
  background-color: #ddd;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px;
  width: 400px;
  height: 400px;
  filter: saturate(200%)
    /* 会修改弹窗定位，需使用teleport包装组件 */
}

img {
  width: 180px
}
</style>