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
                <td> VueJS </td>
                <td> Flask </td>
                <td> PL/SQL </td>
                <td> MongoDB </td>
                <td> Git </td>
                <td> Docker </td>
                <td> Bash </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> Usage depuis </td>
            </tr>
            <tr>
                <td> Catégorie </td>
                <td colspan="6"> Langage de programmation </td>
                <td colspan="3"> Framework de développement </td>
                <td colspan="2"> Langage de manipulation de Base de Données </td>
                <td colspan="3"> Outil/langage système </td>
            </tr>
            <tr>
                <td> Maîtrise </td>
            </tr>
        </tbody>
    </table>

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
  }
  </style>