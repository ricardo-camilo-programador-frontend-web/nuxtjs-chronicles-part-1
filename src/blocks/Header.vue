<script setup lang="ts">
const { $env } = useNuxtApp()
const { isScrollingDown, isScrolled } = useScroll()

const headerClasses = computed(() => {
  return {
    'translate-y-[-40%]  md:translate-y-[-70%] rounded-none': isScrollingDown.value,
    'bg-white shadow-lg': isScrolled.value,
    'transition-transform duration-300 ease-in-out': true
  }
})
</script>

<template>
  <header
    class=" top-0 left-0 right-0 dark:bg-gray-800 z-[99] flex w-full items-center justify-center max-w-[50vw] md:max-w-full mx-auto"
  >
    <div class="container relative  hidden md:flex items-center justify-around w-full h-10 mx-auto">
      <div class="flex items-center gap-2 group">
        <NuxtLink
          to="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 transition-all duration-200 group-hover:text-orange-500"
          aria-label="Enviar mensagem no WhatsApp"
        >
          <Icon
            name="mdi:phone"
            class="w-5 h-5 text-gray-800 transition-all duration-200 ease-in-out rounded-full cursor-pointer group-hover:text-orange-500"
            aria-label="Phone icon"
          />
          <span class="text-sm text-gray-800 group-hover:text-orange-500">
            + 55 11 99999-9999
          </span>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2 group">
        <NuxtLink
          :to="`mailto:${$env.EMAIL}`"
          class="flex items-center gap-2 transition-all duration-200 group-hover:text-orange-500"
          aria-label="Enviar email"
        >
          <Icon
            name="mdi:email"
            class="w-5 h-5 text-gray-800 transition-all duration-200 ease-in-out rounded-full cursor-pointer group-hover:text-orange-500"
            aria-label="Email icon"
          />
          <span class="text-sm text-gray-800 group-hover:text-orange-500">
            {{ $env.EMAIL }}
          </span>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <NuxtLink
          to="https://www.google.com/maps/search/?api=1&query=Fatec+Jaú+SP"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 transition-all duration-200 group-hover:text-orange-500"
          aria-label="Ver localização no Google Maps"
        >
          <Icon
            name="mdi:map-marker"
            class="w-5 h-5 text-gray-800 transition-all duration-200 ease-in-out rounded-full cursor-pointer group-hover:text-orange-500"
            aria-label="Location icon"
          />
          <span class="text-sm text-gray-800 group-hover:text-orange-500">
            Fatec Jaú, SP
          </span>
        </NuxtLink>
      </div>
    </div>

    <div
      class="container fixed grid grid-cols-3 p-4 mx-auto mt-[6rem] bg-white rounded-full shadow-lg"
      :class="[headerClasses]"
    >
      <div class="container relative left-0 flex w-auto mr-auto">
        <Logo />
      </div>

      <div class="container relative hidden md:flex items-center justify-center w-full mx-auto">
        Menu Items
      </div>

      <div class="container relative hidden md:flex items-center justify-center w-full mx-auto">
        SHORTCUTS
      </div>
    </div>

    <div
      class="
        fixed bottom-1 right-1 flex items-center gap-2
      "
    >
      <LangSwitcher />
    </div>
  </header>
</template>
