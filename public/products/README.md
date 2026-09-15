# Product photos

All six catalog products use a real photo here, referenced by each product's `image` field
in `src/data/products.js` (set via the `publicAsset()` helper).

**Note:** these are real Nike-branded, real-NFL-team jersey product photos (Raiders, Steelers,
Seahawks, Bears, Cowboys, Vikings — visible NFL shield and team logos, "ANY NAME / 00"
customizer placeholders), almost certainly sourced from an official retailer's live product
catalog based on the original filenames' CDN pattern. Used by explicit request despite that —
this business is an unofficial importer/reseller, not a licensed Nike/NFL retailer, so these
photos imply a relationship that doesn't exist. Four of the six are also mismatched with their
product's category (jersey photos on Hoodies & Fleece / Tees & Tops listings), since all six
uploads were jerseys. Worth revisiting before this goes anywhere beyond a class project.

To replace: drop a file in here, then set that product's `image` field to
`publicAsset('products/<filename>')`. Leaving `image` as `null` falls back to the vector
`JerseyGraphic` render instead — no other code changes needed either way.
