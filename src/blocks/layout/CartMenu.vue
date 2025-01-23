<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/Button.vue'

const { t } = useI18n()

const showMenu = ref(false)

function toggleNav() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div
    class="relative flex h-auto w-full content-center items-center transition-all duration-500 ease-out"
  >
    <div class="flex h-full w-full items-center justify-center">
      <span class="sr-only">Toggle menu</span>
      <Button
        type="button"
        class="hover:text-primary block h-10 rounded-none border-transparent bg-transparent p-2 text-gray-600 shadow-transparent hover:border-none hover:bg-none hover:shadow-none"
        aria-label="toggle menu"
        icon="mdi:cart"
        icon-style="text-3xl"
        @click="toggleNav"
      />
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div
        v-show="showMenu"
        class="hover:text-primary/75 fixed inset-0 right-0 z-[99] -mt-1 ml-auto flex h-full min-h-screen w-full min-w-[17rem]"
      >
        <div
          class="z-5 z-[90] block h-full min-h-screen w-full min-w-full cursor-pointer bg-black/10 backdrop-blur-sm"
          title="Fechar menu."
          @click="toggleNav"
        />

        <nav
          class="absolute inset-y-0 right-0 z-[9999] mx-auto flex h-full min-h-screen w-[17rem] border-l-2 shadow-lg md:items-center md:justify-between"
          role="navigation"
        >
          <div
            class="ml-auto flex h-screen max-h-screen w-[17rem] flex-col overflow-hidden overflow-y-auto bg-white"
          >
            <div class="bg-menu-header flex w-full flex-col">
              <div
                class="ml-auto grid h-auto w-full items-center justify-end p-4"
                @click="toggleNav"
              >
                <Button
                  type="button"
                  class="focus:white hover:text-primary group right-0 ml-auto h-min w-min border-none bg-transparent text-[1.3rem] text-black shadow-transparent hover:border-transparent hover:bg-none hover:shadow-transparent focus:outline-none md:text-[1.43rem] xl:text-[1.5rem]"
                  aria-label="Fechar menu."
                  title="Fechar menu."
                  icon="mdi:close"
                />
              </div>
            </div>

            <p class="text-center text-2xl font-bold">
              {{ t('soon') }}
            </p>
          </div>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
