# git-assignment — Sports Fashion E-Commerce

Group project: an e-commerce platform for imported sports fashion (football kits, basketball jerseys, streetwear) shipping within the Philippines only. Brand name is a placeholder ("Kitroom") pending Phase 1.

## Repo layout

- **`frontend/`** — the working React app (Vite). This is the real, running front-end: routing, componentized pages, mock product data. No backend yet — see Phase 4 in the project docs for the planned MERN architecture (Node/Express + MongoDB) this will eventually connect to.
- **`phase-6-wireframes/`** — static wireframe/mockup snapshot from the Phase 6 design pass. Kept for reference; `frontend/` is the up-to-date, buildable version of the same design.

## Running the app

```bash
cd frontend
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production build; `npm run lint` runs oxlint.

## Status

| Screen | Status |
|---|---|
| Homepage | Built — hero, categories, featured drops, trust section, newsletter signup |
| Product Detail | Built — simple fidelity, size selector, mock product lookup |
| Checkout | Built — simple fidelity, static cart, shipping form, payment method picker |
| Admin Dashboard | Built — simple fidelity, Overview / Inventory tabs |
| Backend / API | Not started |
