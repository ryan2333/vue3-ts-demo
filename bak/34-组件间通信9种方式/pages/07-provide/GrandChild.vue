<template>
  <div class="child">
    <h3>孙组件</h3>
    <h4>money: {{ x }}</h4>
    <h4>car: {{ car.brand }}, price: {{ car.price }}</h4>
    <button @click="giveMoney(10)">给爷爷组件钱</button>
  </div>
</template>


<script lang="ts" setup name="GrandChild">
import { inject } from "vue";

let x = inject('money', 'default')
let car = inject('car', { brand: 'unknown', price: 0 })
let giveMoney = inject('moneyCtx', (value: number) => { })



</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>