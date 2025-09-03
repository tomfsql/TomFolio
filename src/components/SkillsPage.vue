<template>
  <h1>Compétences (hors BUT)</h1>

    <div class="search-bar">
      <input
        type="text"
        v-model="search"
        placeholder="Rechercher une compétence..."
      />
    </div>

  <div v-if="filteredGroupedCompetences.length">
    <div v-for="group in filteredGroupedCompetences" :key="group.categorie">
      <h2>{{ group.categorie }}</h2>

      <div class="toolgrid" :class="{ 'few-items': group.items.length > 0 && group.items.length < 4 }">
        <div
          class="card"
          v-for="tech in group.items"
          :key="tech.nom"
          :class="{
            good: tech.maitrise === 'Bonne',
            mid: tech.maitrise === 'Moyenne',
            begin: tech.maitrise === 'Basique',
            expanded: tech.expanded
          }"
          @click="toggleExpand(tech)"
        >
          <h3>{{ tech.nom }}</h3>
          <img v-if="tech.image" :src="tech.image" :alt="tech.nom" width="32" height="32" />
          <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>

          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
          >
            <div v-if="tech.expanded && tech.details" class="expand-content">
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
      niveaux: { Bonne: 3, Moyenne: 2, Basique: 1 }
    };
  },
  computed: {
    filteredGroupedCompetences() {
      const term = this.search.trim().toLowerCase();

      const filtered = this.competences.filter(
        tech =>
          !tech.categorie.toLowerCase().includes("but") &&
          tech.nom.toLowerCase().includes(term)
      );

      const normalize = tech => {
        const c = tech.categorie.toLowerCase();
        if (c.includes("programmation") || c.includes("framework")) return "Langages & Frameworks";
        if (c.includes("base")) return "Langages de manipulation de BD";
        if (c.includes("système") || c.includes("os")) return "Outils & système";
        if (c.includes("gestion de projet") || c.includes("modélisation")) return "Gestion de projet & Modélisation";
        return tech.categorie;
      };

      const groups = {};
      for (const tech of filtered) {
        const cat = normalize(tech);
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(tech); // on garde la même référence (expanded reste réactif)
      }

      const order = [
        "Langages & Frameworks",
        "Langages de manipulation de BD",
        "Outils & système",
        "Gestion de projet & Modélisation"
      ];

      const orderedKeys = [
        ...order,
        ...Object.keys(groups).filter(k => !order.includes(k)).sort()
      ].filter(k => groups[k] && groups[k].length);

      return orderedKeys.map(cat => ({
        categorie: cat,
        items: groups[cat].slice().sort((a, b) => a.nom.localeCompare(b.nom))
      }));
    }
  },
  methods: {
    toggleExpand(tech) {
      tech.expanded = !tech.expanded;
    },
    beforeEnter(el) {
      el.style.height = "0";
      el.style.opacity = "0";
      el.style.overflow = "hidden";
    },
    enter(el, done) {
      const h = el.scrollHeight + "px";
      el.style.transition = "height 0.3s ease, opacity 0.3s ease";
      requestAnimationFrame(() => {
        el.style.height = h;
        el.style.opacity = "1";
      });
      el.addEventListener("transitionend", done, { once: true });
    },
    afterEnter(el) {
      el.style.transition = "";
      el.style.height = "auto";
      el.style.overflow = "";
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = "1";
      el.style.overflow = "hidden";
    },
    leave(el, done) {
      el.style.transition = "height 0.3s ease, opacity 0.3s ease";
      requestAnimationFrame(() => {
        el.style.height = "0";
        el.style.opacity = "0";
      });
      el.addEventListener("transitionend", done, { once: true });
    },
    afterLeave(el) {
      el.style.transition = "";
      el.style.overflow = "";
    }
  },
  mounted() {
    this.competences = competences.map(c => ({ ...c, expanded: false }));
  }
};
</script>
