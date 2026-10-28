"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    id: 1,
    title: "Calorie Tracker | Mobile App",
    description:
      "Lifted is a mobile wellness app designed to help users stay consistent with their health goals.",
    image: "/digital-products/3f3d7.png",
    bg: "bg-gradient-to-b from-[#ffecd8] to-[#ff8200]",
    hasBaseBanner: true,
  },
  {
    id: 2,
    title: "Sales Analytics | SaaS Platform",
    description:
      "A high-velocity dashboard empowering venture-backed revenue teams to track pipeline velocity in real time.",
    image: "/digital-products/a4489.png",
    bg: "bg-[#f5f6f8]",
  },
  {
    id: 3,
    title: "Brand Identity & Merch",
    description:
      "Distinct packaging, design systems, and identity assets for an organic modern streetwear label.",
    image: "/digital-products/6126f.png",
    bg: "bg-[#eef2f6]",
  },
  {
    id: 4,
    title: "Fintech Mobile Wallet",
    description:
      "Next-generation contactless payment and asset tracking platform built for instant borderless transfers.",
    image: "/digital-products/0802a.png",
    bg: "bg-[#f8fafc]",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Portal",
    description:
      "Self-service enterprise dashboard for orchestrating Kubernetes clusters and monitoring real-time telemetry.",
    image: "/digital-products/488ee.png",
    bg: "bg-[#f1f5f9]",
  },
  {
    id: 6,
    title: "Logistics & Fleet Dispatch",
    description:
      "On-demand multi-modal delivery routing platform connecting enterprise merchants with local courier fleets.",
    image: "/digital-products/adc93.png",
    bg: "bg-[#f4f4f5]",
  },
];

export default function DigitalProductsSection({ enabled = true }: { enabled?: boolean }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".figma-case-card", rootRef.current);
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [enabled]);

  return (
    <section
      ref={rootRef}
      id="products"
      aria-label="Digital Products"
      className="relative mx-auto w-full max-w-[1763px] bg-white px-6 sm:px-12 lg:px-0 lg:py-28"
    >
      {/* Header matching Figma node 565:577 */}
      <div className="mx-auto flex max-w-[930px] flex-col items-center text-center">
        {/* Folder Icon Badge */}
        <div className="flex size-[50px] items-center justify-center rounded-[8px] border-2 border-[#9a96ff] p-2">
          <Image
            src="/digital-products/a48e9.svg"
            alt="Folder Icon"
            width={30}
            height={30}
            className="size-[30px]"
          />
        </div>

        <h2
          data-reveal
          className="mt-8 font-['Poppins',sans-serif] text-[36px] sm:text-[48px] lg:text-[60px] font-medium leading-[1.3] text-[#2d2f33]"
        >
          Digital Products Engineered for Real Business Impact
        </h2>

        <p
          data-reveal
          className="mt-6 max-w-[908px] font-['Satoshi'] text-[20px] sm:text-[24px] lg:text-[28px] font-normal leading-[1.4] text-black"
        >
          Explore how we’ve helped ambitious brands design, build, and scale high converting web platforms, mobile apps, and AI-powered solutions.
        </p>

        <div className="mt-8">
          <a
            href="#all-work"
            className="inline-flex h-[59px] items-center justify-center gap-2 rounded-[57px] px-9 py-4 font-['Satoshi'] text-[20px] font-bold text-white shadow-[0px_4px_16px_rgba(104,97,238,0.25)] transition-all duration-300 hover:scale-105"
            style={{
              backgroundImage:
                "linear-gradient(168.14deg, rgb(154, 150, 255) 8.4213%, rgb(104, 97, 238) 47.735%, rgb(88, 81, 234) 87.048%)",
            }}
          >
            <span>See all work</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* 6 Project Cards Grid (3 columns x 2 rows, exact Figma card geometry) */}
      <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[13px]">
        {PROJECTS.map((proj) => (
          <a
            key={proj.id}
            href="#case-study"
            className="figma-case-card group relative block w-full aspect-[579/564] min-h-[500px] select-none text-left transition-transform duration-300 hover:-translate-y-1.5 focus:outline-none"
          >
            {/* SVG Background: Exact Figma Subtract Path with bottom-right circular cutout */}
            <svg
              viewBox="0 0 586.6 571.6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 size-full drop-shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:drop-shadow-[0_16px_36px_rgba(104,97,238,0.14)]"
            >
              <path
                d="M562.8 2.8C573.846 2.8 582.8 11.7543 582.8 22.8V430.131C582.8 445.126 560.123 455.106 545.429 452.116C541.187 451.253 536.797 450.8 532.3 450.8C496.125 450.8 466.8 480.125 466.8 516.3C466.8 520.797 467.253 525.187 468.116 529.429C471.106 544.123 461.126 566.8 446.131 566.8H23.8C12.7543 566.8 3.8 557.846 3.8 546.8V22.8C3.8 11.7543 12.7543 2.8 23.8 2.8H562.8Z"
                fill="white"
                className="transition-colors duration-300"
              />
            </svg>

            {/* Inner Content Container */}
            <div className="relative size-full p-4 sm:p-[15px] flex flex-col justify-between">
              {/* Mockup Container (top: 15px, h: 283px in Figma) */}
              <div
                className={`relative w-full h-[50%] min-h-[220px] sm:min-h-[260px] rounded-[10px] overflow-hidden ${proj.bg} flex items-center justify-center shadow-inner`}
              >
                {proj.hasBaseBanner && (
                  <div className="absolute bottom-0 inset-x-0 h-[64px] pointer-events-none">
                    <Image
                      src="/digital-products/cc271.png"
                      alt="Banner base"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="relative w-full h-full p-3 sm:p-4">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain drop-shadow-lg transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title & Description (Figma: title y320, 25px; copy 21px, 16px gap) */}
              <div className="px-1 sm:px-2 pt-[22px] flex-1">
                <h3 className="font-['Satoshi'] text-[21px] sm:text-[23px] lg:text-[25px] font-medium text-black leading-[1.4]">
                  {proj.title}
                </h3>
                <p className="mt-[16px] font-['Satoshi'] text-[15px] sm:text-[18px] lg:text-[21px] font-normal text-[#2d2f33] leading-[1.4] line-clamp-2">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Cutout Footer Area */}
              <div className="relative w-full h-[76px] sm:h-[84px] mt-2">
                {/* Dashed Line (Vector 9): 450px wide, starting 10px from the left */}
                <div className="absolute top-0 left-[10px] right-[119px] border-b border-dashed border-[#b9b9b9]" />

                {/* "View Case Study" — Figma y493, 19px #686868 */}
                <div className="absolute bottom-[46px] left-[16px] flex items-center gap-2">
                  <span className="font-['Satoshi'] text-[17px] sm:text-[19px] font-medium text-[#686868] transition-colors duration-300 group-hover:text-[#6861ee]">
                    View Case Study
                  </span>
                </div>

                {/* Circle Arrow — 100px at (479,464), icon 36px rotated -45° */}
                <div className="absolute -bottom-1 -right-1 sm:bottom-0 sm:right-0 size-[80px] sm:size-[92px] lg:size-[100px] flex items-center justify-center rounded-full bg-[#2D2F33] text-white shadow-md transition-all duration-300 group-hover:bg-[#6861ee] group-hover:scale-105 group-hover:shadow-[0_8px_24px_rgba(104,97,238,0.35)]">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="size-[30px] sm:size-[34px] lg:size-[36px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      d="M6 18H30M21 9L30 18L21 27"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(-45 18 18)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
