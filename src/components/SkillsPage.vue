<template>
  <h1>Compétences (hors BUT)</h1>

  <div v-if="filteredGroupedCompetences.length">
    <div v-for="(group, gIndex) in filteredGroupedCompetences" :key="'group-' + gIndex">
      <h2>{{ group.categorie }}</h2>
      <div class="toolgrid">
        <div
          class="card"
          v-for="(tech, index) in group.items"
          :key="'tech-' + gIndex + '-' + index"
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
  </div>
  <div v-else>Chargement ou aucune compétence trouvée.</div>
</template>

<script>
import competences from "@/assets/data/competences.js";

export default {
  name: "SkillsPage",
  data() {
    return {
      competences: [],
      search: "",
      niveaux: {
        Bonne: 3,
        Moyenne: 2,
        Basique: 1
      }
    };
  },
  computed: {
    filteredGroupedCompetences() {
      const term = this.search.trim().toLowerCase();

      // 1. Filtrer pour exclure BUT et appliquer recherche
      let filtered = this.competences
        .filter(
          (tech) =>
            !tech.categorie.toLowerCase().includes("but") &&
            tech.nom.toLowerCase().includes(term)
        )
        .map((tech) => {
          const catLower = tech.categorie.toLowerCase();

          if (catLower.includes("base")) {
            return { ...tech, categorie: "Langages de manipulation de BD" };
          }
          if (catLower.includes("programmation") || catLower.includes("framework")) {
            return { ...tech, categorie: "Langages & Frameworks" };
          }
          if (catLower.includes("système") || catLower.includes("os")) {
            return { ...tech, categorie: "Outils & système" };
          }
          if (catLower.includes("gestion de projet") || catLower.includes("modélisation")) {
            return { ...tech, categorie: "Gestion de projet & Modélisation" };
          }
          return tech;
        });

      const groups = {};
      filtered.forEach((tech) => {
        if (!groups[tech.categorie]) groups[tech.categorie] = [];
        groups[tech.categorie].push(tech);
      });

      const order = [
        "Langages & Frameworks",
        "Langages de manipulation de BD",
        "Outils & système",
        "Gestion de projet & Modélisation"
      ];

      const orderedKeys = [
        ...order,
        ...Object.keys(groups).filter((cat) => !order.includes(cat)).sort()
      ].filter(cat => groups[cat]);

      return orderedKeys.map((cat) => ({
        categorie: cat,
        items: (groups[cat] || []).sort((a, b) => a.nom.localeCompare(b.nom))
      }));
    }
  },
  methods: {
    toggleExpand(competence) {
      competence.expanded = !competence.expanded;
    },
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
      el.style.overflow = 'hidden';
    },
    enter(el, done) {
      el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
      void el.offsetHeight;
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
      el.style.overflow = 'hidden';
      el.addEventListener('transitionend', () => {
        el.style.height = 'auto';
        el.style.overflow = '';
        done();
      }, { once: true });
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
      el.style.overflow = 'hidden';
      void el.offsetHeight;
    },
    leave(el, done) {
      el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
      el.style.height = '0';
      el.style.opacity = '0';
      el.addEventListener('transitionend', () => {
        el.style.overflow = '';
        done();
      }, { once: true });
    }
  },
  mounted() {
    this.competences = competences.map((c) => ({ ...c, expanded: false }));
  }
};
</script>
