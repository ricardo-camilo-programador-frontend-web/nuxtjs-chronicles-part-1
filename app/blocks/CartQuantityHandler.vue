<script setup lang="ts">
interface Props {
  product: Product | CartItem
}

const props = defineProps<Props>()

const cartStore = useCartStore()
const quantity = ref(0)
const productExistsInCart = ref(false)

function increaseQuantity() {
  if (productExistsInCart.value) {
    cartStore.increaseCartItemQuantity(props.product.id)
    return
  }

  cartStore.addToCart(props.product)
}

function decreaseQuantity() {
  cartStore.decreaseCartItemQuantity(props.product.id)
}

onMounted(() => {
  quantity.value = cartStore.getProductQuantity(props.product.id)
  productExistsInCart.value = cartStore.productExistsInCart(props.product.id)
})

watch(cartStore, () => {
  quantity.value = cartStore.getProductQuantity(props.product.id)
  productExistsInCart.value = cartStore.productExistsInCart(props.product.id)
})
</script>

<template>
  <div
    v-bind="$attrs"
    class="flex max-h-[3rem] items-center justify-between gap-4 rounded-lg p-1"
  >
    <Button
      :id="`cart-quantity-handler-decrease-button-${product.id}`"
      :disabled="quantity === 0"
      icon="mdi:minus"
      icon-style="text-2xl"
      class="rounded-full p-1 transition-all duration-200 hover:bg-gray-200"
      @click="decreaseQuantity"
    />

    <p class="w-[1rem] text-center text-lg font-medium">
      {{ quantity }}
    </p>

    <Button
      :id="`cart-quantity-handler-increase-button-${product.id}`"
      icon="mdi:plus"
      icon-style="text-2xl"
      class="rounded-full p-1 transition-all duration-200 hover:bg-gray-200"
      @click="increaseQuantity"
    />
  </div>
</template>
