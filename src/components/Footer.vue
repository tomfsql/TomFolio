<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <h3>Tom Fasquelle</h3>
        <p>Étudiant en BUT Informatique | Développeur web & logiciel junior</p>
      </div>

      <div class="footer-contact">
        <span>Me contacter :</span>
        <a :href="emailLink" aria-label="Envoyer un e-mail">
          <i class="fas fa-envelope"></i>
        </a>
      </div>

      <div class="footer-social">
        <a href="https://www.linkedin.com/in/tom-fasquelle/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/fasquelt" target="_blank" rel="noopener" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; Tom Fasquelle 2025 - Tous droits réservés</p>
    </div>

    <div id="ecoindex-badge" data-theme="dark"></div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    emailLink() {
      const user = "tom.fasquelle";
      const domain = "laposte.net";
      return `mailto:${user}@${domain}`;
    }
  }
};
</script>
