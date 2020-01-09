// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'iview/dist/styles/iview.css'
import 'iview/dist/styles/iview.css'
import Vue from 'vue'
import App from './App'
import store from './vuex/index'
import router from './router'
import * as warpAxios from './libs/axios'
import iview from 'iview'
Vue.use(iview)
// import { vueBaberrage } from 'vue-baberrage'
// Vue.use(vueBaberrage)

Vue.prototype.$http = warpAxios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
