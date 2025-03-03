import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionnaireView from '../views/QuestionnaireView.vue'
import FaqView from '../views/FaqView.vue'
import GemeenteView from '../views/GemeenteView.vue'
import ErnstView from '../views/ErnstView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/melding',
      name: 'melding',
      component: QuestionnaireView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView
    },
    {
      path: '/gemeente',
      name: 'gemeente',
      component: GemeenteView
    },
    {
      path: '/ernst',
      name: 'ernst',
      component: ErnstView
    }
  ]
})

export default router 