// import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import success from '@/components/success'
import champion from '@/components/champion'
import result from '@/components/result'
import admin from '@/components/admin'

// Vue.use(Router)

export default new Router({
  // mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/success/:successTeam',
      name: 'success',
      component: success
    },
    {
      path: '/champion',
      name: 'champion',
      component: champion
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
