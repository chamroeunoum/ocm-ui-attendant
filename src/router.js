import { createRouter, createWebHashHistory } from 'vue-router'
import { getRoutes } from './plugins/route'

let routes = getRoutes()

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router