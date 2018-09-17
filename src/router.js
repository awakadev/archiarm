import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(/* webpackChunkName: "services" */ './views/Services.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "contact" */ './views/404.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
