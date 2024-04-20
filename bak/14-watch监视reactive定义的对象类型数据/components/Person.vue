<!-- Composition Api -->

<template>
  <div>
    <h1>情况三：监视reactive定义的对象类型数据</h1>
    <h2>name: {{ person.name }}</h2>
    <h2>age: {{ person.age }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">chnageAge</button>
    <button @click="changePerson">changePerson</button>
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

// 情况三，reactive定义的对象类型数据
let person = reactive({
  name: "Zhangsan",
  age: 18
})

function changeAge() {
  person.age += 1
}

function changeName() {
  person.name += "~"
}

function changePerson() {
  // person = { name: "Lisi", age: 22 }
  Object.assign(person, { name: "Lisi", age: 22 })
}

// 情况二：监视reactive定义的对象类型数据，默认是开启的深度监视的，且深度监视无法关闭
watch(person, (newVal, oldVal) => {
  console.log('person变化了...', newVal, oldVal);
}, { deep: true })

</script>

<style></style>