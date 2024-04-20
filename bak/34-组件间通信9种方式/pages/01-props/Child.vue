<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ play }}</h4>
    <h4>父组件给的车：{{ car }}</h4>
    <button @click="sendPlay(play)">玩具给父</button>
  </div>
</template>


<script lang="ts" setup name="Child">
import { ref, defineProps } from "vue";

let play = ref('atm')

// 接收父传子的参数
defineProps(['car', 'sendPlay'])
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>