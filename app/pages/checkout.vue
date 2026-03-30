<script setup lang="ts">
import { useHead } from '#imports'
import { computed, ref, onMounted } from 'vue'
import { useCartStore } from '~/stores/cartStore'
import { useCheckoutStore } from '~/stores/checkoutStore'
import { formatCurrency } from '~/utils/formatCurrency'

const { t } = useI18n()
const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()

// Redirect if cart is empty
const router = useRouter()
onMounted(() => {
  if (cartStore.getCartCount() === 0 && !checkoutStore.orderId) {
    router.push('/cart')
  }
})

// SEO
useHead({
  title: computed(() => t('checkout.title')),
  meta: [
    { name: 'description', content: t('checkout.description') },
  ],
})

// Order confirmation
const orderComplete = computed(() => !!checkoutStore.orderId)

// Format currency helper
const formatPrice = (price: number) => formatCurrency(price, 'BRL')

// Calculate totals
const subtotal = computed(() => cartStore.getCartTotal())
const shipping = computed(() => subtotal.value > 200 ? 0 : 19.90)
const total = computed(() => subtotal.value + shipping.value)

// Payment processing
const isProcessing = computed(() => checkoutStore.isProcessing)

async function handlePlaceOrder() {
  const result = await checkoutStore.processPayment()
  if (!result.success) {
    // Error handled by store
  }
}

function goToProducts() {
  checkoutStore.resetCheckout()
  router.push('/shop')
}
</script>

