import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

import CreateUser from './views/Auth/CreateUser.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requriesAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/auth/create',
      name: 'Create User',
      component: CreateUser
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('x-access-token')
  if (store.getters.userProfile === null && token) {
    store.dispatch('fetchUser')
  }
  if (to.matched.some(record => record.meta.requriesAuth)) {
    if (store.getters.isLoggedIn) {
      return next()
    }
    next('/auth/create')
  } else {
    return next()
  }
})

export default router
