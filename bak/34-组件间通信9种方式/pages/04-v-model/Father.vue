<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
    <!-- v-model用在组件标签上 -->
    <DemoInput v-model="username"></DemoInput>
    <!-- <DemoInput :modelValue="username" @update:modelValue="username = $event" /> -->
    <!-- 对于原生事件，$event就是事件对象
    对于自定义事件，$event就是触发事件时，就是传递的值，不能.target -->
  </div>
</template>


<script lang="ts" setup name="Father">
import { ref } from "vue";
import DemoInput from "./DemoInput.vue";
let username = ref('zhangsan')


</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>