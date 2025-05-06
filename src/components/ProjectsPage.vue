<template>
  <div>
    <h1>Mes Projets</h1>

    <div v-for="(projets, categorie) in groupedProjets" :key="categorie">
      <h2>{{ categorie }}</h2>

      <button @click="toggleCategory(categorie)">
        {{ showCategories[categorie] ? 'Masquer' : 'Afficher' }} les projets
      </button>

      <div v-if="showCategories[categorie]">
        <div v-for="projet in projets" :key="projet.id">
          <div class="card">
            <h3>{{ projet.titre }}</h3>
            <p><strong>Date :</strong> {{ projet.date }}</p>
            <p><strong>Technologies :</strong> {{ projet.techno }}</p>
            <p><strong>Détails :</strong></p>
            <ul>
              <li v-for="detail in projet.details" :key="detail">{{ detail }}</li>
            </ul>
            <button @click="toggleProject(projet.id)">
              {{ showProjects[projet.id] ? 'Masquer' : 'Afficher' }} le projet
            </button>

            <div v-if="showProjects[projet.id]">
              <p><strong>Catégorie :</strong> {{ projet.categorie }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projetsScolaires: [],
      projetsAlternance: [],
      showCategories: {},
      showProjects: {}
    };
  },
  computed: {
    groupedProjets() {
      const grouped = {};

      this.projetsScolaires.forEach(p => {
        if (!grouped[p.categorie]) {
          grouped[p.categorie] = [];
        }
        grouped[p.categorie].push(p);
      });

      this.projetsAlternance.forEach(p => {
        if (!grouped[p.categorie]) {
          grouped[p.categorie] = [];
        }
        grouped[p.categorie].push(p);
      });

      return grouped;
    }
  },
methods: {
  toggleCategory(cat) {
    this.showCategories[cat] = !this.showCategories[cat];
  },
  toggleProject(id) {
    this.showProjects[id] = !this.showProjects[id];
  }
},
mounted() {
  fetch('/projets.json')
    .then(res => res.json())
    .then(data => {
      if (data && data['Projets scolaires'] && data['Projets réalisés lors de mon alternance']) {
        this.projetsScolaires = data['Projets scolaires'];
        this.projetsAlternance = data['Projets réalisés lors de mon alternance'];
        this.projetsIUT = this.projetsScolaires.filter(p => p.categorie === 'IUT');
        this.projetsVP = this.projetsAlternance.filter(p => p.categorie === 'VP');
        this.showProjects = this.projetsScolaires.concat(this.projetsAlternance).reduce((acc, p) => {
          acc[p.id] = true;
          return acc;
        }, {});
        this.showCategories = this.projetsScolaires.concat(this.projetsAlternance).reduce((acc, p) => {
          acc[p.categorie] = true;
          return acc;
        }, {});
      } else {
        console.error("Erreur: la structure des données est incorrecte.");
      }
    })
    .catch(err => console.error("Erreur de chargement des projets :", err));
}


};
</script>
