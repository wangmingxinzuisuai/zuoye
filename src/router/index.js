import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/home-page',
        name: 'home-page',
        component: () => import('../views/home-page.vue')
      },
      {
        path: '/user-management',
        name: 'user-management',
        component: () => import('../views/user-management.vue')
      },
      {
        path: '/add-user',
        name: 'add-user',
        component: () => import('../views/add-user.vue')
      },
      {
        path: '/details',
        name: 'details',
        component: () => import('../views/details.vue')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import('../views/role.vue')
      },
      {
        path: '/add-role',
        name: 'add-role',
        component: () => import('../views/add-role.vue')
      },
      {
        path: '/jurisdiction',
        name: 'jurisdiction',
        component: () => import('../views/jurisdiction.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/Forgot-password',
    name: 'Forgot-password',
    component: () => import('../views/Forgot-password.vue')
  },
  {
    path: '/quanpin',
    name: 'quanpin',
    component: () => import('../views/quanpin.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
