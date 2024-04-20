<template>
  <div class="game">
    <h2>游戏列表</h2>
    <!-- 给slot组件传递数据 -->
    <slot :games="games"></slot>
  </div>
</template>


<script lang="ts" setup name="Game">
import { reactive } from 'vue';

let games = reactive([
  { id: "id001", name: "英雄联盟" },
  { id: "id002", name: "王者荣耀" },
  { id: "id003", name: "斗罗大陆" },
  { id: "id004", name: "红色警戒" }
])
</script>

<style scoped>
.game {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 200px;
  height: 300px;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>