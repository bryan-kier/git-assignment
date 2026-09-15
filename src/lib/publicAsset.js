// Prefixes a public/ asset path with Vite's configured base URL, so image
// paths keep working whether the app is hosted at a domain root (the
// default) or under a subpath (e.g. a static preview link).
export function publicAsset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
