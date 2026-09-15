// Mock catalog data. No backend yet — this stands in for the Product & Catalog API
// described in the Phase 4 architecture doc until that service exists.

export const categories = [
  {
    id: 'football-kits',
    number: '01',
    name: 'Football Kits',
    description: 'Home, away, and third kits sourced pre-season through post-season.',
  },
  {
    id: 'basketball-jerseys',
    number: '02',
    name: 'Basketball Jerseys',
    description: "Player-issue cuts and retro throwbacks you won't find on local racks.",
  },
  {
    id: 'streetwear',
    number: '03',
    name: 'Streetwear & Collabs',
    description: 'Limited drops and collector pieces, sourced in small, honest batches.',
  },
];

export const products = [
  {
    id: 'continental-cup-home-kit',
    name: 'Continental Cup Home Kit',
    category: 'Football Kits',
    price: 3450,
    stock: 'in-stock',
    number: '10',
    pattern: 'diagonal',
    fillA: 'var(--surface-3)',
    fillB: 'var(--bg-raised)',
  },
  {
    id: 'derby-night-away-kit',
    name: 'Derby Night Away Kit',
    category: 'Football Kits',
    price: 3200,
    stock: 'preorder',
    number: '23',
    pattern: 'panel',
    fillA: 'var(--accent-hover)',
    fillB: 'var(--accent-dim)',
  },
  {
    id: 'city-rivals-third-kit',
    name: 'City Rivals Third Kit',
    category: 'Basketball Jerseys',
    price: 3600,
    stock: 'low',
    number: '5',
    pattern: 'yoke',
    fillA: 'var(--surface-2)',
    fillB: 'var(--surface-3)',
  },
  {
    id: 'classic-retro-pullover',
    name: 'Classic Retro Pullover',
    category: 'Streetwear',
    price: 2850,
    stock: 'in-stock',
    number: '11',
    pattern: 'diagonal',
    fillA: 'var(--surface-2)',
    fillB: 'var(--bg-raised)',
  },
  {
    id: 'player-issue-practice-jersey',
    name: 'Player-Issue Practice Jersey',
    category: 'Basketball Jerseys',
    price: 4100,
    stock: 'preorder',
    number: '32',
    pattern: 'panel',
    fillA: 'var(--surface-3)',
    fillB: 'var(--bg-raised)',
  },
  {
    id: 'vintage-warmup-track-top',
    name: 'Vintage Warm-Up Track Top',
    category: 'Streetwear',
    price: 2600,
    stock: 'in-stock',
    number: '4',
    pattern: 'yoke',
    fillA: 'var(--surface-2)',
    fillB: 'var(--accent-dim)',
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
