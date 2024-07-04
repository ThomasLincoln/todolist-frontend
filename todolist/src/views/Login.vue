<template>
  <div class="container">
    <div class="left-block">
      <h1 class="title">Bem-vindo de volta!</h1>
      <Button />
      <div class="subtext">
        <p>novo por aqui?</p>
      </div>
    </div>
    <div class="right-block">
      <h2 class="subtitle">Acessar sua conta</h2>
      <div class="input">
        <label
          for="login"
          class="block mb-2 text-sm font-medium"
          style="color: var(--terciary-color); margin-left: 1em"
          >Nome de usuário</label
        >
        <input
          type="text"
          id="login"
          v-model="loginValue"
          placeholder="Digite seu nome de usuário"
          class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          style="
            background: none;
            border-color: var(--terciary-color);
            width: 95%;
          "
        />
      </div>
      <div class="input">
        <label
          for="senha"
          class="block mb-2 text-sm font-medium"
          style="color: var(--terciary-color); margin-left: 1em"
          >Senha</label
        >
        <input
          type="password"
          id="senha"
          v-model="passwordValue"
          placeholder="Digite sua senha"
          class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          style="
            background: none;
            border-color: var(--terciary-color);
            width: 95%;
          "
        />
      </div>

      <div class="flex">
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium"
            style="color: var(--dark-gray)"
            >Lembrar-se de mim</label
          >
        </div>
        <RouterLink class="warning-link" to="/login"
          >Esqueceu sua Senha?</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Button from '../components/Button.vue'

  export default defineComponent({
    name: 'Login',
    components: { Button },
    data() {
      return {
        loginValue: '',
        passwordValue: '',
      }
    },
  })
</script>

<style>
  :root {
    background-color: var(--background-color);
  }
  .container {
    display: flex;
    margin: auto;

    width: 70vw;
    height: 79vh;

    background-color: var(--white);
    border-radius: 1em;
  }

  .left-block {
    width: 50%;

    background-color: var(--terciary-color);
    border-radius: 1em;
  }
  .title {
    color: var(--white);
    font-family: 'Julius Sans One', sans-serif;
    font-size: var(--my-large);

    margin-top: 2em;
    margin-bottom: 4.1em;

    padding: 0pc 0.1em;
  }

  .subtext {
    color: var(--white);
    opacity: 0.6;

    margin-top: 0.5em;
  }
  .right-block {
    width: 100%;
    margin-left: 2em;
    margin-top: 4em;

    background-color: var(--white);
    border-radius: 1em;

    text-align: left;
  }

  .subtitle {
    color: var(--terciary-color);
    font-size: xx-large;
  }

  .input {
    margin-bottom: 1em;
  }

  .warning-link {
    color: var(--danger);
  }
</style>
