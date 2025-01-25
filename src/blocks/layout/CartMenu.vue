<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/Button.vue'

const { t } = useI18n()

const showMenu = ref(false)
const cartStore = useCartStore()
const cartItems = ref<Array<CartItem>>([])

function toggleNav() {
  showMenu.value = !showMenu.value
}

function setCartItems() {
  cartItems.value = cartStore.getCartItems()
}

watch(cartStore, () => {
  setCartItems()
})

watch(showMenu, () => {
  setCartItems()
})

onMounted(() => {
  setCartItems()
})
</script>

<template>
  <div
    class="relative flex h-auto w-full content-center items-center transition-all duration-500 ease-out"
  >
    <div class="flex h-full w-full items-center justify-center">
      <span class="sr-only">Toggle menu</span>
      <Button
        type="button"
        class="hover:text-primary block h-10 rounded-none border-transparent bg-transparent p-2 text-gray-600 shadow-transparent hover:border-none hover:bg-none hover:shadow-none"
        aria-label="toggle menu"
        icon="mdi:cart"
        icon-style="text-3xl"
        @click="toggleNav"
      />
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div
        v-show="showMenu"
        class="hover:text-primary/75 fixed inset-0 right-0 z-[99] -mt-1 ml-auto flex h-full min-h-screen w-full min-w-[17rem]"
      >
        <div
          class="z-[90] block h-full min-h-screen w-full min-w-full cursor-pointer bg-black/10 backdrop-blur-sm"
          title="Fechar menu."
          @click="toggleNav"
        />

        <nav
          class="absolute inset-y-0 right-0 z-[9999] mx-auto flex h-full min-h-screen w-[17rem] border-l-2 border-gray-200 shadow-lg md:items-center md:justify-between"
          role="navigation"
        >
          <div
            class="ml-auto flex h-screen max-h-screen w-[17rem] flex-col overflow-hidden overflow-y-auto bg-white"
          >
            <div class="bg-menu-header flex w-full flex-col">
              <div
                class="ml-auto grid h-auto w-full items-center justify-end p-4"
                @click="toggleNav"
              >
                <Button
                  type="button"
                  class="focus:white hover:text-primary group right-0 ml-auto h-min w-min border-none bg-transparent text-[1.3rem] text-black shadow-transparent hover:border-transparent hover:bg-none hover:shadow-transparent focus:outline-none md:text-[1.43rem] xl:text-[1.5rem]"
                  aria-label="Fechar menu."
                  title="Fechar menu."
                  icon="mdi:close"
                />
              </div>
            </div>

            <div
              class="relative h-full max-h-[70vh] w-[17rem] overflow-hidden overflow-y-auto"
            >
              <div class="h-full w-full">
                <div
                  v-if="cartItems.length > 0"
                  class="h-full min-h-32 w-full"
                >
                  <div
                    class="flex h-full w-[17rem] flex-col gap-2 overflow-hidden overflow-y-auto rounded-xl border-b border-gray-200 p-2"
                  >
                    <div
                      v-for="product in cartItems"
                      :key="`cart-item-${product.id}`"
                      class="mx-auto flex w-full min-h-[10rem] items-center justify-start gap-2 border-b border-gray-200 relative pb-2"
                    >
                      <Image
                        :src="product.imageSrc"
                        :alt="product.altText"
                        width="50"
                        height="50"
                      />

                      <p class="line-clamp-2 text-sm max-w-[10rem]">
                        {{ t(product.name) }}
                      </p>

                      <div class="flex-col my-auto relative -mt-[0.00000001rem]">
                        <CartQuantityHandler
                          :product="product"
                          class="flex-col"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-if="!cartItems.length"
                  class="flex h-full w-full items-center justify-center rounded-xl"
                >
                  <p class="text-black">
                    {{ $t('cart.empty') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
