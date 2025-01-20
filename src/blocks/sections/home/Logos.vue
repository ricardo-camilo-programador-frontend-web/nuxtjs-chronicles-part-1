<script setup lang="ts">
import katherineMcadoo from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'
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
    imagePath: katherineMcadoo,
    altText: t('logos.petCareAltText'),
  },
  {
    id: 'logo2',
    name: t('logos.petHouse'),
    imagePath: katherineMcadoo,
    altText: t('logos.petHouseAltText'),
  },
  {
    id: 'logo3',
    name: t('logos.pawLove'),
    imagePath: katherineMcadoo,
    altText: t('logos.pawLoveAltText'),
  },
  {
    id: 'logo4',
    name: t('logos.petServices'),
    imagePath: katherineMcadoo,
    altText: t('logos.petServicesAltText'),
  },
  {
    id: 'logo5',
    name: t('logos.petCareHeart'),
    imagePath: katherineMcadoo,
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
          class="mx-auto w-full max-w-[17rem] transition-transform hover:scale-105 md:max-w-[200px]"
        >
          <Image
            :src="logo.imagePath"
            :alt="logo.altText"
            :title="logo.name"
            width="200"
            height="200"
            class="h-auto w-full object-contain"
            loading="lazy"
          />
          <p class="mt-2 text-center font-medium text-orange-500">
            {{ logo.name }}
          </p>
        </SwiperSlide>
      </Carousel>
    </div>
  </section>
</template>
