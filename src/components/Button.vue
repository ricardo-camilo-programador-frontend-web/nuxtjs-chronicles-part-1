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
    class="flex items-center justify-center rounded-md p-4 text-xs font-bold tracking-widest !transition-all duration-200 ease-in-out hover:bg-orange-300 disabled:opacity-25"
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
