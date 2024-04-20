<template>
  <div class="father">
    <h3>父祖件</h3>
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食城市">
        <img :src="imgUrl" alt="">
      </Category>
      <Category title="今日影视推荐">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>


<script lang="ts" setup name="Father">
import Category from './Category.vue';
import { reactive, ref } from "vue";

const imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
const videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
let games = reactive([
  { id: "id001", name: "英雄联盟" },
  { id: "id002", name: "王者荣耀" },
  { id: "id003", name: "斗罗大陆" },
  { id: "id004", name: "红色警戒" }
])
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