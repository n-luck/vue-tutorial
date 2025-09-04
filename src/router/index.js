import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500"
})

export default router
