import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

export const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
]
