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
    favoritesMenu.value,
    event,
  )

  if (clickedOutsideDropdownList) {
    showFavoritesMenu.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
  setFavoriteProducts()
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="">
    <div>
      <Button
        icon="mdi:heart-outline"
        class="w-auto py-0"
        icon-style="text-3xl"
        @click="toggleFavoritesMenu"
      />
    </div>

    <FavoriteCard :favorite-products="favoriteProducts">
      <template #default="{ product }">
        <FavoriteShortcut :product="product" />
      </template>
    </FavoriteCard>
  </div>
</template>
