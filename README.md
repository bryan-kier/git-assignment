# 100-Yard Apparel

*"Built for the Bowl"*

NFL apparel, sourced overseas and delivered across the Philippines — imported jerseys, hoodies, and game-day tops for Filipino NFL fans who can't get them locally. Built for ITMGT 45.03 (E-Commerce Fundamentals), Group Challenge 1 — see the full business concept brief in the group's submitted paper (target market: NFL fans aged 18–34, ₱20K–60K monthly income, based in Metro Manila, Cebu, and Davao).

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
  products/     real product photos, referenced by each product's `image` field
                in products.js (currently soccer-kit mockups — see Status below)
  hero/         the hero background photo, referenced by HERO_BACKGROUND in media.js
```

## Status

- **Homepage, Product Detail, Checkout, Admin** — all built and navigable. Homepage is full-fidelity (fixed overlaid nav, full-bleed hero background, parallax, scroll-reveal animations); the other three are intentionally simpler for now.
- **Catalog** — six mock products across Team Jerseys, Hoodies & Fleece, and Tees & Tops. Each has a real photo, but they're real Nike-branded, real NFL team jerseys (Raiders, Steelers, Seahawks, Bears, Cowboys, Vikings) that look sourced from an official retailer's live catalog — used by explicit request despite implying an official Nike/NFL relationship this unofficial-reseller business doesn't have. See `public/products/README.md` for the full note, including a product/category mismatch worth fixing (four of the six show jerseys on Hoodies/Tees listings). Swap in real, appropriate photos any time by dropping them into `public/products/` and updating the matching `image` field — no other code changes needed.
- **Hero background** — an AI-generated athlete/jersey action shot (kept from before the pivot; it's sport-neutral in tone — dark, dramatic, motion-blurred — so it still reads fine for an NFL storefront, but the visible jersey design itself isn't NFL-specific). Swappable the same way via `HERO_BACKGROUND` in `src/data/media.js`.
- **Admin dashboard** — Overview tab has a 14-day revenue trend (hover/keyboard tooltip), an order-status breakdown, a top-products ranking, and stat tiles with period-over-period deltas, all on mock data; Inventory tab lists the catalog with stock status.
- **Payment methods shown at checkout** — GCash, PayMaya, and Cash on Delivery. Worth double-checking against the group's final choice: the submitted paper names GCash/PayPal in the architecture section (4) but QRPH/PayMaya in Core Platform Features (3) — those two sections don't agree, so this picked the more specific, PH-focused pairing (GCash + PayMaya) rather than guessing which section is authoritative.
- **Backend** — not started. Planned as Node/Express + MongoDB (auth, product/catalog, cart/order, and payment services), with EasyParcel PH shipping and Google OAuth as further integrations.
