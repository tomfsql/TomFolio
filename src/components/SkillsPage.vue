<template>
    <h1> Mes compétences </h1>

    <p> Tout au long de mon cursus scolaire, j'ai pu développer diverses compétences techniques, dans les domaines suivants : </p>
  
    <table>
        <thead>
            <tr>
                <td> Nom </td>
                <td> Java</td>
                <td> C </td>
                <td> JavaScript/TypeScript</td>
                <td> Python </td>
                <td> HTML/CSS </td>
                <td> PHP </td>
                <td> Angular </td>
                <td> Vue.js </td>
                <td> Flask </td>
                <td> PL/SQL </td>
                <td> MongoDB </td>
                <td> Neo4J</td>
                <td> Git </td>
                <td> Docker </td>
                <td> Bash </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> Usage depuis </td>
                <td colspan="2"> 2021 </td>
                <td> 2024 </td>
                <td colspan="2"> 2023 </td>
                <td colspan="7"> 2024</td>
                <td> 2021</td>
                <td colspan="2"> 2024</td>
            </tr>
            <tr>
                <td> Catégorie </td>
                <td colspan="6"> Langage de programmation </td>
                <td colspan="3"> Framework de développement </td>
                <td colspan="3"> Langage de manipulation de Base de Données </td>
                <td colspan="3"> Outil/langage système </td>
            </tr>
            <tr>
                <td> Maîtrise </td>
                <td class="good"> Bonne </td>
                <td class="mid"> Moyenne </td>
                <td class="good" colspan="3"> Bonne </td>
                <td class="mid"> Moyenne </td>
                <td class="good" colspan="4"> Bonne </td>
                <td class="mid" colspan="2"> Moyenne</td>
                <td class="good"> Bonne </td>
                <td class="mid" colspan="2"> Moyenne </td>
            </tr>
        </tbody>
    </table>

    <p> Ces compétences s'inscrivent dans un contexte lié au BUT, qui vise à développer des compétences plus générales, dont voici quelques exemples : </p>
    <ul>
      <li>
        Élaborer et faire évoluer une application informatique : apprentissage et maîtrise de différents langages de programmation
      </li>
      <li> 
        Travailler et collaborer au sein d'une équipe informatique : réalisation de projets en groupe, gestion de projet et respect des contraintes
      </li>
      <li> 
        Mettre en place des applications informatiques adaptées et efficaces : choix des outils utilisés, et mise en place des bonnes pratiques de développement 
      </li>
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
  table {
    width: 100%;
  }
  table, thead, tbody, tr, tbody + tr + td{
    border: 1px solid black;
  }
  td{
    width: fit-content;
    border: 1px dotted blue ;
  }

  .good {
    background-color: #42b983;
  }

  .mid {
    background-color: yellowgreen;
  }
  </style>