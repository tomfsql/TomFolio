<template>
    <h1> À propos de moi </h1>
    <p> Mon profil en quelques points-clés : </p>
    <ul>
      <li> Actuellement en BUT3 Informatique à l'IUT Lyon 1 Doua </li>
      <li> 24 ans, résidant à Villeurbanne, permis B et véhiculé </li>
      <li> Alternant à ViewPoint en tant que développeur logiciel </li>
    </ul>
    <p> En plus des compétences techniques présentées dans la page des mes compétences, j'en ai également développé certaines non-techniques, de par mes activités extra-scolaires :</p>
    <ul>
        <li> Membre de la fédération des BDE de l'IUT Lyon 1 Doua </li>
        <li> Tutorat pour des élèves de l'IUT </li>
        <li> Pratique hebdomadaire du sport </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  }
  </script>

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
  