"use client";

/*
 * Figma node 324:23998 — transparent transition layer, 1920 × 258, sitting on
 * the last 258px of the hero (1120 → 1378) and blending into the Company Logo
 * section. It's absolutely placed so it overlays the hero without consuming
 * layout, and rides with the Company section's reveal.
 */
export default function TransitionSection() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-[-222px] z-20 h-[224px] w-full [transform:translateZ(0)]"
      style={{
        backgroundColor: "#f8f8f8",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.06) 18%, rgba(0,0,0,0.18) 36%, rgba(0,0,0,0.38) 54%, rgba(0,0,0,0.64) 72%, rgba(0,0,0,0.88) 88%, #000 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.06) 18%, rgba(0,0,0,0.18) 36%, rgba(0,0,0,0.38) 54%, rgba(0,0,0,0.64) 72%, rgba(0,0,0,0.88) 88%, #000 100%)",
      }}
    />
  );
}
