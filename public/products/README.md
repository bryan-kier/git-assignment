# Product photos

Real photos for the six catalog products live here already — see each product's `image` field
in `src/data/products.js` (set via the `publicAsset()` helper).

To add or replace one: drop the file in here, then set that product's `image` field to
`publicAsset('products/<filename>')`. Leaving `image` as `null` falls back to the vector
`JerseyGraphic` render automatically — no other code changes needed either way.
