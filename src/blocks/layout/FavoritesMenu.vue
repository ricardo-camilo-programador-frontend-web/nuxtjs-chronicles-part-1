<script setup lang="ts">
const showFavoritesMenu = ref(false)
const favoritesMenu = ref<HTMLElement | null>(null)

function toggleFavoritesMenu(e: Event) {
  e.stopPropagation()
  showFavoritesMenu.value = !showFavoritesMenu.value
}

function returnOnlyFavoriteProducts(products: Array<Product>) {
  return products.filter(product => product.favorite)
}

const { getProducts } = useProductStore()

const products = computed(() => getProducts())

const favoriteProducts = computed(() =>
  useTranslateProducts(returnOnlyFavoriteProducts(products.value)),
)

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

    <Transition>
      <div
        v-if="showFavoritesMenu"
        class="absolute right-16 top-16 z-[99] h-full w-full"
      >
        <div
          ref="favoritesMenu"
          class="absolute right-0 flex max-h-[20rem] w-[17rem] flex-col gap-2 overflow-hidden overflow-y-auto rounded-xl bg-white p-2 border border-gray-200"
        >
          <div
            v-for="product in favoriteProducts"
            :key="product.id"
            class="mx-auto flex w-full items-center justify-start gap-2 border-b pb-2"
          >
            <Image
              :src="product.imageSrc"
              :alt="product.altText"
              width="50"
              height="50"
            />

            <p class="line-clamp-2 text-sm">
              {{ product.name }}
            </p>

            <Button
              :id="`favorite-button-${product.id}`"
              :icon="product.favorite ? 'mdi:heart' : 'mdi:heart-outline'"
              :icon-style="`text-3xl ${product.favorite ? 'text-red-500' : ''}`"
              class="w-auto py-0"
            />
          </div>
        </div>
      </div>

      <div
        v-else
        class="absolute right-0 top-16 z-[99] h-full w-full bg-black/50"
      >
        <p class="text-black">
          {{ $t('favorites.empty') }}
        </p>
      </div>
    </Transition>
  </div>
</template>
