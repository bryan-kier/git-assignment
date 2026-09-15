// Mock catalog data. No backend yet — this stands in for the Product & Catalog API
// described in the Phase 4 architecture doc until that service exists.
//
// Each product's `image` is null until a real photo is dropped into
// public/products/ (see the README there) — components fall back to the
// vector JerseyGraphic render whenever `image` is null. Currently all null:
// the earlier product photos were soccer-kit mockups from before the group's
// Phase 1 concept was finalized as NFL apparel, so they no longer fit.

export const categories = [
  {
    id: 'team-jerseys',
    number: '01',
    name: 'Team Jerseys',
    description: 'Home, away, and alternate jerseys sourced pre-season through the playoffs.',
  },
  {
    id: 'hoodies-fleece',
    number: '02',
    name: 'Hoodies & Fleece',
    description: "Pullovers and cold-weather layers you won't find on local racks.",
  },
  {
    id: 'tees-tops',
    number: '03',
    name: 'Tees & Tops',
    description: 'Graphic tees and game-day tops, sourced in small, honest batches.',
  },
];

export const products = [
  {
    id: 'sunday-showdown-home-jersey',
    name: 'Sunday Showdown Home Jersey',
    category: 'Team Jerseys',
    price: 3450,
    stock: 'in-stock',
    unitsSold: 86,
    number: '10',
    pattern: 'diagonal',
    fillA: 'var(--surface-3)',
    fillB: 'var(--bg-raised)',
    image: null,
  },
  {
    id: 'primetime-away-jersey',
    name: 'Primetime Away Jersey',
    category: 'Team Jerseys',
    price: 3200,
    stock: 'preorder',
    unitsSold: 34,
    number: '23',
    pattern: 'panel',
    fillA: 'var(--accent-hover)',
    fillB: 'var(--accent-dim)',
    image: null,
  },
  {
    id: 'endzone-pullover-hoodie',
    name: 'Endzone Pullover Hoodie',
    category: 'Hoodies & Fleece',
    price: 2950,
    stock: 'low',
    unitsSold: 19,
    number: '5',
    pattern: 'yoke',
    fillA: 'var(--surface-2)',
    fillB: 'var(--surface-3)',
    image: null,
  },
  {
    id: 'throwback-vintage-pullover',
    name: 'Throwback Vintage Pullover',
    category: 'Hoodies & Fleece',
    price: 3100,
    stock: 'in-stock',
    unitsSold: 61,
    number: '11',
    pattern: 'diagonal',
    fillA: 'var(--surface-2)',
    fillB: 'var(--bg-raised)',
    image: null,
  },
  {
    id: 'franchise-graphic-tee',
    name: 'Franchise Graphic Tee',
    category: 'Tees & Tops',
    price: 1850,
    stock: 'preorder',
    unitsSold: 22,
    number: '32',
    pattern: 'panel',
    fillA: 'var(--surface-3)',
    fillB: 'var(--bg-raised)',
    image: null,
  },
  {
    id: 'wild-card-graphic-tee',
    name: 'Wild Card Graphic Tee',
    category: 'Tees & Tops',
    price: 1950,
    stock: 'in-stock',
    unitsSold: 48,
    number: '4',
    pattern: 'yoke',
    fillA: 'var(--surface-2)',
    fillB: 'var(--accent-dim)',
    image: null,
  },
];

export const stockLabels = {
  'in-stock': 'In Stock',
  low: 'Low Stock',
  preorder: 'Pre-Order',
};

export function formatPHP(amount) {
  return `₱${amount.toLocaleString('en-PH')}`;
}
