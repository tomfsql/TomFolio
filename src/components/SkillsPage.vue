<template>
  <div>
    <h1>Mes compétences</h1>

    <p>
      Tout au long de mon cursus scolaire, j'ai pu développer diverses compétences techniques, présentées ci-dessous :
    </p>

    <input v-model="search" placeholder="Rechercher une compétence..." />

    <div class="grid">
      <div
        class="card"
        v-for="(tech, index) in sortedCompetences"
        :key="'main-' + index"
        :class="{ good: tech.maitrise === 'Bonne', mid: tech.maitrise === 'Moyenne' }"
      >
        <h3>{{ tech.nom }}</h3>
        <p><strong>Depuis :</strong> {{ tech.usageDepuis }}</p>
        <p><strong>Catégorie :</strong> {{ tech.categorie }}</p>
        <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>
      </div>
    </div>

    <h2>Outils et langages système</h2>
    <div class="grid">
      <div
        class="card"
        v-for="(tech, index) in sortedCompetencesOutils"
        :key="'outil-' + index"
        :class="{ good: tech.maitrise === 'Bonne', mid: tech.maitrise === 'Moyenne' }"
      >
        <h3>{{ tech.nom }}</h3>
        <p><strong>Depuis :</strong> {{ tech.usageDepuis }}</p>
        <p><strong>Catégorie :</strong> {{ tech.categorie }}</p>
        <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>
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
      competences: [],
      search: ''
    }
  },
  computed: {
    sortedCompetences() {
      const term = this.search.toLowerCase()
      return this.competences
        .filter(tech => !tech.categorie.toLowerCase().includes('outil'))
        .filter(tech =>
          tech.nom.toLowerCase().includes(term) ||
          tech.categorie.toLowerCase().includes(term) ||
          tech.maitrise.toLowerCase().includes(term)
        )
        .sort((a, b) => {
          if (a.maitrise !== b.maitrise) {
            return a.maitrise === 'Bonne' ? -1 : 1
          }
          return a.nom.localeCompare(b.nom)
        })
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
  mounted() {
    fetch('/competences.json')
      .then(res => res.json())
      .then(data => {
        this.competences = data
      })
      .catch(err => console.error('Erreur de chargement des compétences :', err))
  }
}
</script>