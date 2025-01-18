<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section
    class="relative flex flex-col items-center justify-center w-full min-h-screen md:min-h-[47rem] lg:max-h-[38rem] h-full py-8 md:py-16 lg:py-24 md:overflow-hidden md:max-w-full min-w-screen mx-auto"
    aria-labelledby="hero-heading"
  >
    <div class="absolute -right-[10rem] md:-right-40 top-0 h-[400px] w-[400px] md:h-[800px] md:w-[800px] rounded-full bg-orange-500 opacity-50 md:opacity-100" />

    <div class="absolute left-[10%] md:left-[20%] mr-auto -top-14 h-[100px] w-[100px] md:h-[200px] md:w-[200px] rounded-full bg-orange-400" />

    <div class="absolute left-[20%] md:left-[30%] mr-auto -bottom-14 h-[75px] w-[75px] md:h-[150px] md:w-[150px] rounded-full bg-orange-400" />

    <div class="max-w-[96vw] md:max-w-full mx-auto">
      <div class="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
        <div class="relative z-10 max-w-xl md:text-center lg:text-left">
          <span
            class="inline-block mb-3 md:mb-4 text-base md:text-lg font-medium text-orange-500"
            aria-label="Section category"
          >
            {{ t('hero.category') }}
          </span>

          <h1
            id="hero-heading"
            class="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900"
          >
            {{ t('hero.title') }}
          </h1>

          <p class="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
            {{ t('hero.description') }}
          </p>

          <NuxtLink
            :to="localePath({ path: '/shop' })"
            class="flex items-center justify-center px-6 md:px-8 py-4 md:py-3 text-sm md:text-base font-medium text-white transition-colors bg-black rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-full md:w-max text-center"
            aria-label="Browse our shop collection"
          >
            {{ t('hero.cta') }}
          </NuxtLink>
        </div>

        <img
          src="@/assets/images/svg/bird-silhouette.svg"
          alt=""
          class="absolute left-[30%] md:left-[38%] top-8 md:top-12 w-20 md:w-32 opacity-20"
          aria-hidden="true"
        >

        <div class="absolute right-0 bottom-0 mr-auto mt-auto h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem] lg:h-[30rem] lg:w-[30rem] rounded-full">
          <img
            src="@/assets/images/hero-dog.webp"
            alt="Happy dog with its owner"
            class="object-cover w-full h-full mt-auto"
            loading="eager"
          >
        </div>
      </div>
    </div>
  </section>
</template>
