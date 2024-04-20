<!-- Composition Api -->

<template>
  <div>
    <h1>情况五：上述多个数据</h1>
    <h2>name: {{ person.name }}</h2>
    <h2>age: {{ person.age }}</h2>
    <h2>car1: {{ person.cars.c1 }}</h2>
    <h2>car2: {{ person.cars.c2 }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">chnageAge</button>
    <button @click="changeCar1">changeCar1</button>
    <button @click="changeCar2">changeCar2</button>
    <button @click="changeCars">changeCars</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { reactive, watch } from "vue";
/**
* watch 监视数据的变化
* vue3中的watch只能监视以下四种数据
* 1. ref定义的数据
* 2. reactive定义的数据
* 3. 函数返回一个值(getter函数)
* 4. 一个包含上述内容的数组
*/

let person = reactive({
  name: "Zhangsan",
  age: 18,
  cars: {
    c1: "benchi",
    c2: "bwa"
  }
})

function changeAge() {
  person.age += 1
}

function changeName() {
  person.name += "~"
}

function changeCar1() {
  person.cars.c1 = "aodi"
}

function changeCar2() {
  person.cars.c1 = "dazhong"
}


function changeCars() {
  person.cars = ({ c1: "aotuo", c2: "byd" })
}


// 情况五：监视上述多个数据
watch([() => person.name, person.cars], (newVal, oldVal) => {
  console.log('person.car变化了...', newVal, oldVal);
}, { deep: true })

</script>

<style></style>