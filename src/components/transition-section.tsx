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
      className="pointer-events-none absolute left-0 top-[-260px] z-20 h-[260px] w-full translate-z-0 [transform:translateZ(0)]"
      style={{
        background:
          "linear-gradient(to bottom, rgba(248,248,248,0) 0%, rgba(248,248,248,0.35) 15%, rgba(248,248,248,0.75) 40%, rgba(248,248,248,0.95) 70%, #F8F8F8 100%)",
      }}
    />
  );
}
