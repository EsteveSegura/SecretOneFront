import { createRouter, createWebHistory } from 'vue-router'
import Secret from '../views/Secret.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'KeepSecrets',},
    component: Home
  },
  {
    path: '/secret/:id/:secretKey',
    name: 'Secret',
    meta: { title: 'KeepSecrets',},
    component: Secret
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  console.log(from)
  next()
})
export default router
