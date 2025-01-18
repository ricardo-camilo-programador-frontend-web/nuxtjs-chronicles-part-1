<script setup lang="ts">
import { generateId } from '@/utils/generateId'
import { rippleEffect } from '@/utils/rippleEffect'
import { onMounted, ref } from 'vue'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  label?: string
  labelStyle?: string
  actionText?: string
  disabled?: boolean
  title?: string
  icon?: string
  ripple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
})

const buttonText = ref(props.label)
const buttonId = ref(generateId())

const setButtonId = (id: string) => {
  buttonId.value = id
}

function handleWithButtonText() {
  return props.disabled
    ? 'Carregando...'
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

onMounted(() => {
  setButtonId(buttonId.value)

  const button = document.getElementById(buttonId.value)
  if (button && props.ripple) {
    button.addEventListener('click', (event) => {
      rippleEffect(event, buttonId.value)
    })
  }
})
</script>

<template>
  <button
    :class="ripple ? 'relative overflow-hidden' : ''"
    :type="type"
    :disabled="disabled"
    :title="title"
    class="rounded-md font-bold text-xs tracking-widest p-4 ease-in-out duration-1350 items-center !transition-all hover:(bg-gray-300) disabled:opacity-25"
    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="icon"
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
