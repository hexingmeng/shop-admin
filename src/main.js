import { createApp } from 'vue'

// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 引入router
import router from "./router"
const app = createApp(App)
app.use(ElementPlus)

import 'virtual:windi.css'
// 挂在router
app.use(router)
app.mount('#app')
