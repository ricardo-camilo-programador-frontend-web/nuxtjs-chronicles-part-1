<script setup lang="ts">
interface LocaleObject {
  code: string
  name: string
}

const { locale, locales } = useI18n()
const supportedLocales = locales.value as Array<LocaleObject>

const router = useRouter()
const switchLocalePath = useSwitchLocalePath()

function onLocaleChanged(event: Event) {
  const target = event.target as HTMLInputElement
  const newLocale = target.value as 'en' | 'pt'

  router.push({ path: switchLocalePath(newLocale) })
}

const currentFlag = computed(() => {
  switch (locale.value) {
    case 'en':
      return 'circle-flags:us'
    case 'pt':
      return 'circle-flags:br'
    default:
      return 'ph:globe'
  }
})
</script>

<template>
  <div class="flex items-center gap-2">
    <span
      class="flex items-center justify-center text-lg"
      aria-hidden="true"
    >
      <Icon :name="currentFlag" />
    </span>

    <select
      :value="locale"
      class="px-4 py-2 pr-8 transition-colors bg-transparent border-b border-transparent appearance-none cursor-pointer focus:outline-none focus:ring-transparent focus:border-transparent"
      aria-label="Select language"
      @change="onLocaleChanged"
    >
      <option
        v-for="loc in supportedLocales"
        :key="loc.code"
        :value="loc.code"
        :title="loc.name"
        :aria-label="loc.name"
        class="py-1 text-black"
      >
        {{ loc.code }}
      </option>
    </select>
  </div>
</template>
