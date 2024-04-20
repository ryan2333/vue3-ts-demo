<template>
  <div class="child">
    <h3>子组件</h3>
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