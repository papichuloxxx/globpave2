'use client';

// Must match WIDTHS in scripts/optimize-images.mjs
const WIDTHS = [384, 640, 828, 1080, 1280];
const OPTIMIZED = /\/images\/(projects|services)\/([^/]+)\.(jpe?g|png|webp)$/i;

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const match = src.match(OPTIMIZED);
  if (!match) return src;
  const size = WIDTHS.find(w => w >= width) ?? WIDTHS[WIDTHS.length - 1];
  return src.replace(OPTIMIZED, `/images/opt/$1/$2-${size}.webp`);
}
