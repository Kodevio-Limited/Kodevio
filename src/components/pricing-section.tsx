"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TOP_MOCKUPS = [
  { id: 1, src: "/pricing/iphone16-hand.png", alt: "iPhone 16 Mockup in Hand" },
  { id: 2, src: "/pricing/keyboard-tablet.png", alt: "Tablet with Keyboard Mockup" },
  { id: 3, src: "/pricing/iphone13-kit.png", alt: "iPhone 13 App Screen" },
  { id: 4, src: "/pricing/fca0b16c65191b5b817637fc81ca78475bdcffe2.png", alt: "Purple Mobile Mockup" },
  { id: 5, src: "/pricing/28c62c9970af4400edf9e0926f3050fc3e9c41f4.png", alt: "Dark Hand Phone Mockup" },
  { id: 6, src: "/pricing/c7fb6603c95cba7362e60c2b519807465a614c79.png", alt: "Laptop on Couch Mockup" },
  { id: 7, src: "/pricing/fa5f552aca29692de15305d3273d75b95b59919b.png", alt: "Clean App Screen" },
  { id: 8, src: "/pricing/billboard-mockup.png", alt: "Outdoor Billboard Mockup" },
  { id: 9, src: "/pricing/68b6eab3e496359b7f81e247d1c9db46b565414e.jpg", alt: "Wireframe Sketches on Desk" },
  { id: 10, src: "/pricing/c4fbf36d4385ab83d355f183807b2506e1d24115.png", alt: "App UI Showcase" },
];

const BOTTOM_MOCKUPS = [
  { id: 10, src: "/pricing/c4fbf36d4385ab83d355f183807b2506e1d24115.png", alt: "App UI Showcase" },
  { id: 5, src: "/pricing/28c62c9970af4400edf9e0926f3050fc3e9c41f4.png", alt: "Dark Hand Phone Mockup" },
  { id: 7, src: "/pricing/fa5f552aca29692de15305d3273d75b95b59919b.png", alt: "Clean App Screen" },
  { id: 9, src: "/pricing/68b6eab3e496359b7f81e247d1c9db46b565414e.jpg", alt: "Wireframe Sketches on Desk" },
  { id: 3, src: "/pricing/iphone13-kit.png", alt: "iPhone 13 App Screen" },
  { id: 8, src: "/pricing/billboard-mockup.png", alt: "Outdoor Billboard Mockup" },
  { id: 4, src: "/pricing/fca0b16c65191b5b817637fc81ca78475bdcffe2.png", alt: "Purple Mobile Mockup" },
  { id: 6, src: "/pricing/c7fb6603c95cba7362e60c2b519807465a614c79.png", alt: "Laptop on Couch Mockup" },
  { id: 1, src: "/pricing/iphone16-hand.png", alt: "iPhone 16 Mockup in Hand" },
  { id: 2, src: "/pricing/keyboard-tablet.png", alt: "Tablet with Keyboard Mockup" },
];

// Exact Y-offsets extracted from Figma node 324:24340 and 324:30296
const TOP_Y_OFFSETS = [31, 56, 102, 56, 0, 17, 56, 102, 56, 17];
const BOTTOM_Y_OFFSETS = [85, 46, 0, 46, 85, 102, 46, 0, 46, 71];

export default function PricingSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle conveyor movement on scroll
  const topTranslateX = (scrollProgress - 0.5) * -120;
  const bottomTranslateX = (scrollProgress - 0.5) * 120;

  return (
    <section
      ref={containerRef}
      id="pricing"
      aria-label="See Pricing"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-24"
    >
      {/* Top Mockup Row - Wavy Conveyor */}
      <div className="relative w-full overflow-hidden h-[270px]">
        <div
          className="flex items-start gap-[33px] justify-center will-change-transform transition-transform duration-150 ease-out"
          style={{ transform: `translateX(${topTranslateX}px)` }}
        >
          {TOP_MOCKUPS.map((item, idx) => {
            const yOffset = TOP_Y_OFFSETS[idx % TOP_Y_OFFSETS.length];
            return (
              <div
                key={`top-${item.id}-${idx}`}
                className="relative shrink-0 overflow-hidden rounded-[20px] bg-[#f8f9fa] border border-[#ebebeb] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  width: "170px",
                  height: "160px",
                  marginTop: `${yOffset}px`,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="170px"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Copy Block */}
      <div className="relative mx-auto my-10 flex max-w-[1055px] flex-col items-center px-6 text-center">
        <h2 className="font-['Poppins',sans-serif] text-[34px] sm:text-[46px] md:text-[54px] font-bold leading-[1.25] tracking-tight text-[#2d2f33]">
          Get A Full SaaS Design Team For Less Than Hiring In-House
        </h2>

        <p className="mt-6 max-w-[760px] font-['Satoshi'] text-[18px] sm:text-[22px] md:text-[24px] font-normal leading-[1.4] text-[#2d2f33]">
          SaaS teams lose time managing designers, developers, and communication.
          We join your team to design, build, and launch faster.
        </p>

        <div className="mt-8">
          <a
            href="#pricing-plans"
            className="inline-flex h-[59px] items-center justify-center rounded-[57px] px-9 py-4 font-['Satoshi'] text-[20px] font-bold text-white shadow-[0px_4px_16px_rgba(104,97,238,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_24px_rgba(104,97,238,0.35)]"
            style={{
              backgroundImage:
                "linear-gradient(167.63deg, rgb(154, 150, 255) 8.4213%, rgb(104, 97, 238) 47.735%, rgb(88, 81, 234) 87.048%)",
            }}
          >
            See pricing & availability
          </a>
        </div>
      </div>

      {/* Bottom Mockup Row - Wavy Conveyor Inverted */}
      <div className="relative w-full overflow-hidden h-[270px]">
        <div
          className="flex items-start gap-[33px] justify-center will-change-transform transition-transform duration-150 ease-out"
          style={{ transform: `translateX(${bottomTranslateX}px)` }}
        >
          {BOTTOM_MOCKUPS.map((item, idx) => {
            const yOffset = BOTTOM_Y_OFFSETS[idx % BOTTOM_Y_OFFSETS.length];
            return (
              <div
                key={`bottom-${item.id}-${idx}`}
                className="relative shrink-0 overflow-hidden rounded-[20px] bg-[#f8f9fa] border border-[#ebebeb] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  width: "170px",
                  height: "160px",
                  marginTop: `${yOffset}px`,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="170px"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
