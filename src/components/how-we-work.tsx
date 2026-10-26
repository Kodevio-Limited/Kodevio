"use client";

import Image from "next/image";
import { useState } from "react";

interface PhaseIcon {
  name: string;
  color: string;
  letter?: string;
  svgPath?: string;
  isSvg: boolean;
}

interface Phase {
  id: number;
  phaseNumber: string;
  tabTitle: string;
  title: string;
  description: string;
  tabColor: string;
  badgeBg: string;
  svgFile: string;
  produces: string[];
  icons: PhaseIcon[];
}

const PHASES: Phase[] = [
  {
    id: 1,
    phaseNumber: "01",
    tabTitle: "Phase 01",
    title: "Discover & Strategy",
    description:
      "We explore your vision, user needs, and competitive market to build an actionable product strategy ensuring every design choice and technical feature drives real business growth.",
    tabColor: "#F3AFAA",
    badgeBg: "rgba(243, 175, 170, 0.25)",
    svgFile: "/how-we-work/folder_peach.svg",
    produces: ["Discovery Report", "User Personas", "Content Hierarchy"],
    icons: [
      { name: "Figma", color: "#F24E1E", letter: "F", isSvg: false },
      { name: "Notion", color: "#000000", letter: "N", isSvg: false },
      { name: "Miro", color: "#FFD02F", letter: "M", isSvg: false },
    ],
  },
  {
    id: 2,
    phaseNumber: "02",
    tabTitle: "Phase 02",
    title: "Design & Refine",
    description:
      "We transform strategic goals into beautiful, intuitive interfaces. Through rapid prototyping and continuous feedback, we craft engaging user journeys that reflect your brand identity.",
    tabColor: "#CDB3FF",
    badgeBg: "rgba(205, 179, 255, 0.25)",
    svgFile: "/how-we-work/folder_lavender.svg",
    produces: ["Visual Direction", "UI Screens", "Design System"],
    icons: [
      { name: "Figma", color: "#A259FF", letter: "F", isSvg: false },
      { name: "Spline", color: "#FF3366", letter: "S", isSvg: false },
      { name: "Adobe", color: "#FF0000", letter: "A", isSvg: false },
    ],
  },
  {
    id: 3,
    phaseNumber: "03",
    tabTitle: "Phase 03",
    title: "Build & Integrate",
    description:
      "Our engineering team translates approved designs into scalable, pixel-perfect code using modern tech stacks. We integrate essential APIs, custom AI models, and secure database layers.",
    tabColor: "#ABDEFE",
    badgeBg: "rgba(171, 222, 254, 0.25)",
    svgFile: "/how-we-work/folder_blue.svg",
    produces: ["Code Base", "CMS Integration", "Component Docs"],
    icons: [
      { name: "Next.js", color: "#000000", letter: "N", isSvg: false },
      { name: "Supabase", color: "#3ECF8E", letter: "S", isSvg: false },
      { name: "Tailwind", color: "#06B6D4", letter: "T", isSvg: false },
    ],
  },
  {
    id: 4,
    phaseNumber: "04",
    tabTitle: "Phase 04",
    title: "Optimise & Grow",
    description:
      "We closely study user behavior, implement continuous performance improvements, and refine your product experience to boost engagement and turn more visitors into customers.",
    tabColor: "#D0F49D",
    badgeBg: "rgba(208, 244, 157, 0.35)",
    svgFile: "/how-we-work/folder_green.svg",
    produces: ["CRO Recommendations", "A/B Test Plan", "Launch Report"],
    icons: [
      {
        name: "Claude",
        color: "#D77655",
        svgPath: "/how-we-work/svg_4.svg",
        isSvg: true,
      },
      {
        name: "ChatGPT",
        color: "#0EA982",
        svgPath: "/how-we-work/svg_12.svg",
        isSvg: true,
      },
      {
        name: "Ideogram",
        color: "#eb1000",
        svgPath: "/how-we-work/ideogram_icon.svg",
        isSvg: true,
      },
    ],
  },
];

