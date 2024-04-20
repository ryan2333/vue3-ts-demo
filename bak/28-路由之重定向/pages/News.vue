<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="n in newsList" :key="n.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail/${n.id}/${n.title}/${n.content}`">{{ n.title }}</RouterLink> -->

        <!-- 第二种对象写法, 不能用path,只能用name，参数类型不能传数组 -->
        <button @click="showNewsDetial(n)">查看新闻</button>
        <RouterLink :to="{
        name: 'detail',
        params: {
          id: n.id,
          title: n.title,
          content: n.content
        }
      }">{{ n.title }}</RouterLink>
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
import { RouterLink, useRouter } from 'vue-router';

interface NewsInterface {
  id: string,
  title: string,
  content: string
}

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

const router = useRouter()

function showNewsDetial(news: NewsInterface) {
  router.push({
    name: "detail",
    params: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  })
}
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