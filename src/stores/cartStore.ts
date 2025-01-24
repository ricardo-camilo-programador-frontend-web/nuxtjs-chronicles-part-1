import type { Product } from '@/types/product'
import { acceptHMRUpdate, defineStore } from 'pinia'

interface CartItem extends Product {
  quantity: number
}

export const useCartStore = defineStore('cartStore', () => {
  const cart = ref<Array<CartItem>>([])

  function getCart() {
    return cart.value
  }

  function addToCart(product: Product): void {
    cart.value.push({ ...product, quantity: 1 })
  }

  function increaseCartItemQuantity(productId: string): void {
    const product = cart.value.find(item => item.id === productId)

    if (product) {
      product.quantity += 1
    }
  }

  function decreaseCartItemQuantity(productId: string): void {
    const product = cart.value.find(item => item.id === productId)

    if (product) {
      if (product.quantity > 1) {
        product.quantity -= 1
        return
      }

      removeFromCart(productId)
    }
  }

  function removeFromCart(productId: string): void {
    cart.value = cart.value.filter(item => item.id !== productId)
  }

  function getCartTotal(): number {
    return cart.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
  }

  function getCartCount(): number {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  }

  function getProductQuantity(productId: string): number {
    const product = cart.value.find(item => item.id === productId)
    return product ? product.quantity : 0
  }

  function productExistsInCart(productId: string): boolean {
    return cart.value.some(item => item.id === productId)
  }

  function clearCart(): void {
    cart.value = []
  }

  return {
    cart,
    getCart,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    removeFromCart,
    getCartTotal,
    getCartCount,
    getProductQuantity,
    clearCart,
    productExistsInCart,
    addToCart,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
