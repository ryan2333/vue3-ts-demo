import { computed, ref } from 'vue'



export default function () {
  let sum = ref(0)

  let bigSum = computed(() => sum.value * 10)

  function changeSum() {
    sum.value += 1
  }

  // 向外部提供内容
  return {
    sum, changeSum, bigSum
  }
}