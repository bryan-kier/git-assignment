# Kitroom

Sports fashion, sourced overseas and delivered across the Philippines — a storefront for imported football kits, basketball jerseys, and streetwear. "Kitroom" is a placeholder name pending final branding.

React front-end only for now — no backend yet (see below for the planned architecture).

## Stack

- React 19 + React Router, built with Vite
- Plain CSS with a shared design-token system (`src/styles/tokens.css`)
- Mock product and analytics data (`src/data/`) standing in for a future Product/Catalog and Order API

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (production build), `npm run lint` (oxlint), `npm run preview` (serve the build).

## Structure

```
src/
  components/   Nav (fixed/overlaid), Footer, ProductCard, the shared JerseyGraphic SVG
                render (fallback for any product without a real photo), Reveal (scroll-in wrapper)
  pages/
    Home/       hero, category strip, featured drops, trust section, newsletter
    ProductDetail/, Checkout/, Admin/  (Admin/ also has RevenueChart, OrderStatusBreakdown,
                                        TopProducts — the dashboard's analytics widgets)
  hooks/        useScrolled, useParallax, useReveal
  data/         products.js (catalog), media.js (hero background), analytics.js (mock
                revenue/order/stat data for the dashboard)
  lib/          publicAsset.js — base-URL-aware helper for public/ image paths
  styles/       design tokens and shared page styles
public/
  products/     real product photos, referenced by each product's `image` field in products.js
  hero/         the hero background photo, referenced by HERO_BACKGROUND in media.js
```

## Status

- **Homepage, Product Detail, Checkout, Admin** — all built and navigable. Homepage is full-fidelity (fixed overlaid nav, full-bleed hero background, parallax, scroll-reveal animations); the other three are intentionally simpler for now.
- **Product & hero imagery** — real photos for all six products and the hero background. `JerseyGraphic` (an SVG jersey render) is the automatic fallback for any product left with `image: null`.
- **Admin dashboard** — Overview tab has a 14-day revenue trend (hover/keyboard tooltip), an order-status breakdown, a top-products ranking, and stat tiles with period-over-period deltas, all on mock data; Inventory tab lists the catalog with stock status.
- **Backend** — not started. Planned as Node/Express + MongoDB (auth, product/catalog, cart/order, and payment services), with GCash/PayPal, EasyParcel PH shipping, and Google OAuth as the main integrations.
