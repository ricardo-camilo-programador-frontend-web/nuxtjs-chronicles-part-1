<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from '~/components/Button.vue'

const { t } = useI18n()

const showMenu = ref(false)

const mobileMenuStyle = computed(() => {
  if (!showMenu.value) {
    return 'hidden'
  }

  return 'block'
})

function toggleNav() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div
    class="relative flex h-auto w-full content-center items-center transition-all duration-500 ease-out"
  >
    <div>
      <span class="sr-only">Toggle menu</span>
      <Button
        type="button"
        class="block rounded-none border-transparent bg-transparent p-2 text-gray-600 shadow-transparent hover:border-none hover:bg-none hover:text-primary hover:shadow-none"
        aria-label="toggle menu"
        icon="mdi:menu"
        icon-style="text-3xl"
        @click="toggleNav"
      />
    </div>
    <div
      :class="mobileMenuStyle"
      class="fixed inset-0 left-0 z-10 -mt-1 mr-auto flex h-full min-h-screen w-full min-w-[17rem] hover:text-primary/75"
    >
      <nav
        class="container mx-auto flex h-full min-h-screen w-full min-w-[17rem] animate-fade-in-from-left border-r-2 shadow-lg md:items-center md:justify-between"
        role="navigation"
      >
        <div
          class="flex h-screen max-h-screen w-full min-w-[17rem] flex-col overflow-hidden overflow-y-auto bg-white"
        >
          <div class="bg-menu-header flex w-full flex-col">
            <div
              class="ml-auto grid h-auto w-full items-center justify-end p-4"
              @click="toggleNav"
            >
              <Button
                type="button"
                class="focus:white group right-0 ml-auto h-min w-min border-none bg-transparent text-[1.3rem] text-black shadow-transparent hover:border-transparent hover:bg-none hover:text-primary hover:shadow-transparent focus:outline-none md:text-[1.43rem] xl:text-[1.5rem]"
                aria-label="Fechar menu."
                title="Fechar menu."
                icon="bx bx-x group-hover:translate-x-0 ml-auto bx-md right-0 group-hover:text-primary"
              />
            </div>
          </div>
          <ul
            class="inset-y-0 left-0 -mt-3 flex h-auto flex-col gap-1 bg-white text-base md:text-[1.5rem] xl:text-[1.6rem]"
          >
            <li
              v-for="item in menuLinks"
              :key="item.translationKey"
              class="text-menu-text-primary group flex w-full font-semibold"
            >
              <a
                :href="item.path"
                class="items-between flex w-full cursor-pointer rounded px-2 py-4 pl-4 text-black"
              >
                <div
                  class="flex w-full content-center items-center justify-center gap-2 group-hover:border-b-primary/75 group-hover:text-primary/75"
                >
                  <div
                    v-if="item.icon"
                    class="icon relative"
                  >
                    <img
                      :src="item.icon"
                      class="force-svg-color h-6 w-6 fill-primary"
                      alt="Ícone do menu."
                    >
                  </div>
                  <span
                    class="text-[1.1rem] md:text-[1.2rem] xl:text-[1.3rem]"
                  >
                    {{ t(item.translationKey) }}
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        class="z-5 hidden h-full min-h-screen w-full cursor-pointer sm:block"
        title="Fechar menu."
        @click="toggleNav"
      >
        .
      </div>
    </div>
  </div>
</template>
