import { Link } from "react-router-dom";
import { images } from "../data/images";

type Props = {
  light?: boolean;
  size?: number;
  showWordmark?: boolean;
};

// The supplied logo is a JPEG with a white background, so it's clipped to a
// circle and scaled slightly past the frame to hide the square white corners.
export function Logo({ light = false, size = 44, showWordmark = true }: Props) {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
      aria-label="The Boathouse Eatery, home"
    >
      <span
        className="block shrink-0 overflow-hidden rounded-full ring-1 ring-black/10"
        style={{ width: size, height: size }}
      >
        <img
          src={images.logo.src}
          alt={images.logo.alt}
          className="h-full w-full scale-[1.06] object-cover"
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`whitespace-nowrap font-serif text-base font-semibold tracking-tight sm:text-lg ${
              light ? "text-white" : "text-bay-800"
            }`}
          >
            Boathouse Eatery
          </span>
          <span
            className={`mt-0.5 whitespace-nowrap font-sans text-[10px] font-medium uppercase tracking-[0.18em] ${
              light ? "text-bay-100" : "text-bay-500"
            }`}
          >
            Georgian Bay · Midland
          </span>
        </span>
      )}
    </Link>
  );
}
