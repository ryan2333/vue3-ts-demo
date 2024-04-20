<!-- Composition Api -->
<template>
  <div>
    <h2>购买数量：{{ car.count }}</h2>
    <h2>需付款：{{ car.price * car.count }} 万元</h2>
    <button @click="incream">+</button>
    <button @click="decream">-</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { ref } from 'vue'

let car = ref({
  branch: "benchi",
  price: 100,
  count: 1
})

function incream() {
  car.value.count += 1
}

function decream() {
  car.value.count -= 1
}

</script>

<style></style>