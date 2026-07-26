# The Boathouse Eatery — Website Mockup

A modern, mobile-first marketing website mockup for The Boathouse Eatery, a
waterfront restaurant on the Town Docks of Midland, Ontario. Built as a
redesign proposal: a single-scroll homepage plus five interior pages
(About, Menus, Live Music, Gallery, Contact).

**Stack:** Vite + React + TypeScript + Tailwind CSS v4 + React Router.
No backend — all content lives in typed data files under `src/data/` so
it's easy to edit without touching component code.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to `http://localhost:5173`).

Other commands:

```bash
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

> **Note for this specific folder:** this project lives at a path
> containing an `&` (`...Admin & Management\Website Build`). On Windows,
> npm's generated `.cmd` shims (the usual way `npm run dev` invokes `vite`/
> `tsc`) mis-parse paths containing `&`, which breaks `npm run dev` /
> `npm run build` with a confusing "Cannot find module" error. To work
> around it, the scripts in `package.json` call `node` directly on each
> tool's JS entry point (e.g. `node node_modules/vite/bin/vite.js`)
> instead of relying on the shim. This has been tested and works from this
> folder. If you ever move the project to a path without `&` in it, the
> scripts still work exactly the same way.

## Editing content

Everything a non-developer would want to update lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `src/data/siteInfo.ts` | Business name, address, phone, hours, and links (OpenTable, Toast gift cards, Facebook, Instagram, Google Maps), main nav |
| `src/data/menu.ts` | Every menu category and item shown on the homepage "On the Menu" cards and the full `/menus` page (Lunch & Dinner, Vegan/Vegetarian & GF, Desserts, Cocktails, Kids) |
| `src/data/liveMusic.ts` | The live music schedule — **single source of truth** for both the homepage "Live this week" strip and the full `/live-music` calendar. Add a row per date; set `act: null` to show "No show scheduled." |
| `src/data/testimonials.ts` | Guest quotes shown in the "Guest Stories" section. The first one (Tiffany M.) is a real review; the other two are marked `isPlaceholder: true` — replace them with real reviews and remove that flag |
| `src/data/gallery.ts` | Gallery images (used on the homepage preview and the full `/gallery` page), each with alt text and a category |

No code changes are required to update prices, hours, the music schedule,
or menu items — just edit the relevant data file and save.

## Images

**No third-party images are hotlinked anywhere in this project.** Every
"photo" you see is a generated, on-brand SVG placeholder built from the
Boathouse palette (see `src/components/PlaceholderImage.tsx`) — sunset
gradients, dock silhouettes, plated food, string lights, etc. — so the
mockup looks intentional rather than leaving grey boxes, and so it runs
fully offline with zero external image dependencies.

**Every placeholder currently in use:**

| Variant | Used in |
| --- | --- |
| `sunset-bay` | Homepage hero |
| `patio-golden` | Homepage "Welcome" section, About "Patio" section, gallery |
| `dock-twilight` | Homepage "Experience" section, Gallery page banner, gallery grid |
| `interior-timber` | Homepage "Private Events" section, About page, gallery |
| `wine-glasses` | Contact page banner, gallery |
| `waterfront-view` | Homepage reservations CTA band, About page banner, gallery |
| `food-calamari`, `food-salad`, `dessert`, `burger`, `cocktail` | Menus page banner, gallery |
| `live-band` | Live Music page banner, gallery |

**To swap in real photography:** replace the `<PlaceholderImage variant="..." alt="..." />`
usage with a standard `<img src="/images/whatever.jpg" alt="..." />` (drop
real photos into `public/images/`), or keep the same component API and
swap its internals. Update the `alt` text on each usage to describe the
real photo. Gallery entries in `src/data/gallery.ts` carry their own `alt`
text per image — update those too.

## Project structure

```
src/
  components/       Shared UI: Header, Footer, Layout, Button, Reveal
                     (scroll-reveal wrapper), PlaceholderImage, Lightbox
  sections/         Homepage sections (Hero, Welcome, MenuGrid, etc.)
  pages/            Route-level pages (Home, About, Menus, LiveMusic,
                     Gallery, Contact, NotFound)
  data/             All editable content — see table above
  hooks/            useScrollReveal (IntersectionObserver-based reveal)
```

Routing (`src/App.tsx`) uses React Router. `/menus/kids` and
`/menus/desserts` both render the Menus page and auto-scroll to the
matching in-page section.

## What's next

This is a local mockup only — nothing has been pushed to GitHub or
deployed yet. Once it's been reviewed, the next step is to initialize git,
push to a GitHub repo under the client's own account, and deploy to
Vercel under the client's own account.
