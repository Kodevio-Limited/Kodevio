"use client";

import Image from "next/image";
import { useState } from "react";

const COMPANIES = [
  { id: 1, name: "Company 1", src: "/companies/Compnay1.png", width: 151, height: 42 },
  { id: 2, name: "Company 2", src: "/companies/compnay2.png", width: 168, height: 48 },
  { id: 3, name: "Company 3", src: "/companies/compnay3.png", width: 147, height: 44 },
  { id: 4, name: "Company 4", src: "/companies/compnay4.png", width: 152, height: 40 },
  { id: 5, name: "Company 5", src: "/companies/compnay5.png", width: 142, height: 46 },
  { id: 6, name: "Company 6", src: "/companies/compnay6.png", width: 133, height: 44 },
  { id: 7, name: "Company 7", src: "/companies/compnay7.png", width: 136, height: 44 },
  { id: 8, name: "Company 8", src: "/companies/Group.png", width: 134, height: 42 },
];

function CompanyCard({
  company,
}: {
  company: (typeof COMPANIES)[number];
}) {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipping(true);
  };

  const handleAnimationEnd = () => {
    setIsFlipping(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="group relative flex h-[160px] sm:h-[192px] items-center justify-center rounded-[20px] border border-black/[0.06] bg-white/[0.6] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-all duration-300 hover:border-[#6861ee]/30 hover:bg-white hover:shadow-[0_12px_32px_rgba(104,97,238,0.12)] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        onAnimationEnd={handleAnimationEnd}
        className={`relative flex items-center justify-center transition-transform duration-700 ease-out ${
          isFlipping ? "animate-flip-360" : "group-hover:scale-105"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={company.src}
          alt={company.name}
          width={company.width}
          height={company.height}
          className="max-h-[52px] sm:max-h-[64px] w-auto object-contain brightness-95 contrast-105 transition-all duration-300 group-hover:brightness-105"
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
      className="relative mx-auto w-full max-w-[1583px] px-4 py-20 sm:px-8 lg:py-24"
    >
      {/* 8 Companies 2-Row Grid matching Figma node 324:24031 */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:gap-8">
        {COMPANIES.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      {/* Subtext headline from Figma node 324:24259 */}
      <div className="mt-12 text-center sm:mt-16">
        <p className="font-[Satoshi] text-[18px] sm:text-[22px] font-normal leading-[1.4] text-[#686868] tracking-tight">
          Chosen by <span className="font-semibold text-black">105+</span> SaaS Startups and Product Teams
        </p>
      </div>
    </section>
  );
}
