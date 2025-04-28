<template>
  <h1> Mes projets </h1>      
      <div class="title"> 
        <h3> Projets scolaires </h3>
        <button class="collapsebtn" @click="toggleCategory('IUT')">
            {{ showMainCategories['IUT'] ? '-' : '+' }}
        </button>
      </div>

      <div class="category" v-if="this.showMainCategories['IUT']">

        <div class="project"> 
          <div class="project-header">
            <h4> Application web de planification des stages ( back-end en Python avec SAGE pour la résolution d'équation )  </h4>
            <button class="collapsebtn" @click="toggleProject('Solveur')">
                {{ showSingleProject['Solveur'] ? '-' : '+' }}
            </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['Solveur']">

            <p> J'ai réalisé ce projet dans le cadre de mon BUT Informatique en Année Spéciale, au second semestre. J'ai collaboré au sein d'un groupe de 3 personnes. </p>
            <p> Mon rôle : concevoir et développer le solveur, dans la partie back-end, basé sur la libraire <a href="https://www.sagemath.org/" target="_blank"> SAGE ( Python )</a>.  </p>

          </div> 
        </div>

        <div class="project"> 
          <div class="project-header">
            <h4> Application web de gestion d'exercices ( Angular, front-end ) </h4>
            <button class="collapsebtn" @click="toggleProject('Exercices')">
              {{ showSingleProject['Exercices'] ? '-' : '+' }}
            </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['Exercices']">

            <p> Ce projet a pris place dans le cadre du cours de programmation avancée en front-end, au premier semestre de BUT3 </p>
            <p> Utilisation d'Angular afin d'obtenir un rendu dynamique, ergonomique et fonctionnel </p>

          </div> 
        </div>

        <div class="project" v-if="this.showSingleProject['SiteWeb']"> 
          <div class="project-header">
            <h4> Site web statique en HTML/CSS afin de présenter les mobilités douces </h4>
            <button class="collapsebtn" @click="toggleProject('SiteWeb')">
              {{ showSingleProject['SiteWeb'] ? '-' : '+' }}
            </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['SiteWeb']">
            <p> Site web statique, que j'ai développé en binôme au premier semestre de mon BUT Année Spéciale. </p>
            <p> Usage des langages HTML et CSS, j'ai pris en charge la partie responsive notamment.</p>
          </div> 
        </div>

        <div class="project" v-if="this.showSingleProject['QDev']"> 
          <div class="project-header">
            <h4> Jeu en ligne interactif </h4>
            <button class="collapsebtn" @click="toggleProject('QDev')">
              {{ showSingleProject['QDev'] ? '-' : '+' }}
            </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['QDev']">
            <p> Sie de jeu développé dans le cadre de la matière Qualité de Développement du S5 de BUT. </p>
            <p> Usage de Pytest afin de créer les test unitaires liés au pipeline.</p>
          </div> 
        </div>

      </div>

      <div class="title"> 

        <h3> Projets dans le cadre de mon alternance </h3>
        <button class="collapsebtn" @click="toggleCategory('VP')">
            {{ showSingleProject['VP'] ? '-' : '+' }}
        </button>

      </div>

      <div class="category" v-if="this.showMainCategories['VP']">
        <div class="project"> 
          <div class="project-header">
            <h4> Application web de gestion d'un annuaire, via Flask ( back-end en Python, front-end en HTML ) </h4>
            <button class="collapsebtn" @click="toggleProject('Annuaire')">
              {{ showSingleProject['Annuaire'] ? '-' : '+' }}
            </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['Annuaire']"> 
            <p> Application web destinée au fonctionnement interne de l'entreprise, accès via LDAP ( Lightweight Directory Access Protocol ) au fichier de données.</p>
            <p> J'ai développé l'application en partant d'une base quasiment vide, et j'y ai construit les fonctionnalités suivantes : authentification, interaction avec la base de données, affichage.</p>
          </div>
        </div>

        <div class="project">
          <div class="project-header">
            <h4> Application web afin de remplacer une interface ( VueJS, front-end ) </h4>
            <button class="collapsebtn" @click="toggleProject('Annuaire')">
              {{ showSingleProject['Annuaire'] ? '-' : '+' }}
            </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['Annuaire']"> 
            <p> Application web permettant d'afficher les données dynamiquement.</p>
            <p> Utilisation de Vue.js afin d'obtenir des composants exportables.</p>
            <p> Communication entre un navigateur web géré par WebView ( utilisant l'application VueJS ) et une application C#.</p>
          </div>
        </div>
      </div>

  <p> En synthèse : j'ai pu développer en utilisant divers outils et langages </p>
  <ul>
    <li> Développement web : VueJS, Flask, Angular </li>
    <li> Développement logiciel : C++, C#, Python </li>
    <li> Outils : Git, Docker</li>
  </ul>
</template>
  
  <script>
  export default {
    name: 'HomePage',
  data(){
    return {
      showMainCategories: {"IUT": true, "VP": true},
      showSingleProject: {"Solveur": true, "Exercices": true, "SiteWeb": true, "Annuaire": true, "PropertyGrid": true, 'QDev':true},
    };
  },
  methods : {
    toggleCategory(category) {
        this.showMainCategories[category] = !this.showMainCategories[category];
    },
    toggleProject(project) {
      this.showSingleProject[project] = !this.showSingleProject[project];
    },
  }
  }
  </script>

  <style scoped>

  h3 {
    text-align: left;
  }


  .collapsebtn{
    color: black;
    height: fit-content;
  }

  .title > button, .project-header > button {
    margin-top: 20px;
  }

  .title, .project-header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .project, .category {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px;
    border: 2px dotted black;
  }
  li{
    display: flex;
    justify-content: space-around;
  }
  </style>
  