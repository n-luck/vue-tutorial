import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import ManageView from '@/views/ManageView.vue'

export const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'about',
    path: '/about',
    component: AboutView,
  },
  {
    name: 'manage',
    path: '/manage-music',
    // alias: "/manage",
    component: ManageView,
    beforeEnter: (to, from, next) => {
      next()
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
]
