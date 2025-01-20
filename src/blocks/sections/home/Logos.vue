<script setup lang="ts">
import katherineMcadoo from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'

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
    class="w-full py-12 px-4 max-w-[95vw] md:max-w-[70rem] mx-auto"
  >
    <div class="max-w-7xl mx-auto">
      <ul
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
        role="list"
      >
        <li
          v-for="logo in logos"
          :key="logo.id"
          class="w-full max-w-[17rem] md:max-w-[200px] transition-transform hover:scale-105"
        >
          <Image
            :src="logo.imagePath"
            :alt="logo.altText"
            :title="logo.name"
            width="200"
            height="200"
            class="w-full h-auto object-contain"
            loading="lazy"
          />
          <p class="text-center text-orange-500 mt-2 font-medium">
            {{ logo.name }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
