import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginModalComponent from '../views/LoginModalComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entrar',
      name: 'entrar',
      component: LoginModalComponent
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: AboutView
    }
  ]
})

export default router
