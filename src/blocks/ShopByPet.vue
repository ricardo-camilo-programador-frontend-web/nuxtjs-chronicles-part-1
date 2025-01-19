<script setup lang="ts">
import katherineMcadoo from "@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp";

interface PetCategory {
  id: string;
  name: string;
  icon: string;
  altText: string;
}

const { t } = useI18n();

const petCategories = ref<PetCategory[]>([
  {
    id: "cat",
    name: t("pets.cat"),
    icon: katherineMcadoo,
    altText: t("pets.catIconAlt"),
  },
  {
    id: "hamster",
    name: t("pets.hamster"),
    icon: katherineMcadoo,
    altText: t("pets.hamsterIconAlt"),
  },
  {
    id: "dog",
    name: t("pets.dog"),
    icon: katherineMcadoo,
    altText: t("pets.dogIconAlt"),
  },
  {
    id: "parrot",
    name: t("pets.parrot"),
    icon: katherineMcadoo,
    altText: t("pets.parrotIconAlt"),
  },
  {
    id: "rabbit",
    name: t("pets.rabbit"),
    icon: katherineMcadoo,
    altText: t("pets.rabbitIconAlt"),
  },
  {
    id: "turtle",
    name: t("pets.turtle"),
    icon: katherineMcadoo,
    altText: t("pets.turtleIconAlt"),
  },
]);
</script>

<template>
  <section
    aria-labelledby="shop-by-pet-title"
    class="w-full max-w-7xl mx-auto py-8 px-4"
  >
    <div class="flex items-center justify-between mb-6">
      <h2 id="shop-by-pet-title" class="text-2xl font-bold">
        {{ t("shopByPet.title") }}
      </h2>

      <div class="flex gap-2">
        <Button
          v-for="direction in ['prev', 'next']"
          :key="direction"
          :aria-label="t(`shopByPet.${direction}Slide`)"
          :id="`shop-by-pet-${direction}-button`"
          :icon="direction === 'prev' ? 'i-heroicons-chevron-left' : 'i-heroicons-chevron-right'"
          class="p-2 !rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
      role="list"
    >
      <button
        v-for="pet in petCategories"
        :key="pet.id"
        :aria-label="t('shopByPet.shopFor', { pet: pet.name })"
        class="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
        role="listitem"
      >
        <div
          class="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-orange-100 transition-colors"
        >
          <Image
            :src="pet.icon"
            :alt="pet.altText"
            class="w-12 h-12 object-contain scale-150"
            loading="lazy"
            width="100"
            height="100"
          />
        </div>
        <span class="text-sm font-medium">{{ pet.name }}</span>
      </button>
    </div>
  </section>
</template>
