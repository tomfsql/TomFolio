<template>
  <div>
    <h1>Mes Projets</h1>

      <p> Les compétences liées au BUT et mobilisées lors de ces projets sont présentées <RouterLink to="/skills#BUTSkills"> ici </RouterLink>.</p>


    <div v-for="(categorieData, categorie) in groupedProjets" :key="categorie">
      <h2>{{ categorieData.label || categorie }}</h2>

      <button @click="toggleCategory(categorie)">
        {{ showCategories[categorie] ? 'Masquer' : 'Afficher' }}
      </button>

      <div v-if="showCategories[categorie]">
        <div v-for="projet in categorieData.projets" :key="projet.id">
          <div class="card">
            <h3>{{ projet.titre }}</h3>
            <button @click="toggleProject(projet.id)">
              {{ showProjects[projet.id] ? 'Masquer' : 'Afficher' }} le projet
            </button>
            <div v-if="showProjects[projet.id]">
              <p><strong>Période :</strong> {{ projet.date }}</p>
              <p><strong>Langages utilisés :</strong> {{ projet.techno }}</p>
              <p><strong>Informations complémentaires :</strong></p>
              <p> {{  projet.details }}</p>            
              <p><strong>Compétences mobilisées :</strong> {{  projet.competences }} </p>
              <div v-if="projet.url">
                <p><strong> <a :href="projet.url" target="_blank" rel="noopener">Voir le projet</a></strong> 
                </p>
              </div>
              <div v-else>
                <p><strong>Lien :</strong> Aucune URL disponible pour ce projet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer> 
    
    <div class="footer-content">
      <div class="footer-info">
        <h3> Tom Fasquelle </h3>
        <p>Étudiant en BUT Informatique | Développeur web & logiciel junior</p>
      </div>
    </div>

    <div class="footer-contact">
      Me contacter :
          <a href="mailto:tom.fasquelle@laposte.net">
            <i class="fas fa-envelope"></i></a>
    </div>

    <div class="footer-social">
        <a href="https://www.linkedin.com/in/tom-fasquelle/" target="_blank" rel="noopener">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/fasquelt" target="_blank" rel="noopener">
          <i class="fab fa-github"></i>
        </a>
    </div>
    <div class="footer-bottom">
      <p>&copy; Tom Fasquelle 2025 - Tous droits réservés</p>
    </div>
  </footer>

</template>

<script>
import projets from '@/assets/data/projets.json';
export default {
  name: 'ProjectsPage',
  data() {
    return {
      groupedProjets: projets, 
      showCategories: {},
      showProjects: {}
    };
  },
  methods: {
    toggleCategory(cat) {
      this.showCategories[cat] = !this.showCategories[cat];
    },
    toggleProject(id) {
      this.showProjects[id] = !this.showProjects[id];
    },
    initializeDisplayStates(projetsData) {
      const allProjects = Object.values(projetsData)
        .map(group => group.projets)
        .flat();
      this.showProjects = allProjects.reduce((acc, p) => {
        acc[p.id] = true;
        return acc;
      }, {});
      this.showCategories = Object.keys(projetsData).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
    }
  },
  mounted() {
    this.initializeDisplayStates(this.groupedProjets);
  }
};
</script>

