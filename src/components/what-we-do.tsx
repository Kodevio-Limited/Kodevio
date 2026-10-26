"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * Figma node 444:2231 — black 1920×1080 stage, icon + heading; service cards
 * (725×1080) slide in from the right edge and travel to the left, one per
 * scroll step, after the text reveal.
 */
const LINES = ["Everything You Need", "to Design, Build, and", "Scale Digital Products"];

const CARDS = [
  { title: "App Development", desc: "We design user-friendly experiences for iPhone, Android, Flutter, and React Native apps, so your product feels polished, easy to use, and built for growth.", img: "/what-we-do/raw_0.png", gradient: "from-[#f8f2fe] to-[#ce96ff]" },
  { title: "AI Integration", desc: "Our team integrates AI into product experiences where it creates real value — simplifying workflows, improving decisions, and making products smarter and faster.", img: "/what-we-do/raw_1.png", gradient: "from-[#eff6ff] to-[#93c5fd]" },
  { title: "Web Engineering", desc: "We engineer blazingly fast web applications, SaaS dashboards, and marketing websites on modern Next.js and cloud architectures built for scale.", img: "/what-we-do/raw_2.png", gradient: "from-[#f0fdf4] to-[#86efac]" },
  { title: "UI/UX Design", desc: "World-class interface design, design systems, and product experiences that stand out in crowded markets and captivate users at first glance.", img: "/what-we-do/raw_3.png", gradient: "from-[#fff7ed] to-[#fdba74]" },
  { title: "Logo & Branding", desc: "Logo design, full branding, business branding, 3d logo, custom logo, visual identity, brand strategy, social media branding, and brand guidelines.", img: "/what-we-do/raw_4.png", gradient: "from-[#f5f3ff] to-[#c4b5fd]" },
];

export default function WhatWeDoSection({ enabled = true }: { enabled?: boolean }) {
  const rootRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const ctx = gsap.context(() => {
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const lines = gsap.utils.toArray<HTMLElement>(".what-line", rootRef.current);
      const slides = gsap.utils.toArray<HTMLElement>(".what-slide", rootRef.current);

      if (isReduced) {
        gsap.set(lines, { opacity: 1, yPercent: 0 });
        gsap.set(slides, { opacity: 1, xPercent: 0 });
        return;
      }

      gsap.set(lines, { opacity: 0, yPercent: 100 });
      gsap.set(slides, { opacity: 0, xPercent: 110 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=340%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      const headingStage = rootRef.current!.querySelector<HTMLElement>(".what-heading-stage")!;

      // 1. Text reveal
      tl.to(lines, { yPercent: 0, opacity: 1, ease: "power3.out", stagger: 0.1, duration: 0.7 }, 0)
        .to(headingStage, { opacity: 0, ease: "power2.in", duration: 0.35 }, 0.85)
        .to({}, { duration: 0.15 });

      // 2. Cards: one per scroll step, right → left, each entrance finishes first.
      slides.forEach((slide, i) => {
        const at = 0.9 + i * 1.15;
        tl.fromTo(
          slide,
          { xPercent: 110, opacity: 0 },
          { xPercent: 0, opacity: 1, ease: "power3.out", duration: 1 },
          at,
        );
        if (i > 0) {
          tl.to(slides[i - 1], { opacity: 0, duration: 0.3, ease: "power1.out" }, at);
        }
      });

      tl.to({}, { duration: 0.45 });
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
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-5"
      >
        {/* Heading stage */}
        <div className="what-heading-stage relative z-10 flex w-full max-w-[803px] flex-col items-center gap-[35px] text-center">
          <div className="what-icon flex size-[50px] shrink-0 items-center justify-center rounded-[8px] border-2 border-[#7974ee]">
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

        {/* Service cards stage */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="what-card absolute left-1/2 top-1/2 h-[1080px] w-[725px] -translate-x-1/2 -translate-y-1/2 scale-[0.72]"
            >
              <div className="what-slide flex h-full w-full flex-col items-center overflow-hidden bg-[#0d0d0d] px-[46px] pt-[142px]">
                <h3 className="font-['Poppins',sans-serif] text-[57px] font-medium leading-[1.4] text-white">{card.title}</h3>
                <p className="mt-[26px] text-center font-['Satoshi'] text-[23px] leading-[1.4] text-[#f2f2f2]">{card.desc}</p>
                <a
                  href="#contact"
                  className="pointer-events-auto mt-[37px] inline-flex h-[59px] items-center justify-center gap-2 rounded-[57px] px-[34px] font-['Satoshi'] text-[20px] font-bold text-white"
                  style={{ backgroundImage: "linear-gradient(166.67deg, rgb(154,150,255) 8.4213%, rgb(104,97,238) 47.735%, rgb(88,81,234) 87.048%)" }}
                >
                  See More
                  <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className={`mt-[68px] h-[475px] w-[502px] shrink-0 overflow-hidden rounded-[16px] bg-gradient-to-b ${card.gradient} p-6`}>
                  <div className="relative h-full w-full">
                    <Image src={card.img} alt={card.title} fill sizes="502px" className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
