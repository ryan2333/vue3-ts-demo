<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template v-slot="params">
          <ul>
            <li v-for="g in params.games " :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <!-- 默认插槽名字 -->
        <template v-slot:default="params">
          <ol>
            <li v-for="p in params.games" :key="p.id">
              {{ p.name }}
            </li>
          </ol>
        </template>
      </Game>
      <Game>
        <!-- 默认插槽语法糖写法 -->
        <template #default="{ games }">
          <h3 v-for="p in games" :key="p.id">
            {{ p.name }}
          </h3>
        </template>
      </Game>
    </div>
  </div>
</template>


<script lang="ts" setup name="Father">
import Game from './Game.vue'

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>