<template>
    <h1>Mes compétences</h1>

    <p>
      Tout au long de mon cursus scolaire, j'ai pu développer diverses compétences techniques dans des langages et outils, présentés ci-dessous :
    </p>

      <input v-model="search" @input="checkSearch" placeholder="Rechercher une compétence par nom..." />

    <div v-if="searchEmpty">

      <h2>Langages de programmation</h2>
    
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
                    <p v-if="tech.expanded">
                      <strong>Détails :</strong> {{ tech.details }}
                    </p>
                  </div>
                </transition>
            </div>
          </div>
        </div>
      <div v-else>Chargement ou aucune compétence trouvée.</div>

      <h2>Langages de Bases de Données </h2>

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
                    <p v-if="tech.expanded">
                      <strong>Détails :</strong> {{ tech.details }}
                    </p>
                  </div>
                </transition>
            </div>
          </div>
        </div>
      <div v-else>Chargement ou aucune compétence trouvée.</div>

      <h2>Outils & systèmes</h2>

      <div class="skillgrid">
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

      <div class="skillgrid">
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
    </div>

    <div v-else class="skillgrid">
        <div v-if="sortedCompetences == null"> Chargement ou aucune compétence trouvée. </div>
        <div v-else>
          <div v-for="tech in sortedCompetences" :key="tech.nom">
            <div
                class="card"
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
                      <p v-if="tech.expanded">
                        <strong>Détails :</strong> {{ tech.details }}
                      </p>
                    </div>
                  </transition>
              </div>
            </div>
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
      searchEmpty: true,
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
      const term = this.search.trim().toLowerCase();
      return this.competences
        .filter(tech => tech.nom.toLowerCase().includes(term))
        .sort((a, b) => a.nom.localeCompare(b.nom));
    },
    sortedCompetencesDev() {
      return this.competences
        .filter(
          tech => tech.categorie.toLowerCase().includes('programmation') ||
          tech.categorie.toLowerCase().includes('framework')
        )
        .sort((a, b) => a.nom.localeCompare(b.nom));
    },
    sortedCompetencesOutils() {
      return this.competences
        .filter(tech => tech.categorie.toLowerCase().includes('système') && 
          !tech.categorie.toLowerCase().includes('langage'))
        .sort((a, b) => a.nom.localeCompare(b.nom));
    },
    sortedCompetencesDB() {
      return this.competences
        .filter(tech => tech.categorie.toLowerCase().includes('base de données'))
        .sort((a, b) => a.nom.localeCompare(b.nom));
    },
    sortedCompetencesGPI() {
      return this.competences
        .filter(tech => tech.categorie.toLowerCase().includes('modélisation') || 
          tech.categorie.toLowerCase().includes('gestion'))
        .sort((a, b) => a.nom.localeCompare(b.nom));
    }
  },
  methods: {
    toggleExpand(competence) {
      competence.expanded = !competence.expanded;
    },
    checkSearch() {
      this.searchEmpty = this.search.trim() === "";
    }
  },
  mounted() {
    this.competences = competences.map(c => ({ ...c, expanded: false }));
  }
}
</script>
