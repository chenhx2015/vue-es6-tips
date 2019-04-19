import Vue from 'vue'
import VueRouter from 'vue-router'
import tips from './tips'
import my from './my'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [...tips, ...my]
})

// 导出路由信息
export default router
