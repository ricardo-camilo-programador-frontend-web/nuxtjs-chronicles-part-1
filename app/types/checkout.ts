export type PaymentMethodType = 'credit_card' | 'pix' | 'boleto'

export interface CreditCard {
  number: string
  holderName: string
  expiryDate: string
  cvv: string
  brand?: 'visa' | 'mastercard' | 'amex' | 'elo' | 'hipercard'
}

export interface BillingAddress {
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export interface ShippingAddress {
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export interface CustomerInfo {
  email: string
  phone: string
  firstName: string
  lastName: string
  documentType: 'cpf' | 'cnpj'
  documentNumber: string
}

export interface CheckoutFormData {
  customer: CustomerInfo
  billingAddress: BillingAddress
  shippingAddress: ShippingAddress
  sameAsBilling: boolean
  paymentMethod: PaymentMethodType
  creditCard?: CreditCard
  notes?: string
}

export interface CheckoutState {
  step: 'customer' | 'shipping' | 'payment' | 'review'
  formData: Partial<CheckoutFormData>
  isProcessing: boolean
  orderId?: string
  error?: string
}

export interface Order {
  id: string
  customer: CustomerInfo
  billingAddress: BillingAddress
  shippingAddress: ShippingAddress
  items: Array<{
    productId: string
    name: string
    price: number
    quantity: number
  }>
  subtotal: number
  shipping: number
  discount: number
  total: number
  paymentMethod: PaymentMethodType
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: Date
  notes?: string
}
