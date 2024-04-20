<template>
  <button @click="isShow = true">showModal</button>
  <Teleport to="body">
    <div class="hhh" v-show="isShow">
      <h1>Test...</h1>
      <button @click="isShow = false">disableModal</button>
    </div>
  </Teleport>
</template>


<script lang="ts" setup name="Modal">
import { ref } from "vue";
let isShow = ref(false)
</script>

<style scoped>
.hhh {
  width: 200px;
  height: 150px;
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 5px;
  text-align: center;
  position: fixed;
  /* 参考窗口定位 */
  left: 50%;
  margin-left: -100px;
  top: 20px;
}
</style>