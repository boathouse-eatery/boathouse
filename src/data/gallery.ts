// Gallery images — all real Boathouse photography.
// Add more by dropping files in `public/images/` and adding an entry here.

import type { SiteImage } from "./images";
import { images } from "./images";

export type GalleryCategory =
  | "Patio"
  | "Food"
  | "Live Music"
  | "Inside"
  | "Dockside";

export type GalleryImage = SiteImage & {
  id: string;
  category: GalleryCategory;
};

export const galleryImages: GalleryImage[] = [
  { id: "patio-sunset", ...images.patioSunset, category: "Patio" },
  { id: "patio-daytime", ...images.patioDaytime, category: "Patio" },
  { id: "tiki-hut", ...images.tikiHut, category: "Patio" },
  { id: "live-music", ...images.liveMusic, category: "Live Music" },
  { id: "bar-interior", ...images.barInterior, category: "Inside" },
  { id: "interior-paddleboard", ...images.interiorPaddleboard, category: "Inside" },
  { id: "fish-and-chips", ...images.fishAndChips, category: "Food" },
  { id: "server-plates", ...images.serverPlates, category: "Food" },
  { id: "ice-cream", ...images.iceCream, category: "Dockside" },
];

// Featured subset shown in the homepage gallery preview.
const previewIds = [
  "patio-sunset",
  "tiki-hut",
  "fish-and-chips",
  "live-music",
  "bar-interior",
  "ice-cream",
];

export const galleryPreviewImages = previewIds
  .map((id) => galleryImages.find((img) => img.id === id))
  .filter((img): img is GalleryImage => Boolean(img));
