<!-- Composition Api -->
<template>
  <div>
    姓：<input type="text" v-model="firstName"><br />
    名：<input type="text" v-model="lastName"><br />
    全名：<span>{{ fullName }}</span>
    <button @click="changeFullName">changeFullName</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { ref, computed } from "vue";
let firstName = ref("zhang")
let lastName = ref("san")

// computed计算属性，多次调用，只计算一次，这么定义的属性是只读的，不能修改，结果是一个ref定义的响应式数据
// let fullName = computed(() => {
//   console.log("computed...");
//   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
// })

// 这么定义的fullName是一个计算属性，可读可写，结果是一个ref定义的响应式数据
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  set(val) {
    [firstName.value, lastName.value] = val.split('-')
  }

})

function changeFullName() {
  console.log(fullName.value);
  fullName.value = "li-si"
}

</script>

<style></style>