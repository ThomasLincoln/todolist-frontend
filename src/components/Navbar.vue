<template>

  <!-- 🔴 adicionar animações e melhorar a aparencia da navbar -->
  <nav class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50
          py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4" style="align-items: center;">

    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="ms-2">
        <a href="#" class="text-xl font-medium" style="color: var(--primary-color);">TodoBook</a>
      </div>

      <button
        class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button" data-twe-collapse-init data-twe-target="#navbarSupportedContent2"
        aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </button>

      <!-- Collapsible navbar container -->
      <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent2" data-twe-collapse-item>
        <!-- Left links -->
        <ul class="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row" data-twe-navbar-nav-ref>
          <!-- Home link -->
          <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2" data-twe-nav-item-ref>
            <a class="lg:px-2" style="color: var(--white);" href="#" data-twe-nav-link-ref>Inicio</a>
          </li>
          <!-- Contato link -->
          <li class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
            <a class="p-0 transition duration-200 motion-reduce:transition-none lg:px-2" style="color: var(--white);"
              href="#" data-twe-nav-link-ref>Contato</a>
          </li>
          <!-- Pricing link -->
          <li class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
            <a class="pointer-events-none p-0 transition duration-200 
            motion-reduce:transition-none lg:px-2 text-black/30 dark:text-white/30" data-twe-nav-link-ref>Pricing</a>
          </li>
        </ul>
      </div>

      <div class="ms-2">

        <!-- Avatar -->
        <div class="relative ms-3" data-twe-dropdown-ref>
          <a class="flex whitespace-nowrap text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
            href="#" id="navbarDropdownMenuLink" role="button" data-twe-dropdown-toggle-ref aria-expanded="false">
            <img src="../assets/images/aux-icon.jpg" class="rounded-full"
              style="height: 2.5em; width: 2.5em" alt="Avatar" loading="lazy" />
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

      </div>
    </div>
  </nav>

</template>

<script>
import { Dropdown, initTWE } from "tw-elements";
initTWE({ Dropdown });
export default {
}
</script>
