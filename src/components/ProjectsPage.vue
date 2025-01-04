<template>
  <h1> Mes projets </h1>      
      <div class="title"> 
        <h3> Projets scolaires </h3>
        <button v-if="this.showMainCategories['IUT']" class="collapsebtn" @click="toggleCategory('IUT')"> - </button>
        <button v-else class="collapsebtn" @click="toggleCategory('IUT')"> + </button> 
      </div>

      <div class="category" v-if="this.showMainCategories['IUT']">

        <div class="project"> 
          <div class="project-header">
            <h4> Application web de planification des stages ( back-end en Python avec SAGE pour la résolution d'équation )  </h4>
            <button v-if="this.showSingleProject['Solveur']" class="collapsebtn" @click="toggleProject('Solveur')"> - </button>
            <button v-else class="collapsebtn" @click="toggleProject('Solveur')"> + </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['Solveur']">

            <p> J'ai réalisé ce projet dans le cadre de mon BUT Informatique en Année Spéciale</p>
            <p> Mon rôle a été de créer et faire fonctionner le solveur, s'appuyant sur la libraire SAGE </p>

          </div> 
        </div>

        <div class="project"> 
          <div class="project-header">
            <h4> Application web de gestion d'exercices ( Angular, front-end et back-end ) </h4>
            <button v-if="this.showSingleProject['Exercices']" class="collapsebtn" @click="toggleProject('Exercices')"> - </button>
            <button v-else class="collapsebtn" @click="toggleProject('Exercices')"> + </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['Exercices']">

            <p> Ce projet a pris place dans le cadre du cours de programmation avancée en front-end, au premier semestre de BUT3 </p>

          </div> 
        </div>

        <div class="project" v-if="this.showSingleProject['SiteWeb']"> 
          <div class="project-header">
            <h4> Site web statique en HTML/CSS afin de présenter les mobilités douces </h4>
            <button v-if="this.showSingleProject['SiteWeb']" class="collapsebtn" @click="toggleProject('SiteWeb')"> - </button>
            <button v-else class="collapsebtn" @click="toggleProject('SiteWeb')"> + </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['SiteWeb']">
            <p> Site web responsive, que j'ai développé en binôme au premier semestre de mon BUT Année Spéciale </p>
          </div> 
        </div>

      </div>

      <div class="title"> 

        <h3> Projets dans le cadre de mon alternance </h3>
        <button v-if="this.showMainCategories['VP']" class="collapsebtn" @click="toggleCategory('VP')"> - </button>
        <button v-else class="collapsebtn" @click="toggleCategory('VP')"> + </button>

      </div>

      <div class="category" v-if="this.showMainCategories['VP']">
        <div class="project"> 
          <div class="project-header">
            <h4> Application web de gestion d'un annuaire, via Flask ( back-end en Python, front-end en HTML, connexion à une base de données ) </h4>
            <button v-if="this.showMainCategories['Annuaire']" class="collapsebtn" @click="toggleProject('Annuaire')"> - </button>
            <button v-else class="collapsebtn" @click="toggleProject('Annuaire')"> + </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['Annuaire']"> 
            <p> Application web destinée au fonctionnement interne de l'entreprise, accès via LDAP ( Lightweight Directory Access Protocol ) au fichier de données </p>
          </div>
        </div>

        <div class="project">
          <div class="project-header">
            <h4> Application web afin de remplacer une interface, prenant en paramètre un fichier JSON et extrayant les données ( Vuejs, front-end ) </h4>
            <button v-if="this.showMainCategories['PropertyGrid']" class="collapsebtn" @click="toggleProject('PropertyGrid')"> - </button>
            <button v-else class="collapsebtn" @click="toggleProject('PropertyGrid')"> + </button>
          </div>
          <div class="project-content" v-if="this.showSingleProject['PropertyGrid']"> 
            <p> Application web permettant d'afficher les données dynamiquement </p>
          </div>
        </div>
      </div>

  <p> En bref : j'ai pu développer en utilisant divers outils et langages </p>
  <ul>
    <li> Web : VueJS, Flask, Angular </li>
    <li> Logiciel : C++, C# </li>
    <li> Outils : Git, Docker</li>
  </ul>
</template>
  
  <script>
  export default {
    name: 'HomePage',
  data(){
    return {
      showMainCategories: {"IUT": true, "VP": true},
      showSingleProject: {"Solveur": true, "Exercices": true, "SiteWeb": true, "Annuaire": true, "PropertyGrid": true},
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
  </style>
  