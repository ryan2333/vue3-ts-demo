<template>
  <div class="container-fluid wraper">
    <h2>name: {{ person.name }}</h2>
    <h2>age: {{ person.age }}</h2>
    <button @click="changeAge">changeAge</button>
    <hr>
    <h2>Brand: {{ car.brand }}</h2>
    <h2>Price: {{ car.price }}</h2>
    <button @click="changePrice">changePrice</button>
    <h2>car2: {{ car2 }}</h2>
  </div>
</template>


<script lang="ts" setup name="App">
import { reactive, toRaw, markRaw } from "vue";
/** toRaw */
let person = reactive({
  name: "Tony",
  age: 18
})

// 用于获取响应式数据的原始数据
let rawPerson = toRaw(person)

function changeAge() {
  console.log("响应式数据: ", person);
  console.log("原始数据: ", rawPerson);
}

/** markRaw */
// 标记对象永远不会成为响应式数据
let car = markRaw({ brand: "BWA", price: 200 })

function changePrice() {
  car.price += 10
}

let car2 = reactive(car)

</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>