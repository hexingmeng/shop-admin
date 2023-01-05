// 引入vue-router
import {
    createRouter,
    createWebHashHistory
} from "vue-router"
import Index from "~/views/Index.vue"
import NotFound from "~/views/404.vue"
import Login from "~/views/Login/Login.vue"
// 实例化routes 
const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

// 实例化router
const router = createRouter({
    history: createWebHashHistory(),
    // 使用实例化routes
    routes
})

// 导出实例化router
export default router