<!-- Composition Api -->

<template>
  <div>
    <h2>sum: {{ sum }},放大10倍后: {{ bigSum }}</h2>
    <button @click="changeSum">sum+1</button>
    <hr>
    <img v-for="(item, index) in imgs" :src="item" alt="" :key="index"><br>
    <button @click="getOtherDog">getOtherDog</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

const { sum, changeSum, bigSum } = useSum()
const { imgs, getOtherDog } = useDog()

</script>

<style scoped>
img {
  height: 100px;
  margin-right: 10px;
}
</style>