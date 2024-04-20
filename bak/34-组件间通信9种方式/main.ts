import { createApp } from 'vue'

// 引入pinia
import { createPinia } from "pinia";

import App from './App.vue'
import { router } from './router/router';
// import emitter from './utils/emitter';

const app = createApp(App)
// 创建pinia
const pinia = createPinia()
// 安装pinia
app.use(pinia)

// app.use(emitter)
app.use(router)
app.mount("#app")