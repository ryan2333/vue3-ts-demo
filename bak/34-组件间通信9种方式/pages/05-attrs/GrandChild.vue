<template>
  <div class="child">
    <h3>孙组件</h3>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>d: {{ d }}</h4>
    <h4>x: {{ x }}</h4>
    <h4>y {{ y }}</h4>
    <button @click="updateB">updateB</button>
  </div>
</template>


<script lang="ts" setup name="Child">
import { defineProps } from "vue";

defineProps(['b', 'c', 'd', 'x', 'y', 'updateB'])
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>