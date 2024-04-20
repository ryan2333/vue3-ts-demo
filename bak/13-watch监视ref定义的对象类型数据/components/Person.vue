<!-- Composition Api -->

<template>
  <div>
    <h1>情况二：监视ref定义的对象类型数据</h1>
    <h2>name: {{ person.name }}</h2>
    <h2>age: {{ person.age }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">chnageAge</button>
    <button @click="changePerson">changePerson</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { ref, watch } from "vue";
/**
* watch 监视数据的变化
* vue3中的watch只能监视以下四种数据
* 1. ref定义的数据
* 2. reactive定义的数据
* 3. 函数返回一个值(getter函数)
* 4. 一个包含上述内容的数组
*/

// 情况二，ref定义的对象类型数据
let person = ref({
  name: "Zhangsan",
  age: 18
})

function changeAge() {
  person.value.age += 1
}

function changeName() {
  person.value.name += "~"
}

function changePerson() {
  person.value = { name: "Lisi", age: 22 }
}

// 情况二：监视ref定义的对象类型数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
/**
 * watch的第一个参数：被监视的数据
 * watch的第二个参数：监视的回调函数
 * watch的第三个参数：配置对象(deep， immediate等参数)
 */
watch(person, (newVal, oldVal) => {
  console.log('person变化了...', newVal, oldVal);
}, { deep: true })

</script>

<style></style>