<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/css/swipper.css'
import { Navigation, Pagination } from 'swiper/modules';

export interface Props {
  items: Array<any>
  slidesPerView?: number
  loop?: boolean
  pagination?: boolean
  navigation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loop: true,
  pagination: false,
  navigation: false,
  slidesPerView: 1,
})

const modules = [Pagination, Navigation]

const navigation = {
  prevEl: '#prev-slide',
  nextEl: '#next-slide',
}

const pagination = {
  el: '.swiper-pagination',
  clickable: true,
  renderBullet() {
    return '<span class="swiper-pagination-bullet"></span>'
  },
}

const desktopSlidersPerView
  = props.items.length > 3 ? 3 : props.items.length
const mobileSlidersPerView
  = props.items.length > 2 ? 2 : props.items.length

const breakpoints = {
  640: {
    slidesPerView: mobileSlidersPerView,
    spaceBetween: 5,
  },
  1024: {
    slidesPerView: desktopSlidersPerView,
    spaceBetween: 5,
  },
}
</script>

<template>
  <Swiper
    :slides-per-view="props.slidesPerView"
    :loop="props.loop"
    :navigation="props.navigation"
    :pagination="props.pagination"
    :breakpoints="breakpoints"
    :modules="modules"
    class="w-ful relative flex h-auto flex-col items-start sm:max-w-[900px]"
  >
    <SwiperSlide
      v-for="item in items"
      :key="item.id"
      class="h-auto w-full"
    >
      <slot :slot-props="{ item }" />
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-pagination {
  margin-left: 2rem;
}
.swiper-pagination .swiper-pagination-bullet {
  opacity: 1;
  background-color: #76767630;
  width: 33px;
  height: 10px;
  border-radius: 4px;
  margin-right: auto;
  box-shadow: gray 0px 1px 1px 0px;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background-color: black;
}

@media screen and (max-width: 640px) {
  .swiper-pagination {
    margin-left: -1px;
  }
}
</style>
