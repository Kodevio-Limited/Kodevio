"use client";

import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    title: "Calorie Tracker | Mobile App",
    description:
      "Lifted is a mobile wellness app designed to - help users stay consistent with their health goals.",
    image: "/digital-products/raw_0.png",
    bg: "from-[#ffecd8] to-[#ff8200]",
  },
  {
    id: 2,
    title: "Sales Analytics | SaaS Platform",
    description:
      "A high-velocity dashboard empowering venture-backed revenue teams to track pipeline velocity in real time.",
    image: "/digital-products/raw_1.png",
    bg: "from-[#ffe4e1] to-[#ff7f7f]",
  },
  {
    id: 3,
    title: "Brand Identity & Merch",
    description:
      "Distinct packaging, design systems, and identity assets for an organic modern streetwear label.",
    image: "/digital-products/raw_6.png",
    bg: "from-[#e0f2fe] to-[#38bdf8]",
  },
  {
    id: 4,
    title: "Fintech Mobile Wallet",
    description:
      "Next-generation contactless payment and asset tracking platform built for instant borderless transfers.",
    image: "/digital-products/raw_8.png",
    bg: "from-[#f1f5f9] to-[#94a3b8]",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Portal",
    description:
      "Self-service enterprise dashboard for orchestrating Kubernetes clusters and monitoring real-time telemetry.",
    image: "/digital-products/raw_11.png",
    bg: "from-[#fef3c7] to-[#f59e0b]",
  },
  {
    id: 6,
    title: "Logistics & Fleet Dispatch",
    description:
      "On-demand multi-modal delivery routing platform connecting enterprise merchants with local courier fleets.",
    image: "/digital-products/raw_13.png",
    bg: "from-[#f3f4f6] to-[#d1d5db]",
  },
];

export default function DigitalProductsSection() {
  return (
    <section
      id="products"
      aria-label="Digital Products"
      className="relative mx-auto w-full max-w-[1763px] px-6 py-20 sm:px-12 lg:py-28 bg-white"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-[930px] mx-auto">
        {/* Folder Icon Badge */}
        <div className="flex size-[50px] items-center justify-center rounded-[8px] border-2 border-[#9a96ff] p-2">
          <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#9a96ff]" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <h2 className="mt-8 font-['Poppins',sans-serif] text-[36px] sm:text-[48px] lg:text-[60px] font-medium leading-[1.3] text-[#2d2f33]">
          Digital Products Engineered for Real Business Impact
        </h2>

        <p className="mt-6 font-['Satoshi'] text-[20px] sm:text-[24px] lg:text-[28px] font-normal leading-[1.4] text-black">
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
            <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* 6 Project Cards Grid (3 columns x 2 rows) */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="group relative flex flex-col justify-between rounded-[24px] border border-[#f0f0f0] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
          >
            {/* Card Mockup Visual Container */}
            <div
              className={`relative w-full h-[260px] sm:h-[280px] rounded-[16px] overflow-hidden bg-gradient-to-b ${proj.bg} p-4 flex items-center justify-center shadow-inner`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 flex flex-col flex-1">
              <h3 className="font-['Satoshi'] text-[23px] sm:text-[25px] font-bold text-black leading-snug">
                {proj.title}
              </h3>

              <p className="mt-3 font-['Satoshi'] text-[16px] sm:text-[18px] font-normal leading-[1.5] text-[#686868]">
                {proj.description}
              </p>
            </div>

            {/* Bottom Dashed Line & Action Button */}
            <div className="mt-6 pt-5 border-t border-dashed border-[#e5e7eb] flex items-center justify-between">
              <span className="font-['Satoshi'] text-[17px] font-medium text-[#2d2f33] transition-colors group-hover:text-[#6861ee]">
                View Case Study
              </span>

              <div className="flex size-[48px] items-center justify-center rounded-full bg-[#2d2f33] text-white transition-all duration-300 group-hover:bg-[#6861ee] group-hover:scale-110 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
