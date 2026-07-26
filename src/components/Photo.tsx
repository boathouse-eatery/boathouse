import type { SiteImage } from "../data/images";

type Props = {
  image: SiteImage;
  className?: string;
  /** hero/above-the-fold images should load eagerly */
  priority?: boolean;
};

export function Photo({ image, className = "", priority = false }: Props) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className={className}
      style={image.focus ? { objectPosition: image.focus } : undefined}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
