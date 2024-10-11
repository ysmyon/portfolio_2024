// router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'home',
    component: HomeView
    },
  {
    path: '/detail',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (detail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detail" */ '@/views/DetailView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // savedPosition은 브라우저의 뒤로 가기/앞으로 가기 등을 했을 때 스크롤 위치를 유지하는 옵션
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 } // 화면 맨 위로 이동
    }
  }
})

export default router