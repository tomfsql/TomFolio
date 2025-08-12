<template>
  <h1> Tom Fasquelle : PortFolio </h1>
  <div class="navbar">
    <RouterLink to="/"> Home </RouterLink>
    <RouterLink to="/about"> À propos de moi </RouterLink>
    <RouterLink to="/projects"> Projets </RouterLink>
    <RouterLink to="/skills"> Compétences </RouterLink>
  </div>
  <div class="content">
    <RouterView></RouterView>
  </div>

  <Footer/>
</template>

<script>
 import { RouterLink, RouterView } from 'vue-router'
 import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
      RouterLink, RouterView,Footer 
  }
}
</script>
