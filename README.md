# Kitroom

Sports fashion, sourced overseas and delivered across the Philippines — a storefront for imported football kits, basketball jerseys, and streetwear. "Kitroom" is a placeholder name pending final branding.

React front-end only for now — no backend yet (see below for the planned architecture).

## Stack

- React 19 + React Router, built with Vite
- Plain CSS with a shared design-token system (`src/styles/tokens.css`)
- Mock product data (`src/data/products.js`) standing in for a future Product & Catalog API

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (production build), `npm run lint` (oxlint), `npm run preview` (serve the build).

## Structure

```
src/
  components/   Nav, Footer, ProductCard, the shared JerseyGraphic SVG render, Reveal (scroll-in wrapper)
  pages/        Home (hero, categories, featured drops, trust section, newsletter),
                ProductDetail, Checkout, Admin
  hooks/        useScrolled, useParallax, useReveal
  data/         mock products + the HERO_IMAGE / product image config
  styles/       design tokens and shared page styles
public/
  products/     drop real product photos here (see the README inside)
  hero/         drop a real hero photo here (see the README inside)
```

## Status

- **Homepage, Product Detail, Checkout, Admin** — all built and navigable. Homepage is full-fidelity (scroll-driven hero, parallax, animated reveals); the other three are intentionally simpler for now.
- **Product imagery** — every product/hero image currently renders as a vector jersey graphic (`JerseyGraphic`); dropping a real photo into `public/products/` or `public/hero/` and setting the corresponding `image` field switches it over automatically, no code changes needed.
- **Backend** — not started. Planned as Node/Express + MongoDB (auth, product/catalog, cart/order, and payment services), with GCash/PayPal, EasyParcel PH shipping, and Google OAuth as the main integrations.
