<template>
  <h1> Mes projets </h1>

    <div> 

      <!-- TODO : ajouter boutons pour afficher ou non les catégories -->
      
      <h3> Projets scolaires </h3>
      
        <div> 
          <h4> Application web de planification des stages ( back-end en Python avec SAGE pour la résolution d'équation )  </h4>

          <p> J'ai réalisé ce projet dans le cadre de mon BUT Informatique en Année Spéciale</p>
          <p> Mon rôle a été de créer et faire fonctionner le solveur, s'appuyant sur la libraire SAGE </p>
        </div>

        <div> 
          <h4> Application web de gestion d'exercices ( Angular, front-end et back-end ) </h4>
          <p> Ce projet a pris place dans le cadre du cours de programmation avancée en front-end, au premier semestre de BUT3 </p>
        </div>

        <div> 
          <h4> Site web statique en HTML/CSS afin de présenter les mobilités douces </h4>
          <p> Site web responsive, que j'ai développé en binôme au premier semestre de mon BUT Année Spéciale </p>
        </div>


      <h3> Projets dans le cadre de mon alternance </h3>

        <div> 
          <h4> Application web de gestion d'un annuaire, via Flask ( back-end en Python, front-end en HTML, connexion à une base de données ) </h4>
        </div>

        <div> 
          <h4> Application web afin de remplacer une interface, prenant en paramètre un fichier JSON et extrayant les données ( Vuejs, front-end ) </h4>
        </div>
    </div>
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
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  