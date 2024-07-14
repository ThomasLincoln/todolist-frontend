<template>
  <div id="app">
    <nav v-if="showNavigation" style="display: flex; flex-direction: column;">
      <RouterLink to="/home">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
      <RouterLink to="/login">Logar</RouterLink>
      <RouterLink to="/profile">Perfil</RouterLink>
      <RouterLink to="/contato">Contato</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const showNavigation = computed(() => {
    const hiddenRoutes = ['/login' , '/cadastro', '/profile']
    return !hiddenRoutes.includes(route.path)
  })
</script>

<style>
</style>
