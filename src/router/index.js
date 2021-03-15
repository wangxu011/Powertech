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
        component:() => import('../views/aboutUs/Qualifications.vue')
      }
    ]
  },
  {
    path: '/companyTrends',
    name: 'CompanyTrends',
    component: () => import('../views/companyTrends/Index.vue'),
    children: [
      {
        path: '/companyTrends/news',
        component: () => import('../views/companyTrends/News.vue'),
        children: [
          {
            path: '/companyTrends/news/:id',
            component: () => import('../views/companyTrends/Detail.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: () => import('../views/contactUs/Index.vue'),
    children: [
      {
        path: '/contactUs/info',
        component: () => import('../views/contactUs/ContactInfo.vue')
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
