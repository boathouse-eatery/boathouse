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

> **Why the scripts call `node` directly:** until 2026-11-09 this project
> lived in the SharePoint library at a path containing an `&`. On Windows,
> npm's generated `.cmd` shims (the usual way `npm run dev` invokes `vite`/
> `tsc`) mis-parse paths containing `&`, which breaks `npm run dev` /
> `npm run build` with a confusing "Cannot find module" error. To work
> around it, the scripts in `package.json` call `node` directly on each
> tool's JS entry point (e.g. `node node_modules/vite/bin/vite.js`)
> instead of relying on the shim. The project now lives at a path with no
> `&`, and the scripts work the same either way, so there is no need to
> change them back.

## Editing content

Everything a non-developer would want to update lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `src/data/siteInfo.ts` | Business name, address, phone, **hours** (currently 11:00 AM – 10:00 PM, seven days), and links (OpenTable, Toast gift cards, Facebook, Instagram, Google Maps), main nav |
| `src/data/images.ts` | Every photo used on the site — path, alt text, focal point |
| `src/data/menu.ts` | Every menu category and item shown on the homepage "On the Menu" cards and the full `/menus` page (Lunch & Dinner, Vegan/Vegetarian & GF, Desserts, Cocktails, Kids) |
| `src/data/liveMusic.ts` | The live music schedule — **single source of truth** for both the homepage "Live this week" strip and the full `/live-music` calendar. Add a row per date; set `act: null` to show "No show scheduled." |
| `src/data/testimonials.ts` | Guest quotes shown in the "Guest Stories" section. The first one (Tiffany M.) is a real review; the other two are marked `isPlaceholder: true` — replace them with real reviews and remove that flag |
| `src/data/gallery.ts` | Gallery images (used on the homepage preview and the full `/gallery` page), each with alt text and a category |

No code changes are required to update prices, hours, the music schedule,
or menu items — just edit the relevant data file and save.

## Images

All photography is **real Boathouse Eatery imagery** supplied by the
client, served locally from `public/images/`. Nothing is hotlinked from a
third-party CDN.

Every image is registered once in `src/data/images.ts` with its path, alt
text and an optional focal point. Components reference images by key, so
**to swap a photo you only change that one file** — drop the new file into
`public/images/` and update the `src`.

| Key | File | Used in |
| --- | --- | --- |
| `logo` | `boathouse-round-logo.jpg` | Header, footer |
| `patioSunset` | `patio-sunset-crowd.jpeg` | Homepage hero, About, reservations CTA |
| `patioDaytime` | `patio-daytime-cruise-ship.jpeg` | Welcome section, About banner |
| `tikiHut` | `tiki-hut-patio.jpeg` | Experience cards, Gallery + Contact banners |
| `barInterior` | `bar-interior-edison.jpeg` | Experience cards, About |
| `interiorPaddleboard` | `interior-paddleboard.jpeg` | Experience cards, Private Events |
| `liveMusic` | `live-music-duo-sunset.jpeg` | Live Music strip + page banner |
| `fishAndChips` | `kitchen-fish-and-chips.jpeg` | Menu feature card, Menus banner |
| `serverPlates` | `server-fish-chips-bowl.jpeg` | Welcome inset |
| `iceCream` | `dockside-sweets-treats.jpeg` | Dockside Sweets & Treats section |

**Unused file:** `summer-hours-banner.jpeg` is kept in `public/images/`
for reference but is not rendered anywhere — it has "11am–11pm" text baked
into it, which no longer matches the site hours (11:00 AM – 10:00 PM).
Delete it or replace it with an updated graphic.

### Known content still needing real data

- **Menu items and prices** in `src/data/menu.ts` are realistic
  placeholders, labelled as such on the page.
- **Live music act names** in `src/data/liveMusic.ts` are sample data.
  The days (Thursday–Sunday) match boathouseeatery.com, but the real site
  doesn't publish act names, so a visible "Sample schedule" banner is
  shown on `/live-music`. Set `showSampleNotice = false` once the real
  calendar is in.
- **Two of the three testimonials** in `src/data/testimonials.ts` are
  placeholders, flagged in the UI. The Tiffany M. quote is real.

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

## Set up on a new computer

The repo lives at `C:\Users\<you>\code\boathouse\boathouse-website`. Never put
it in a OneDrive or SharePoint folder (it moved out of `Admin & Management\Website Build`
on 2026-11-09). GitHub is the backup.

```
git clone git@github-boathouse:boathouse-eatery/boathouse.git boathouse-website
cd boathouse-website
npm install
npm run build
```

`github-boathouse` is an SSH host alias for the boathouse-eatery key (see
`~/.ssh/config` and the `includeIf` rule in `~/.gitconfig`). Without it, clone
from `https://github.com/boathouse-eatery/boathouse.git`.

- **Environment variables:** none. The site reads no env vars, so there is
  nothing to copy from Vercel or LastPass.
- **Deploys:** Vercel builds `main` on every push.
- **Scheduled tasks and local scripts:** none depend on this repo.
