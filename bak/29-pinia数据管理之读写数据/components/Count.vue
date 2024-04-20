<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
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
import { ref } from "vue";
import { useCountStore } from "@/store/Count";
const countStore = useCountStore()
// useCountStore是一个reactive包装的ref数据，reactive包装的ref数据访问时无需加.value, 会自动拆包
// 读取数据的两种方式
console.log("@@@", countStore.sum, countStore.$state.sum)
let num = 1
function add() {
  // 修改pinia的数据三种方式
  // 1
  countStore.sum += num

  // 2，用于数据较多的时候
  // countStore.$patch({
  //   sum: countStore.sum += num
  // })

  // 3. 复杂的方式
  // countStore.increment(num)
}

function sub() {
  // sum.value -= num.value
  countStore.decrement(num)
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