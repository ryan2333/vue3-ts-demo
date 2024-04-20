<!-- Composition Api -->
<template>
  <div>
    <h2>name: {{ person.name }}</h2>
    <h2>age: {{ person.age }},{{ nl }}</h2>
    <button @click="changeName">modifyName</button>
    <button @click="changeAge">modifyName</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { reactive, toRefs, toRef } from 'vue'

let person = reactive({
  name: "zhangs",
  age: 19
})

// toRefs，将从对象中解构出来的数据也变为响应式数据
let { name, age } = toRefs(person)
let nl = toRef(person, "age")

function changeName() {
  name.value += "~"
}

function changeAge() {
  age.value += 1
}

</script>

<style></style>