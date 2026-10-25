"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TOP_MOCKUPS = [
  { id: 1, src: "/pricing/Free Keyboard With Tablet Mockup 1.png", alt: "Tablet Mockup" },
  { id: 2, src: "/pricing/28c62c9970af4400edf9e0926f3050fc3e9c41f4.png", alt: "iPhone Mockup" },
  { id: 3, src: "/pricing/2f1da4905dc4a300f9fb86b981ba42d491f6aa38.png", alt: "App Screen" },
  { id: 4, src: "/pricing/4e04c9f9ce5f3bf450f349eb84a23eddcb39075b.png", alt: "Design Mockup" },
  { id: 5, src: "/pricing/68b6eab3e496359b7f81e247d1c9db46b565414e.jpg", alt: "Devices Collection" },
  { id: 6, src: "/pricing/c4fbf36d4385ab83d355f183807b2506e1d24115.png", alt: "UI Showcase" },
  { id: 7, src: "/pricing/c7fb6603c95cba7362e60c2b519807465a614c79.png", alt: "SaaS Dashboard" },
  { id: 8, src: "/pricing/fa5f552aca29692de15305d3273d75b95b59919b.png", alt: "Mobile App Flow" },
];

const BOTTOM_MOCKUPS = [
  { id: 8, src: "/pricing/fa5f552aca29692de15305d3273d75b95b59919b.png", alt: "Mobile App Flow" },
  { id: 7, src: "/pricing/c7fb6603c95cba7362e60c2b519807465a614c79.png", alt: "SaaS Dashboard" },
  { id: 6, src: "/pricing/c4fbf36d4385ab83d355f183807b2506e1d24115.png", alt: "UI Showcase" },
  { id: 5, src: "/pricing/68b6eab3e496359b7f81e247d1c9db46b565414e.jpg", alt: "Devices Collection" },
  { id: 4, src: "/pricing/4e04c9f9ce5f3bf450f349eb84a23eddcb39075b.png", alt: "Design Mockup" },
  { id: 3, src: "/pricing/2f1da4905dc4a300f9fb86b981ba42d491f6aa38.png", alt: "App Screen" },
  { id: 2, src: "/pricing/28c62c9970af4400edf9e0926f3050fc3e9c41f4.png", alt: "iPhone Mockup" },
  { id: 1, src: "/pricing/Free Keyboard With Tablet Mockup 1.png", alt: "Tablet Mockup" },
];

export default function PricingSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Calculate dynamic offsets for conveyor movement
  const topOffset = (scrollProgress - 0.5) * -180;
  const bottomOffset = (scrollProgress - 0.5) * 180;

  return (
    <section
      ref={containerRef}
      id="pricing"
      aria-label="See Pricing"
      className="relative w-full overflow-hidden bg-white py-20 sm:py-28"
    >
      {/* Top Mockup Row - Wavy Conveyor */}
      <div className="relative w-full overflow-hidden pb-8">
        <div
          className="flex items-center gap-6 sm:gap-8 will-change-transform transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${topOffset}px)` }}
        >
          {[...TOP_MOCKUPS, ...TOP_MOCKUPS].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative shrink-0 overflow-hidden rounded-[20px] bg-[#f8f9fa] border border-[#ebebeb] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.03]"
              style={{
                width: "220px",
                height: "170px",
                // Subtle arch wave offset based on index
                transform: `translateY(${Math.sin((idx / 4) * Math.PI) * 16}px)`,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Center Copy Block */}
      <div className="relative mx-auto my-12 flex max-w-[1000px] flex-col items-center px-6 text-center">
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

      {/* Bottom Mockup Row - Wavy Conveyor in Reverse */}
      <div className="relative w-full overflow-hidden pt-8">
        <div
          className="flex items-center gap-6 sm:gap-8 will-change-transform transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${bottomOffset}px)` }}
        >
          {[...BOTTOM_MOCKUPS, ...BOTTOM_MOCKUPS].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative shrink-0 overflow-hidden rounded-[20px] bg-[#f8f9fa] border border-[#ebebeb] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.03]"
              style={{
                width: "220px",
                height: "170px",
                // Inverted wave arch offset
                transform: `translateY(${-Math.sin((idx / 4) * Math.PI) * 16}px)`,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
