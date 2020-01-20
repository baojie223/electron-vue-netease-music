import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../layout/Layout.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/explore',
    children: [
      {
        path: 'explore',
        name: 'explore',
        component: () => import('../views/explore/index.vue')
      },
      {
        path: 'explore/recommend',
        name: 'recommend',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/explore/recommend.vue'
          )
      },
      {
        path: 'fm',
        name: 'fm',
        component: () => import('../views/fm/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
