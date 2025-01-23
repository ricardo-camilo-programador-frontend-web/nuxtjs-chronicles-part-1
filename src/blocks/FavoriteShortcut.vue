<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'

interface FavoriteShortcutProps {
  product: Product
}

const props = defineProps<FavoriteShortcutProps>()
const productStore = useProductStore()
const { updateProductFavorite } = productStore

function handleFavoriteClick(event: MouseEvent) {
  event.stopPropagation()
  updateProductFavorite(props.product)
}
</script>

<template>
  <div>
    <Button
      :id="`favorite-button-${product.id}`"
      :icon="product.favorite ? 'mdi:heart' : 'mdi:heart-outline'"
      :icon-style="`text-3xl ${product.favorite ? 'text-red-500' : ''}`"
      class="w-auto py-0"
      @click="handleFavoriteClick"
    />
  </div>
</template>
