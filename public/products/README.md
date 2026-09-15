# Product photos

Empty for now — every product's `image` field in `src/data/products.js` is `null`, so all six
render as the vector `JerseyGraphic` fallback. The photos used earlier were soccer-kit mockups
from before the group's Phase 1 concept was finalized as NFL apparel, so they were pulled.

To add a real photo: drop the file in here, then set that product's `image` field to
`publicAsset('products/<filename>')`. No other code changes needed.
