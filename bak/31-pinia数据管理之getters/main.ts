import { createApp } from 'vue'

// 引入pinia
import { createPinia } from "pinia";

import App from './App.vue'

const app = createApp(App)
// 创建pinia
const pinia = createPinia()
// 安装pinia
app.use(pinia)
app.mount("#app")