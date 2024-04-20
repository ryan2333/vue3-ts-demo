<!-- Composition Api -->

<template>
  <div>
    <h1>情况四：监视reactive定义的对象类型数据</h1>
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


// 情况四：监视ref或reactive定义的对象类型数据中的某个属性,若该属性不是对象类型，需要写成函数形式，若该属性是对象类型，可直接，也可写成函数形式，建议写成函数,如果需要监视对象的某个属性，加上deep:true
watch(() => person.name, (newVal, oldVal) => {
  console.log('person.name变化了...', newVal, oldVal);
}, { deep: true, })

watch(() => person.cars, (newVal, oldVal) => {
  console.log('person.car变化了...', newVal, oldVal);
}, { deep: true })

</script>

<style></style>