# Product photos

All six catalog products use a real photo here, referenced by each product's `image` field
in `src/data/products.js` (set via the `publicAsset()` helper).

**Note:** these are the original uploaded photos — soccer-kit mockups, not NFL apparel. They
were pulled during the pivot to the NFL-focused "100-Yard Apparel" concept for being the wrong
sport, then restored by request despite the mismatch. Swap them for real NFL-appropriate photos
whenever those exist: drop the file in here, then set that product's `image` field to
`publicAsset('products/<filename>')`. Leaving `image` as `null` falls back to the vector
`JerseyGraphic` render instead — no other code changes needed either way.
