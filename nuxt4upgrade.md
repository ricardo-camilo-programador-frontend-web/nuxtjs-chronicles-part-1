
2025 Edition
NEW
BLOG
Sign in

Complete Guide: How to Upgrade to Nuxt 4
Upgrade from Nuxt 3 to Nuxt 4 with ease. Discover Nuxt 4 features, changes, and tips for a smooth Nuxt 4 upgrade.


Mostafa Said
Nuxt 3
The Mastering Nuxt FullStack Unleashed Course is here!
Get notified when we release new tutorials, lessons, and other expert Nuxt content.

Enter your email
Get Preview
Click here to view course
Nuxt 4 introduces significant enhancements, pushing the framework closer to full integration with the latest Vue and JavaScript standards. It also features new ways to handle reactivity, file structure, and data fetching that improve developer experience.

We have analyzed the Nuxt official docs and all merged PRs on Github to provide you with this comprehensive guide. We’ll walk you through each step to upgrade your application from Nuxt 3 to Nuxt 4, addressing key changes and providing actionable solutions.

📽️ If you prefer watching video tutorials over reading, then we recommend you check out the new What’s New in Nuxt 4 course by Daniel Kelly on Vue School.

Getting to Know Nuxt’s Release Cycle
Nuxt’s release cycle has settled into a reliable pattern, bringing structure and predictability to framework updates. Following semantic versioning (semver), the team targets major releases annually, aiming to introduce more significant changes, while minor updates roll out monthly and patches weekly. Importantly, breaking changes are reserved for major versions, so developers can expect stability in most updates unless they’re working with experimental features.

Nuxt 2 reached end of life on June 30, 2024.
Nuxt 3 will continue to get bug fixes and the core team haven’t announced an EOL date yet.
Nuxt 4 will be the new, stable version and will have full support from the core team for the upcoming years.
This cycle supports a smooth development experience, ensuring only intentional changes require major adjustments. And now, let’s jump into the migration process.

Should You Upgrade to Nuxt 4?
Upgrading to a new major version like Nuxt 4 is an exciting prospect, but it’s not always necessary to jump on the latest release immediately. Just because a new version is available doesn’t mean you need to upgrade your entire application right away.

Nuxt, like many open-source frameworks, allows you to work with your current version of the framework even after newer versions are released. As long as the version you're using still meets your application's needs and runs without issues, there’s no immediate need to upgrade. Upgrading could introduce breaking changes or require additional testing, which can disrupt the stability of your project.

So, when should you upgrade to Nuxt 4? Here are some guidelines to help you decide:

Your Application Is Stable: If your app is working smoothly on Nuxt 3 and isn’t facing major issues or performance bottlenecks, there’s no rush to upgrade.
New Features or Fixes: Consider upgrading if Nuxt 4 introduces new features that your app requires or solves specific problems you're encountering, like improvements to data fetching, performance, or developer experience.
You’re Ready to Test: Make sure your app is well-tested before introducing a major version upgrade. Nuxt 4 comes with breaking changes, and thorough testing in staging environments will help you identify potential issues before pushing the upgrade to production.
In short, upgrading to Nuxt 4 is highly recommended if it brings tangible benefits to your app—whether that's performance improvements, new features, or critical fixes—but it’s also essential to ensure that your app’s stability is the top priority. Upgrades should be carefully tested and considered based on your project’s needs.

📽️ Check out our Mastering Nuxt 3 course for an in-depth look into Nuxt's core features and inner workings. While most of the content in the course is still relevant to Nuxt 4, the changes discussed in this article should be taken into account for the most up-to-date practices.

Prepare Your Project for the Nuxt 4 Migration
Before we get to the Nuxt 4 upgrading steps, we should prepare our Nuxt 3 app first.

Update Nuxt 3 to the Latest Version
Upgrading to the latest Nuxt 3 version helps minimize compatibility issues. Start by updating dependencies to make the upgrade process smoother. To update Nuxt v3 and dependencies to the latest version, use the following command:

npx nuxi@latest upgrade --force
The nuxi upgrade command with the --force flag after it removes node_modules and lock files before upgrade.

After updating, check for warnings or deprecated features in your codebase. These notices can provide clues on which areas may need special attention during the migration.

