<template>
  <div class="child">
    <h3>子组件2</h3>
    <h4>Computer: {{ computer }}</h4>
    <h4>Books: {{ book }}</h4>
  </div>
</template>


<script lang="ts" setup name="Child2">
import { ref, defineProps } from "vue";

let computer = ref('dell')
let book = ref(6)
defineExpose({ computer, book })
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>