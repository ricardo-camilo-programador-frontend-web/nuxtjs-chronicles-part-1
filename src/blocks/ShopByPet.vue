<script setup lang="ts">
import katherineMcadoo from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'
import { SwiperSlide } from 'swiper/vue'

interface PetCategory {
  id: string
  name: string
  icon: string
  altText: string
}

const { t } = useI18n()

const petCategories = ref<Array<PetCategory>>([
  {
    id: 'cat',
    name: t('pets.cat'),
    icon: katherineMcadoo,
    altText: t('pets.catIconAlt'),
  },
  {
    id: 'hamster',
    name: t('pets.hamster'),
    icon: katherineMcadoo,
    altText: t('pets.hamsterIconAlt'),
  },
  {
    id: 'dog',
    name: t('pets.dog'),
    icon: katherineMcadoo,
    altText: t('pets.dogIconAlt'),
  },
  {
    id: 'parrot',
    name: t('pets.parrot'),
    icon: katherineMcadoo,
    altText: t('pets.parrotIconAlt'),
  },
  {
    id: 'rabbit',
    name: t('pets.rabbit'),
    icon: katherineMcadoo,
    altText: t('pets.rabbitIconAlt'),
  },
  {
    id: 'turtle',
    name: t('pets.turtle'),
    icon: katherineMcadoo,
    altText: t('pets.turtleIconAlt'),
  },
])
</script>

<template>
  <section
    aria-labelledby="shop-by-pet-title"
    class="w-full max-w-[95vw] mx-auto py-8 px-4"
  >
    <div class="flex items-center justify-between mb-6">
      <h2
        id="shop-by-pet-title"
        class="text-2xl font-bold"
      >
        {{ t('shopByPet.title') }}
      </h2>
    </div>

    <Carousel>
      <SwiperSlide
        v-for="pet in petCategories"
        :key="pet.id"
        class="!h-auto"
      >
        <button
          :aria-label="t('shopByPet.shopFor', { pet: pet.name })"
          class="group flex w-full flex-col items-center gap-3 rounded-lg p-4 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-orange-100"
          >
            <Image
              :src="pet.icon"
              :alt="pet.altText"
              :width="80"
              :height="80"
              class="h-12 w-12 object-contain"
              loading="lazy"
            />
          </div>
          <span class="text-sm font-medium">{{ pet.name }}</span>
        </button>
      </SwiperSlide>
    </Carousel>
  </section>
</template>
