Getting started
Vue I18n Configuration
Configuring runtime options for Vue I18n
Vue I18n Configuration
While some options are shared between Nuxt I18n and Vue I18n, there is a range of options which are specific to Vue I18n, for example:

fallbackWarn: To control fallback warnings.
missingWarn: To control missing localization warnings.
formatter: To provide a custom message formatting function.
numberFormats: To configure custom number formatting.
datetimeFormats: To configure custom date time formatting.
... more!
These are just a few examples of the runtime options available in Vue I18n, please check out the documentation of Vue I18n to explore the full range of available options.

Vue I18n specific options cannot be configured in nuxt.config and have no overlap with the features used by or provided by Nuxt I18n.

Adding a Vue I18n config file
To configure the options you can create a i18n.config.ts file in the <rootDir>/i18n directory, this file should have a default export with a function returning the Vue I18n options.

Nuxt I18n provides a macro function defineI18nConfig to improve the types, but a plain function would suffice too:

i18n/i18n.config.ts

export default defineI18nConfig(() => {
  return {
    // vue-i18n options
  }
})
The config file is resolved from <rootDir>/i18n, and automatically looks for and loads the config file using the default filename of i18n.config. This can be configured using the vueI18n options.

When to use
Use i18n.config.ts when you need to configure Vue I18n options that involve runtime functions or data that cannot be serialized for build-time processing. This is often the case when:

You need to dynamically load or manipulate localization data based on user input or external APIs.
You are using custom formatting functions or other non-serializable options.
You need to use Vue I18n options that are not supported by Nuxt I18n's build-time configuration.
Nuxt config benefits
While it is possible to configure the same (or functionally the same) options configurable in i18n.config.ts (messages - instead of locales, defaultLocale, etc.) it is recommended to keep as much of the configuration as Nuxt I18n supports on the i18n key inside nuxt.config.

Nuxt I18n will use these options during the build step and can configure and optimize functionalities by integrating with other libraries such as @intlify/unplugin-vue-i18n.

The Vue I18n config file will be loaded at runtime on each request which can increase server response times, especially in high-traffic applications. This is because the server needs to parse and process the configuration for every incoming request and merge them with those set by Nuxt I18n, rather than doing it once at build time.
Components
<SwitchLocalePathLink>
An enhanced constrained <NuxtLink> for rendering paths resolved from switchLocalePath
This component acts as a constrained <NuxtLink> which internally uses switchLocalePath() to link to the same page in the provided locale.

We especially recommend using this component for language-switchers since it will correctly update routes using dynamic route parameters during server-side rendering.

Props
This component supports most, but not all props documented for <NuxtLink> (does not support to or href) in addition to props described below.

Prop	Description
locale	Optional prop to force localization using passed Locale, it defaults to the current locale. Identical to locale argument of switchLocalePath()
Examples
Basic usage

<template>
  <SwitchLocalePathLink locale="nl">Dutch</SwitchLocalePathLink>
  <SwitchLocalePathLink locale="en">English</SwitchLocalePathLink>
</template>

<!-- equivalent to -->

<script setup>
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink :to="switchLocalePath('nl')">Dutch</NuxtLink>
  <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
</template>


Components
<NuxtLinkLocale>
A shorthand component for using localePath with <NuxtLink>
This component is built on top of <NuxtLink> but changes the default behavior by internally using localePath() to make it easier to link to localized routes.

Props
This component supports all props documented for <NuxtLink> in addition to props described below.

Prop	Description
locale	Optional prop to force localization using passed Locale, it defaults to the current locale. Identical to locale argument of localePath()
Examples
Basic usage

<template>
  <NuxtLinkLocale to="/">{{ $t('home') }}</NuxtLinkLocale>
</template>

<!-- equivalent to -->

<script setup>
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
</template>
Forcing locale resolution

<template>
  <NuxtLinkLocale to="/" locale="nl">{{ $t('home') }}</NuxtLinkLocale>
</template>

<!-- equivalent to -->

<script setup>
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath('/', 'nl')">{{ $t('home') }}</NuxtLink>
</template>

API
Nuxt
I18n Other APIs related to Nuxt.
Extension of Nuxt runtime app context
The following APIs are exposed both on NuxtApp.

$i18n
Type: VueI18n | Composer
See also NuxtApp

$i18n is the global Composer or global VueI18n instance of Vue I18n. See about details here

If you set i18n.vueI18n.legacy option to false in your @nuxtjs/i18n configuration, $i18n is a global Composer instance. Otherwise, it is a global VueI18n instance.

Example use:


export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.$i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, nuxtApp) => {
    console.log('onBeforeLanguageSwitch', oldLocale, newLocale, isInitialSetup)
  }
})
$routeBaseName()
$switchLocalePath()
$localePath()
$localeRoute()
$localeHead()
See more info about those in Extension of Vue section.

