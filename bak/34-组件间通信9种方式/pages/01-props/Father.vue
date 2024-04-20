<template>
  <div class="father">
    <h3>父祖件</h3>
    <h2>汽车：{{ car }}</h2>
    <h4 v-if="play">子组件给的Play: {{ play }}</h4>
    <Child :car="car" :sendPlay="getPlay" />
  </div>
</template>


<script lang="ts" setup name="Father">
import Child from './Child.vue';
import { ref } from "vue";

let car = ref('benchi')
let play = ref('')

function getPlay(value: string) {
  console.log("获得玩具：", value);
  play.value = value
}
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>