<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <section
    class="relative flex flex-col items-center justify-center w-full min-h-screen md:min-h-[44rem] lg:max-h-[38rem] h-full py-8 md:py-16 lg:py-24 md:overflow-hidden md:max-w-full min-w-screen mx-auto pt-[10rem] md:pt-0"
    aria-labelledby="hero-heading"
  >
    <Image
      src="@/assets/images/background-gradient-orange.webp"
      alt="Background gradient orange"
      class="absolute -right-[10rem] md:-right-40 top-0 h-[400px] w-[400px] md:h-[800px] md:w-[800px] rounded-full opacity-50 md:opacity-100 mt-32 object-cover"
      width="400"
      height="400"
      aria-hidden="true"
    />

    <Image
      src="@/assets/images/background-gradient-orange-mini.webp"
      alt="Background gradient orange mini"
      class="absolute left-[10%] md:left-[20%] mr-auto -top-14 h-[100px] w-[100px] md:h-[200px] md:w-[200px] rounded-full rotate-180"
      title="Background gradient orange mini"
      width="100"
      height="100"
      aria-hidden="true"
    />

    <Image
      src="@/assets/images/background-gradient-orange-mini.webp"
      alt="Background gradient orange mini"
      class="absolute left-[20%] md:left-[30%] mr-auto -bottom-14 h-[75px] w-[75px] md:h-[150px] md:w-[150px] rounded-full"
      title="Background gradient orange mini"
      width="75"
      height="75"
      aria-hidden="true"
    />

    <div class="max-w-[96vw] md:max-w-full mx-auto">
      <div class="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
        <div class="relative z-10 max-w-xl md:text-center lg:text-left">
          <span
            class="inline-block mb-3 md:mb-4 text-base md:text-lg font-medium text-orange-500"
            aria-label="Section category"
          >
            {{ t("hero.category") }}
          </span>

          <h1
            id="hero-heading"
            class="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900"
          >
            {{ t("hero.title") }}
          </h1>

          <p class="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
            {{ t("hero.description") }}
          </p>

          <NuxtLink
            :to="localePath({ path: '/shop' })"
            class="flex items-center justify-center px-6 md:px-8 py-4 md:py-3 text-sm md:text-base font-medium text-white transition-colors bg-black rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-full md:w-max text-center"
            aria-label="Browse our shop collection"
          >
            {{ t("hero.cta") }}
          </NuxtLink>
        </div>

        <img
          src="@/assets/images/green-winged-macaw-ara-chloropterus-flying.webp"
          alt=""
          class="absolute left-[30%] md:left-[38%] top-[7rem] md:top-24 w-20 md:w-32 scale-150"
          aria-hidden="true"
        />

        <div
          class="md:absolute right-0 md:bottom-0 md:right-0 md:mt-auto h-[20rem] w-[20rem] md:h-[40rem] md:w-[40rem] px-4 md:px-0 ml-4 -bottom-8"
        >
          <div
            class="mt-auto bottom-0 h-full w-full flex items-center justify-center md:-right-24 relative"
          >
            <img
              src="@/assets/images/celine-sayuri-tagami-2s6ORaJY6gI-unsplash.webp"
              alt="Happy dog with its owner"
              class="object-cover w-[25rem] -bottom-4 md:bottom-0 -mr-16 absolute z-[3]"
              loading="eager"
            />

            <div class="flex items-center justify-center bottom-0 mt-auto">
              <img
                src="@/assets/images/charlesdeluvio-5R5HgLyHMVQ-unsplash.webp"
                alt="Happy dog with its owner"
                class="object-cover w-[18rem] mt-auto bottom-0 z-[4] -ml-[4rem] md:-ml-16"
                loading="eager"
              />
              <img
                src="@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp"
                alt="Happy dog with its owner"
                class="object-cover w-[7rem] md:-mr-12 mt-auto bottom-0 z-[4]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
