<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="n in newsList" :key="n.id">
        <!-- 第一种写法 query传参 -->
        <!-- <RouterLink :to="`/news/detail?id=${n.id}&title=${n.title}&content=${n.content}`">{{ n.title }}
        </RouterLink> -->
        <!-- 第二种写法query传参 -->
        <RouterLink :to="{
        path: '/news/detail',
        query: {
          id: n.id,
          title: n.title,
          content: n.content
        }
      }">{{ n.title }}
        </RouterLink>

      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>


<script lang="ts" setup name="News">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const newsList = reactive([
  {
    id: "news001", title: "很好的抗癌食物", content: "西兰花"
  },
  {
    id: "news002", title: "如何一夜暴富", content: "学IT"
  },
  {
    id: "news003", title: "震惊，万万没想到", content: "明天是周一"
  },
  {
    id: "news004", title: "好消息！！！", content: "快过年了"
  }
])
</script>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  /* // list-style: none; */
  padding-left: 10px;
}

.news li::marker {
  color: #64967E;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  float: right;
}
</style>