<template>
  <div class="container-fluid wraper">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>


<script lang="ts" setup name="App">
import useMsgRef from './useMsgRef'

// 使用useMsgRef定义一个响应式数据，且有延迟效果
let { msg } = useMsgRef("hello,world", 3000)

</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>