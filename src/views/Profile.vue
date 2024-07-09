<template>
  <Navbar/>
  <div class="profile-container">
    <div class="left">
      <div class="wrapper-title">
        <h1 class="title">Minha conta</h1>
        <p>Nome do usuário</p>
      </div>
      <div style="margin-left: 6em;">
        <h2 class="subtitle">Foto</h2>
        <div class="wrapper-foto">
          <img src="../assets/images/aux-icon.jpg" alt="user-icon" class="user-icon-big">
          <DefaultButton label="Editar foto" size=1 backCor="--white" cor="--secondary-color"
            style="margin-right: 2em;">
            <template #icon>
              <PencilIcon class="w-5 h-5" />
            </template>
          </DefaultButton>
          <DefaultButton label="Remover foto" size=1 backCor="--danger" cor="--white">
            <template #icon>
              <TrashIcon class="w-5 h-5" />
            </template>
          </DefaultButton>
        </div>
        <h2 class="subtitle">Nome</h2>
        <div>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-full p-2.5" placeholder="John" />
        </div>
        <h2 class="subtitle">E-mail</h2>
        <div style="display: flex; align-items: center;">
          <p style="text-align: left;">seuemail@gmail.com</p>
          <DefaultButton label="Editar E-mail" size=1 backCor="--white" cor="--secondary-color"
            style="margin-left: 2em;">
            <template #icon>
              <PencilIcon class="w-5 h-5" />
            </template>
          </DefaultButton>
        </div>
        <h2 class="subtitle">Senha</h2>
        <div style="display: flex; align-items: center;">
          <DefaultButton label="Editar sua senha" size=1 backCor="--white" cor="--secondary-color">
            <template #icon>
              <PencilIcon class="w-5 h-5" />
            </template>
          </DefaultButton>
        </div>
        <div style="display: flex; align-items: center; margin-top: 10%;">
          <DefaultButton label="Apagar Perfil" size=1 backCor="--danger" cor="--white">
            <template #icon>
              <TrashIcon class="w-5 h-5" />
            </template>
          </DefaultButton>
        </div>
      </div>
    </div>

    <div class="right">
      <DefaultButton label="Salvar Alterações" size=1 backCor="--confirmation" cor="--white">
        <template #icon>
          <CheckIcon class="w-5 h-5" />
        </template>
      </DefaultButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/vue/16/solid';
import DefaultButton from '../components/DefaultButton.vue';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  name: 'Profile',
  components: {
    DefaultButton,
    Navbar,
    PencilIcon,
    TrashIcon,
    CheckIcon
  },
})
</script>

<style>
.profile-container {
  display: flex;
  color: var(--white);
  padding: 0em 2em;
}

.wrapper-title {
  text-align: left;
  display: flex;
  align-items: baseline;
}

.wrapper-title .title {
  font-size: xx-large;
  margin-right: 1em;
}

.wrapper-foto {
  display: flex;
  align-items: center;
}

.wrapper-foto .user-icon-big {
  width: 7em;
  height: 7em;
  border-radius: 50%;
  margin-right: 3em;
}

.profile-container .left .subtitle {
  color: var(--white);
  text-align: left;
  margin: 1em 0;
  font-weight: bold;
  font-size: medium;
}

.profile-container .right {
  display: flex;
  align-items: end;
  margin-left: auto;
}
</style>