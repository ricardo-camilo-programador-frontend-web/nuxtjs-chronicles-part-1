<script setup lang="ts">
import { Swiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'

interface CarouselProps {
  slidesPerView?: number
  spaceBetween?: number
  loop?: boolean
  pagination?: boolean
  navigation?: boolean
}

const props = withDefaults(defineProps<CarouselProps>(), {
  slidesPerView: 6,
  spaceBetween: 24,
  loop: true,
  navigation: false,
  pagination: false,
})

const modules = [Pagination, Navigation]

const pagination = {
  el: '.swiper-pagination',
  clickable: true,
  renderBullet() {
    return '<span class="swiper-pagination-bullet"></span>'
  },
}

const breakpoints = {
  320: { slidesPerView: 2, spaceBetween: 16 },
  640: { slidesPerView: 3, spaceBetween: 20 },
  768: { slidesPerView: 4, spaceBetween: 24 },
  1366: { slidesPerView: props.slidesPerView, spaceBetween: props.spaceBetween },
}
</script>

<template>
  <Swiper
    :slides-per-view="slidesPerView"
    :loop="loop"
    :navigation="navigation"
    :pagination="pagination"
    :breakpoints="breakpoints"
    :modules="modules"
    class="!overflow-visible max-w-[95vw]"
  >
    <slot />

    <div
      class="absolute right-2 -top-12 flex items-center justify-end gap-2 -translate-y-1/2"
    >
      <Button
        id="`shop-by-pet-prev-button`"
        icon="i-heroicons-chevron-left"
        class="p-2 !rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <Button
        id="shop-by-pet-next-button"
        icon="i-heroicons-chevron-right"
        class="p-2 !rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  </Swiper>
</template>

