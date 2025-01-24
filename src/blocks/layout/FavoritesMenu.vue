<script setup lang="ts">
const showFavoritesMenu = ref(false)
const favoritesMenu = ref<HTMLElement | null>(null)
const favoriteProducts = ref<Array<Product>>([])
const productStore = useProductStore()

function toggleFavoritesMenu(e: Event) {
  e.stopPropagation()
  showFavoritesMenu.value = !showFavoritesMenu.value
}

function setFavoriteProducts() {
  favoriteProducts.value = productStore.getFavoriteProducts
}

function handleClickOutside(event: MouseEvent) {
  const clickedOutsideDropdownList = isClickOutsideElement(
    document.getElementById('favoritesMenu'),
    event,
  )

  if (clickedOutsideDropdownList) {
    showFavoritesMenu.value = false
  }
}

watch(productStore, () => {
  setFavoriteProducts()
})

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative">
    <div>
      <Button
        icon="mdi:heart-outline"
        class="w-auto py-0"
        icon-style="text-3xl"
        @click="toggleFavoritesMenu"
      />
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-in-out"
      leave-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <FavoriteCard
        id="favoritesMenu"
        ref="favoritesMenu"
        v-if="showFavoritesMenu"
        :favorite-products="favoriteProducts"
        class="absolute -top-4 -right-32 z-[99] !h-[20rem] !w-[17rem]"
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
