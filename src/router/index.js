import Vue from 'vue'
import VueRouter from 'vue-router'
import tips from './tips'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [...tips]
})

// 导出路由信息
export default router
