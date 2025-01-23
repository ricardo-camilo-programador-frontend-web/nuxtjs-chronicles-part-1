<script setup lang="ts">
const { $env } = useNuxtApp()
const { isScrollingDown, isScrolled } = useScroll()

const headerClasses = computed(() => {
  return {
    'translate-y-[-40%] lg:translate-y-[-50%] rounded-none ':
      isScrollingDown.value,
    'bg-white shadow-lg': isScrolled.value,
    'transition-all duration-300 ease-in-out': true,
  }
})
</script>

<template>
  <header
    class="top-0 right-0 left-0 z-[99] mx-auto flex w-full items-center justify-center dark:bg-gray-800"
  >
    <div
      class="mx-auto hidden h-10 w-screen items-center justify-between md:flex"
    >
      <div class="flex gap-4">
        <div class="group mr-auto flex items-center gap-2">
          <NuxtLink
            to="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 transition-all duration-200 group-hover:text-orange-500"
            aria-label="Enviar mensagem no WhatsApp"
          >
            <Icon
              name="mdi:phone"
              class="h-5 w-5 cursor-pointer rounded-full text-gray-800 transition-all duration-200 ease-in-out group-hover:text-orange-500"
              aria-label="Phone icon"
            />
            <span class="text-sm text-gray-800 group-hover:text-orange-500">
              + 55 11 99999-9999
            </span>
          </NuxtLink>
        </div>

        <div class="group mr-auto flex h-16 items-center gap-2">
          <NuxtLink
            :to="`mailto:${$env.EMAIL}`"
            class="flex items-center gap-2 transition-all duration-200 group-hover:text-orange-500"
            aria-label="Enviar email"
          >
            <Icon
              name="mdi:email"
              class="h-5 w-5 cursor-pointer rounded-full text-gray-800 transition-all duration-200 ease-in-out group-hover:text-orange-500"
              aria-label="Email icon"
            />
            <span class="text-sm text-gray-800 group-hover:text-orange-500">
              {{ $env.EMAIL }}
            </span>
          </NuxtLink>
        </div>
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
            class="h-5 w-5 cursor-pointer rounded-full text-gray-800 transition-all duration-200 ease-in-out group-hover:text-orange-500"
            aria-label="Location icon"
          />
          <span class="text-sm text-gray-800 group-hover:text-orange-500">
            Fatec Jaú, SP
          </span>
        </NuxtLink>
      </div>
    </div>

    <div
      :class="[headerClasses]"
      class="fixed mx-auto mt-[6rem] flex min-h-16 w-screen max-w-[1920px] justify-between rounded-full bg-white p-4 shadow-lg"
    >
      <div class="z-[9999] mx-auto mr-auto flex w-auto lg:absolute lg:left-5">
        <Logo />
      </div>

      <div
        class="relative mx-auto hidden w-full items-center justify-center lg:flex"
      >
        <DesktopMenu />
      </div>

      <div
        class="right-5 flex w-full items-center justify-end gap-4 lg:absolute lg:w-auto"
      >
        <div class="hidden lg:block">
          <Search />
        </div>

        <div>
          <FavoritesMenu />
        </div>

        <div>
          <CartMenu />
        </div>

        <div class="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>

    <div class="fixed right-1 bottom-1 flex items-center gap-2">
      <LangSwitcher />
    </div>
  </header>
</template>
