<script setup lang="ts">
interface Props {
  src: string
  title: string
  productCount: number
  gradientClass: string
}

defineProps<Props>()

const { t } = useI18n()
</script>

<template>
  <div
    :class="gradientClass"
    class="relative mb-6 flex h-[15rem] flex-col items-center justify-center rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-500 hover:shadow-lg md:w-[15rem]"
    role="region"
    aria-labelledby="category-title"
    aria-describedby="category-description"
  >
    <Image
      :src="src"
      width="100"
      height="100"
      alt="Category Image"
      class="h-full w-full object-cover"
      role="img"
      aria-label="Image representing {{ title }}"
    />

    <div
      class="absolute bottom-[0.001rem] flex w-full items-center justify-between rounded-b-lg bg-gray-100 px-4 py-2"
    >
      <div class="relative flex w-full flex-col">
        <div>
          <h3
            id="category-title"
            class="max-w-[10rem] truncate text-xl font-bold text-black"
          >
            {{ title }}
          </h3>
          <p
            id="category-description"
            class="text-gray-600"
          >
            {{ productCount }} {{ t('categories.items.count') }}
          </p>
        </div>

        <div
          class="absolute top-3 right-2 -mt-4 -mr-3 flex h-10 w-10 scale-150 items-center justify-center overflow-hidden rounded-full bg-white md:scale-100"
        >
          <Button
            :id="`category-button-${title}`"
            icon="mdi:arrow-right"
            icon-style="text-orange-500 text-7xl scale-150"
            aria-label="View more products in {{ title }}"
          />
        </div>
      </div>
    </div>
  </div>
</template>
