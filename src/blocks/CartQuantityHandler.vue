<script setup lang="ts">
interface Props {
  id: string
}

const props = defineProps<Props>()

const cartStore = useCartStore()

const quantity = computed(() => {
  return cartStore.getProductQuantity(props.id)
})

function increaseQuantity() {
  cartStore.increaseCartItemQuantity(props.id)
}

function decreaseQuantity() {
  cartStore.decreaseCartItemQuantity(props.id)
}
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <Button
      icon="mdi:minus"
      @click="decreaseQuantity"
    />

    <p>{{ quantity }}</p>

    <Button
      icon="mdi:plus"
      @click="increaseQuantity"
    />
  </div>
</template>
