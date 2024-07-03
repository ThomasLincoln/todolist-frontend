<template>
  <div class="acesso-container">
    <div class="area-cadastro">
      <h1>Bem-vindo de Volta!</h1>
      <button class="area-cadastro button">Cadastrar-se</button>
      <p>novo por aqui?</p>
    </div>
    <div class="area-login">
      <h1>Acessar sua conta</h1>
      <div class="input">
        <p>Nome de accesso</p>
        <input
          type="text"
          placeholder="seu nome de acesso"
          class="login-input"
        />
      </div>
      <div class="input">
        <p>Senha de accesso</p>
        <input type="text" placeholder="sua senha" class="senha-input" />
      </div>
      <div class="subcontainer-flex">
        <div>
          <input type="checkbox" id="checkbox" />
          <label for="checkbox">Lembre-se de mim</label>
        </div>
        <p>Esqueceu a sua senha?</p>
      </div>
      <button class="login-button">Entrar</button>
      <div class="custom-divider"></div>
      <p>Ou use essas outras opções:</p>
      <div class="icon-container">
        <div class="icon"></div>
        <div class="icon"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Login',
  })
</script>

<style>
  p {
    margin: 0;
  }
  :root {
    background-color: var(--background-color);
    color: var(--white);
  }

  .acesso-container {
    width: 80vw;
    height: 70vh;
    margin: 2% auto;
    display: flex;
  }
  .area-cadastro{
    background-color: var(--primary-color);
    width: 100%;
    .button{
      color:white;
    }
  }
  .area-login {
    background-color: var(--white);
    width: 100%;
  }
  .subcontainer-flex {
    display: flex;
  }
  .custom-divider {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 20px 0;
  }
  .icon-container{
    display: flex;
    align-items: center;
  }
  .icon{
    width: 2pc;
    height: 2pc;
    background-color: var(--danger);
    border-radius: 50%;
    margin-left: 5%;
  }
</style>
