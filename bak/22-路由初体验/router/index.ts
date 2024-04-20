// 创建一个路由器并暴露出去

// 1. 引入路由组件
import About from "@/pages/About.vue";
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
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/",
      component: Home,
      end: false
    }
  ],
  history: createWebHistory(),
})

export default router