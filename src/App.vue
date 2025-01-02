<template>
  <h1> Tom Fasquelle : PortFolio </h1>
  <RouterLink to="/"> Home </RouterLink>
  <RouterLink to="/about"> À propos de moi </RouterLink>
  <RouterLink to="/projects"> Projets </RouterLink>
  <RouterView></RouterView>
</template>

<script>
 import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
      RouterLink, RouterView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
