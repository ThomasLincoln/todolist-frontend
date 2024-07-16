<script setup>
import NavBar from "@/components/NavbarComponent.vue"
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <NavBar />
  <div class="px-6">
    <div class="prose flex items-baseline space-x-5">
      <h1>Minha Conta</h1>
      <p>Thomas Lincoln</p>
    </div>
    <div class="prose py-3">
      <h2>Foto</h2>
    </div>
    <div class="flex items-center">

      <div className="avatar">
        <div className="w-36 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-sky-500">
        <PencilIcon class="h-10 w-10 heroicon-stroke-w-1.2" />
        Editar Imagem
      </button>

      <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600">
        <TrashIcon class="h-10 w-10 heroicon-stroke-w-1.2" />
        Apagar Imagem
      </button>


    </div>
  </div>
</template>

<style scoped></style>
