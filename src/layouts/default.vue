<script setup lang="ts">
const { $env } = useNuxtApp()

useHead({
  title: $env.PROJECT_TITLE,
})
</script>

<template>
  <div class="relative flex flex-col max-w-screen md:min-w-screen md:min-h-screen bg-gray-50 overflow-hidden">
    <Header />

    <main class="relative flex flex-col md:min-w-full min-h-screen px-2">
      <slot />
    </main>

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
        style="display:none;visibility:hidden"
      />
      </noscript>
    </ClientOnly>
  </div>
</template>
