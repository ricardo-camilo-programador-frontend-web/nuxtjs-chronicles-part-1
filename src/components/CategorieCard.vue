<script setup lang="ts">
interface Props {
  src: string;
  title: string;
  productCount: number;
  gradientClass: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    :class="gradientClass"
    class="rounded-lg flex flex-col items-center justify-center shadow-lg w-[15rem] h-[15rem] relative"
    role="region"
    aria-labelledby="category-title"
    aria-describedby="category-description"
  >
    <Image
      :src="src"
      width="100"
      height="100"
      alt="Category Image"
      class="w-full h-full object-cover"
      role="img"
      aria-label="Image representing {{ title }}"
    />

    <div class="flex justify-between items-center bg-gray-100 w-full p-4 py-2 absolute bottom-0">
      <div>
        <h3 id="category-title" class="text-black text-xl font-bold">
          {{ title }}
        </h3>
        <p id="category-description" class="text-gray-600">
          {{ productCount }} products
        </p>
      </div>

      <div class="flex items-center justify-center bg-white rounded-full w-10 h-10 relative overflow-hidden -mt-4 -mr-3">
        <Button
          :id="`category-button-${title}`"
          icon="mdi:arrow-right"
          iconStyle="text-orange-500 text-7xl scale-150"
          aria-label="View more products in {{ title }}"
        />
      </div>
    </div>
  </div>
</template>
