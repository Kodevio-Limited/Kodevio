"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
 * Figma node 678:17762 — last component of the page:
 *  left card 1216×484 #7d91f5 r20 (code image right),
 *  right card 525×484 #0d1f1f r20 (world map vector),
 *  Satoshi Medium 40 titles (white), Satoshi Regular 28 copy.
 */
export default function FooterShowcase({ enabled = true }: { enabled?: boolean }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(gsap.utils.toArray<HTMLElement>(".footer-card", rootRef.current), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: rootRef.current, start: "top 80%", once: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [enabled]);

  return (
    <section
      ref={rootRef}
      aria-label="Engineering advantages"
      className="relative mx-auto w-full max-w-[1765px] bg-white px-6 py-16 sm:px-12 lg:py-24"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
        {/* Future-Proof Code That Scales */}
        <article className="footer-card relative h-[400px] w-full overflow-hidden rounded-[20px] bg-[#7d91f5] shadow-[0_1px_3.8px_rgba(0,0,0,0.07)] sm:h-[484px] lg:w-[1216px]">
          <p className="absolute left-[44px] top-[44px] max-w-[40%] font-['Satoshi'] text-[28px] font-medium leading-[1.4] text-white sm:text-[40px]">
            Future-Proof Code That Scales
          </p>
          <p className="absolute left-[44px] top-[240px] max-w-[40%] font-['Satoshi'] text-[18px] leading-[1.4] text-white sm:top-[284px] sm:text-[28px]">
            Built with React, Next.js, and modular components, our software architecture grows effortlessly alongside your user base without technical debt.
          </p>
          <div className="absolute bottom-0 left-[41.5%] right-0 top-[9px]">
            <Image
              src="/figma_assets/footer-code.png"
              alt="Code editor showing a scalable React architecture"
              fill
              sizes="(max-width: 1024px) 60vw, 724px"
              className="object-cover object-left-top"
            />
          </div>
        </article>

        {/* Ultra-Fast Speed */}
        <article className="footer-card relative h-[400px] w-full overflow-hidden rounded-[20px] bg-[#0d1f1f] shadow-[0_1px_3.8px_rgba(0,0,0,0.07)] sm:h-[484px] lg:w-[525px]">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <Image src="/figma_assets/footer-map.svg" alt="" fill sizes="525px" className="object-cover" />
          </div>
          <p className="absolute left-[31px] top-[44px] w-[393px] font-['Satoshi'] text-[28px] font-medium leading-[1.4] text-white sm:text-[40px]">
            Ultra-Fast Speed
          </p>
          <p className="absolute bottom-[34px] left-[31px] w-[464px] max-w-[90%] font-['Satoshi'] text-[18px] leading-[1.4] text-[#f2f2f2] sm:text-[28px]">
            We optimize every line of code so your platform loads in under a second maximizing user retention.
          </p>
        </article>
      </div>
    </section>
  );
}
