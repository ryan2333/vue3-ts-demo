<template>
  <div class="father">
    <h3>父祖件</h3>
    <h4 v-if="toy">子组件给的toy: {{ toy }}</h4>
    <!-- 给子组件绑定事件 -->
    <Child @send-toy="sendToy" />
  </div>
</template>


<script lang="ts" setup name="Father">
import Child from './Child.vue';
import { ref } from "vue";

let toy = ref('')

function sendToy(val: string) {
  console.log('xyz');
  toy.value = val
}

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>