<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Order Confirmation -->
      <div v-if="orderComplete" class="text-center py-12">
        <div class="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
          {{ t('checkout.orderComplete') }}
        </h1>
        <p class="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          {{ t('checkout.orderId') }}: <span class="font-mono font-semibold">{{ checkoutStore.orderId }}</span>
        </p>
        <p class="text-zinc-500 dark:text-zinc-500 mb-8">
          {{ t('checkout.confirmationEmail') }}
        </p>
        <button
          @click="goToProducts"
          class="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          {{ t('checkout.continueShopping') }}
        </button>
      </div>

      <!-- Checkout Form -->
      <div v-else class="grid lg:grid-cols-3 gap-8">
        <!-- Main Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Progress Steps -->
          <div class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
            <div class="flex items-center justify-between">
              <button
                v-for="(s, index) in checkoutStore.steps"
                :key="s.key"
                @click="checkoutStore.setStep(s.key as any)"
                :class="[
                  'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors',
                  checkoutStore.currentStep === s.key
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : s.completed
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-zinc-400 dark:text-zinc-500'
                ]"
              >
                <span class="w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium"
                  :class="checkoutStore.currentStep === s.key ? 'border-indigo-600' : s.completed ? 'border-green-600' : 'border-zinc-300 dark:border-zinc-600'">
                  {{ s.completed ? '✓' : index + 1 }}
                </span>
                <span class="hidden sm:inline">{{ s.label }}</span>
              </button>
            </div>
          </div>

          <!-- Customer Info -->
          <div v-if="checkoutStore.currentStep === 'customer'" class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              {{ t('checkout.customerInfo') }}
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {{ t('checkout.firstName') }} *
                </label>
                <input
                  v-model="checkoutStore.formData.customer!.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {{ t('checkout.lastName') }} *
                </label>
                <input
                  v-model="checkoutStore.formData.customer!.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {{ t('checkout.email') }} *
                </label>
                <input
                  v-model="checkoutStore.formData.customer!.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {{ t('checkout.phone') }} *
                </label>
                <input
                  v-model="checkoutStore.formData.customer!.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {{ t('checkout.documentType') }} *
                </label>
                <select
                  v-model="checkoutStore.formData.customer!.documentType"
                  class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="cpf">CPF</option>
                  <option value="cnpj">CNPJ</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {{ t('checkout.documentNumber') }} *
                </label>
                <input
                  v-model="checkoutStore.formData.customer!.documentNumber"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <!-- Shipping -->
          <div v-if="checkoutStore.currentStep === 'shipping'" class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              {{ t('checkout.shippingAddress') }}
            </h2>
            <div class="space-y-4">
              <div class="grid md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {{ t('checkout.zipCode') }} *
                  </label>
                  <input
                    v-model="checkoutStore.formData.shippingAddress!.zipCode"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {{ t('checkout.street') }} *
                  </label>
                  <input
                    v-model="checkoutStore.formData.shippingAddress!.street"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {{ t('checkout.number') }} *
                  </label>
                  <input
                    v-model="checkoutStore.formData.shippingAddress!.number"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {{ t('checkout.complement') }}
                  </label>
                  <input
                    v-model="checkoutStore.formData.shippingAddress!.complement"
                    type="text"
                    class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {{ t('checkout.neighborhood') }} *
                  </label>
                  <input
                    v-model="checkoutStore.formData.shippingAddress!.neighborhood"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {{ t('checkout.city') }} *
                  </label>
                  <input
                    v-model="checkoutStore.formData.shippingAddress!.city"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {{ t('checkout.state') }} *
                  </label>
                  <input
                    v-model="checkoutStore.formData.shippingAddress!.state"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Payment -->
          <div v-if="checkoutStore.currentStep === 'payment'" class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              {{ t('checkout.paymentMethod') }}
            </h2>
            
            <!-- Payment Options -->
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <button
                @click="checkoutStore.setPaymentMethod('credit_card')"
                :class="[
                  'p-4 border-2 rounded-xl text-center transition-colors',
                  checkoutStore.formData.paymentMethod === 'credit_card'
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300'
                ]"
              >
                <div class="text-2xl mb-2">💳</div>
                <div class="font-medium text-zinc-900 dark:text-white">{{ t('checkout.creditCard') }}</div>
              </button>
              <button
                @click="checkoutStore.setPaymentMethod('pix')"
                :class="[
                  'p-4 border-2 rounded-xl text-center transition-colors',
                  checkoutStore.formData.paymentMethod === 'pix'
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300'
                ]"
              >
                <div class="text-2xl mb-2">📱</div>
                <div class="font-medium text-zinc-900 dark:text-white">PIX</div>
              </button>
              <button
                @click="checkoutStore.setPaymentMethod('boleto')"
                :class="[
                  'p-4 border-2 rounded-xl text-center transition-colors',
                  checkoutStore.formData.paymentMethod === 'boleto'
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300'
                ]"
              >
                <div class="text-2xl mb-2">📄</div>
                <div class="font-medium text-zinc-900 dark:text-white">{{ t('checkout.boleto') }}</div>
              </button>
            </div>

            <!-- Credit Card Form -->
            <div v-if="checkoutStore.formData.paymentMethod === 'credit_card'" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {{ t('checkout.cardNumber') }} *
                </label>
                <input
                  v-model="checkoutStore.formData.creditCard!.number"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  required
                  class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {{ t('checkout.cardHolder') }} *
                </label>
                <input
                  v-model="checkoutStore.formData.creditCard!.holderName"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {{ t('checkout.expiry') }} *
                  </label>
                  <input
                    v-model="checkoutStore.formData.creditCard!.expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    required
                    class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    CVV *
                  </label>
                  <input
                    v-model="checkoutStore.formData.creditCard!.cvv"
                    type="text"
                    placeholder="123"
                    required
                    class="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <!-- PIX Info -->
            <div v-if="checkoutStore.formData.paymentMethod === 'pix'" class="p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg">
              <p class="text-zinc-600 dark:text-zinc-400">
                {{ t('checkout.pixInfo') }}
              </p>
            </div>

            <!-- Boleto Info -->
            <div v-if="checkoutStore.formData.paymentMethod === 'boleto'" class="p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg">
              <p class="text-zinc-600 dark:text-zinc-400">
                {{ t('checkout.boletoInfo') }}
              </p>
            </div>
          </div>

          <!-- Review -->
          <div v-if="checkoutStore.currentStep === 'review'" class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              {{ t('checkout.reviewOrder') }}
            </h2>
            
            <!-- Customer Summary -->
            <div class="mb-6 p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg">
              <h3 class="font-medium text-zinc-900 dark:text-white mb-2">{{ t('checkout.customerInfo') }}</h3>
              <p class="text-zinc-600 dark:text-zinc-400">
                {{ checkoutStore.formData.customer?.firstName }} {{ checkoutStore.formData.customer?.lastName }}
              </p>
              <p class="text-zinc-600 dark:text-zinc-400">{{ checkoutStore.formData.customer?.email }}</p>
            </div>

            <!-- Shipping Summary -->
            <div class="mb-6 p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg">
              <h3 class="font-medium text-zinc-900 dark:text-white mb-2">{{ t('checkout.shippingAddress') }}</h3>
              <p class="text-zinc-600 dark:text-zinc-400">
                {{ checkoutStore.formData.shippingAddress?.street }}, {{ checkoutStore.formData.shippingAddress?.number }}
              </p>
              <p class="text-zinc-600 dark:text-zinc-400">
                {{ checkoutStore.formData.shippingAddress?.neighborhood }} - {{ checkoutStore.formData.shippingAddress?.city }}/{{ checkoutStore.formData.shippingAddress?.state }}
              </p>
            </div>

            <!-- Payment Summary -->
            <div class="p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg">
              <h3 class="font-medium text-zinc-900 dark:text-white mb-2">{{ t('checkout.paymentMethod') }}</h3>
              <p class="text-zinc-600 dark:text-zinc-400">
                {{ checkoutStore.formData.paymentMethod === 'credit_card' ? t('checkout.creditCard') : checkoutStore.formData.paymentMethod === 'pix' ? 'PIX' : t('checkout.boleto') }}
              </p>
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex justify-between">
            <button
              v-if="checkoutStore.currentStep !== 'customer'"
              @click="checkoutStore.prevStep()"
              class="px-6 py-2 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              {{ t('checkout.back') }}
            </button>
            <div v-else></div>
            
            <button
              v-if="checkoutStore.currentStep !== 'review'"
              @click="checkoutStore.nextStep()"
              :disabled="!checkoutStore.canProceed"
              :class="[
                'px-6 py-2 rounded-lg font-medium transition-colors',
                checkoutStore.canProceed
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-zinc-300 dark:bg-zinc-700 text-zinc-500 cursor-not-allowed'
              ]"
            >
              {{ t('checkout.continue') }}
            </button>
            <button
              v-else
              @click="handlePlaceOrder"
              :disabled="isProcessing"
              class="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isProcessing ? t('checkout.processing') : t('checkout.placeOrder') }}
            </button>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm sticky top-8">
            <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              {{ t('checkout.orderSummary') }}
            </h2>
            
            <!-- Items -->
            <div class="space-y-4 mb-6">
              <div
                v-for="item in cartStore.getCartItems()"
                :key="item.id"
                class="flex items-center gap-4"
              >
                <img
                  :src="item.imageSrc"
                  :alt="item.name"
                  class="w-16 h-16 object-cover rounded-lg"
                />
                <div class="flex-1">
                  <h4 class="font-medium text-zinc-900 dark:text-white">{{ item.name }}</h4>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">Qty: {{ item.quantity }}</p>
                </div>
                <div class="text-zinc-900 dark:text-white font-medium">
                  {{ formatPrice(item.price * item.quantity) }}
                </div>
              </div>
            </div>

            <div class="border-t border-zinc-200 dark:border-zinc-700 pt-4 space-y-2">
              <div class="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>{{ t('checkout.subtotal') }}</span>
                <span>{{ formatPrice(subtotal) }}</span>
              </div>
              <div class="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>{{ t('checkout.shipping') }}</span>
                <span>{{ shipping === 0 ? t('checkout.freeShipping') : formatPrice(shipping) }}</span>
              </div>
              <div class="flex justify-between text-lg font-semibold text-zinc-900 dark:text-white pt-2 border-t border-zinc-200 dark:border-zinc-700">
                <span>{{ t('checkout.total') }}</span>
                <span>{{ formatPrice(total) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
