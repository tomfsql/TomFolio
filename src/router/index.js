import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ProjectsPage from '@/components/ProjectsPage.vue'

const router = createRouter({
  history: createWebHistory(process.env.VUE_BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'À propos de moi', component: AboutPage },
    { path: '/projects', name: 'Projets', component: ProjectsPage }
  ]
})

export default router