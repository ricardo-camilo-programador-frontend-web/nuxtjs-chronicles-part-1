<script setup lang="ts">
interface LocaleObject {
  code: string
  name: string
}

const { locale, locales } = useI18n()
const supportedLocales = locales.value as Array<LocaleObject>
const currentFlagOption = ref('circle-flags:us')

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

function setCurrentFlagOption() {
  currentFlagOption.value = currentFlag.value
}

onMounted(() => {
  setCurrentFlagOption()
})
</script>

<template>
  <Button
    class="flex h-4 items-center gap-2 rounded-full border bg-gradient-to-r from-black/20 via-black/50 to-black/20 px-2 text-white backdrop-blur-sm"
    id="lang-switcher-button"
  >
    <span
      class="flex items-center justify-center md:text-2xl"
      aria-hidden="true"
    >
      <Icon :name="currentFlag" />
    </span>

    <select
      :value="locale"
      class="cursor-pointer appearance-none border-b border-transparent bg-transparent px-4 py-2 pr-8 transition-colors focus:border-transparent focus:ring-transparent focus:outline-none"
      aria-label="Select language"
      @change="onLocaleChanged"
    >
      <option
        v-for="loc in supportedLocales"
        :key="loc.code"
        :value="loc.code"
        :title="loc.name"
        :aria-label="loc.name"
        :default="currentFlagOption"
        class="py-1 text-black"
      >
        {{ loc.code }}
      </option>
    </select>
  </Button>
</template>
