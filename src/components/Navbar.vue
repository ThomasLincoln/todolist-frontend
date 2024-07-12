<template>
  <div style="background-color: var(--gray);">

    <!-- 🔴 adicionar animações e melhorar a aparencia da navbar -->
    <nav class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50
  py-2 shadow-dark-mild lg:py-2" style="align-items: center; background-color: var(--gray);">

      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div class="ms-2">
          <a href="#" class="text-xl font-medium" style="color: var(--primary-color);">TodoBook</a>
        </div>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>

        <!-- Avatar -->
        <div class="relative ms-3" data-twe-dropdown-ref>
          <a class="flex whitespace-nowrap text-black/60 transition 
    duration-200 hover:text-black/80 hover:ease-in-out 
    focus:text-black/80 active:text-black/80 
    motion-reduce:transition-none dark:text-white/60 
    dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80" href="#" id="navbarDropdownMenuLink"
            role="button" data-twe-dropdown-toggle-ref aria-expanded="false">
            <img src="../assets/images/aux-icon.jpg" class="rounded-full" style="height: 2.5em; width: 2.5em"
              alt="Avatar" loading="lazy" />
            <span class="ps-1 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </a>
          <ul
            class="absolute left-0 right-auto z-[1000] float-left m-0 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block"
            aria-labelledby="dropdownMenuButton2" data-twe-dropdown-menu-ref style="background-color: var(--dark);">
            <li>
              <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#" data-twe-dropdown-item-ref>My profile</a>
            </li>
            <li>
              <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#" data-twe-dropdown-item-ref>Settings</a>
            </li>
            <li>
              <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#" data-twe-dropdown-item-ref>Logout</a>
            </li>
          </ul>
        </div>

        <!-- Menu colapsável -->
        <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:!flex 
          lg:basis-auto">

          <!-- Links -->
          <ul class="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row">
            <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 text-[#71717a] hover:text-[#d4d4d8]">
              <RouterLink to="/home" class="lg:px-2">
                Inicio
              </RouterLink>
            </li>
            <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 text-[#71717a] hover:text-[#d4d4d8]">
              <RouterLink to="/contato" class="lg:px-2" href="#" data-twe-nav-link-ref>
                Contato
              </RouterLink>
            </li>
            <li class="mb-2 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
              <RouterLink to="/pricing" class="pointer-events-none p-0 transition duration-200 
              motion-reduce:transition-none lg:px-2 text-black/30 dark:text-white/30" data-twe-nav-link-ref>
                Pricing
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="ms-2 py-2">


        </div>
      </div>
    </nav>

  </div>
</template>

<script>
import { Dropdown, initTWE } from "tw-elements";
initTWE({ Dropdown });
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
