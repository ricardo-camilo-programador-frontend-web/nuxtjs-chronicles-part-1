<script setup lang="ts">
import { menuLinks } from '@/static/menu'

const { t } = useI18n()
const localePath = useLocalePath()

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
        id="mobileMenuButton"
        type="button"
        class="hover:text-primary block h-10 rounded-none border-transparent bg-transparent p-2 text-gray-600 shadow-transparent hover:border-none hover:bg-none hover:shadow-none"
        aria-label="toggle menu"
        @click="toggleNav"
      >
        <Icon
          v-if="!showMenu"
          name="mdi:menu"
          class="text-3xl text-black"
          aria-label="Open menu"
        />

        <Icon
          v-if="showMenu"
          name="mdi:close"
          class="text-3xl text-orange-500"
          aria-label="Close menu"
        />
      </Button>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="showMenu"
        class="hover:text-primary/75 fixed inset-0 left-0 z-[999] -mt-1 mr-auto flex h-full min-h-screen w-full min-w-[17rem]"
      >
        <nav
          class="container mx-auto flex h-full min-h-screen w-full min-w-[17rem] border-r-2 shadow-lg md:items-center md:justify-between"
          role="navigation"
        >
          <div
            class="flex h-screen max-h-screen w-[17rem] flex-col overflow-hidden overflow-y-auto bg-white"
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
            <ul
              class="inset-y-0 left-0 -mt-3 flex h-auto max-w-[17rem] flex-col gap-1 bg-white pt-16 text-base md:text-[1.5rem] xl:text-[1.6rem]"
            >
              <li
                v-for="item in menuLinks"
                :key="item.translationKey"
                class="text-menu-text-primary group flex w-full font-semibold"
              >
                <NuxtLink
                  :to="localePath(item.path)"
                  class="items-between flex w-full cursor-pointer rounded border-b-2 border-transparent px-2 py-4 pl-4 text-black transition-all duration-300 ease-in-out hover:border-orange-500 hover:text-orange-500"
                >
                  <div
                    class="group-hover:border-b-primary/75 group-hover:text-primary/75 flex w-full content-center items-center justify-center gap-2"
                  >
                    <div
                      v-if="item.icon"
                      class="icon relative"
                    >
                      <Image
                        :src="item.icon"
                        class="force-svg-color fill-primary h-6 w-6"
                        alt="Ícone do menu."
                        width="300"
                        height="300"
                      />
                    </div>
                    <span
                      class="text-[1.1rem] md:text-[1.2rem] xl:text-[1.3rem]"
                    >
                      {{ t(item.translationKey) }}
                    </span>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
        <div
          class="z-5 block h-full min-h-screen w-full min-w-full cursor-pointer bg-black/50 backdrop-blur-sm"
          title="Fechar menu."
          @click="toggleNav"
        />
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
  transform: translateX(-100%);
}
</style>
