"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/*
 * Orbix text motion (measured): their entry animations are block fades/rises,
 * while their per-character "roll" (SplitText chars, masked, yPercent -100)
 * uses duration 0.26s, stagger 0.015, ease power2.inOut — and their card entry
 * uses duration 1.15s, ease power3.out. For headings/body we use a masked
 * per-line slide: yPercent 110 → 0, 0.9s, power3.out, 0.075s line stagger,
 * triggered when the element's top passes 88% of the viewport, once.
 * Only transform is animated (mask hides the line before it slides in).
 */
export default function TextReveal({ enabled = true }: { enabled?: boolean }) {
  useEffect(() => {
    if (!enabled) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const splits: SplitText[] = [];
    let ctx: gsap.Context | null = null;

    const build = () => {
      if (cancelled) return;
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      ctx = gsap.context(() => {
        els.forEach((el) => {
          const split = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "reveal-line",
          });
          splits.push(split);

          gsap.from(split.lines, {
            yPercent: 110,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.075,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        });
        // Line wrapping can change heights by a pixel; re-measure pins once.
        requestAnimationFrame(() => ScrollTrigger.refresh());
      }, els[0]?.parentElement ?? document.body);
    };

    // Split after fonts settle so line breaks match the final layout.
    Promise.resolve(document.fonts?.ready)
      .catch(() => undefined)
      .then(() => requestAnimationFrame(build));

    return () => {
      cancelled = true;
      splits.forEach((s) => s.revert());
      ctx?.revert();
    };
  }, [enabled]);

  return null;
}
