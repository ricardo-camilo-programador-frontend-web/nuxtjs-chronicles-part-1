<div align="center">

# 🦁 Savana Pet Shop — NuxtJS Chronicles

**Modern Pet E-commerce built with Nuxt 4**

[![Netlify Status](https://api.netlify.com/api/v1/badges/8b70b8db-229b-4dea-8781-6e1e329cc03f/deploy-status)](https://app.netlify.com/sites/savana-nuxtjs-chronicles-part-1/deploys)

[🌐 Live Demo](https://savana-nuxtjs-chronicles-part-1.netlify.app/en) · [🎨 Original Design](https://www.figma.com/community/file/1376176068455814953) · [👤 Portfolio](https://persona-nextjs-chronicles-part-2.netlify.app/)

</div>

---

## 📋 About

A modern, fully-featured pet shop e-commerce application built with **Nuxt 4** to demonstrate frontend best practices, scalable architecture, and production-ready patterns.

### ✨ Features

- 🌐 **Bilingual** — Portuguese (BR) and English with `@nuxtjs/i18n`
- 🛒 **Shopping Cart** — Full cart with coupons, shipping calculation, and localStorage persistence
- 💳 **Multi-step Checkout** — Customer → Shipping → Payment → Review flow
- ❤️ **Favorites** — Save products to a personal wishlist
- 📦 **Product Catalog** — 8 base products with size/weight variations
- 🔍 **SEO Optimized** — SEO factory pattern with per-page configs, Open Graph, Twitter Cards
- 📊 **Analytics** — GTM, Microsoft Clarity, and Google Analytics integration
- 📱 **Responsive** — Mobile-first design with TailwindCSS 4
- 🎠 **Carousels** — Custom carousel components wrapping `@nuxt/ui`
- 🖼️ **Dynamic Icons** — `@nuxt/icon` for icon management

---

## 🚀 Tech Stack

| Technology                                                                             | Version | Purpose              |
| -------------------------------------------------------------------------------------- | ------- | -------------------- |
| ![Nuxt](https://img.shields.io/badge/Nuxt-4.4.2-00DC82?logo=nuxt.js)                   | 4.4.2   | Vue Meta-Framework   |
| ![Vue](https://img.shields.io/badge/Vue-3.5.31-4FC08D?logo=vue.js)                     | 3.5.31  | UI Framework         |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)      | 5.x     | Type Safety          |
| ![Pinia](https://img.shields.io/badge/Pinia-3.0.4-FFC107)                              | 3.0.4   | State Management     |
| ![Nuxt UI](https://img.shields.io/badge/Nuxt_UI-4.3.0-7C3AED?logo=nuxt.js)             | 4.3.0   | UI Components        |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.2-06B6D4?logo=tailwindcss) | 4.2.2   | Styling              |
| ![Swiper](https://img.shields.io/badge/Swiper-12.1.3-6332F6?logo=swiper)               | 12.1.3  | Carousels            |
| ![i18n](https://img.shields.io/badge/i18n-10.2.4-E535AB)                               | 10.2.4  | Internationalization |
| ![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?logo=pnpm)                     | 9.15.4  | Package Manager      |

---

## 🏁 Quick Start

```bash
# Clone the repository
git clone https://github.com/ricardo-camilo-programador-frontend-web/nuxtjs-chronicles-part-1.git

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 📁 Project Structure

```
nuxtjs-chronicles-part-1/
├── app/                          # Source directory (srcDir)
│   ├── blocks/                   # Feature-based blocks
│   │   ├── layout/               # Header, Footer, MobileMenu
│   │   └── sections/             # Page-specific sections
│   │       ├── home/             # Hero, Categories, FeaturedProducts, etc.
│   │       └── shop/             # Shop-specific sections
│   ├── components/               # Reusable Vue components (11)
│   │   ├── Image.vue             # Custom image wrapper
│   │   └── Carousel.vue          # Custom carousel wrapper
│   ├── composables/              # Composable functions (5)
│   │   ├── useGtm.ts             # Google Tag Manager
│   │   ├── useLocalStorage.ts    # localStorage helper
│   │   ├── useRipple.ts          # Ripple effect
│   │   ├── useScrollAnimation.ts # Scroll-based animations
│   │   └── useTranslateProduct.ts # Product name translation
│   ├── locales/                  # i18n translations (PT/EN)
│   ├── pages/                    # File-based routes (14 pages)
│   ├── plugins/                  # Nuxt plugins
│   ├── server/                   # Server-side code
│   ├── static/                   # Static configs (SEO, footer, menu)
│   ├── stores/                   # Pinia stores (5)
│   │   ├── useProductStore.ts    # Product catalog + favorites
│   │   ├── useCartStore.ts       # Cart + coupons + shipping
│   │   ├── useCheckoutStore.ts   # Checkout flow state
│   │   ├── useBlogStore.ts       # Blog data
│   │   └── useCategoryStore.ts   # Product categories
│   ├── types/                    # TypeScript types (12 files)
│   └── utils/                    # Utility functions (6)
├── public/                       # Static assets
│   ├── images/                   # Product and hero images
│   ├── robots.txt
│   └── humans.txt
├── docs/                         # Documentation
│   ├── analysis/                 # Performance & SEO audit
│   └── github-workflow/          # Git patterns and standards
└── .github/                      # GitHub templates and CI/CD
```

---

## 🗺️ Routes

| Page           | Path (EN)            | Description                                           |
| -------------- | -------------------- | ----------------------------------------------------- |
| Home           | `/en`                | Landing page with hero, categories, featured products |
| Shop           | `/en/shop`           | Product catalog with filters                          |
| Product        | `/en/products/:slug` | Product detail page                                   |
| Cart           | `/en/cart`           | Shopping cart with coupons                            |
| Checkout       | `/en/checkout`       | Multi-step checkout                                   |
| Blog           | `/en/blog`           | Blog listing                                          |
| About          | `/en/about`          | About the company                                     |
| Careers        | `/en/careers`        | Job openings                                          |
| Contact        | `/en/contact`        | Contact form                                          |
| FAQ            | `/en/faq`            | Frequently asked questions                            |
| Gift Cards     | `/en/gift-cards`     | Gift card purchasing                                  |
| Discount       | `/en/discount`       | Current promotions                                    |
| Privacy Policy | `/en/privacy-policy` | Privacy policy                                        |
| Best Sellers   | `/en/best-sellers`   | Top-selling products                                  |

> All routes are also available under `/pt/` for Portuguese.

---

## 🏗️ Architecture

### Design Patterns

- **Feature-based organization** — Components grouped by domain (`blocks/sections/`)
- **SEO Factory** — Centralized `seoFactory.ts` generates consistent meta tags per page
- **Composables** — Reusable logic extracted into composable functions
- **Pinia Stores** — State management with HMR support and localStorage persistence
- **TypeScript-first** — Separate type files per domain in `~/types/`

### Key Decisions

| Decision                 | Rationale                                                                 |
| ------------------------ | ------------------------------------------------------------------------- |
| Custom `Image.vue`       | Wraps `<img>` with consistent props; planned migration to `<NuxtPicture>` |
| Custom `Carousel.vue`    | Wraps `UCarousel` from `@nuxt/ui` with custom navigation                  |
| `skipHydrate` on cart    | Cart is client-only state — no SSR needed                                 |
| SEO configs in `static/` | Keeps SEO metadata separate from component logic                          |

---

## 📊 Quality Reports

| Report                  | Link                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| Performance & SEO Audit | [docs/analysis/performance-seo-analysis.md](./docs/analysis/performance-seo-analysis.md) |

---

## 📜 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `pnpm dev`      | Start development server |
| `pnpm build`    | Build for production     |
| `pnpm preview`  | Preview production build |
| `pnpm generate` | Generate static site     |
| `pnpm lint`     | Run linter               |

---

## 🗺️ Roadmap

### Phase 1 — Foundation ✅

- [x] Project setup with Nuxt 4
- [x] i18n implementation (PT/EN)
- [x] Shopping cart with persistence
- [x] Multi-step checkout
- [x] Product catalog with variations
- [x] SEO factory pattern
- [x] Analytics integration (GTM, Clarity, GA)

### Phase 2 — Enhancement 🚧

- [ ] Image optimization (migrate to NuxtPicture)
- [ ] Sitemap generation
- [ ] JSON-LD structured data
- [ ] Accessibility improvements (target: 90+)
- [ ] Unit tests (Vitest)
- [ ] E2E tests (Playwright)

### Phase 3 — Advanced 📋

- [ ] Payment integration
- [ ] Admin dashboard
- [ ] PWA support (service worker + manifest)
- [ ] CMS integration for blog content

---

## 📚 Documentation

- [Performance & SEO Analysis](./docs/analysis/performance-seo-analysis.md)
- [GitHub Workflow](./docs/github-workflow/README.md)
- [Code Quality Standards](./docs/github-workflow/CODE_QUALITY.md)
- [Commit Patterns](./docs/github-workflow/COMMIT_PATTERN.md)

---

## 👤 Author

**Ricardo Camilo**

- 🌐 [Portfolio](https://persona-nextjs-chronicles-part-2.netlify.app/)
- 💻 [GitHub](https://github.com/ricardo-camilo-programador-frontend-web)

---

## 📄 License

[MIT License](./LICENSE)
