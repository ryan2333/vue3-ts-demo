<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>a: {{ a }}</h4>
    <h4>attrs: {{ $attrs }}</h4>
    <!-- 将父组件的参数传给子组件 -->
    <GrandChild v-bind="$attrs" />
  </div>
</template>


<script lang="ts" setup name="Child">
import { ref, defineProps } from "vue";
import GrandChild from "./GrandChild.vue";

// 通过defineProps接收的参数在组件的props属性里，未接收的参数在组件的attrs属性里
defineProps(['a'])

</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>