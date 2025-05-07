<template>
  <div>
    <h1>Mes Projets</h1>

    <div v-for="(projets, categorie) in groupedProjets" :key="categorie">
      <h2>{{ categoryNames[categorie] || categorie }}</h2>

      <button @click="toggleCategory(categorie)">
        {{ showCategories[categorie] ? 'Masquer' : 'Afficher' }}
      </button>

      <div v-if="showCategories[categorie]">
        <div v-for="projet in projets" :key="projet.id">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projets from '@/assets/data/projets.json';
import categories from '@/assets/data/categories.json';

export default {
  name: 'ProjectsPage',
  data() {
    return {
      groupedProjets: projets, 
      categoryNames: categories,
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
      const allProjects = Object.values(projetsData).flat();
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

