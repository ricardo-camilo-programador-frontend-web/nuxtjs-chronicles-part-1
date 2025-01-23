<script setup lang="ts">
const { $env } = useNuxtApp()

useHead({
  title: $env.PROJECT_TITLE,
})
</script>

<template>
  <div
    class="md:min-w-screen relative flex flex-col overflow-hidden bg-gray-50 md:min-h-screen"
  >
    <div
      class="relative mx-auto flex max-w-[99vw] flex-col overflow-hidden bg-gray-50 md:min-h-screen"
    >
      <Header />

      <main class="relative flex min-h-screen flex-col px-2 md:min-w-full">
        <slot />
      </main>
    </div>
    <Footer />

    <IntroWarning
      :project-title="$env.PROJECT_TITLE"
      :github-username="$env.GITHUB_USERNAME"
      :linkedin-username="$env.LINKEDIN_USERNAME"
      :figma-username="$env.FIGMA_USERNAME"
      :figma-original-design="$env.FIGMA_ORIGINAL_DESIGN"
    />

    <ClientOnly>
      <noscript>
        <iframe
        :src="`https://www.googletagmanager.com/ns.html?id=${$env.GTM_ID}`"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
        />
      </noscript>
    </ClientOnly>
  </div>
</template>
