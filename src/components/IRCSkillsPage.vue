<template>
  <div class="IRC-skills">
    <div class="title">
      <h1>Compétences de référence liées à la filière IRC de CPE</h1>
    </div>

    <div v-if="sortedCompetencesIRC.length">
      <div class="skillgrid">
        <div
          class="card"
          v-for="(tech, index) in sortedCompetencesIRC"
          :key="'IRC-' + index"
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
            @leave="leave"
          >
            <div v-if="tech.expanded && tech.details" class="expand-content">
              <p>{{ tech.details }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div v-else>Chargement ou aucune compétence IRC trouvée.</div>
  </div>
</template>

<script>
import competences from "@/assets/data/competencesIRC.js";

export default {
  name: "IRCSkillsPage",
  data() {
    return {
      competences: [],
      showCompetencesIRC: {},
      niveaux: {
        Bonne: 3,
        Moyenne: 2,
        Basique: 1
      }
    };
  },
  computed: {
    sortedCompetencesIRC() {
      return this.competences.filter(tech =>
        !tech.categorie.toLowerCase().includes("IRC")
      );
    }
  },
  methods: {
    toggleExpand(competence) {
      competence.expanded = !competence.expanded;
    },
    initializeDisplayStates(competencesData) {
      this.showCompetencesIRC = competencesData.reduce((acc, tech) => {
        acc[tech.nom] = true;
        return acc;
      }, {});
    },
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
      el.style.overflow = 'hidden';
    },
    enter(el, done) {
      const height = el.scrollHeight + 'px';
      el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
      requestAnimationFrame(() => {
        el.style.height = height;
        el.style.opacity = '1';
      });
      el.addEventListener('transitionend', done, { once: true });
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
      el.style.overflow = 'hidden';
    },
    leave(el, done) {
      el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
      requestAnimationFrame(() => {
        el.style.height = '0';
        el.style.opacity = '0';
      });
      el.addEventListener('transitionend', done, { once: true });
    }
  },
  mounted() {
    this.competences = competences.map(c => ({ ...c, expanded: false }));
    this.initializeDisplayStates(this.competences);
  }
};
</script>