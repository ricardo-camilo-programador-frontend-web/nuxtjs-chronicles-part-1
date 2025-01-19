<script setup lang="ts">
import type { Product } from "@/types/product";
import { useI18n } from "vue-i18n";
import backgroundGradientOrange from "@/assets/images/background-gradient-orange.webp";
import backgroundGradientOrangeMini from "@/assets/images/background-gradient-orange-mini.webp";
import katherineMcadoo from "@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp";

const { t } = useI18n();

const products = ref<Product[]>([
  {
    id: "premium-dog-food-1",
    imageSrc: backgroundGradientOrange,
    name: t("products.premiumDogFood"),
    price: 18.99,
    currency: t("products.currency"),
    altText: t("products.premiumDogFoodAltText"),
  },
  {
    id: "premium-cat-food",
    imageSrc: katherineMcadoo,
    name: t("products.premiumCatFood"),
    price: 18.99,
    currency: t("products.currency"),
    altText: t("products.premiumCatFoodAltText"),
  },
  {
    id: "premium-dog-food-2",
    imageSrc: backgroundGradientOrangeMini,
    name: t("products.premiumDogFood"),
    price: 18.99,
    currency: t("products.currency"),
    altText: t("products.premiumDogFoodAltText"),
  },
]);
</script>

<template>
  <section
    aria-labelledby="featured-products-title"
    class="mx-auto my-8 max-w-[95vw]"
  >
    <div class="mx-auto max-w-[70rem]">
      <header
        class="flex flex-wrap justify-center md:justify-between items-center gap-4 w-full mb-8 md:mb-1"
      >
        <h2
          id="featured-products-title"
          class="text-2xl font-bold text-center md:mb-6 mr-auto w-full md:w-auto"
        >
          {{ t("products.featuredTitle") }}
        </h2>

        <div
          class="ml-auto w-full md:w-auto flex justify-center md:justify-end"
        >
          <Button
            :label="t('products.seeAll')"
            :aria-label="t('products.seeAllAriaLabel')"
            id="featured-products-button"
          />
        </div>
      </header>

      <div
        class="flex w-full flex-wrap md:flex-nowrap justify-center gap-4"
        role="list"
      >
        <FeatureCard
          v-for="product in products"
          :key="product.id"
          :imageSrc="product.imageSrc"
          :productName="product.name"
          :productPrice="formatCurrency(product.price, product.currency)"
          :altText="product.altText"
          role="listitem"
        />
      </div>
    </div>
  </section>
</template>
