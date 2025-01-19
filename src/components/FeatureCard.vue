<script setup lang="ts">
import { defineProps } from "vue";

interface FeatureCardProps {
  imageSrc: string;
  productName: string;
  productPrice: string;
}

const props = defineProps<FeatureCardProps>();
</script>

<template>
  <div class="flex flex-col items-center border rounded-lg shadow-md h-[31rem] bg-gray-200  overflow-visible w-full max-w-[20rem]">
    <div class="w-full h-full p-24 overflow-visible">
      <Image
        :src="imageSrc"
        alt="Product Image"
        class="w-full h-full object-cover overflow-visible"
        width="100"
        height="100"
      />
    </div>

    <div class="flex justify-between items-center w-full bg-white rounded-b-lg px-4 py-2 min-h-24">
      <div class="w-full">
        <h3 class="mt-2 text-lg font-semibold">{{ productName }}</h3>
        <p class="text-gray-600">{{ productPrice }}</p>
      </div>

      <div class="w-auto flex items-start justify-center h-full pt-1">
        <button class="mt-2 text-red-500 hover:text-red-700">❤️</button>
      </div>
    </div>
  </div>
</template>