export default function HowWeWorkSection() {
  const [activeId, setActiveId] = useState(4);
  const activePhase = PHASES.find((p) => p.id === activeId) || PHASES[3];

  return (
    <section
      id="how-we-work"
      aria-label="How We Work"
      className="relative mx-auto w-full max-w-[1765px] px-6 py-20 sm:px-12 lg:py-28 bg-white"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left Column: Heading, description, CTA */}
        <div className="flex flex-col items-start max-w-[720px]">
          {/* Compass Icon Badge */}
          <div className="flex size-[50px] items-center justify-center rounded-[8px] border-2 border-[#989898] p-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-6 text-[#2d2f33]"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon
                points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
                fill="#2d2f33"
              />
            </svg>
          </div>

          <h2 className="mt-8 font-['Poppins',sans-serif] text-[36px] sm:text-[48px] lg:text-[60px] font-medium leading-[1.3] text-[#2d2f33]">
            How We Bring Your Vision to Life
          </h2>

          <p className="mt-6 font-['Satoshi'] text-[20px] sm:text-[24px] lg:text-[28px] font-normal leading-[1.4] text-black">
            Four clear phases that keep you in the loop at every milestone from our
            first strategy call to post-launch scaling.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex h-[59px] items-center justify-center gap-2 rounded-[57px] px-9 py-4 font-['Satoshi'] text-[20px] font-bold text-white shadow-[0px_4px_16px_rgba(104,97,238,0.25)] transition-all duration-300 hover:scale-105"
              style={{
                backgroundImage:
                  "linear-gradient(171.81deg, rgb(154, 150, 255) 8.4213%, rgb(104, 97, 238) 47.735%, rgb(88, 81, 234) 87.048%)",
              }}
            >
              <span>Explore AI Capabilities</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Exact Layered Folder Card Component */}
        <div className="relative w-full max-w-[910px]">
          {/* Stacked Folder Tops (Clickable Tabs with Authentic Colors) */}
          <div className="relative flex flex-col w-full">
            {/* Top Exposed Folder Lips */}
            <div className="relative w-full h-[88px] flex flex-col justify-end">
              {PHASES.map((p, idx) => {
                const isSelected = p.id === activeId;
                const offsetTop = idx * 18;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    aria-label={`Select ${p.title}`}
                    className={`absolute left-0 right-0 h-[56px] rounded-t-[28px] transition-all duration-300 text-left px-8 flex items-center justify-between cursor-pointer border-t border-x border-black/5 ${
                      isSelected
                        ? "shadow-sm z-30 font-bold"
                        : "opacity-90 hover:opacity-100 font-medium"
                    }`}
                    style={{
                      top: `${offsetTop}px`,
                      backgroundColor: p.tabColor,
                      zIndex: isSelected ? 30 : idx + 1,
                    }}
                  >
                    <span className="font-['Satoshi'] text-[15px] sm:text-[17px] text-[#2d2f33] tracking-wide">
                      {p.tabTitle}: {p.title}
                    </span>
                    <span className="text-[14px] text-[#4b4b4b] font-medium hidden sm:inline">
                      {isSelected ? "Active" : "Click to view"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Front Folder Card Body */}
            <div
              className="relative z-30 w-full rounded-b-[28px] rounded-t-[12px] p-6 sm:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.06)] border border-black/5 transition-colors duration-300 min-h-[520px] flex flex-col justify-between"
              style={{
                backgroundColor: activePhase.tabColor,
              }}
            >
              {/* Header Info */}
              <div>
                <h3 className="font-['Satoshi'] text-[28px] sm:text-[36px] font-bold text-[#2d2f33]">
                  {activePhase.title}
                </h3>

                <p className="mt-3 font-['Satoshi'] text-[17px] sm:text-[21px] font-normal leading-[1.4] text-[#2d2f33] max-w-[800px]">
                  {activePhase.description}
                </p>
              </div>

              {/* Inner White Container */}
              <div className="mt-8 bg-white rounded-[18px] p-6 sm:p-8 shadow-sm">
                {/* Tool / AI Icon Row */}
                <div className="flex items-center gap-4 sm:gap-6">
                  {activePhase.icons.map((ic, i) => (
                    <div
                      key={i}
                      className="relative flex size-[72px] sm:size-[96px] items-center justify-center rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-sm transition-transform duration-200 hover:scale-105"
                      style={{ backgroundColor: ic.color }}
                    >
                      {ic.isSvg && ic.svgPath ? (
                        <Image
                          src={ic.svgPath}
                          alt={ic.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white font-bold text-[28px] sm:text-[36px]">
                          {ic.letter}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Produces Tags */}
                <div className="mt-8">
                  <p className="font-['Satoshi'] text-[16px] sm:text-[18px] font-semibold tracking-wider text-[#989898]">
                    PRODUCES:
                  </p>

                  <div className="mt-3.5 flex flex-wrap gap-3">
                    {activePhase.produces.map((prod, i) => (
                      <span
                        key={i}
                        className="rounded-[9px] px-5 py-3 font-['Satoshi'] text-[16px] sm:text-[18px] font-medium text-[#4b4b4b] shadow-xs"
                        style={{ backgroundColor: activePhase.badgeBg }}
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
