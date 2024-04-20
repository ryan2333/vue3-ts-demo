<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}, 放大10倍后的值：{{ bigSum() }}</h2>
    <select id="" v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <hr>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>


<script lang="ts" setup name="Count">
import { useCountStore } from "@/store/Count";
import { storeToRefs } from "pinia";
const countStore = useCountStore()
// storeToRefs只会对数据进行包裹，会不会store中的方法创建响应式对象
const { sum, str, addr } = storeToRefs(countStore)
const { bigSum, increment, decrement } = countStore

// useCountStore是一个reactive包装的ref数据，reactive包装的ref数据访问时无需加.value, 会自动拆包
// 读取数据的两种方式
console.log("@@@", countStore.sum, countStore.$state.sum)
let num = 1
function add() {
  increment(num)
}

function sub() {
  // sum.value -= num.value
  decrement(num)
}

</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5 px;
  height: 25px;
}
</style>