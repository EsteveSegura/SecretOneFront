import { createRouter, createWebHistory } from 'vue-router'
import Secret from '../views/Secret.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/secret/:id/:secretKey',
    name: 'Secret',
    component: Secret
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
