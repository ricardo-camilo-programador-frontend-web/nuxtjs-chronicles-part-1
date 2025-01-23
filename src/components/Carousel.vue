<script setup lang="ts">
interface CarouselProps {
  items?: Array<any>
  dir?: 'ltr' | 'rtl'
  arrows?: boolean
  indicators?: boolean
  wrapperClass?: string
  containerClass?: string
  itemClass?: string
  autoplay?: boolean
  loop?: boolean
  dots?: boolean
  autoplayInterval?: number
  prevButton?: {
    color?: string
    icon?: string
    class?: string
  }
  nextButton?: {
    color?: string
    icon?: string
    class?: string
  }
  indicatorsPosition?: 'inside' | 'outside'
  indicatorsClass?: string
  itemsPerView?: {
    base?: number | string
    sm?: number | string
    md?: number | string
    lg?: number | string
    xl?: number | string
  }
}
const props = withDefaults(defineProps<CarouselProps>(), {
  items: () => [],
  dir: 'ltr',
  arrows: true,
  indicators: true,
  wrapperClass: '',
  containerClass: '',
  itemClass: '',
  autoplay: true,
  loop: true,
  dots: true,
  autoplayInterval: 3000,
  indicatorsPosition: 'inside',
  indicatorsClass: '',
  itemsPerView: () => ({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  }),
})
const carouselUI = computed(() => ({
  root: `relative ${props.wrapperClass}`,
  viewport: `relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth ${props.containerClass}`,
  container: '',
  item: `flex flex-none snap-center basis-full/${props.itemsPerView.base} sm:basis-1/${props.itemsPerView.sm} md:basis-1/${props.itemsPerView.md} lg:basis-1/${props.itemsPerView.lg} xl:basis-1/${props.itemsPerView.xl} ${props.itemClass}`,
  arrows: 'flex items-center justify-between',
  prev:
    props.prevButton?.class
    || 'absolute start-4 top-1/2 transform -translate-y-1/2',
  next:
    props.nextButton?.class
    || 'absolute end-4 top-1/2 transform -translate-y-1/2',
  dots: `flex items-center justify-center gap-3 inset-x-0 ${
    props.indicatorsPosition === 'inside'
      ? 'absolute bottom-4'
      : 'relative bottom-0 mt-4'
  } ${props.indicatorsClass}`,
  dot: 'rounded-full h-3 w-3 bg-primary-500 dark:bg-primary-400',
}))
const carouselRef = ref()
onMounted(() => {
  if (props.autoplay) {
    const interval = setInterval(() => {
      if (!carouselRef.value) {
        return
      }
      if (carouselRef.value.page === carouselRef.value.pages) {
        carouselRef.value.select(0)
      }
      else {
        carouselRef.value.next()
      }
    }, props.autoplayInterval)
    onUnmounted(() => {
      clearInterval(interval)
    })
  }
})
</script>

<template>
  <UCarousel
    ref="carouselRef"
    :items="items"
    :dir="dir"
    :ui="carouselUI"
    :arrows="arrows"
    :indicators="indicators"
    :loop="loop"
    :autoplay="autoplay"
    :autoplay-interval="autoplayInterval"
    :dots="dots"
  >
    <template #default="slotProps">
      <slot v-bind="{ ...slotProps }" />
    </template>
  </UCarousel>
</template>
