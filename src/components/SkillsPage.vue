<template>
    <h1> Mes compétences </h1>

    <p> Tout au long de mon cursus scolaire, j'ai pu développer diverses compétences techniques , dans les domaines suivants </p>
    <ul>
        <li> Langages de programmation et frameworks de développement</li>
        <li> Systèmes de Gestion de bases de Données </li>
        <li> Outils informatiques et systèmes d'exploitation</li>
    </ul>

</template>
  
  <script>
  export default {
    name: 'HomePage',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type:circle;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>