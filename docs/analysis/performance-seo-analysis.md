# 🔍 Performance & SEO Analysis — Savana Pet Shop

> **Date**: March 2026  
> **Scope**: Full codebase audit — performance, SEO, accessibility, architecture  
> **Environment**: Dev mode (Lighthouse dev scores noted; production scores will differ)

---

## 📊 Lighthouse Scores (Dev Mode)

| Category       | Score     | Notes               |
| -------------- | --------- | ------------------- |
| Performance    | —         | Not measured in dev |
| Accessibility  | **77**    | Needs improvement   |
| Best Practices | **73–96** | Varies by page      |
| SEO            | **91**    | Good baseline       |

### Core Web Vitals (Dev)

| Metric | Value | Target       |
| ------ | ----- | ------------ |
| LCP    | 381ms | < 2,500ms ✅ |
| CLS    | 0.01  | < 0.1 ✅     |

> ⚠️ Dev mode scores are NOT representative of production. Images are unoptimized and bundles are larger without minification.

---

## 🖼️ Image Analysis — CRITICAL

### Current Image Sizes

| File                              | Size         | Type       | Priority    |
| --------------------------------- | ------------ | ---------- | ----------- |
| `cat-food-premium.webp`           | **1,106 KB** | Product    | 🔴 CRITICAL |
| `background-gradient-orange.webp` | **1,053 KB** | Decorative | 🔴 CRITICAL |
| `charlesdeluvio-unsplash.webp`    | 414 KB       | Hero       | 🟡 HIGH     |
| `dog-food-medium.webp`            | 395 KB       | Product    | 🟡 HIGH     |
| `dog-food-large.webp`             | 340 KB       | Product    | 🟡 HIGH     |
| **Total**                         | **~4.2 MB**  |            | 🔴          |

### Issues Found

1. **`background-gradient-orange.webp` (1,053 KB)** — This is a decorative gradient. Should be replaced with a CSS gradient (`linear-gradient` or `radial-gradient`) to save the entire file.
2. **`cat-food-premium.webp` (1,106 KB)** — Largest product image. Needs compression (target: < 200KB for hero product images).
3. **Custom `Image.vue` component** uses raw `<img>` instead of `NuxtImg` / `<NuxtPicture>`:
   - ❌ No responsive `srcset` / `sizes` — every device downloads the full-size image
   - ❌ No AVIF format support (modern browsers support AVIF which is ~50% smaller than WebP)
   - ❌ No lazy loading strategy (default is lazy, but hero images set to `eager`)
   - ❌ Width/height props receive string `"25"` instead of pixel values — `width="25"` renders as 25px, not 25vw

### Recommendations

- Replace `background-gradient-orange.webp` with CSS gradient (saves 1MB+)
- Run all product images through Squoosh/Sharp with quality 75-80
- Migrate `Image.vue` to use `<NuxtPicture>` for automatic format negotiation (AVIF → WebP → JPEG fallback)
- Add proper `width`/`height` attributes in pixels to prevent CLS
- Use `loading="lazy"` for below-fold images, `loading="eager"` + `fetchpriority="high"` for hero

---

## 🏗️ Bundle & Runtime

### Build Stats (Dev)

| Chunk  | Modules | Time  |
| ------ | ------- | ----- |
| Client | 1,027   | ~15s  |
| Server | 418     | ~6s   |
| CSS    | —       | 198KB |

### Issues

| Issue                       | Severity | Details                                                                        |
| --------------------------- | -------- | ------------------------------------------------------------------------------ |
| Swiper double import        | 🟡       | Custom `Carousel.vue` wraps `UCarousel` from `@nuxt/ui` — both may load Swiper |
| `nprogress` eager load      | 🟡       | Loaded in `app.vue` for every route, not lazy                                  |
| `counter.dev` script        | 🟡       | External script loaded on every page without defer/async                       |
| Forced reflow (75ms)        | 🟡       | 67ms from `@headlessui/vue` + 26ms from Nuxt DevTools (external, not fixable)  |
| No code splitting per route | 🟡       | All 1,027 client modules loaded together                                       |

### Recommendations

- Audit if `UCarousel` already handles Swiper — if so, remove redundant Swiper import from `Carousel.vue`
- Lazy-load `nprogress` and `counter.dev`
- Consider route-based code splitting with `definePageMeta`

---

## 🔎 SEO Analysis

### ✅ What's Working

| Feature             | Status | Details                                                |
| ------------------- | ------ | ------------------------------------------------------ |
| SEO Factory Pattern | ✅     | Centralized `seoFactory.ts` + per-page configs         |
| hreflang            | ✅     | Alternate links for PT/EN                              |
| Open Graph          | ✅     | title, description, image, locale                      |
| Twitter Cards       | ✅     | Card meta tags present                                 |
| Semantic HTML       | ✅     | `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>` |
| ARIA labels         | ✅     | Interactive elements have labels                       |
| robots meta         | ✅     | `index, follow` set                                    |
| Google Verification | ✅     | Supported via env plugin                               |

### ❌ Issues Found

