import type { Product } from '@/types/product'
import {
  birdCage,
  catFood,
  catFoodPremium,
  dogCollar,
  dogFoodLarge,
  dogFoodMedium,
  dogFoodMini,
  dogFoodOrange,
  fishFilter,
  groomingKit,
  hamsterHabitat,
  litterBox,
  scratchingPost,
} from '@/utils/imageFiles'
import { acceptHMRUpdate, defineStore } from 'pinia'

interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  cart: Array<CartItem>
}

export const useCartStore = defineStore({
  id: 'cartStore',
  state: (): CartStore => ({
    cart: [],
  }),
  actions: {
    getCart() {
      return this.cart
    },
    increaseCartItemQuantity(product: Product): void {
      this.cart = [...this.cart, { ...product, quantity: 1 }]
    },
    decreaseCartItemQuantity(product: Product): void {
      this.cart = this.cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
      )
    },
    removeFromCart(product: Product): void {
      this.cart = this.cart.filter(item => item.id !== product.id)
    },
  },
  getters: {
    getCart(): Array<CartItem> {
      return this.cart
    },
    getCartTotal(): number {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    getCartCount(): number {
      return this.cart.reduce((total, item) => total + item.quantity, 0)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
