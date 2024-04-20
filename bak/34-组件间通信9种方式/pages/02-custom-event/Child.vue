<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>子组件的玩具：{{ toy }}</h4>
    <button @click="emit('send-toy', toy)">把玩具给父组件</button>
  </div>
</template>


<script lang="ts" setup name="Child">
import { ref } from "vue";

let toy = ref('atm')

// 声明事件
const emit = defineEmits(['send-toy'])

</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
  margin-top: 10px;
}
</style>