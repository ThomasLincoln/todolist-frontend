import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import CadastroView from '@/views/CadastroView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { showNavbar: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { showNavbar: true }
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: CadastroView,
      meta: { showNavbar: true }
    },
    {
      path: '/profile',
      name: 'Perfil',
      component: ProfileView,
      meta: { showNavbar: true }
    },
  ]
})

export default router