Extension of NuxtHooks
'i18n:registerModule' Hook
Arguments:
registerModule (type: ({ langDir: string, locales: LocaleObject[] }) => void)
my-module-example/module.ts

import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.hook('i18n:registerModule', register => {
      register({
        // langDir path needs to be resolved
        langDir: resolve('./lang'),
        locales: [
          {
            code: 'en',
            file: 'en.json',
          },
          {
            code: 'fr',
            file: 'fr.json',
          },
        ]
      })
    })
  }
})
See also Extending messages hook

Getting started
Usage
The basics to get started with the Nuxt i18n module
Basic setup
Let's start by configuring the project locales and the defaultLocale in the nuxt config.

For this project we configure the locales with the following properties:

code: required property, the locale code is used throughout Nuxt I18n and is used as the identifier for the locale.
name: name of the locale, this is a user-friendly way to identify the locale.
file: a file that provides translation messages in the form of an object.
The defaultLocale should be set to the code of one of the configured locales, setting this is optional but recommended as it will be used as fallback when navigating to a non-existent route.

nuxt.config.ts

export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'nl', name: 'Nederlands', file: 'nl.json' }
    ]
  }
})
A typical project has at least one file for each configured locale, this file provides the translation messages in the form of an object.

Nuxt I18n has a (configurable) folder structure from which the locale files are sourced, the locale files should be created in <rootDir>/i18n/locales by default.


i18n/locales/en.json

i18n/locales/nl.json

{
  "welcome": "Welcome"
}
With this configuration we can add a basic language switcher and translate our first message using:

pages/index.vue

<script setup>
const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <button v-for="locale in locales" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <h1>{{ $t('welcome') }}</h1>
  </div>
</template>
Using the configured locales we created a simple language-switcher, by clicking a <button> element you can switch between English and Dutch and see the "welcome" message and page URL change to its corresponding language.

You now have a basic setup to get started with fully localizing your Nuxt Application!

Auto Imports
Some composable functions such as useI18n are auto-imported by Nuxt. If you have disabled autoImports you will need to import these explicitly from #imports as follows:


<script setup>
import { useI18n, useLocalePath } from '#imports'
// ...
</script>
Route localization
Nuxt I18n generates localized routes for each locale, in the most basic setup this comes in the form of a prefixed variant of each route with a locale code.

When linking to routes within your app, you will need to get the localized route for the current locale. This is done with utility functions provided by Nuxt I18n.

Resolving a localized route with $localePath
The $localePath function is used to get the localized route for a given route, this function is returned by useLocalePath for usage outside <template>.

This function accepts two parameters:

route: name of a route or a route object with a name property
locale: locale code in which the route should be localized, defaults to the current locale

page.vue (global function)

page.vue (composable)

<template>
  <NuxtLink :to="$localePath('index')">{{ $t('home') }}</NuxtLink>
  <NuxtLink :to="$localePath('index', 'en')">Homepage in English</NuxtLink>
  <NuxtLink :to="$localePath('user-profile')">Route to {{ $t('profile') }}</NuxtLink>
  <NuxtLink :to="$localePath({ name: 'category-slug', params: { slug: category.slug } })">
    {{ category.title }}
  </NuxtLink>
</template>
Since localized routes can change based on your configuration, using route names ensures accurate resolution. Nuxt I18n generates types to facilitate this, providing type safety and improved developer experience. To utilize these types, enable typedPages in your Nuxt configuration.

The route name corresponds to the names Nuxt generates when parsing your pages directory, more info in Nuxt docs.

Switching between languages
The $switchLocalePath function returns the localized version of the route to the current page, it accepts a locale code in which the current route should be localized.


page.vue (global function)

page.vue (composable)

<template>
  <NuxtLink :to="$switchLocalePath('en')">English</NuxtLink>
  <NuxtLink :to="$switchLocalePath('nl')">Nederlands</NuxtLink>
</template>
URL path with Route object
You can localize advanced URL paths using useLocaleRoute. This is useful if you would to control internal links programmatically.

useLocaleRoute is a composable function that returns a Route object for a given page.

It works like useLocalePath but returns a route resolved by Vue Router rather than a full route path. This can be useful as the path returned from useLocalePath may not carry all information from the provided input (for example, route params that the page doesn't specify).


<script setup>
const localeRoute = useLocaleRoute()
function onClick() {
  const route = localeRoute({ name: 'user-profile', query: { foo: '1' } })
  if (route) {
    return navigateTo(route.fullPath)
  }
}
</script>

<template>
  <button @click="onClick">Show profile</button>
</template>