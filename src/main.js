// promise polyfill
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
// 路由组件
import router from '@/router'

Vue.config.productionTip = false

Vue.use(router)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
