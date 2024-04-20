<!-- Composition Api -->

<template>
  <div>

  </div>
</template>

<script lang="ts">

</script>

<script lang="ts" setup name="Person">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

console.log("created...")

onBeforeMount(() => {
  console.log("before mount..");
})

onMounted(() => {
  console.log("mounted...");
})

onBeforeUpdate(() => {
  console.log("before update...");
})
onUpdated(() => {
  console.log("updated...");
})

onBeforeUnmount(() => {
  console.log("before umount...");
})
onUnmounted(() => {
  console.log("umounted...");
})


</script>

<style scoped></style>