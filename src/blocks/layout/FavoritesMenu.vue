<script setup lang="ts">
const showFavoritesMenu = ref(false)
const favoriteProducts = ref<Array<Product>>([])
const productStore = useProductStore()

function toggleFavoritesMenu() {
  showFavoritesMenu.value = !showFavoritesMenu.value
}

function setFavoriteProducts() {
  favoriteProducts.value = productStore.getFavoriteProducts
}

watch(productStore, () => {
  setFavoriteProducts()
})
</script>

<template>
  <div class="relative">
    <div class="relative z-[100]">
      <Button
        :icon="showFavoritesMenu ? 'mdi:heart' : 'mdi:heart-outline'"
        id="favoritesMenuButton"
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
