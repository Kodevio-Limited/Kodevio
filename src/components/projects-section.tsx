"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
 * Figma node 565:576 "Projects" — centred header (icon, 930-wide Poppins 60
 * heading, Satoshi 28 subcopy, pill CTA) above a 3-up project grid (565×564
 * cards from the design), placed after Other Brands.
 */
const PROJECTS = [
  { title: "Fintech Dashboard", tag: "SaaS Platform", img: "/digital-products/raw_0.png" },
  { title: "AI Onboarding", tag: "AI Product", img: "/digital-products/raw_1.png" },
  { title: "Mobile Commerce", tag: "Mobile App", img: "/digital-products/raw_2.png" },
];

export default function ProjectsSection({ enabled = true }: { enabled?: boolean }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".project-card", rootRef.current);
      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [enabled]);

  return (
    <section
      ref={rootRef}
      id="projects"
      aria-label="Projects"
      className="relative mx-auto w-full max-w-[1763px] bg-white px-6 py-20 sm:px-12 lg:py-28"
    >
      <div className="mx-auto flex max-w-[930px] flex-col items-center text-center">
        <div className="flex size-[50px] items-center justify-center rounded-[8px] border-2 border-[#9a96ff]">
          <svg viewBox="0 0 24 24" fill="none" className="size-[30px] text-[#9a96ff]" stroke="currentColor" strokeWidth="2">
            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 data-reveal className="mt-[35px] font-['Poppins',sans-serif] text-[36px] font-medium leading-[1.4] text-[#2d2f33] sm:text-[48px] lg:text-[60px]">
          Digital Products Engineered for Real Business Impact
        </h2>
        <p data-reveal className="mt-[28px] max-w-[908px] font-['Satoshi'] text-[18px] leading-[1.4] text-[#686868] sm:text-[28px]">
          Explore how we&apos;ve helped ambitious brands design, build, and scale high converting web platforms, mobile apps, and AI-powered solutions.
        </p>
        <a
          href="#contact"
          className="mt-[34px] inline-flex h-[59px] items-center justify-center gap-2 rounded-[57px] px-[34px] font-['Satoshi'] text-[20px] font-bold text-white"
          style={{ backgroundImage: "linear-gradient(171.81deg, rgb(154,150,255) 8.4213%, rgb(104,97,238) 47.735%, rgb(88,81,234) 87.048%)" }}
        >
          See all work
          <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="mt-[68px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="project-card group relative h-[420px] overflow-hidden rounded-[24px] bg-[#f4f4f6] sm:h-[500px] lg:h-[564px]"
          >
            <Image
              src={project.img}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 50vw, 565px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 pt-20">
              <p className="font-['Satoshi'] text-[15px] font-medium uppercase tracking-wider text-white/70">{project.tag}</p>
              <h3 className="mt-1 font-['Satoshi'] text-[26px] font-bold text-white">{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
