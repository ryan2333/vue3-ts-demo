<template>
  <div class="child">
    <h3>子组件1</h3>
    <h3>toy: {{ play }}</h3>
    <button @click="emitter.emit('send-toy', play)">把玩具给弟弟玩</button>
  </div>
</template>


<script lang="ts" setup name="Child1">
import emitter from "@/utils/emitter";
import { ref } from "vue";

let play = ref('atm')

</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>