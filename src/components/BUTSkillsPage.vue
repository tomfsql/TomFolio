<template>
  <h1>Compétences de référence liées au BUT Informatique, parcours Réalisation d'Applications</h1>

  <div v-if="sortedCompetencesBUT.length">
    <div class="skillgrid">
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
        <img
          v-if="tech.image"
          :src="tech.image"
          :alt="tech.nom"
          width="32"
          height="32"
        />
        <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>
        <transition name="expand"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave">
          <div v-if="tech.expanded && tech.details">
            <p>{{ tech.details }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
  <div v-else>Chargement ou aucune compétence BUT trouvée.</div>
</template>

<script>
import competences from "@/assets/data/competences.js";

export default {
  name: "BUTSkillsPage",
  data() {
    return {
      competences: [], 
      showCompetencesBUT: {},
      niveaux: {
        Bonne: 3,
        Moyenne: 2,
        Basique: 1
      }
    };
  },
  computed: {
    sortedCompetencesBUT() {
      return this.competences.filter(tech =>
        tech.categorie.toLowerCase().includes("but")
      );
    }
  },
  methods: {
    toggleExpand(competence) {
      competence.expanded = !competence.expanded;
    },
    initializeDisplayStates(competencesData) {
      this.showCompetencesBUT = competencesData.reduce((acc, tech) => {
        acc[tech.nom] = true;
        return acc;
      }, {});
    },
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter(el, done) {
      el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
      void el.offsetHeight;
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
      el.addEventListener('transitionend', () => {
        el.style.height = 'auto';
        done();
      }, { once: true });
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
      void el.offsetHeight; 
    },
    leave(el, done) {
      el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
      el.style.height = '0';
      el.style.opacity = '0';
      el.addEventListener('transitionend', done, { once: true });
    }
  },
  mounted() {
    this.competences = competences.map(c => ({ ...c, expanded: false }));
    this.initializeDisplayStates(this.competences);
  }
};
</script>
