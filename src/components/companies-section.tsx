"use client";

import Image from "next/image";
import { useState } from "react";

/*
 * Exact geometry from Figma node 324:24031 ("Company Logo"):
 * 8 cards of 392×192, radius 12, gap 5, solid white.
 * Logo box per card derived from the design's percentage insets
 * (card 392×192): width/height in px, rendered as % of card size so
 * the layout scales fluidly while staying proportional to Figma.
 */
const CARD_W = 392;
const CARD_H = 192;

const COMPANIES = [
  { id: 1, name: "Company 1", src: "/companies/Compnay1.png", w: 151.1, h: 162.2 },
  { id: 2, name: "Company 2", src: "/companies/compnay2.png", w: 168.5, h: 156.3 },
  { id: 3, name: "Company 3", src: "/companies/compnay3.png", w: 147.2, h: 164.1 },
  { id: 4, name: "Company 4", src: "/companies/compnay4.png", w: 151.6, h: 123.4 },
  { id: 5, name: "Company 5", src: "/companies/compnay5.png", w: 107.3, h: 152.3 },
  { id: 6, name: "Company 6", src: "/companies/compnay6.png", w: 133.0, h: 134.9 },
  { id: 7, name: "Company 7", src: "/companies/compnay7.png", w: 135.8, h: 153.9 },
  { id: 8, name: "Company 8", src: "/companies/Group.png", w: 134.0, h: 169.8 },
];

function CompanyCard({
  company,
}: {
  company: (typeof COMPANIES)[number];
}) {
  const [isFlipping, setIsFlipping] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsFlipping(true)}
      className="relative flex items-center justify-center overflow-hidden rounded-[12px] bg-white cursor-pointer"
      style={{
        aspectRatio: `${CARD_W} / ${CARD_H}`,
        perspective: "1000px",
      }}
    >
      <div
        onAnimationEnd={() => setIsFlipping(false)}
        className={`relative flex items-center justify-center transition-transform duration-300 ease-out ${
          isFlipping ? "animate-flip-360" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={company.src}
          alt={company.name}
          width={company.w}
          height={company.h}
          style={{
            width: `${(company.w / CARD_W) * 100}%`,
            height: "auto",
          }}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function CompaniesSection() {
  return (
    <section
      id="companies"
      aria-label="Trusted Companies"
      className="relative mx-auto w-full max-w-[1583px] px-4 pt-16 pb-20 sm:px-8 sm:pt-20 lg:pt-[84px] lg:pb-[140px]"
    >
      {/* 8 companies, 4×2 grid — Figma: 392×192 cards, 5px gap */}
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-[5px]">
        {COMPANIES.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      {/* Caption — Figma 324:24259: Satoshi Medium 20px #989898, 29px below grid */}
      <p className="mt-[29px] text-center font-[Satoshi] text-[18px] leading-[1.4] font-medium text-[#989898] sm:text-[20px]">
        Chosen by 105+ SaaS Startups and Product Teams
      </p>
    </section>
  );
}
