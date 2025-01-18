<script setup lang="ts">
interface Props {
  id?: string
  type?: 'button' | 'submit' | 'reset'
  label?: string
  labelStyle?: string
  actionText?: string
  disabled?: boolean
  title?: string
  icon?: string
  iconStyle?: string
  ripple?: boolean
}

const { t } = useI18n()

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  ripple: true,
  id: '',
})

const buttonText = ref(props.label)

function handleWithButtonText() {
  return props.disabled
    ? t('loading')
    : props.actionText || props.label || ''
}

function handleClick() {
  if (!props.label) {
    return
  }

  buttonText.value = handleWithButtonText()
  const messageTime = 3000

  setTimeout(() => {
    buttonText.value = props.label
  }, messageTime)
}

const initializeRippleEffect = useRippleEffect(props.id)
initializeRippleEffect()
</script>

<template>
  <button
    :id="id"
    :class="ripple ? 'relative overflow-hidden' : ''"
    :type="type"
    :disabled="disabled"
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
