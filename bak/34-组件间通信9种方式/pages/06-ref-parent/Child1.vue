<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>Toy: {{ toy }}</h4>
    <h4>Books: {{ book }}</h4>
    <button @click="minusHouse($parent)">继承父亲一套房产</button>
  </div>
</template>


<script lang="ts" setup name="Child1">
import { ref, } from "vue";

let toy = ref('atm')
let book = ref(3)

// 把数据交给外部
defineExpose({ toy, book })

function minusHouse(parent: any) {
  console.log("parent: ", parent);

  parent.house -= 1
}
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>