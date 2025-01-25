<script setup lang="ts">
const { $env } = useNuxtApp()

useHead({
  script: [
    {
      'src': 'https://cdn.counter.dev/script.js',
      'type': 'text/javascript',
      'defer': true,
      'data-id': $env.COUNTER_API_KEY,
      'data-utcoffset': '-3',
      'async': true,
    },
  ],
})
</script>
