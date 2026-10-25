"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MOCKUPS = [
  { id: 1, src: "/pricing/Free Keyboard With Tablet Mockup 1.png", alt: "Tablet Mockup", width: 340, height: 240 },
  { id: 2, src: "/pricing/28c62c9970af4400edf9e0926f3050fc3e9c41f4.png", alt: "iPhone Mockup", width: 280, height: 260 },
  { id: 3, src: "/pricing/2f1da4905dc4a300f9fb86b981ba42d491f6aa38.png", alt: "App Screen", width: 320, height: 240 },
  { id: 4, src: "/pricing/4e04c9f9ce5f3bf450f349eb84a23eddcb39075b.png", alt: "Design Mockup", width: 300, height: 250 },
  { id: 5, src: "/pricing/68b6eab3e496359b7f81e247d1c9db46b565414e.jpg", alt: "Devices Collection", width: 360, height: 240 },
  { id: 6, src: "/pricing/c4fbf36d4385ab83d355f183807b2506e1d24115.png", alt: "UI Showcase", width: 320, height: 250 },
  { id: 7, src: "/pricing/c7fb6603c95cba7362e60c2b519807465a614c79.png", alt: "SaaS Dashboard", width: 340, height: 240 },
  { id: 8, src: "/pricing/fa5f552aca29692de15305d3273d75b95b59919b.png", alt: "Mobile App Flow", width: 300, height: 250 },
];

function WavyLine({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      className={`w-full h-auto pointer-events-none select-none ${className} ${flip ? "rotate-180" : ""}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(104, 97, 238, 0)" />
          <stop offset="25%" stopColor="rgba(154, 150, 255, 0.7)" />
          <stop offset="50%" stopColor="rgba(104, 97, 238, 0.9)" />
          <stop offset="75%" stopColor="rgba(88, 81, 234, 0.7)" />
          <stop offset="100%" stopColor="rgba(104, 97, 238, 0)" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60"
        stroke="url(#wave-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60"
        stroke="rgba(168, 85, 247, 0.35)"
        strokeWidth="6"
        strokeLinecap="round"
        className="blur-sm"
      />
    </svg>
  );
}

const BTN_GRADIENT =
  "linear-gradient(167.63deg, rgb(154, 150, 255) 8.4213%, rgb(104, 97, 238) 47.735%, rgb(88, 81, 234) 87.048%)";

export default function PricingSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of section through viewport
      const totalDist = rect.height + windowHeight;
      const current = windowHeight - rect.top;
      const progress = Math.min(Math.max(current / totalDist, 0), 1);

      // Slide mockups horizontally based on vertical scroll
      // Track moves from +15% to -65%
      const translateX = (progress - 0.2) * 55;
      setScrollX(translateX);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      id="pricing"
      aria-label="See Pricing"
      className="relative w-full overflow-hidden bg-[#070709] py-24 sm:py-32"
    >
      {/* Top Wavy Line Drawn Across Container */}
      <div className="relative w-full -mb-6 sm:-mb-10">
        <WavyLine />
      </div>

      {/* Sliding Mockup Gallery along the Wavy Path */}
      <div className="relative w-full overflow-hidden py-8">
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-8 will-change-transform"
          style={{
            transform: `translate3d(-${scrollX}%, 0, 0)`,
            transition: "transform 0.15s ease-out",
            width: "max-content",
          }}
        >
          {/* Double track to enable continuous seamless gallery */}
          {[...MOCKUPS, ...MOCKUPS].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:border-[#6861ee]/50 hover:shadow-[0_8px_30px_rgba(104,97,238,0.25)]"
            >
              <div className="relative h-[200px] w-[280px] sm:h-[240px] sm:w-[320px] overflow-hidden rounded-[18px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="320px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wavy Line Drawn Across Container */}
      <div className="relative w-full -mt-6 sm:-mt-10">
        <WavyLine flip />
      </div>

      {/* Central Headline, Subtitle, and CTA matching Figma node 324:24339 */}
      <div className="relative mx-auto mt-16 max-w-[997px] px-6 text-center sm:mt-20">
        <h2 className="font-[Satoshi] text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-[1.2] tracking-tight text-white">
          Get A Full SaaS Design Team For Less Than Hiring In-House
        </h2>
        <p className="mx-auto mt-6 max-w-[760px] font-[Satoshi] text-[18px] sm:text-[22px] font-normal leading-[1.45] text-white/70">
          SaaS teams lose time managing designers, developers, and communication. We join your team to design, build, and launch faster.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="flex h-[59px] items-center justify-center gap-2 rounded-[57px] px-9 py-4 text-white transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_25px_rgba(104,97,238,0.4)]"
            style={{ backgroundImage: BTN_GRADIENT }}
          >
            <span className="font-[Satoshi] text-[19px] font-bold">
              See pricing & availability
            </span>
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
              <path
                d="M5.96249 17.2485L18.0378 6.75153M9.57323 6.15962L18.0378 6.75153L17.4459 15.2161"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
