<template>
  <div class="child">
    <h3>子组件2</h3>
    <h3>Computer: {{ computer }}</h3>
    <h3 v-if="toy">哥哥给的玩具：{{ toy }}</h3>
  </div>
</template>


<script lang="ts" setup name="Child2">
import emitter from "@/utils/emitter";
import { ref, onMounted } from "vue";
let toy = ref('')
// 给emitter绑定事件
emitter.on('send-toy', (value: any) => {
  console.log("获取哥哥的玩具: ", value);
  toy.value = value as string
})

let computer = ref('dell')

onMounted(() => {
  // 卸载前取消订阅
  emitter.off('send-toy')
})


</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>