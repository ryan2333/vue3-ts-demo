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
          path: 'detail/:id/:title/:content',
          component: Detail,
          props: true // 将路由收到的所有params参数做为props传给路由组件
          // 第二种写法， 可以自己决定将什么作为props传给路由组件,多用于query传参
          // props(route) {
          //   return route.params
          // }
          // 第三种写法，对象写法
          // props() {
          //   a: 100,
          //     b: 200,
          //       c: 300
          // }
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