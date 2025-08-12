<template>
  <h1> Tom Fasquelle : PortFolio </h1>
  <div class="navbar">
    <RouterLink to="/"> Accueil </RouterLink>
    <RouterLink to="/about"> À propos de moi </RouterLink>
    <RouterLink to="/projects"> Projets </RouterLink>
    <RouterLink to="/skills"> Compétences techniques </RouterLink>
    <RouterLink to="/BUTskills"> Compétences du BUT </RouterLink>
  </div>
  <div class="content">
    <RouterView></RouterView>
  </div>

  <Footer/>
</template>

<script>
 import { RouterLink, RouterView } from 'vue-router'
 import Footer from "./components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
      RouterLink, RouterView,Footer 
  }
}
</script>