Enable Compatibility Mode for Nuxt 4
Compatibility mode is designed to help you transition to Nuxt 4 without immediately breaking your Nuxt 3 code. Enabling it allows you to start adjusting your code incrementally.

Step: Modify your nuxt.config.ts file to opt into Nuxt 4 compatibility mode:

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
})
future is for early opting-in to new features that will become default in a future (possibly major) version of the framework. Setting compatibilityVersion in the future property to 4 will allow Nuxt to run in a compatibility layer, ensuring that the changes you make for Nuxt 4 don’t cause unexpected issues in your app.

To restore Nuxt 3 behavior, update your nuxt.config.ts file with the following configuration:

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  // To re-enable _all_ Nuxt v3 behavior, set the following options:
  srcDir: ".",
  dir: {
    app: "app",
  },
  experimental: {
    scanPageMeta: "after-resolve",
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },
})
Now, with that added inside your nuxt.config.ts file, the app is compatible with Nuxt 4 but still acts exactly like Nuxt 3. This approach allows for gradual migration, enabling you to complete one step at a time. So, you can work on migrating every change and take off the relevant option once you updated your implementation.

The Nuxt team has done an awesome job streamlining the Nuxt 4 upgrade path. Now that we've completed the prep steps above, let's walk through the straightforward upgrade process to Nuxt 4.

Run the Nuxt Codemod for Automated Changes
Nuxt provides a codemod to automate several repetitive migration tasks, such as updating API calls and reorganizing files.

Codemod Homepage screenshot

A codemod is an automated script that scans your codebase and makes specific updates, often used in framework upgrades to handle breaking changes and syntax adjustments. The purpose of a codemod is to streamline the migration process, saving you from manually rewriting repetitive or boilerplate code.

For the Nuxt 4 upgrade, the Nuxt team has provided a dedicated codemod to help automate several key transformations.

Run the Nuxt 4 codemod with the command below:

npx codemod@latest nuxt/4/migration-recipe
Once you run the command, you will be prompt to install codemod ’s latest version.

Need to install the following packages:
codemod@0.14.1
Ok to proceed? (y)
Type y then enter.

Nuxt 4 Codemod Migration Recipe

This codemod command will:

Adjust absolute watch paths.
Convert deep reactive states to Nuxt 4’s shallow reactivity model.
Handle deprecations and updated imports.
In addition to many other changes as showing in the above screenshot. All the changes are checked to be executed but you can press “space” and uncheck the ones you want to exclude.

💡 Pro Tip: Always check the changes the codemod makes, as it may alter custom code that isn’t directly compatible with Nuxt 4.

While codemod handles many migration tasks automatically, larger projects may require additional manual steps. If you find yourself in this situation after running the codemod, let's walk through the remaining migration steps.

Nuxt 4 Data Fetching Changes and Upgrade Guide
In Nuxt 4, data fetching has undergone significant changes, refining how data is managed and retrieved. This section covers the updates, new practices, and steps to upgrade your code for the latest Nuxt 4 data-fetching methods.

1. Shared Pre-rendered Data with useFetch and useAsyncData
In Nuxt 4 the experimental sharedPrerenderData feature get’s an upgrade to stable, and is the new default for statically generated sites.

The sharedPrerenderData enables data sharing for all data fetched via useAsyncData and useFetch across pre-rendered pages. It now automatically shares payload data between pages that are pre-rendered, improving performance when fetching the same data on multiple pages.

Before this change, if your site pages were pre-rendered and fetched the site-wide settings on every page like this:

const { data } = await useFetch('/api/settings')
Then on every navigation, this useFetch will fire a request to the API end point. But with Nuxt 4, the data will be fetched only once and cached to be used for all other pre-rendered pages that uses it.

To ensure this feature works correctly, make sure the key used in useAsyncData or useFetch uniquely identifies the data being fetched. This is especially important for dynamic pages, where the route params should be included in the key.

// Before (unsafe for dynamic pages)
const { data } = await useAsyncData(async () => {
  return await $fetch(`/api/settings/page/${route.params.slug}`)
})

