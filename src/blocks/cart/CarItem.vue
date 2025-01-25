<script setup lang="ts">
const { t } = useI18n()

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.getCartItems())

console.log('cartItems', cartItems.value)
</script>

<template>
  <div
    class="h-full w-full"
  >
    <div
      v-if="cartItems.length > 0"
      class="min-h-8 h-full w-full"
    >
      <div
        class="flex h-full w-[17rem] flex-col gap-2 overflow-hidden overflow-y-auto rounded-xl border border-gray-200 bg-white p-2"
      >
        <div
          v-for="product in cartItems"
          :key="`cart-item-${product.id}`"
          class="mx-auto flex w-full items-center justify-start gap-2 border-b pb-2"
        >
          <Image
            :src="product.imageSrc"
            :alt="product.altText"
            width="50"
            height="50"
          />

          <p class="line-clamp-2 text-sm">
            {{ t(product.name) }}
          </p>

          <slot :product="product" />
        </div>
      </div>
    </div>

    <div
      v-if="!cartItems.length"
      class="absolute top-16 right-16 z-[99] flex h-full w-full items-center justify-center rounded-xl border border-gray-200 bg-white"
    >
      <p class="text-black">
        {{ $t('cart.empty') }}
      </p>
    </div>
  </div>
</template>
