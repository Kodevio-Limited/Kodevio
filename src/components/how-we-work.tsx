"use client";

import Image from "next/image";
import { useState } from "react";

const PHASES = [
  {
    id: 1,
    tabName: "Phase 01",
    title: "Discover & Strategy",
    description:
      "We explore your vision, user needs, and competitive market to build an actionable product strategy ensuring every design choice and technical feature drives real business growth.",
    tabColor: "#EEA6A1",
    tabBg: "#FFF1F0",
    activeColor: "#EEA6A1",
    produces: ["Discovery Report", "User Personas", "Content Hierarchy"],
    icons: [
      { name: "Figma", color: "#F24E1E", letter: "F" },
      { name: "Notion", color: "#000000", letter: "N" },
      { name: "Miro", color: "#FFD02F", letter: "M" },
    ],
  },
  {
    id: 2,
    tabName: "Phase 02",
    title: "Design & Refine",
    description:
      "We transform strategic goals into beautiful, intuitive interfaces. Through rapid prototyping and continuous feedback, we craft engaging user journeys that reflect your brand identity.",
    tabColor: "#C4B5FD",
    tabBg: "#F5F3FF",
    activeColor: "#A78BFA",
    produces: ["Interactive Prototype", "Design System", "UX Wireframes"],
    icons: [
      { name: "Figma", color: "#A259FF", letter: "F" },
      { name: "Spline", color: "#FF3366", letter: "S" },
      { name: "Adobe", color: "#FF0000", letter: "A" },
    ],
  },
  {
    id: 3,
    tabName: "Phase 03",
    title: "Build & Integrate",
    description:
      "Our engineering team translates approved designs into scalable, pixel-perfect code using modern tech stacks. We integrate essential APIs, custom AI models, and secure database layers.",
    tabColor: "#93C5FD",
    tabBg: "#EFF6FF",
    activeColor: "#60A5FA",
    produces: ["Production Codebase", "API Documentation", "QA Test Suite"],
    icons: [
      { name: "Next.js", color: "#000000", letter: "N" },
      { name: "Supabase", color: "#3ECF8E", letter: "S" },
      { name: "Tailwind", color: "#06B6D4", letter: "T" },
    ],
  },
  {
    id: 4,
    tabName: "Phase 04",
    title: "Optimise & Grow",
    description:
      "We closely study user behavior, implement continuous performance improvements, and refine your product experience to boost engagement and turn more visitors into customers.",
    tabColor: "#D0F49D",
    tabBg: "#F7FEE7",
    activeColor: "#84CC16",
    produces: ["CRO Recommendations", "A/B Test Plan", "Launch Report"],
    icons: [
      { name: "Claude", color: "#D97706", letter: "✱" },
      { name: "ChatGPT", color: "#10A37F", letter: "⚡" },
      { name: "PostHog", color: "#EF4444", letter: "P" },
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
            <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#2d2f33]" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#2d2f33" />
            </svg>
          </div>

          <h2 className="mt-8 font-['Poppins',sans-serif] text-[36px] sm:text-[48px] lg:text-[60px] font-medium leading-[1.3] text-[#2d2f33]">
            How We Bring Your Vision to Life
          </h2>

          <p className="mt-6 font-['Satoshi'] text-[20px] sm:text-[24px] lg:text-[28px] font-normal leading-[1.4] text-black">
            Four clear phases that keep you in the loop at every milestone from our first strategy call to post-launch scaling.
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
              <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Layered Folder Card Component */}
        <div className="relative w-full max-w-[910px] min-h-[620px]">
          {/* Top Tabs Bar */}
          <div className="flex items-end gap-2 pl-4 -mb-1 relative z-20 overflow-x-auto">
            {PHASES.map((p) => {
              const isActive = p.id === activeId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveId(p.id)}
                  className={`px-6 py-3 font-['Satoshi'] text-[17px] font-bold rounded-t-[18px] transition-all duration-200 cursor-pointer border-t-2 border-x-2 ${
                    isActive
                      ? "shadow-md -translate-y-1 text-[#2d2f33]"
                      : "opacity-75 hover:opacity-100 hover:-translate-y-0.5 text-[#555]"
                  }`}
                  style={{
                    backgroundColor: p.tabColor,
                    borderColor: p.tabColor,
                  }}
                >
                  {p.title}
                </button>
              );
            })}
          </div>

          {/* Main Folder Body Card */}
          <div
            className="relative rounded-[24px] p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border-2 transition-all duration-300 min-h-[540px] flex flex-col justify-between"
            style={{
              backgroundColor: activePhase.tabColor,
              borderColor: activePhase.tabColor,
            }}
          >
            {/* Header info */}
            <div>
              <h3 className="font-['Satoshi'] text-[28px] sm:text-[33px] font-bold text-[#2d2f33]">
                {activePhase.title}
              </h3>

              <p className="mt-4 font-['Satoshi'] text-[18px] sm:text-[22px] font-medium leading-[1.4] text-[#2d2f33] max-w-[800px]">
                {activePhase.description}
              </p>
            </div>

            {/* Inner White Container */}
            <div className="mt-8 bg-white rounded-[16px] p-6 sm:p-8 shadow-sm">
              {/* Tool / AI Icon Row */}
              <div className="flex items-center gap-4">
                {activePhase.icons.map((ic, i) => (
                  <div
                    key={i}
                    className="flex size-[60px] sm:size-[72px] items-center justify-center rounded-[16px] text-white font-bold text-[24px] sm:text-[28px] shadow-sm"
                    style={{ backgroundColor: ic.color }}
                  >
                    {ic.letter}
                  </div>
                ))}
              </div>

              {/* Produces Tags */}
              <div className="mt-6">
                <p className="font-['Satoshi'] text-[18px] sm:text-[20px] font-semibold tracking-wider text-[#989898]">
                  PRODUCES:
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  {activePhase.produces.map((prod, i) => (
                    <span
                      key={i}
                      className="rounded-[9px] px-4 py-2.5 font-['Satoshi'] text-[16px] sm:text-[18px] font-medium text-[#4b4b4b]"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
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
    </section>
  );
}