// After (use a unique key)
const { data } = await useAsyncData(route.params.slug, async () => {
  return await $fetch(`/api/settings/page/${route.params.slug}`)
}
In case you’re using useFetch, here’s how you can provide a key:

const { data } = await useFetch(`/api/settings/page/${route.params.slug}`, 
  { key: route.params.slug }
)
If needed, you can disable this shared pre-render data feature by setting experimental.sharedPrerenderData to false in your nuxt.config.ts:

export default defineNuxtConfig({
  experimental: {
    sharedPrerenderData: false
  }
})
2. Default data and error Values in Nuxt 4
Previously, data and error objects returned from useFetch and useAsyncData composables were initialized to null. In Nuxt 4, data and error objects now default to undefined.

If your code checks for null values in data.value or error.value, you should update these checks to look for undefined instead.

You can revert back to setting the defaults to null again using the below config:

export default defineNuxtConfig({
  experimental: {
    defaults: {
      useAsyncData: {
        value: 'null',
        errorValue: 'null'
      }
    }
  }
})
3. Configuring Deduplication Behavior in Nuxt 4's useAsyncData and useFetch
The dedupe option in Nuxt's useAsyncData and useFetch functions allows you to control how Nuxt handles duplicate data fetching requests. This is particularly useful when you have multiple components or pages that need to fetch the same data.

In Nuxt 4, the way you configure the deduplication behavior has been updated. Previously, you could pass a boolean value to the dedupe option when calling the refresh method:

// Nuxt 3
const { refresh } = await useAsyncData(() => $fetch('/api/endpoint')

async function refreshData() {
  await refresh({ dedupe: true })// Alias for 'cancel'
  await refresh({ dedupe: false })// Alias for 'defer'
}
However, this boolean syntax was confusing, as the values represented the opposite of what the dedupe option in useAsyncData was meant to do. To improve clarity, Nuxt 4 has removed these boolean aliases.

The dedupe option allows you to control how Nuxt handles duplicate data fetching requests:

'cancel': Cancel any existing pending requests and execute the new one.
'defer': If there is an existing pending request, defer the new request until the existing one completes.
// Nuxt 4
const { refresh } = await useAsyncData(() => $fetch('/api/endpoint')

async function refreshData() {
  await refresh({ dedupe: 'cancel' }) // Cancel existing requests
  await refresh({ dedupe: 'defer' }) // Defer new requests if existing ones are pending
}
This change provides a more intuitive and explicit way to control the deduplication behavior when refreshing data fetched with useAsyncData and useFetch.

4. Respecting Default Values When Clearing Data in Nuxt 4
Previously, when you called clear or clearNuxtData on a data object returned from useAsyncData or useFetch, the data would be reset to undefined, regardless of the default value you had specified.

// Nuxt 3
const { data, clear } = await useAsyncData("data-key", () => 
    $fetch("api/greeting"),
    { default: () => ({ message: "Default message" }) });

clear(); // data is now undefined
Now, if you provide a custom default value when using useAsyncData, this value will be used when calling clear or clearNuxtData. This ensures the data is reset to an appropriate, pre-defined state rather than simply being unset.

// Nuxt 4
const { data, clear } = await useAsyncData("data-key", () => 
    $fetch("api/greeting"),
    { default: () => ({ message: "Default message" }) });

clear(); // data is reset to { message: 'Default message' }
This helps avoid the need to check for null or undefined when iterating over the data. The new behavior ensures these default values are respected when clearing the data.

In most cases, this change should not require any migration. Your existing code that clears data fetched with useAsyncData and useFetch should continue to work as expected.

However, if you encounter any issues, you can revert to the previous behavior (resetting to undefined) by adding the following configuration in your nuxt.config.ts:

export default defineNuxtConfig({
  experimental: {
    resetAsyncDataToUndefined: true
  }
})
5. Shallow Data Reactivity in Nuxt 4's useAsyncData and useFetch
Previously, the data object returned from useAsyncData, useFetch, useLazyAsyncData, and useLazyFetch was a ref, and refs are deeply reactive by default. Meaning, that any changes made to the data structure would trigger reactivity updates in your app.

// Nuxt 3
const { data } = await useFetch('/api/test')
data.value.greeting.message = 'Updated message' // Triggers reactivity
In Nuxt 4, the data object is a shallowRef, which means changes to nested properties within that data structure will not trigger reactivity.

// Nuxt 4
const { data } = await useFetch('/api/test')
data.value.greeting.message = 'Updated message' // Does not trigger reactivity
This change provides a significant performance improvement, especially for deeply nested data structures. With a shallowRef, Vue no longer needs to watch every single property or array element for modifications, reducing the overall overhead.

If your code relies on the deep reactivity of the data object, you have two options:

Opt in to deep reactivity on a per-composable basis using the second argument:
const { data } = useFetch('/api/test', { deep: true })
data.value.message = 'Updated message'// Triggers reactivity
Change the default behavior project-wide. This is not recommended because you will lose all the performance benefits you will gain from shallowRefs:
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  }
})
Nuxt 4 General Changes and Upgrade Guide
In Nuxt 4, several foundational changes impact various aspects of the framework, from configuration options to rendering behavior and module handling. These general updates improve Nuxt’s performance, flexibility, and developer experience, setting a new standard across the board. Let's start exploring these general core changes in depth so you can get the most out of Nuxt 4.

