"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * Figma node 694:17772 — service rail 3688×1080: 5 cards, 790/725 wide,
 * overlapped by 33px (no gaps), in this order:
 *   UI/UX (light) · App Development (dark) · Web Development (light) ·
 *   AI Integration (dark) · Logo & Branding (light).
 * Keeps the black intro (icon + text reveal), then scrolls the whole rail.
 */
const LINES = ["Everything You Need", "to Design, Build, and", "Scale Digital Products"];

type Card = {
  title: string;
  desc: string;
  img: string;
  dark: boolean;
  gradient: string;
  width: number;
};

const CARDS: Card[] = [
  { title: "UI/UX Design", desc: "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.", img: "/what-we-do/raw_3.png", dark: false, gradient: "from-[#f5f3ff] to-[#e5e0f7]", width: 790 },
  { title: "App Development", desc: "We design user-friendly experiences for iPhone, Android, Flutter, and React Native apps, so your product feels polished, easy to use, and built for growth.", img: "/what-we-do/raw_0.png", dark: true, gradient: "from-[#f8f2fe] to-[#ce96ff]", width: 725 },
  { title: "Web Development", desc: "Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.", img: "/what-we-do/raw_2.png", dark: false, gradient: "from-[#f0fdf4] to-[#c9f0d4]", width: 790 },
  { title: "AI Integration", desc: "Our team integrates AI into product experiences where it creates real value simplifying workflows, improving decisions, and making products smarter, faster, and easier to use.", img: "/what-we-do/raw_1.png", dark: true, gradient: "from-[#eff6ff] to-[#93c5fd]", width: 725 },
  { title: "Logo & Branding", desc: "Logo Design, Full Branding, Business Branding, 3D Logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.", img: "/what-we-do/raw_4.png", dark: false, gradient: "from-[#fff7ed] to-[#fde3c4]", width: 790 },
];

const ZOOM = 0.72;
// Rail geometry is measured at runtime so the LAST card always lands flush
// against the right edge of whatever viewport is used.
const railStartX = () => window.innerWidth / ZOOM;
const railEndX = (rail: HTMLElement) => -(rail.offsetWidth - window.innerWidth / ZOOM);

export default function WhatWeDoSection({ enabled = true }: { enabled?: boolean }) {
  const rootRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const ctx = gsap.context(() => {
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const lines = gsap.utils.toArray<HTMLElement>(".what-line", rootRef.current);
      const rail = rootRef.current!.querySelector<HTMLElement>(".what-rail")!;
      const stage = rootRef.current!.querySelector<HTMLElement>(".what-heading-stage");

      if (isReduced) {
        gsap.set(lines, { opacity: 1, yPercent: 0 });
        if (stage) gsap.set(stage, { opacity: 0 });
        if (rail) gsap.set(rail, { opacity: 1, x: railEndX(rail) });
        return;
      }

      gsap.set(lines, { opacity: 0, yPercent: 100 });
      gsap.set(rail, { opacity: 1, x: railStartX() });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=420%",
          pin: true,
          pinSpacing: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(lines, { yPercent: 0, opacity: 1, ease: "power3.out", stagger: 0.1, duration: 0.7 }, 0)
        .to(stage, { opacity: 0, ease: "power2.in", duration: 0.35 }, 0.9)
        .to(rail, { x: () => railEndX(rail), ease: "none", duration: 3.2 }, 1.15)
        .to({}, { duration: 1.2 });
    }, rootRef);

    return () => ctx.revert();
  }, [enabled]);

  return (
    <section
      ref={rootRef}
      id="services"
      aria-label="What We Do"
      className="relative w-full overflow-hidden bg-black"
    >
      <div
        ref={pinRef}
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black"
      >
        {/* Black intro */}
        <div className="what-heading-stage relative z-10 flex w-full max-w-[803px] flex-col items-center gap-[35px] px-5 text-center">
          <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[8px] border-2 border-[#7974ee]">
            <svg viewBox="0 0 24 24" fill="none" className="size-[30px] text-[#7974ee]" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
            </svg>
          </div>

          <h2 className="w-full font-['Poppins',sans-serif] text-[34px] font-medium leading-[1.4] text-white sm:text-[46px] lg:text-[60px]">
            {LINES.map((line, idx) => (
              <span key={idx} className="block overflow-hidden py-[2px]">
                <span className="what-line block will-change-transform">{line}</span>
              </span>
            ))}
          </h2>
        </div>

        {/* Full service rail — all cards, overlapped by 33px, no gaps */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="what-rail flex items-center" style={{ zoom: 0.72 }}>
            {CARDS.map((card, i) => (
              <article
                key={card.title}
                className={`relative h-[1080px] shrink-0 overflow-hidden rounded-[24px] ${
                  card.dark ? "bg-[#0d0d0d] text-white" : "bg-[#f4f2f8] text-[#0d0d0d]"
                }`}
                style={{ width: card.width, marginLeft: i === 0 ? 0 : -33 }}
              >
                {card.dark && (
                  <>
                    <h3 className="absolute left-0 right-0 top-[142px] text-center font-['Poppins',sans-serif] text-[57px] font-medium leading-[1.4] text-white">
                      {card.title}
                    </h3>
                    <p className="absolute left-1/2 top-[248px] w-[634px] -translate-x-1/2 text-center font-['Satoshi'] text-[23px] leading-[1.4] text-[#f2f2f2]">
                      {card.desc}
                    </p>
                    <a
                      href="#contact"
                      className="absolute left-1/2 top-[381px] inline-flex h-[59px] w-[187px] -translate-x-1/2 items-center justify-center gap-2 rounded-[57px] font-['Satoshi'] text-[20px] font-bold text-white"
                      style={{ backgroundImage: "linear-gradient(166.67deg, rgb(154,150,255) 8.4213%, rgb(104,97,238) 47.735%, rgb(88,81,234) 87.048%)" }}
                    >
                      See More
                      <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </>
                )}

                {!card.dark && (
                  <>
                    <h3 className="absolute left-[78px] top-[142px] w-[634px] font-['Poppins',sans-serif] text-[57px] font-medium leading-[1.4]">
                      {card.title}
                    </h3>
                    <p className="absolute left-[78px] top-[248px] w-[634px] font-['Satoshi'] text-[23px] leading-[1.4] text-[#4b4b4b]">
                      {card.desc}
                    </p>
                    <a
                      href="#contact"
                      className="absolute left-[301px] top-[381px] inline-flex h-[59px] w-[187px] items-center justify-center gap-2 rounded-[57px] font-['Satoshi'] text-[20px] font-bold text-white"
                      style={{ backgroundImage: "linear-gradient(166.67deg, rgb(154,150,255) 8.4213%, rgb(104,97,238) 47.735%, rgb(88,81,234) 87.048%)" }}
                    >
                      See More
                      <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </>
                )}

                <div
                  className={`absolute left-1/2 top-[484px] h-[475px] w-[502px] -translate-x-1/2 overflow-hidden rounded-[16px] bg-gradient-to-b ${card.gradient} p-6`}
                >
                  <div className="relative h-full w-full">
                    <Image src={card.img} alt={card.title} fill sizes="502px" className="object-contain" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
