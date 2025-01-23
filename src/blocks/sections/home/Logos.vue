<script setup lang="ts">
import dogFace from '@/assets/images/svg/dog-face.svg'
import dogHeart from '@/assets/images/svg/dog-heart.svg'
import dogHouse from '@/assets/images/svg/dog-house.svg'
import pawHeart from '@/assets/images/svg/paw-heart.svg'
import paw from '@/assets/images/svg/paw.svg'

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
    class="container mx-auto px-4 py-8 sm:py-12 lg:py-16"
  >
    <div class="w-full">
      <Carousel
        :items="logos"
        :items-per-view="{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        }"
        :autoplay="true"
        class="flex w-full justify-between"
      >
        <template #default="{ item: logo }">
          <div
            class="mx-auto flex w-full max-w-[150px] flex-col items-center justify-center px-4 transition-all duration-300 hover:scale-105 sm:max-w-[180px] lg:max-w-[200px]"
          >
            <Image
              :src="logo.imagePath"
              :alt="logo.altText"
              :title="logo.name"
              class="h-16 w-auto object-contain sm:h-20 lg:h-24"
              loading="lazy"
              width="200"
              height="200"
            />
            <p
              class="mt-4 text-center text-sm font-medium text-orange-500 sm:text-base"
            >
              {{ logo.name }}
            </p>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>
