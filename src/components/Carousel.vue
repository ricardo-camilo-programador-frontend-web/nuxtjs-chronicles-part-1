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
    class="mx-auto max-w-[95vw] !overflow-visible"
  >
    <slot />

    <div
      :id="`${props.uniqueId}-button-prev`"
      :class="props.navigationClass"
      class="absolute -top-12 right-0 flex -translate-y-1/2 items-center justify-end gap-2 md:right-16"
    >
      <Button
        :id="`${props.uniqueId}-button-prev`"
        icon="i-heroicons-chevron-left"
        class="!rounded-full bg-gray-100 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <Button
        :id="`${props.uniqueId}-button-next`"
        icon="i-heroicons-chevron-right"
        class="!rounded-full bg-gray-100 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  </Swiper>
</template>
