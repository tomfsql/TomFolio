<template>
  <div>
    <h1>Mes compétences</h1>

    <p>
      Tout au long de mon cursus scolaire, j'ai pu développer diverses compétences techniques dans des langages et outils, présentés ci-dessous :
    </p>

        <h2>Langages de programmation</h2>


    <button @click="toggleSortOrder">
      Trier par {{ sortBy === 'catégorie' ? 'maîtrise' : 'catégorie' }}
    </button>

    <input v-model="search" placeholder="Rechercher une compétence..." />
    
    <div>
      <div v-if="sortedCompetencesDev.length">
        <div class="skillgrid">
          <div
            class="card"
            v-for="(tech, index) in sortedCompetencesDev"
            :key="'main-' + index"
            :class="{
              good: tech.maitrise === 'Bonne',
              mid: tech.maitrise === 'Moyenne',
              begin: tech.maitrise === 'Basique'
            }"
            @click="toggleExpand(tech)"
            >
              <h3>{{ tech.nom }}</h3>
              <img v-if="tech.image" :src="tech.image" :alt="tech.nom" 
                width="32" height="32" />
              <p><strong>Depuis :</strong> {{ tech.usageDepuis }}</p>
              <p><strong>Catégorie :</strong> {{ tech.categorie }}</p>
              <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>
              <transition name="expand">
                <div>
                  <button class="toggle-btn" @click.stop="toggleExpand(tech)">
                    {{ tech.expanded ? '-' : '+' }}
                  </button>
                  <p v-if="tech.expanded">
                    <strong>Détails :</strong> {{ tech.details }}
                  </p>
                </div>
              </transition>
          </div>
        </div>
      </div>
      <div v-else>Chargement ou aucune compétence trouvée.</div>
    </div>

    <div v-if="sortedCompetencesDB.length">
        <div class="skillgrid">
          <div
            class="card"
            v-for="(tech, index) in sortedCompetencesDB"
            :key="'main-' + index"
            :class="{
              good: tech.maitrise === 'Bonne',
              mid: tech.maitrise === 'Moyenne',
              begin: tech.maitrise === 'Basique'
            }"
            @click="toggleExpand(tech)"
            >
              <h3>{{ tech.nom }}</h3>
              <img v-if="tech.image" :src="tech.image" :alt="tech.nom" 
                width="32" height="32" />
              <p><strong>Depuis :</strong> {{ tech.usageDepuis }}</p>
              <p><strong>Catégorie :</strong> {{ tech.categorie }}</p>
              <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>
              <transition name="expand">
                <div>
                  <button class="toggle-btn" @click.stop="toggleExpand(tech)">
                    {{ tech.expanded ? '-' : '+' }}
                  </button>
                  <p v-if="tech.expanded">
                    <strong>Détails :</strong> {{ tech.details }}
                  </p>
                </div>
              </transition>
          </div>
        </div>
      </div>
      <div v-else>Chargement ou aucune compétence trouvée.</div>
    </div>

    <h2>Outils & systèmes</h2>
    <div class="toolgrid">
      <div
        class="card"
        v-for="(tech, index) in sortedCompetencesOutils"
        :key="'outil-' + index"
        :class="{ good: tech.maitrise === 'Bonne', mid: tech.maitrise === 'Moyenne',begin: tech.maitrise === 'Basique',expanded: tech.expanded }"
        @click="toggleExpand(tech)"
      >
        <h3>{{ tech.nom }}</h3>
        <img v-if="tech.image" :src="tech.image" :alt="tech.nom" 
          width="32" height="32" />
        <p><strong>Depuis :</strong> {{ tech.usageDepuis }}</p>
        <p><strong>Catégorie :</strong> {{ tech.categorie }}</p>
        <p><strong>Maîtrise :</strong> {{ tech.maitrise }}</p>
        <p v-if="tech.expanded && tech.details">
          {{ tech.details }}
        </p>
      </div>
    </div>

        <h2>Gestion de projet</h2>
    <div class="toolgrid">
      <div
        class="card"
        v-for="(tech, index) in sortedCompetencesGPI"
        :key="'outil-' + index"
        :class="{ good: tech.maitrise === 'Bonne', mid: tech.maitrise === 'Moyenne',begin: tech.maitrise === 'Basique',expanded: tech.expanded }"
        @click="toggleExpand(tech)"
      >
        <h3>{{ tech.nom }}</h3>
        <img v-if="tech.image" :src="tech.image" :alt="tech.nom" 
          width="32" height="32" />
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
    <div id="BUTSkills">
      <ol>
        <li> Réaliser un développement d'application </li>
        <li> Optimiser des applications </li>
        <li> Administrer des systèmes informatiques communicants complexes</li>
        <li> Conduire un projet </li>
        <li> Travailler et collaborer au sein d'une équipe informatique</li>
      </ol>
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
import competences from '@/assets/data/competences.js';
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
    sortedCompetencesDev() {
      const term = this.search.toLowerCase();
      const competencesFiltered = this.competences
        .filter(tech => tech.categorie.toLowerCase().includes('langage') || 
          tech.categorie.toLowerCase().includes('framework'))
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
        .filter(tech => tech.categorie.toLowerCase().includes('système') && 
          !tech.categorie.toLowerCase().includes('langage'))
        .sort((a, b) => {
          if (a.maitrise !== b.maitrise) {
            return a.maitrise === 'Bonne' ? -1 : 1
          }
          return a.nom.localeCompare(b.nom)
        })
    },
    sortedCompetencesDB() {
      return this.competences
        .filter(tech => tech.categorie.toLowerCase().includes('bases de données'))
        .sort((a, b) => {
          if (a.maitrise !== b.maitrise) {
            return a.maitrise === 'Bonne' ? -1 : 1
          }
          return a.nom.localeCompare(b.nom)
        })
    },

    sortedCompetencesGPI() {
      return this.competences
        .filter(tech => tech.categorie.toLowerCase().includes('modélisation') || 
          tech.categorie.toLowerCase().includes('gestion'))
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
    this.competences = competences.map(c => ({ ...c, expanded: false }));
  }
}
</script>