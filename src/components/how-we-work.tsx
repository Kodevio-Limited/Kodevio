"use client";

import Image from "next/image";
import { useState } from "react";

const PHASES = [
  {
    step: "01",
    title: "Discover & Strategy",
    color: "#8B5CF6", // Electric Violet
    bgGradient: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.02) 100%)",
    borderColor: "rgba(139,92,246,0.25)",
    tagBg: "rgba(139,92,246,0.15)",
    tagText: "#c4b5fd",
    glowColor: "rgba(139,92,246,0.35)",
    description:
      "We explore your vision, user needs, and competitive market to build an actionable product strategy ensuring every design choice and technical feature drives real business growth.",
    produces: ["Discovery Report", "User Personas", "Content Hierarchy"],
    image: "/how-we-work/abb8811391886ab5549a66d437a7a9c74602ea38.png",
  },
  {
    step: "02",
    title: "Design & Refine",
    color: "#38BDF8", // Cyan Azure
    bgGradient: "linear-gradient(135deg, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0.02) 100%)",
    borderColor: "rgba(56,189,248,0.25)",
    tagBg: "rgba(56,189,248,0.15)",
    tagText: "#7dd3fc",
    glowColor: "rgba(56,189,248,0.35)",
    description:
      "We turn your strategy into effortless user journeys and pixel-perfect interfaces—combining modern usability with custom design systems that reflect your brand’s unique visual identity.",
    produces: ["Visual Direction", "UI Screens", "Design System"],
    image: "/how-we-work/Frame 2147226624.png",
  },
  {
    step: "03",
    title: "Build & Integrate",
    color: "#34D399", // Emerald Green
    bgGradient: "linear-gradient(135deg, rgba(52,211,153,0.12) 0%, rgba(52,211,153,0.02) 100%)",
    borderColor: "rgba(52,211,153,0.25)",
    tagBg: "rgba(52,211,153,0.15)",
    tagText: "#a7f3d0",
    glowColor: "rgba(52,211,153,0.35)",
    description:
      "We transform static designs into high-performing applications through clean architecture, seamless API integrations, and reusable component libraries that ensure fast speeds and effortless scalability.",
    produces: ["Code Base", "CMS Integration", "Component Docs"],
    image: "/how-we-work/Rectangle 2.png",
  },
  {
    step: "04",
    title: "Optimise & Grow",
    color: "#FBBF24", // Amber Gold
    bgGradient: "linear-gradient(135deg, rgba(251,191,36,0.12) 0%, rgba(251,191,36,0.02) 100%)",
    borderColor: "rgba(251,191,36,0.25)",
    tagBg: "rgba(251,191,36,0.15)",
    tagText: "#fde68a",
    glowColor: "rgba(251,191,36,0.35)",
    description:
      "We closely study user behavior, implement continuous performance improvements, and refine your product experience to boost engagement and turn more visitors into customers.",
    produces: ["CRO Recommendations", "A/B Test Plan", "Launch Report"],
    image: "/how-we-work/Frame 2147226620.png",
  },
];

export default function HowWeWorkSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section
      id="process"
      aria-label="How We Work"
      className="relative mx-auto w-full max-w-[1583px] px-6 py-24 sm:px-10 lg:py-32"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-[850px] text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
          <span className="size-2 rounded-full bg-[#6861ee] animate-pulse" />
          <span className="font-[Satoshi] text-[14px] font-medium text-white/80">
            Explore AI Capabilities
          </span>
        </div>
        <h2 className="mt-6 font-[Satoshi] text-[36px] sm:text-[46px] md:text-[54px] font-bold leading-[1.2] tracking-tight text-white">
          How We Bring Your Vision to Life
        </h2>
        <p className="mt-4 font-[Satoshi] text-[17px] sm:text-[20px] font-normal leading-[1.45] text-white/60">
          Four clear phases that keep you in the loop at every milestone from our first strategy call to post-launch scaling.
        </p>
      </div>

      {/* 4 Colored Phase Cards Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {PHASES.map((phase, index) => {
          const isSelected = activePhase === index;

          return (
            <div
              key={phase.step}
              onClick={() => setActivePhase(index)}
              onMouseEnter={() => setActivePhase(index)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border p-8 sm:p-10 transition-all duration-400 cursor-pointer"
              style={{
                background: phase.bgGradient,
                borderColor: isSelected ? phase.color : phase.borderColor,
                boxShadow: isSelected
                  ? `0 16px 40px ${phase.glowColor}`
                  : "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* Header inside card: Step number & Color aura badge */}
              <div className="flex items-center justify-between">
                <span
                  className="font-[Satoshi] text-[18px] sm:text-[20px] font-bold tracking-wider"
                  style={{ color: phase.color }}
                >
                  PHASE {phase.step}
                </span>
                <span
                  className="rounded-full px-3 py-1 font-[Satoshi] text-[13px] font-semibold tracking-wide"
                  style={{ backgroundColor: phase.tagBg, color: phase.tagText }}
                >
                  PRODUCES
                </span>
              </div>

              {/* Title & Description */}
              <div className="mt-6">
                <h3 className="font-[Satoshi] text-[26px] sm:text-[30px] font-bold tracking-tight text-white group-hover:text-white">
                  {phase.title}
                </h3>
                <p className="mt-3 font-[Satoshi] text-[15px] sm:text-[16px] font-normal leading-[1.5] text-white/70">
                  {phase.description}
                </p>
              </div>

              {/* Deliverables tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {phase.produces.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 font-[Satoshi] text-[13px] text-white/80 backdrop-blur-sm"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Visual Preview Asset */}
              <div className="relative mt-8 h-[160px] w-full overflow-hidden rounded-[18px] border border-white/10 bg-black/40">
                <Image
                  src={phase.image}
                  alt={phase.title}
                  fill
                  sizes="400px"
                  className="object-cover object-top opacity-85 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
