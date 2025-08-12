<template>
     
    <h1> Compétences de référence liées au BUT Informatique, parcours Réalisation d'Applications </h1> 
    <div v-if="sortedCompetencesBUT.length">
      <div class="toolgrid">
        <div
          class="card"
          v-for="(tech, index) in sortedCompetencesBUT"
          :key="'but-' + index"
          :class="{
            good: tech.maitrise === 'Bonne',
            mid: tech.maitrise === 'Moyenne',
            begin: tech.maitrise === 'Basique'
          }"
          @click="toggleExpand(tech)"
        >
          <h3>{{ tech.nom }}</h3>
          <img v-if="tech.image" :src="tech.image" :alt="tech.nom" width="32" height="32" />
            <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>
            <transition name="expand">
              <div>
                <p v-if="tech.expanded">
                  <strong>Détails :</strong> {{ tech.details }}
                </p>
              </div>
            </transition>
        </div>
        </div>
      </div>
    <div v-else>Chargement ou aucune compétence BUT trouvée.</div>

</template>

<script>
import competences from '@/assets/data/competences.js';
export default {
  name: 'BUTSkillsPage',
data() {
    return {
      search: "",
      showCompetencesBUT : {},
      niveaux : {
        "Bonne": 3,
        "Moyenne": 2,
        "Basique": 1
      }
    };
  },
  computed: {
    sortedCompetencesBUT() {
    return this.competences
      .filter(tech => tech.categorie.toLowerCase().includes('but'))
  }
  },
  methods: {
    toggleExpand(competence) {
      competence.expanded = !competence.expanded;
    },
    initializeDisplayStates(competencesData) {
      this.showCompetencesBUT = Object.keys(competencesData).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
    }
  },
  mounted() {
    this.competences = competences.map(c => ({ ...c, expanded: false }));
    this.initializeDisplayStates(this.showCompetencesBUT);
  }
}
</script>
