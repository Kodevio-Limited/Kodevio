"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/*
 * Exact geometry from Figma node 324:24031 ("Company Logo"):
 * 8 cards of 392×192, radius 12, gap 5, clean white background.
 * Text 20px #989898 "Chosen by 105+ SaaS Startups and Product Teams".
 */
const CARD_W = 392;
const CARD_H = 192;

const COMPANIES = [
  { id: 1, name: "Company 1", src: "/companies/Compnay1.png", w: 151, h: 162 },
  { id: 2, name: "Company 2", src: "/companies/compnay2.png", w: 168, h: 156 },
  { id: 3, name: "Company 3", src: "/companies/compnay3.png", w: 147, h: 164 },
  { id: 4, name: "Company 4", src: "/companies/compnay4.png", w: 151, h: 123 },
  { id: 5, name: "Company 5", src: "/companies/compnay5.png", w: 107, h: 152 },
  { id: 6, name: "Company 6", src: "/companies/compnay6.png", w: 133, h: 135 },
  { id: 7, name: "Company 7", src: "/companies/compnay7.png", w: 135, h: 154 },
  { id: 8, name: "Company 8", src: "/companies/Group.png", w: 134, h: 170 },
];

function CompanyCard({
  company,
  autoFlip,
  onAutoFlipEnd,
}: {
  company: (typeof COMPANIES)[number];
  autoFlip: boolean;
  onAutoFlipEnd: () => void;
}) {
  const [isFlipping, setIsFlipping] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsFlipping(true)}
      className="relative flex items-center justify-center overflow-hidden rounded-[12px] bg-white border border-[#f0f0f0] shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] cursor-pointer"
      style={{
        aspectRatio: `${CARD_W} / ${CARD_H}`,
        perspective: "1000px",
      }}
    >
      <div
        onAnimationEnd={() => {
          setIsFlipping(false);
          if (autoFlip) onAutoFlipEnd();
        }}
        className={`relative flex items-center justify-center w-full h-full transition-transform duration-300 ease-out ${
          isFlipping || autoFlip ? "animate-flip-360" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Logo sized from Figma's exact per-card geometry (as % of card width) */}
        <Image
          src={company.src}
          alt={company.name}
          width={company.w}
          height={company.h}
          style={{ width: `${(company.w / CARD_W) * 100}%`, height: "auto" }}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function CompaniesSection() {
  /*
   * Staggered auto-flip: every 3 seconds one card does its 360° flip,
   * cycling through the grid, so the section stays alive even without hover.
   */
  const [autoIdx, setAutoIdx] = useState<number | null>(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setAutoIdx(i % COMPANIES.length);
      i += 1;
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="companies"
      aria-label="Trusted Companies"
      className="relative mx-auto w-full max-w-[1583px] px-4 pt-16 pb-20 sm:px-8 sm:pt-20 lg:pt-[76px] lg:pb-[100px] bg-white"
    >
      {/* 8 companies, 4×2 grid — Figma: 392×192 cards, 5px gap */}
      <div className="grid grid-cols-2 gap-[5px] sm:grid-cols-4">
        {COMPANIES.map((company, idx) => (
          <CompanyCard
            key={company.id}
            company={company}
            autoFlip={autoIdx === idx}
            onAutoFlipEnd={() => setAutoIdx(null)}
          />
        ))}
      </div>

      {/* Caption — Figma 324:24259: Satoshi Medium 20px #989898, 29px below grid */}
      <p className="mt-[29px] text-center font-['Satoshi'] text-[18px] leading-[1.4] font-medium text-[#989898] sm:text-[20px]">
        Chosen by 105+ SaaS Startups and Product Teams
      </p>
    </section>
  );
}
