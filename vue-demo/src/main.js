// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
import App from './App'
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
