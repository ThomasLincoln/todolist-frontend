<template>
  <div id="app">
    <nav v-if="showNavigation">
      <RouterLink to="/login">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
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
