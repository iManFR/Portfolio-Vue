import Vue from 'vue'
import App from './App'

import Router from 'vue-router'
import { routes } from './routes/router-config'

Vue.use(Router)

const router = new Router({
  routes: routes,
  mode: 'history',
})

//Vue.config.productionTip = false

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
