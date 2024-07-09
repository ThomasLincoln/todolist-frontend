<template>
  <div class="wrapper-cadastro">

    <div class="cadastro-container">
      <div class="left-block">
        <h1 class="title">Bem-vindo!</h1>
        <RouterLink to="/login">
          <Button label="Entrar" size=2 />
        </RouterLink>
        <div class="subtext">
          <p>Já possui uma conta?</p>
        </div>
      </div>
      <div class="right-block">
        <h2 class="subtitle">Cadastrar-se</h2>

        <div class="input">
          <label for="nome" class="block mb-2 text-sm font-medium"
            style="color: var(--terciary-color); margin-left: 1em">Nome de usuário</label>
          <input type="text" id="nome" v-model="nomeValue" placeholder="Digite seu nome"
            class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" style="
            background: none;
            border-color: var(--terciary-color);
            width: 95%;
            " />
        </div>

        <div class="input">
          <label for="login" class="block mb-2 text-sm font-medium"
            style="color: var(--terciary-color); margin-left: 1em">Nome de usuário</label>
          <input type="text" id="login" v-model="loginValue" placeholder="Digite seu nome de usuário"
            class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" style="
            background: none;
            border-color: var(--terciary-color);
            width: 95%;
            " />
        </div>


        <div class="input">
          <label for="email" class="block mb-2 text-sm font-medium"
            style="color: var(--terciary-color); margin-left: 1em">Email</label>
          <input type="email" id="login" v-model="emailValue" placeholder="Digite seu email"
            class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" style="
            background: none;
            border-color: var(--terciary-color);
            width: 95%;
            " />
        </div>

        <div class="input">
          <label for="senha" class="block mb-2 text-sm font-medium"
            style="color: var(--terciary-color); margin-left: 1em">Senha</label>
          <input type="password" id="senha" v-model="passwordValue" placeholder="Digite sua senha"
            class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" style="
            background: none;
            border-color: var(--terciary-color);
            width: 95%;
            " />
        </div>

        <div class="input">
          <label for="senha" class="block mb-2 text-sm font-medium"
            style="color: var(--terciary-color); margin-left: 1em">Senha</label>
          <input type="password" id="senha" v-model="passwordConfirmationValue" placeholder="Digite sua senha novamente"
            class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" style="
            background: none;
            border-color: var(--terciary-color);
            width: 95%;
            " />
        </div>

        <Button label="Cadastrar-se" size=22 />
        <hr class="border-gray-300 my-4" style="border-color: var(--dark-gray);
        width: 50%;
        margin-top: 1%;
        margin-left: auto;
        margin-right: auto;">
        <p style="text-align: center;">ou tente essas outras formas:</p>
        <div class="icons-container">
          <img src="../assets/images/google-icon.png" alt="google icon" style="border-radius: 50%;
          background-color: white">
          <img src="../assets/images/x.png" alt="x icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../components/Button.vue'
import Divider from '../components/Divider.vue'

export default defineComponent({
  name: 'Login',
  components: { Button, Divider },
  data() {
    return {
      nomeValue: '',
      loginValue: '',
      emailValue: '',
      passwordValue: '',
      passwordConfirmationValue: '',
    }
  },
})
</script>

<style>
:root {
  background-color: var(--background-color);
}

.wrapper-cadastro {
  padding: 2rem;
}

.cadastro-container {
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

.left-block .title {
  color: var(--white);
  font-family: 'Julius Sans One', sans-serif;
  font-size: var(--my-large);

  margin-top: 2em;
  margin-bottom: 7em;

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
  margin-top: 1em;

  background-color: var(--white);
  border-radius: 1em;

  text-align: left;
}

.cadastro-container .subtitle {
  color: var(--terciary-color);
  font-size: xx-large;
}

.input {
  margin-bottom: 0.3em;
}

.warning-link {
  color: var(--danger);
}

.icons-container {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.icons-container img {
  width: 3em;
  margin-right: 1.5em;
}
</style>
