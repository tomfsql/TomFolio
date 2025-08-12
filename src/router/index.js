import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ProjectsPage from '@/components/ProjectsPage.vue'
import SkillsPage from '@/components/SkillsPage.vue'
import BUTSkillsPage from '@/components/BUTSkillsPage.vue'

const router = createRouter({
  history: createWebHistory(process.env.VUE_BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'À propos de moi', component: AboutPage },
    { path: '/projects', name: 'Projets', component: ProjectsPage },
    { path: '/skills', name: 'Compétences techniques', component: SkillsPage },
    { path: '/BUT', name: 'Compétences du BUT', component: BUTSkillsPage }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
