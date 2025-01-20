<script setup lang="ts">
interface Props {
  id?: string
  type?: 'button' | 'submit' | 'reset'
  label?: string
  labelStyle?: string
  actionText?: string
  loading?: boolean
  disabled?: boolean
  title?: string
  icon?: string
  iconStyle?: string
  ripple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  ripple: true,
  id: '',
  loading: false,
})

const initializeRippleEffect = useRippleEffect(props.id)
initializeRippleEffect()
</script>

<template>
  <button
    :id="id"
    :class="ripple ? 'relative overflow-hidden' : ''"
    :type="type"
    :disabled="disabled || loading"
    :title="title"
    class="rounded-md font-bold text-xs tracking-widest p-4 ease-in-out duration-1350 !transition-all hover:bg-orange-300 disabled:opacity-25 flex items-center justify-center"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconStyle"
      class="transition-all"
    />
    <span
      v-if="label"
      :class="labelStyle"
    >
      {{ label }}
    </span>
    <slot />
  </button>
</template>
