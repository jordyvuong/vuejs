<template>
  <header class="p-3 bg-primary text-white text-center">
    <a
      v-if="attemptFailed"
      href="/register.html"
      class="text-white text-decoration-none"
    >
      Vous n'arrivez pas à vous connecter ? Inscrivez-vous
    </a>
    <a
      v-else
      :href="isAuthenticated ? '/logout' : '/connect.html'"
      class="text-white text-decoration-none"
    >
      {{ isAuthenticated ? "Se déconnecter" : "Connexion" }}
    </a>
  </header>
</template>

<script>
export default {
  props: {
    isAuthenticated: Boolean,
    attemptFailed: Boolean, // Ajout de la propriété pour gérer l'échec
  },
};
</script>

<style scoped>
a {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>