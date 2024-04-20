// 创建一个路由器并暴露出去

// 1. 引入路由组件
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";

// 2. 引入路由创建，及路由器的工作模式函数
import { createRouter, createWebHistory } from "vue-router";

// 创建路由器
const router = createRouter({
  routes: [
    {
      path: "/about",
      component: About,
      name: 'guanyu'
    },
    {
      path: "/news",
      component: News,
      name: "xinwen",
      children: [
        {
          name: "detail",
          path: 'detail/:id/:title/:content?', // 问号参数为可选
          component: Detail
        }
      ]
    },
    {
      path: "/",
      component: Home,
      name: "zhuye"
    }
  ],
  history: createWebHistory(),
})

export default router