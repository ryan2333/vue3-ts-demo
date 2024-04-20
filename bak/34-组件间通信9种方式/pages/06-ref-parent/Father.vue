<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>House: {{ house }}</h4>
    <button @click="changeToy">修改child1玩具</button>
    <button @click="changeComputer">修改child2电脑</button>
    <!-- 父与子通信 -->
    <button @click="getChild($refs)">让所有孩子书变多</button>
    <Child1 ref="c1" />
    <Child2 ref="c2" />
  </div>
</template>


<script lang="ts" setup name="Father">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { ref } from "vue";

let house = ref(4)

let c1 = ref()
let c2 = ref()
defineExpose({ house })
function changeToy() {
  // 父组件如果要修改子组件的数据，需要子组件导出对应的数据才可以
  c1.value.toy = "Tank"
}

function changeComputer() {
  c2.value.computer = "Apple"
}

function getChild(event: any) {
  console.log("events: ", event);
  for (let ref in event) {
    console.log(event[ref].book);
    event[ref].book += 2
  }
}

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>