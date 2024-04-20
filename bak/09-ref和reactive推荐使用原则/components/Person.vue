<!-- Composition Api -->
<template>
  <div>
    <h2>购买数量：{{ car.count }}辆 {{ car.branch }}</h2>
    <h2>需付款：{{ car.price * car.count }} 万元</h2>
    <button @click="changeCount">+</button><br />
    <button @click="changeCar">changeCar</button>
    <hr>
    <h2>sum: {{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <hr>
    <h2>1辆{{ bike.branch }} 自行车价值{{ bike.price }}元</h2>
    <button @click="changeBike">修改自行车</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { reactive, ref } from 'vue'

/**
 * ref既能定义基本数据，也可以定义对象类型数据，ref定义对象类型数据时，底层调用的还是reactive// ref既能定义基本数据，也可以定义对象类型数据，ref定义对象类型数据时，底层调用的还是reactive
 * reactive定义的对象不能直接修改，如果需要修改，请使用Object.assign(src, dest)
 */
let car = reactive({
  branch: "benchi",
  price: 100,
  count: 1
})

let bike = ref({
  branch: "yongjiu",
  price: 200
})

function changeBike() {
  // ref定义的对象类型数据，可直接修改
  bike.value = { branch: "fenghuang", price: 400 }
}

let sum = ref(0)

function changeSum() {
  sum.value += 1
}


function changeCount() {
  car.count += 1
}

function changeCar() {
  // 这样写，reactive定义的响应式数据将失效
  // car = { branch: "baoma", price: 20 }
  // car = reactive({ branch: "baoma", price: 20 })
  // 需要这样写，才能使用
  Object.assign(car, { branch: "bwa", price: 20 })
}

</script>

<style></style>