1. Nuxt 4 Directory and File Structure
Nuxt 4 introduces a new directory structure while maintaining backwards compatibility. Don't worry - if you have a traditional structure (like a root-level pages/ directory), Nuxt will detect this and keep things running smoothly. Which means, it’s not a mandatory change

💡 Pro Tip: This structure change is entirely optional. You can keep your existing setup if you prefer! Nuxt will auto detect your directory structure and handle your app accordingly.

To adopt the new Nuxt 4 directory structure, here are the key changes:

New default for srcDir: The default srcDir (where most of your app lives) has moved from the project root (.) to a new app/ directory. You'll need to create this app/ directory at the root of your project.
my-project/
├── app/
New default for serverDir: The default location for the serverDir (where your server-side code lives) has shifted from /<srcDir>/server to /<rootDir>/server. No action needed here, as it's now outside the app/ directory.
Layers, Modules and Public directories: The layers/, modules/ and public/ directories will remain at the project root, outside of app/.
Nuxt Config: The nuxt.config.ts file will also remain at the project root.
Nuxt Content: If using Nuxt Content v2.13+, the content/ directory will also stay outside of the app/ directory.
The New App Directory Contents: All other Nuxt directories and files will be moved to the new app/ directory. This includes assets/, components/, composables/, layouts/, middleware/, pages/, plugins/, utils/, app.config.ts, app.vue, router.options.ts .
Nuxt 4 files structure: The app.vue, app.config.ts, and router.options.ts files will also move to the new app/ directory.
After making these changes, your project structure should look like:

my-project/
├── app/
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── layouts/
│   ├── middleware/
│   ├── pages/
│   ├── plugins/
│   ├── utils/
│   ├── app.config.ts
│   ├── app.vue
│   └── router.options.ts
├── layers/
├── modules/
├── public/
├── content/ (if using Nuxt Content v2.13+)
├── server/
└── nuxt.config.ts
This change may sound unnecessary at first, but it does have benefits:

Performance: Storing code in the root can slow down startup times due to unnecessary folders being scanned by FS watchers, especially on non-Mac OS systems.
IDE Type-Safety: Separating server/ from app code ensures clearer boundaries, improving type-safety and auto-completion in your IDE.
Remember to update any third-party configuration files to work with the new Nuxt 4 directory structure. This includes updating your tailwindcss or eslint configs, if needed.

The good news is that the @nuxtjs/tailwindcss module should automatically configure Tailwind correctly for the new structure. But you may still need to adjust other external tool configs, like ESLint, to account for the changed directory locations. For example:

// eslint.config.js
export default [
  {
    files: ["app/**/*.{ts,vue}"],
    ignores: ["app/**/*.config.ts"]
    rules: {
      semi: "error",
    },
  },
];
This will ensure your third-party tools continue to work seamlessly with the new Nuxt 4 directory layout.

2. Normalize Component Names
Nuxt 4 introduces a change to how Vue component names are generated, aligning them with Nuxt's recommended naming convention.

By default, if you haven't explicitly set a component name, Vue will now assign a name that matches the filename of the component.

For example, consider the following directory structure:

├─ components/
├─── ParentFolder/
├───── MyComponent.vue
Previously, the component name as far as Vue.js was concerned would have been MyComponent. And you would use this name to find the component in Vue dev tools. Here’s a screenshot of Vue Devtools before Nuxt 4 changes:

