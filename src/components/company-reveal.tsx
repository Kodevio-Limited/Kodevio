"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
 * Slides the transition band + Company Logo section up from the bottom of the
 * screen over the sticky hero, scrubbed with a power2.out ease. The animation
 * lives on an inner wrapper so ScrollTrigger measures the untransformed layout
 * (triggering transforms are measured after paint and would shift the start).
 */
export default function CompanyReveal({
  enabled = true,
  children,
}: {
  enabled?: boolean;
  children: ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { y: "100vh" },
        {
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: outerRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );
    }, outerRef);

    return () => ctx.revert();
  }, [enabled]);

  return (
    <div ref={outerRef} className="relative z-10">
      <div ref={innerRef} className="relative will-change-transform">
        {children}
      </div>
    </div>
  );
}
