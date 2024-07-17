<script setup>
import NavBar from "@/components/NavbarComponent.vue"
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <NavBar />
  <div class="px-24">

    <div class="prose flex items-baseline space-x-5">
      <h1>Minha Conta</h1>
      <p>Thomas Lincoln</p>
    </div>
    <div class="prose py-3">
      <h2>Foto</h2>
    </div>
    <div class="flex items-center space-x-10">

      <div className="avatar">
        <div className="w-36 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <button class="btn btn-xs sm:btn-xs md:btn-sm lg:btn-md bg-sky-500">
        <PencilIcon class="h-5 w-5 heroicon-stroke-w-1.2" />
        Editar Imagem
      </button>
      <button class="btn btn-xs sm:btn-xs md:btn-sm lg:btn-md bg-red-600">
        <TrashIcon class="h-5 w-5 heroicon-stroke-w-1.2" />
        Apagar Imagem
      </button>
    </div>

    <div class="prose py-3">
      <h2>Nome</h2>
      <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" class="grow" placeholder="Nome" />
      </label>
      <!-- <div role="alert" class="alert alert-error mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div> -->
    </div>
    <div class="prose py-3">
      <h2>Email</h2>
      <div class="flex items-center gap-6">
        <p>email@email.com</p>
        <button class="btn btn-xs sm:btn-xs md:btn-sm lg:btn-md bg-sky-500">
          <PencilIcon class="h-5 w-5 heroicon-stroke-w-1.2" />
          Editar Email
        </button>
      </div>
    </div>
    <div class="prose py-3">
      <h2>Senha</h2>
      <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
          <path fill-rule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clip-rule="evenodd" />
        </svg>
        <input type="password" class="grow" value="password" />
      </label>
    </div>

    <div class="flex justify-between  mt-5">
      <button class="btn btn-xs sm:btn-xs md:btn-sm lg:btn-md bg-green-600">
        <PencilIcon class="h-5 w-5 heroicon-stroke-w-1.2" />
        Salvar Informações
      </button>
      <button class="btn btn-xs sm:btn-xs md:btn-sm lg:btn-md bg-red-600">
        <TrashIcon class="h-5 w-5 heroicon-stroke-w-1.2" />
        Apagar Conta
      </button>
    </div>
  </div>
</template>

<style scoped></style>