Screenshot 2024-11-07 at 11.16.56 AM.png

But to auto-import the component, find it in Nuxt Devtools or , you'd need to use the Nuxt-style name of ParentFolderMyComponent.

With this change in Nuxt 4, these two names will now match. Vue will generate a component name that follows the Nuxt pattern.

No changes needed from you end here unless you have any tests using findComponent from @vue/test-utils, or any <KeepAlive> components that depend on the specific name of your components, you'll need to update those to use the new normalized names.

Alternatively, you can disable this behavior in your nuxt.config.ts file:

export default defineNuxtConfig({
  experimental: {
    normalizeComponentNames: false
  }
})
Setting normalizeComponentNames to false will revert to the previous component naming behavior.

3. Deduplication of Route Metadata
In Nuxt 4, the way you access certain page metadata has changed slightly. Previously, metadata defined using definePageMeta was available both on the route object and the route.meta object. Now, these values are only accessible directly on the route object.

When using definePageMeta to set properties like name, path, and others, you can no longer reference them via route.meta. Instead, you'll need to access them directly on the route object. For example, this code:

const route = useRoute()
console.log(route.meta.name)
Would need to be updated to:

const route = useRoute()
console.log(route.name)
This update is a result of Nuxt 4 enabling the experimental.scanPageMeta feature by default. This is a performance optimization that allows Nuxt to more efficiently scan and process your page metadata.

This change should have a minimal impact on most projects, as the underlying data is still available - just through a slightly different access point.

4. Scan Page Meta After Resolution
Nuxt 4 has changed the timing of when page metadata (defined using definePageMeta) is scanned and processed.

Previously, Nuxt would scan page metadata before the pages:extend hook was called. Now, this scanning happens after the pages:extend hook has run.

This update was made to allow users to add and modify page metadata in the pages:extend hook. The new pages:resolved hook provides an opportunity to further override or change the page metadata after it has been scanned.

If you need to override page metadata that have already been set, you should now do that in the pages:resolved hook rather than pages:extend. Here's an example:

export default defineNuxtConfig({
  hooks: {
    'pages:resolved'(pages) {
      const myPage = pages.find(page => page.path === '/')
      myPage.meta = {
        layout: 'overridden-layout'
      }
    }
  }
})
Alternatively, if you want to revert to the previous behavior where page metadata is scanned before pages:extend, you can do so by setting experimental.scanPageMeta to true in your nuxt.config.ts:

export default defineNuxtConfig({
  experimental: {
    scanPageMeta: true
  }
})
This change is considered low-impact, as the underlying functionality remains the same - just the timing of when page metadata is processed has shifted.

5. Accessing Nuxt App Data in Nuxt 4
Previously, you could access Nuxt-specific data and state by referencing the window.__NUXT__ object. This global object provided a way to interact with the Nuxt app from outside the framework.

// Nuxt 3
console.log(window.__NUXT__)
In Nuxt 4, the window.__NUXT__ object has been removed. This opens the way for Nuxt to support multi-app patterns. It also helps Nuxt focus on a single, consistent way to access app data - through the useNuxtApp() composable.

If you were previously accessing Nuxt app data through the window.__NUXT__ object, you'll need to update your code to use the useNuxtApp().payload property instead:

// Nuxt 4
console.log(useNuxtApp().payload)
6. Removal of Experimental Features in Nuxt 4
When upgrading from Nuxt 3 to Nuxt 4, it's important to know about certain experimental features that have been fully adopted or deprecated and are no longer configurable. These changes aim to simplify the Nuxt configuration and improve consistency, especially since these experimental features have reached stability over the last several releases of Nuxt 3.

The following experimental features are now standardized and therefore not adjustable in Nuxt 4:

experimental.treeshakeClientOnly: Now always set to true (default since Nuxt 3.0). This ensures that any client-only components are tree-shaken to optimize build performance.
experimental.configSchema: Set to true by default (since Nuxt 3.3), enforcing the config schema for better validation and error handling in configurations.
experimental.polyfillVueUseHead: Set to false by default (since Nuxt 3.4). This change impacts Vue’s useHead polyfill.
experimental.respectNoSSRHeader: Now false by default (since Nuxt 3.4). This feature, related to the handling of SSR headers, is also non-configurable.
vite.devBundler: The vite-node bundler is now the only option, removing the need for configuration around dev bundling.
7. New isNuxtMajorVersion function to Nuxt Kit
In earlier versions of Nuxt, determining the current Nuxt version programmatically, often within modules, required importing isNuxt2 and isNuxt3 from @nuxt/kit. Here’s how it looked:

