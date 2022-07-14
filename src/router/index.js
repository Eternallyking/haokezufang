import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/List')
      },
      {
        path: 'news',
        component: () => import('@/views/News')
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/favorate',
    component: () => import('@/views/Favorate')
  },
  {
    path: '/rent',
    component: () => import('@/views/Rent')
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  }
]

const router = new VueRouter({
  routes
})

export default router
