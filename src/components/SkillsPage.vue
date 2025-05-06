<template>
  <div>
    <h1>Mes compétences</h1>

    <p>
      Tout au long de mon cursus scolaire, j'ai pu développer diverses compétences techniques dans des langages et outils, présentés ci-dessous :
    </p>

    <button @click="toggleSortOrder">
      Trier par {{ sortBy === 'catégorie' ? 'maîtrise' : 'catégorie' }}
    </button>

    <input v-model="search" placeholder="Rechercher une compétence..." />


    <div>
      <div v-if="sortedCompetences.length">
        <div class="skillgrid">
          <div
            class="card"
            v-for="(tech, index) in sortedCompetences"
            :key="'main-' + index"
            :class="{
              good: tech.maitrise === 'Bonne',
              mid: tech.maitrise === 'Moyenne',
              begin: tech.maitrise === 'Basique'
            }"
            @click="toggleExpand(tech)"
            >
              <h3>{{ tech.nom }}</h3>
              <p><strong>Depuis :</strong> {{ tech.usageDepuis }}</p>
              <p><strong>Catégorie :</strong> {{ tech.categorie }}</p>
              <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>
              <p v-if="tech.expanded && tech.details">
                <strong>Détails :</strong> {{ tech.details }}
              </p>
          </div>
        </div>
      </div>
      <div v-else>Chargement ou aucune compétence trouvée.</div>
    </div>

    <h2>Outils et langages système</h2>
    <div class="toolgrid">
      <div
        class="card"
        v-for="(tech, index) in sortedCompetencesOutils"
        :key="'outil-' + index"
        :class="{ good: tech.maitrise === 'Bonne', mid: tech.maitrise === 'Moyenne',begin: tech.maitrise === 'Basique',expanded: tech.expanded }"
        @click="toggleExpand(tech)"
      >
        <h3>{{ tech.nom }}</h3>
        <p><strong>Depuis :</strong> {{ tech.usageDepuis }}</p>
        <p><strong>Catégorie :</strong> {{ tech.categorie }}</p>
        <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>
        <p v-if="tech.expanded && tech.details">
          {{ tech.details }}
        </p>
      </div>
    </div>

    <p>
      Ces compétences s'inscrivent dans un contexte lié au BUT, qui vise à développer des compétences plus générales :
    </p>
    <ul>
      <li>Élaborer et faire évoluer une application informatique</li>
      <li>Travailler et collaborer au sein d'une équipe informatique</li>
      <li>Mettre en place des applications informatiques adaptées et efficaces</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
data() {
    return {
      search: "",
      competences: [],
      sortBy: 'catégorie',
      niveaux : {
        "Bonne": 3,
        "Moyenne": 2,
        "Basique": 1
      }
    };
  },
  computed: {
    sortedCompetences() {
      const term = this.search.toLowerCase();
      const competencesFiltered = this.competences
        .filter(tech => !tech.categorie.toLowerCase().includes('outil'))
        .filter(tech =>
          tech.nom.toLowerCase().includes(term) ||
          tech.categorie.toLowerCase().includes(term) ||
          tech.maitrise.toLowerCase().includes(term)
        );

      return competencesFiltered.sort((a, b) => {
        if (this.sortBy === 'catégorie') {
          return a.categorie.localeCompare(b.categorie);
        } else if (this.sortBy === 'maîtrise') {
          const scoreA = this.niveaux[a.maitrise] || 0;
          const scoreB = this.niveaux[b.maitrise] || 0;
          if (scoreA !== scoreB) {
            return scoreB - scoreA;
          }
          return a.nom.localeCompare(b.nom);
  }
      });
    },
    sortedCompetencesOutils() {
      return this.competences
        .filter(tech => tech.categorie.toLowerCase().includes('outil'))
        .sort((a, b) => {
          if (a.maitrise !== b.maitrise) {
            return a.maitrise === 'Bonne' ? -1 : 1
          }
          return a.nom.localeCompare(b.nom)
        })
    }
  },
  methods: {
    toggleExpand(competence) {
      competence.expanded = !competence.expanded;
    },
    toggleSortOrder() {
      this.sortBy = this.sortBy === 'catégorie' ? 'maîtrise' : 'catégorie';
    },
  },
  mounted() {
    fetch('/competences.json')
      .then(res => res.json())
      .then(data => {
        this.competences = data.map(c => ({ ...c, expanded: false }));
      })
      .catch(err => console.error('Erreur de chargement des compétences :', err))
  }
}
</script>