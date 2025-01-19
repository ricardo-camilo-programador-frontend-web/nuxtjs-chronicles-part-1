<script setup lang="ts">
interface Props {
  product: Product;
}

const props = defineProps<Props>();
</script>

<template>
  <article class="bg-gray-200 rounded-lg transition-shadow hover:shadow-lg">
    <div class="relative aspect-square mb-4">
      <Image
        :src="product.imageSrc"
        :alt="product.altText"
        class="w-full h-full object-cover rounded-lg  p-4"
        loading="lazy"
        width="100"
        height="100"
      />
    </div>

    <div class="space-y-2 bg-white px-4 py-2 rounded-b-lg min-h-[7rem] h-full flex flex-col max-h-[4rem]">
      <div class="flex items-center justify-between w-full h-full">
        <h3 class="font-medium text-lg">{{ product.name }}</h3>

        <Button 
          class="p-2"
          icon-style="text-red-500"
          :icon="product.isFavorite ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'"
          :aria-label="
            product.isFavorite ? 'Remove from favorites' : 'Add to favorites'
          "
        />
      </div>

      <p class="text-gray-900 font-bold mt-auto">
        {{ product.currency }} {{ product.price.toFixed(2) }}
      </p>
    </div>
  </article>
</template>
