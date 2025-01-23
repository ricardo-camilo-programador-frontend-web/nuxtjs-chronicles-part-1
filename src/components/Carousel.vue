<script setup lang="ts">
import { Grid, Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/grid'

interface CarouselProps {
  uniqueId?: string
  slidesPerView?: number
  spaceBetween?: number
  loop?: boolean
  pagination?: boolean
  navigationClass?: string
  mobileSlidesPerView?: number
  tabletSlidesPerView?: number
  desktopSlidesPerView?: number
  mobileSpaceBetween?: number
  tabletSpaceBetween?: number
  desktopSpaceBetween?: number
  slidesPerColumn?: number
  rowsMobile?: number
  rowsTablet?: number
  rowsDesktop?: number
  showNavigation?: boolean
}

const props = withDefaults(defineProps<CarouselProps>(), {
  uniqueId: 'swiper',
  slidesPerView: 6,
  spaceBetween: 24,
  loop: true,
  pagination: false,
  navigationClass: '',
  mobileSlidesPerView: 2,
  tabletSlidesPerView: 3,
  desktopSlidesPerView: 6,
  mobileSpaceBetween: 16,
  tabletSpaceBetween: 20,
  desktopSpaceBetween: 24,
  slidesPerColumn: 1,
  rowsMobile: 1,
  rowsTablet: 1,
  rowsDesktop: 1,
  showNavigation: true,
})

const modules = [Pagination, Navigation, Grid]

const navigation = {
  nextEl: `#${props.uniqueId}-button-next`,
  prevEl: `#${props.uniqueId}-button-prev`,
}

const pagination = {
  el: `#${props.uniqueId}-pagination`,
  clickable: true,
  renderBullet() {
    return '<span class="swiper-pagination-bullet"></span>'
  },
}

const breakpoints = {
  320: {
    slidesPerView: props.mobileSlidesPerView,
    spaceBetween: props.mobileSpaceBetween,
    grid: {
      rows: props.rowsMobile,
      fill: 'row' as const,
    },
  },
  640: {
    slidesPerView: props.tabletSlidesPerView,
    spaceBetween: props.tabletSpaceBetween,
    grid: {
      rows: props.rowsTablet,
      fill: 'row' as const,
    },
  },
  768: {
    slidesPerView: props.desktopSlidesPerView,
    spaceBetween: props.desktopSpaceBetween,
    grid: {
      rows: props.rowsDesktop,
      fill: 'row' as const,
    },
  },
  1366: {
    slidesPerView: props.slidesPerView,
    spaceBetween: props.spaceBetween,
  },
}
</script>

<template>
  <Swiper
    :id="props.uniqueId"
    :slides-per-view="slidesPerView"
    :loop="loop"
    :navigation="navigation"
    :pagination="pagination"
    :breakpoints="breakpoints"
    :modules="modules"
    class="relative mx-auto max-w-[95vw] !overflow-visible"
  >
    <slot />

    <div
      v-if="showNavigation"
      id="carousel-button-prev"
      class="absolute inset-y-0 left-0 z-[90] -ml-10 flex w-16 items-center justify-center"
    >
      <Button
        :id="`${props.uniqueId}-button-prev`"
        icon="i-heroicons-chevron-left"
        class="z-[90] my-auto !rounded-full bg-gray-100 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>

    <div
      v-if="showNavigation"
      id="carousel-button-next"
      class="absolute inset-y-0 right-0 z-[90] -mr-7 flex w-16 items-center justify-center"
    >
      <Button
        :id="`${props.uniqueId}-button-next`"
        icon="i-heroicons-chevron-right"
        class="z-[90] my-auto !rounded-full bg-gray-100 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  </Swiper>
</template>
