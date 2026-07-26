import { Hero } from "../sections/Hero";
import { Welcome } from "../sections/Welcome";
import { MenuGrid } from "../sections/MenuGrid";
import { Experience } from "../sections/Experience";
import { LiveMusicStrip } from "../sections/LiveMusicStrip";
import { IceCream } from "../sections/IceCream";
import { GalleryPreview } from "../sections/GalleryPreview";
import { PrivateEvents } from "../sections/PrivateEvents";
import { Testimonials } from "../sections/Testimonials";
import { ReservationsCta } from "../sections/ReservationsCta";

export function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <MenuGrid />
      <Experience />
      <LiveMusicStrip />
      <IceCream />
      <GalleryPreview />
      <PrivateEvents />
      <Testimonials />
      <ReservationsCta />
    </>
  );
}
