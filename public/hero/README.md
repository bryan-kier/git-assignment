# Hero background

`hero-athlete.png` is the current hero background, referenced by `HERO_BACKGROUND` in
`src/data/media.js` (set via the `publicAsset()` helper). It renders full-bleed behind the
homepage hero copy, with a CSS scrim gradient over it for text contrast. Kept through the
pivot to NFL apparel since it's sport-neutral in tone (dark, motion-blurred action shot) —
though the specific jersey design in it isn't NFL-specific, so swap it if that matters.

`hero-jerseys-only.png` is a generated variant kept here unused, in case it's useful elsewhere.

To replace the background: drop a new file in here and point `HERO_BACKGROUND` at it via
`publicAsset('hero/<filename>')`. No other code changes needed.
