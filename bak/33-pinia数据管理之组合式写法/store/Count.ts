import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountStore = defineStore('count', () => {
  let sum = ref(6)
  let str = ref("hahaha")
  let addr = ref("Beijing")

  function increment(val: number) {
    sum.value += val
  }

  function decrement(val: number) {
    sum.value -= val
  }

  function bigSum() {
    return sum.value * 10
  }
  return {
    sum,
    str,
    addr,
    bigSum,
    increment,
    decrement
  }
})
