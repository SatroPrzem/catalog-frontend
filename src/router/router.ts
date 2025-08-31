import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import CompaniesView from '@/views/CompaniesView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import { ERoutesNames, ERoutesPaths } from './router.types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ERoutesPaths.HOME,
      name: ERoutesNames.HOME,
      component: HomeView,
    },
    {
      path: ERoutesPaths.COMPANIES,
      name: ERoutesNames.COMPANIES,
      component: CompaniesView,
    },
    {
      path: ERoutesPaths.REGISTER,
      name: ERoutesNames.REGISTER,
      component: RegisterView,
    },
    {
      path: ERoutesPaths.LOGIN,
      name: ERoutesNames.LOGIN,

      component: LoginView,
    },
    {
      path: ERoutesPaths.ABOUT,
      name: ERoutesNames.ABOUT,

      component: () => import('../views/AboutView.vue'),
    },
    {
      path: ERoutesPaths.NOT_FOUND,
      name: ERoutesNames.NOT_FOUND,

      component: NotFound,
    },
  ],
})

export default router
