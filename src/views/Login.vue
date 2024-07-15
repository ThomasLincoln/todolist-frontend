<template>
  <div class="wrapper-login">
    <div class="login-container">
      <div class="left-block">
        <h1 class="title">Bem-vindo de volta!</h1>
        <RouterLink to="/cadastro"><Button label="Cadastrar-se" size=2 /></RouterLink>
        <div class="subtext">
          <p>novo por aqui?</p>
        </div>
      </div>
      <div class="right-block">
        <h2 class="subtitle">Acessar sua conta</h2>
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
          <label for="senha" class="block mb-2 text-sm font-medium"
            style="color: var(--terciary-color); margin-left: 1em">Senha</label>
          <input type="password" id="senha" v-model="passwordValue" placeholder="Digite sua senha"
            class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" style="
            background: none;
            border-color: var(--terciary-color);
            width: 95%;
            " />
        </div>

        <div class="flex">
          <div class="flex items-center">
            <input checked id="checked-checkbox" type="checkbox" value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="checked-checkbox" class="ms-2 text-sm font-medium" style="color: var(--dark-gray)">Lembrar-se de
              mim</label>
          </div>
          <RouterLink class="warning-link" to="/login">Esqueceu sua Senha?</RouterLink>
        </div>
        <RouterLink to="/profile">
          <Button label="Entrar" size=23.5 @click="login" />
        </RouterLink>
        <hr class="border-gray-300 my-4" style="border-color: var(--dark-gray);
        width: 50%;
        margin-top: 4em;
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
import axios from 'axios';
import Button from '../components/Button.vue'
import Divider from '../components/Divider.vue'

export default defineComponent({
  name: 'Login',
  components: { Button, Divider },
  data() {
    return {
      loginValue: '',
      passwordValue: '',
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:8080/user/auth/signin", {
          username: this.loginValue,
          password: this.passwordValue
        });
        if (response.status === 200) {
          // Armazenar o token recebido e redirecionar para a página de perfil
          localStorage.setItem("token", response.data.token);
          this.$router.push("/profile");
        } else {
          alert("Login falhou, por favor verifique suas credenciais");
        }
      } catch (error) {
        console.log("Errou durante o login: ", error);
        alert('Ocorreu um erro durante o login, por favor tente novamente mais tarde');
      }
    }
  }
})

</script>

<style>
:root {
  background-color: var(--background-color);
}

.wrapper-login {
  padding: 2rem;
}

.login-container {
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

.login-container .subtitle {
  color: var(--terciary-color);
  font-size: xx-large;
}

.input {
  margin-bottom: 1em;
}

.warning-link {
  color: var(--danger);
}

.flex {
  display: flex;
  justify-content: space-between;
  margin-left: 0.2em;
  margin-right: 2.5em;
  margin-bottom: 0.5em;
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
