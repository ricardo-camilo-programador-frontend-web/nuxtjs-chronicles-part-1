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
    class="mx-auto flex flex-col items-center justify-center py-8 md:flex-row md:justify-between md:gap-24"
  >
    <div class="mx-auto">
      <Carousel
        :items="logos"
        :items-per-view="{
          base: 2,
          md: 3,
          lg: 5,
        }"
        :autoplay="true"
        class="flex max-h-[100px] w-full min-w-full justify-between"
      >
        <template #default="{ item: logo }">
          <div
            class="mx-auto flex h-[35rem] w-full max-w-[17rem] flex-col items-center justify-center transition-transform hover:scale-105 md:max-w-[200px]"
          >
            <Image
              :src="logo.imagePath"
              :alt="logo.altText"
              :title="logo.name"
              class="h-[5rem] w-full object-cover"
              loading="lazy"
              width="200"
              height="200"
            />
            <p
              class="bottom-0 mt-auto h-6 text-center font-medium text-orange-500"
            >
              {{ logo.name }}
            </p>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>
