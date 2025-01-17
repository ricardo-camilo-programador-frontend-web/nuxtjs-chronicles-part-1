<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section
    class="relative grid w-full min-h-[38rem] h-full py-16 overflow-hidden md:py-24 min-w-screen"
    aria-labelledby="hero-heading"
  >
    <div class="absolute -right-40 top-0 h-[800px] w-[800px] rounded-full bg-orange-500" />

    <div class="absolute left-[20%] mr-auto -top-14 h-[200px] w-[200px] rounded-full bg-orange-400" />

    <div class="absolute left-[30%] mr-auto -bottom-14 h-[150px] w-[150px] rounded-full bg-orange-400" />

    <div class="container px-4 mx-auto">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="relative z-10 max-w-xl">
          <span
            class="inline-block mb-4 text-lg font-medium text-orange-500"
            aria-label="Section category"
          >
            {{ t('hero.category') }}
          </span>

          <h1
            id="hero-heading"
            class="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          >
            {{ t('hero.title') }}
          </h1>

          <p class="mb-8 text-lg text-gray-600">
            {{ t('hero.description') }}
          </p>

          <NuxtLink
            :to="localePath({ path: '/shop' })"
            class="inline-flex items-center px-8 py-3 text-base font-medium text-white transition-colors bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Browse our shop collection"
          >
            {{ t('hero.cta') }}
          </NuxtLink>
        </div>

        <img
          src="@/assets/images/svg/bird-silhouette.svg"
          alt=""
          class="absolute left-[38%] top-12 w-32 opacity-20"
          aria-hidden="true"
        >

        <div class="absolute right-0 bottom-0 mr-auto mt-auto h-[30rem] w-[30rem] rounded-full">
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
