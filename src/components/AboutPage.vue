<template>
    <h1> À propos de moi </h1>
    <p> Mon profil en quelques points-clés : </p>
    <ul>
      <li> <i class="fa-solid fa-graduation-cap"></i> Actuellement en BUT3 Informatique à l'IUT Lyon 1 Doua </li>
      <li> <i class="fa-solid fa-car"></i> 24 ans, résidant à Villeurbanne, permis B et véhiculé </li>
      <li> <i class="fa-solid fa-briefcase"></i> Alternant à ViewPoint en tant que développeur logiciel et web </li>
      <li> <i class="fa-solid fa-forward"></i> Futur élève-ingénieur à CPE Lyon en filière Informatique et Réseaux de Communication </li>
    </ul>
    <p> En plus des compétences techniques présentées dans la <RouterLink to="/skills">page dédiée</RouterLink>, j'en ai également développé certaines transdisciplinaires, de par mes activités extra-scolaires :</p>
    <ul>
        <li> <i class="fa-solid fa-handshake"></i> Membre de la fédération des BDE de l'IUT Lyon 1 Doua : travail en groupe, gestion d'équipe, communication et gestion de projets </li>
        <li> <i class="fa-solid fa-person-chalkboard"></i> Tutorat pour des élèves de l'IUT : communication et écoute active </li>
        <li> <i class="fa-solid fa-dumbbell"></i>Pratique hebdomadaire du sport : discipline, assiduité, dépassement de soi </li>
    </ul>
  </template>

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
  
  <script>
  export default {
    name: 'HomePage',
  }
  </script>
  