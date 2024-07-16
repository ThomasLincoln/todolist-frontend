<script setup>
</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/cadastro">Cadastro</RouterLink>
  </div>
  <RouterView />
  <h1 class="text-3xl">Eu sou a tela de inicio</h1>
</template>

<style scoped></style>
