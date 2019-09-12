import Vue from 'vue'
import Router from 'vue-router'
import Inventory from './views/Inventory.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    }
  ]
})