| Issue                  | Severity | Details                                                                           |
| ---------------------- | -------- | --------------------------------------------------------------------------------- |
| OG Image broken        | 🔴       | `DEFAULT_OG_IMAGE` references `/imagem-compartilhamento.jpg` — file doesn't exist |
| No sitemap             | 🔴       | No `@nuxtjs/sitemap` module installed                                             |
| No structured data     | 🔴       | Missing JSON-LD (Product, Organization, BreadcrumbList)                           |
| No canonical URLs      | 🟡       | Pages don't set `<link rel="canonical">`                                          |
| `revisit-after` meta   | 🟡       | Deprecated tag — search engines ignore it                                         |
| No `og:site_name`      | 🟡       | Missing from Open Graph tags                                                      |
| No web manifest        | 🟡       | No `site.webmanifest` for PWA support                                             |
| Blog placeholder       | 🟡       | `blog.vue` is just a `<Button>` — no actual content                               |
| `<html lang>` issue    | 🟡       | i18n may not set lang attribute correctly in dev mode                             |
| `counter.dev` tracking | 🟡       | External analytics without privacy disclosure                                     |

### Recommendations

1. **Fix OG Image** — Upload a real sharing image and update `DEFAULT_OG_IMAGE` constant
2. **Add `@nuxtjs/sitemap`** — Auto-generate sitemap.xml with i18n routes
3. **Add JSON-LD** — At minimum: `Organization`, `WebSite`, `BreadcrumbList`, `Product` (on product pages)
4. **Add canonical URLs** — Use `useHead()` with `link[rel=canonical]` per page
5. **Remove `revisit-after`** — Deprecated meta tag
6. **Update `robots.txt`** — Add `Sitemap: https://domain.com/sitemap.xml` reference

---

## ♿ Accessibility

| Metric          | Score  | Notes              |
| --------------- | ------ | ------------------ |
| Lighthouse A11y | **77** | Below 90 threshold |

### Issues

| Issue                          | Severity | Details                                                                        |
| ------------------------------ | -------- | ------------------------------------------------------------------------------ |
| `aria-hidden="true"` on images | 🔴       | `Image.vue` sets `aria-hidden` by default — images invisible to screen readers |
| Duplicate alt text             | 🟡       | Multiple images use "Happy dog with its owner"                                 |
| No skip-to-content link        | 🟡       | Keyboard users can't skip navigation                                           |
| Color contrast                 | 🟡       | Some elements may fail WCAG AA contrast ratio                                  |

### Recommendations

- Remove default `aria-hidden` from `Image.vue` — let consumers decide
- Add unique, descriptive `alt` text to every image
- Add a "Skip to main content" link as the first focusable element
- Audit color contrast with axe DevTools

---

## 🏛️ Architecture Observations

### ✅ Strengths

- Clean feature-based organization (`blocks/sections/`, stores by domain)
- Good TypeScript typing with separate type files (`~/types/`)
- HMR support on Pinia stores (`acceptHMRUpdate`)
- SEO factory pattern for consistent meta tags across pages
- Composables for reusable logic (GTM, localStorage, ripple, scroll, translate)
- localStorage persistence for cart state

### ⚠️ Issues

| Issue                 | Severity | File              | Details                                                                  |
| --------------------- | -------- | ----------------- | ------------------------------------------------------------------------ |
| `as any` type escape  | 🔴       | `checkout.vue:92` | `s.key as any` — violates TypeScript strict rules                        |
| No tests              | 🔴       | Project-wide      | Zero test files, no vitest config                                        |
| Blog placeholder      | 🟡       | `blog.vue`        | Just a `<Button>` component, no content                                  |
| Server dir empty      | 🟡       | `server/`         | Only has `tsconfig.json`, no API routes                                  |
| Manual localStorage   | 🟡       | `useCartStore`    | Could use `@pinia/plugin-persistedstate`                                 |
| `skipHydrate` on cart | 🟡       | `useCartStore`    | No SSR for cart — acceptable for client-only state but worth documenting |

---

## 📋 Priority Action Plan

### 🔴 Critical (Do First)

1. Replace `background-gradient-orange.webp` with CSS gradient → **saves 1MB+**
2. Compress `cat-food-premium.webp` to < 200KB → **saves 900KB+**
3. Fix broken OG image (`DEFAULT_OG_IMAGE`)
4. Remove `as any` from `checkout.vue`

### 🟡 High (Do Next)

5. Migrate `Image.vue` to `<NuxtPicture>` for format negotiation
6. Add `@nuxtjs/sitemap` module
7. Add JSON-LD structured data
8. Add canonical URLs to all pages
9. Fix `aria-hidden` default on `Image.vue`

### 🟢 Medium (Nice to Have)

10. Add skip-to-content link
11. Remove deprecated `revisit-after` meta tag
12. Add web manifest
13. Lazy-load `nprogress` and `counter.dev`
14. Audit Swiper double-import
15. Set up Vitest + add first tests

---

## 📈 Expected Impact

| Action                          | Estimated Savings                    |
| ------------------------------- | ------------------------------------ |
| Replace gradient image with CSS | **~1 MB** payload reduction          |
| Compress product images         | **~1.5 MB** payload reduction        |
| NuxtPicture (AVIF support)      | **~40-50%** additional image savings |
| Lazy-load scripts               | **~50ms** faster FCP                 |
| Sitemap + JSON-LD               | Better crawlability + rich snippets  |
| Fix OG image                    | Correct social sharing previews      |

**Total potential image savings: ~2.5–3 MB** (60-70% reduction in image payload)

---

_Analysis generated by Sisyphus — AI Code Architect_
