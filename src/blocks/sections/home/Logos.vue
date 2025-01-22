<script setup lang="ts">
import dogFace from '@/assets/images/svg/dog-face.svg'
import dogHeart from '@/assets/images/svg/dog-heart.svg'
import dogHouse from '@/assets/images/svg/dog-house.svg'
import pawHeart from '@/assets/images/svg/paw-heart.svg'
import paw from '@/assets/images/svg/paw.svg'
import { SwiperSlide } from 'swiper/vue'

interface LogoItem {
  id: string
  name: string
  imagePath: string
  altText: string
}

const { t } = useI18n()

const logos: Array<LogoItem> = [
  {
    id: 'logo1',
    name: t('logos.petCare'),
    imagePath: dogFace,
    altText: t('logos.petCareAltText'),
  },
  {
    id: 'logo2',
    name: t('logos.petHouse'),
    imagePath: dogHouse,
    altText: t('logos.petHouseAltText'),
  },
  {
    id: 'logo3',
    name: t('logos.pawLove'),
    imagePath: paw,
    altText: t('logos.pawLoveAltText'),
  },
  {
    id: 'logo4',
    name: t('logos.petServices'),
    imagePath: pawHeart,
    altText: t('logos.petServicesAltText'),
  },
  {
    id: 'logo5',
    name: t('logos.petCareHeart'),
    imagePath: dogHeart,
    altText: t('logos.petCareHeartAltText'),
  },
]
</script>

<template>
  <section
    aria-label="Partner Logos"
    class="mx-auto w-full max-w-[95vw] px-4 py-12 md:max-w-[70rem]"
  >
    <div class="mx-auto max-w-7xl">
      <Carousel
        unique-id="partner-logos-carousel"
        class="flex w-full min-w-full justify-between"
        role="list"
      >
        <SwiperSlide
          v-for="logo in logos"
          :key="logo.id"
          auto-play="1000"
          class="mx-auto w-full max-w-[17rem] transition-transform hover:scale-105 md:max-w-[200px] h-[35rem] flex flex-col items-center justify-center"
        >
          <Image
            :src="logo.imagePath"
            :alt="logo.altText"
            :title="logo.name"
            class="w-full h-[8rem] object-cover overflow-visible"
            loading="lazy"
            width="200"
            height="200"
          />

          <p class="text-center font-medium text-orange-500 mt-auto bottom-0 h-6">
            {{ logo.name }}
          </p>
        </SwiperSlide>
      </Carousel>
    </div>
  </section>
</template>
