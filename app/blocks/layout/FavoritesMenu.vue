<script setup lang="ts">
const showFavoritesMenu = ref(false)
const favoriteProducts = ref<Array<Product>>([])
const productStore = useProductStore()
const favoritesTotal = computed(() => {
  return favoriteProducts.value.length >= 99
    ? '99+'
    : favoriteProducts.value.length
})
const showTotalCountForThreeSeconds = ref(false)

function toggleShowTotalCountForThreeSeconds() {
  const timeout = 2000
  showTotalCountForThreeSeconds.value = true

  setTimeout(() => {
    showTotalCountForThreeSeconds.value = false
  }, timeout)
}

function toggleFavoritesMenu() {
  showFavoritesMenu.value = !showFavoritesMenu.value
}

function setFavoriteProducts() {
  favoriteProducts.value = productStore.getFavoriteProducts
}

watch(productStore, () => {
  setFavoriteProducts()
  toggleShowTotalCountForThreeSeconds()
})

onMounted(() => {
  setFavoriteProducts()
})
</script>

<template>
  <div class="relative">
    <div class="relative z-[99]">
      <Button
        :icon="
          showFavoritesMenu
            ? 'mdi:heart text-red-500'
            : 'mdi:heart-outline text-black'
        "
        id="favoritesMenuButton"
        class="w-auto py-0"
        icon-style="text-3xl"
        @click="toggleFavoritesMenu"
      />

      <Transition
        enter-active-class="transition-all duration-300 ease-in-out"
        leave-active-class="transition-all duration-300 ease-in-out"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <span
          v-if="favoriteProducts.length > 0 && showTotalCountForThreeSeconds"
          class="absolute top-2 right-0 flex h-7 w-7 items-center justify-center rounded-full p-2 px-2 py-1 text-xs font-bold text-black"
        >
          {{ favoritesTotal }}
        </span>
      </Transition>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-in-out"
      leave-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <FavoriteCard
        v-if="showFavoritesMenu"
        :favorite-products="favoriteProducts"
        :show-menu="showFavoritesMenu"
        :toggle-menu="toggleFavoritesMenu"
        class="absolute inset-x-0 -top-4 -right-32 z-[98] !h-[20rem] !w-[17rem] md:-inset-x-16"
      >
        <template #default="{ product }">
          <FavoriteShortcut
            :product="product"
            @favorite-updated="setFavoriteProducts"
          />
        </template>
      </FavoriteCard>
    </Transition>
  </div>
</template>
