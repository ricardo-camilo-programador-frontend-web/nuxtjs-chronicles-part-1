<script setup lang="ts">
import catImage from '@/assets/images/pets/cat.webp'
import dogImage from '@/assets/images/pets/dog.webp'
import hamsterImage from '@/assets/images/pets/hamster.webp'
import parrotImage from '@/assets/images/pets/parrot.webp'
import rabbitImage from '@/assets/images/pets/rabbit.webp'
import turtleImage from '@/assets/images/pets/turtle.webp'

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
    icon: catImage,
    altText: t('pets.catIconAlt'),
  },
  {
    id: 'hamster',
    name: t('pets.hamster'),
    icon: hamsterImage,
    altText: t('pets.hamsterIconAlt'),
  },
  {
    id: 'dog',
    name: t('pets.dog'),
    icon: dogImage,
    altText: t('pets.dogIconAlt'),
  },
  {
    id: 'parrot',
    name: t('pets.parrot'),
    icon: parrotImage,
    altText: t('pets.parrotIconAlt'),
  },
  {
    id: 'rabbit',
    name: t('pets.rabbit'),
    icon: rabbitImage,
    altText: t('pets.rabbitIconAlt'),
  },
  {
    id: 'turtle',
    name: t('pets.turtle'),
    icon: turtleImage,
    altText: t('pets.turtleIconAlt'),
  },
])
</script>

<template>
  <section
    aria-labelledby="shop-by-pet-title"
    class="mx-auto w-full max-w-[95vw] px-4 py-8 md:max-w-[70rem]"
  >
    <div class="mb-6 flex items-center justify-between">
      <h2
        id="shop-by-pet-title"
        class="text-2xl font-bold"
      >
        {{ t('shopByPet.title') }}
      </h2>
    </div>

    <Carousel
      :items="petCategories"
      :items-per-view="{
        base: 3,
        md: 4,
        lg: 6,
      }"
    >
      <template #default="{ item: pet }">
        <button
          :aria-label="t('shopByPet.shopFor', { pet: pet.name })"
          class="group flex w-full flex-col items-center gap-3 rounded-lg p-4 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <div class="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-orange-500">
            <Image
              :src="pet.icon"
              :alt="pet.altText"
              :width="150"
              :height="150"
              class="h-24 w-24 object-contain"
              loading="lazy"
            />
          </div>
          <span class="text-sm font-medium">{{ pet.name }}</span>
        </button>
      </template>
    </Carousel>
  </section>
</template>
