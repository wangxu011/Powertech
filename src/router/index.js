import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: () => import('../views/aboutUs/Index.vue'),
    children: [
      {
        path: '/aboutUs/introduction',
        component:() => import('../views/aboutUs/Introduction.vue')
      },
      {
        path: '/aboutUs/patents',
        component:() => import('../views/aboutUs/Patents.vue')
      },
      {
        path: '/aboutUs/qualifications',
        component:() => import('../views/aboutUs/Introduction.vue')
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