import { isNuxt2, isNuxt3 } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('modules:done', () => {
      if (isNuxt2()) {
        // Do something if this is Nuxt 2
      } else if (isNuxt3()) {
        // Do something if this is Nuxt 3
      }
    })
  }
With Nuxt 4, these functions have been streamlined into a single function: isNuxtMajorVersion. This function allows you to check the major version in a more flexible and straightforward way, like so:

import { isNuxtMajorVersion } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('modules:done', () => {
      if (isNuxtMajorVersion(2)) {
        // Do something if this is Nuxt 2
      } else if (isNuxtMajorVersion(3)) {
        // Do something if this is Nuxt 3
      }
    })
  }
Post Nuxt 4 Migration
Modules and Layers in Nuxt 3 may need updates to function correctly in Nuxt 4, as Nuxt 4 introduces changes in its core, composables and more.

Check the compatibility of each module and layer. Look for updated versions or migrate any custom modules following the Nuxt 4 documentation:

npm install @nuxtjs/some-module@latest
💡 Pro Tip: Testing each module individually in your staging environment can save debugging time, especially if your app relies on numerous modules.

After applying the migration changes, it’s essential to conduct extensive testing. Nuxt 4’s new features might behave differently under various conditions, and certain edge cases may only become apparent with thorough testing.

Component Testing: Verify each component’s behavior to ensure they display and interact correctly.
Route Testing: Check all routes to confirm that they load as expected.
Data Handling: Test each API call and data-fetching method to confirm compatibility with the new framework’s async handling.
Explore @nuxt/test-utils for extensive testing and ensure that your Nuxt 4 app is behaving as expected. In addition, check out Alexander Lichter’s Youtube video about Testing in Nuxt:


How To Contribute to Nuxt 4
Nuxt is an open-source framework that thrives due to contributions from its active community. Although it's maintained by the core team, anyone can help shape Nuxt's future by contributing new features, bug fixes, or documentation improvements.

To get started with contributing to Nuxt 4:

Visit Nuxt's GitHub Repository
Check out Nuxt's GitHub to explore ongoing work and open issues. Look for pull requests tagged with 4.x to focus on contributions specific to Nuxt 4.
Contribute to Existing PRs or Create Your Own
Browse open PRs to see if your idea has already been tackled. If not, feel free to open your own PR, following the Nuxt Contribution Guidelines to ensure smooth merging.
Focus on Scalable, Maintainable Contributions
Make sure your contributions benefit the Nuxt community at large and align with the framework's goals, keeping future maintenance in mind.
By contributing, you help improve Nuxt for developers worldwide 🌎

Conclusion
After implementing the steps in this guide, thoroughly test your application in a staging environment to catch any final issues. Once you’re confident in the app’s stability, proceed with deploying it to production. Nuxt 4’s new features can greatly improve performance and scalability, but thorough testing is key to a smooth upgrade.

This migration guide ensures a smooth transition from Nuxt 3 to Nuxt 4, enabling you to take advantage of the latest features and improvements. For further reference, check the official Nuxt 4 migration documentation.

By following this guide, you’ll be equipped to maximize the benefits of Nuxt 4, delivering a more efficient, scalable, and modern web experience.

Feel free to explore our new What’s New in Nuxt 4 course by Daniel Kelly on Vue School.


Mostafa Said
Mostafa is a full-stack developer, a full-time Instructor at Vue School, and a Vue.js Jedi.
Previous Post
Next Post
rocket
Follow MasteringNuxt on

twitter
instagram
facebook

Nuxt 2
•
Nuxt 3
•
Nuxt 2025
•
Blog
Privacy Policy
•
Terms & Conditions
CYBER MONDAY LATECOMERS
33% off the Complete Course to upgrade your Nuxt skills
Claim Offer
14h
:
38m
:
16s
extended for