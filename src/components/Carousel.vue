<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

interface CarouselProps {
  uniqueId?: string
  slidesPerView?: number
  spaceBetween?: number
  loop?: boolean
  pagination?: boolean
}

const props = withDefaults(defineProps<CarouselProps>(), {
  uniqueId: 'swiper',
  slidesPerView: 6,
  spaceBetween: 24,
  loop: true,
  pagination: false,
})

const modules = [Pagination, Navigation]

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
  320: { slidesPerView: 2, spaceBetween: 16 },
  640: { slidesPerView: 3, spaceBetween: 20 },
  768: { slidesPerView: 4, spaceBetween: 24 },
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
