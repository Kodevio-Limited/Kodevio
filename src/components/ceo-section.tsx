"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const QUOTE_WORDS = [
  "Great", "software", "isn't", "measured", "by", "lines", "of", "code",
  "it's", "measured", "by", "the", "growth", "it", "unlocks.",
  "At", "KODEVIO_LOGO", "we", "blend", "intuitive", "UX", "with", "ultra", "fast", "engineering",
  "and", "custom", "AI.", "Every", "detail", "is", "built", "to", "elevate", "your", "brand.",
  "You", "bring", "the", "vision;", "we’ll", "engineer", "the", "reality."
];

function QuoteMark({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      className={`size-[50px] shrink-0 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M13.08 36.92C18.23 36.92 22.42 32.73 22.42 27.58C22.42 22.43 18.23 18.24 13.08 18.24C12.38 18.24 11.71 18.32 11.06 18.47C12.37 14.74 16.03 12.08 20.33 12.08V7.08C13.43 7.08 7.67 12.18 6.78 18.94C6.26 21.05 6 23.27 6 25.56C6 31.84 9.17 36.92 13.08 36.92ZM35.08 36.92C40.23 36.92 44.42 32.73 44.42 27.58C44.42 22.43 40.23 18.24 35.08 18.24C34.38 18.24 33.71 18.32 33.06 18.47C34.37 14.74 38.03 12.08 42.33 12.08V7.08C35.43 7.08 29.67 12.18 28.78 18.94C28.26 21.05 28 23.27 28 25.56C28 31.84 31.17 36.92 35.08 36.92Z"
        fill="#6861ee"
      />
    </svg>
  );
}

export default function CeoSection() {
  const containerRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Progressive scroll bolding state (0 to 1)
  const [scrollProgress, setScrollProgress] = useState(0.12);

  // Stats counter animation state
  const [statsVisible, setStatsVisible] = useState(false);
  const [scoreUpwork, setScoreUpwork] = useState(0);
  const [reviewsFiverr, setReviewsFiverr] = useState(0);
  const [rating, setRating] = useState("0.0");

  useEffect(() => {
    const handleScroll = () => {
      const el = quoteRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start bolding when quote top enters lower 75% of viewport
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      setScrollProgress(Math.max(0.12, progress));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate stats when visible; reset when it leaves so the counters
  // replay with the same easing on every re-entry
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        } else {
          setStatsVisible(false);
          setScoreUpwork(0);
          setReviewsFiverr(0);
          setRating("0.0");
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;

    const duration = 2000;
    const startTime = performance.now();

    const updateCounters = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setScoreUpwork(Math.round(ease * 100));
      setReviewsFiverr(Math.round(ease * 450));
      setRating((ease * 5.0).toFixed(1));

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    requestAnimationFrame(updateCounters);
  }, [statsVisible]);

  return (
    <section
      ref={containerRef}
      id="ceo"
      aria-label="Leadership & Impact"
      className="relative mx-auto w-full max-w-[1749px] px-6 py-20 sm:px-12 lg:py-28 bg-white"
    >
      {/* Upper Area: Quote with purple quotes + Farvez Hossen profile */}
      <div ref={quoteRef} className="relative flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Quote Block with opening quote mark */}
        <div className="flex items-start gap-6 max-w-[1250px]">
          <div className="pt-2">
            <QuoteMark />
          </div>

          <div className="flex-1">
            <p className="font-['Poppins',sans-serif] text-[26px] sm:text-[36px] md:text-[42px] lg:text-[45px] font-medium leading-[1.4] tracking-tight">
              {QUOTE_WORDS.map((word, i) => {
                if (word === "KODEVIO_LOGO") {
                  return (
                    <span key={i} className="inline-flex align-middle mx-3.5 -mt-1.5 h-[38px] sm:h-[46px] w-auto">
                      <Image
                        src="/brand/logo_purple.png"
                        alt="Kodevio"
                        width={180}
                        height={46}
                        className="h-full w-auto object-contain"
                      />
                    </span>
                  );
                }

                const wordThreshold = i / (QUOTE_WORDS.length - 1);
                // First 4 words "Great software isn't measured" are always prominent per Figma
                const isBolder = i < 4 || scrollProgress >= wordThreshold;

                return (
                  <span
                    key={i}
                    className={`inline-block mr-[0.25em] transition-colors duration-200 ${
                      isBolder
                        ? "text-[#2d2f33] font-medium"
                        : "text-[#b9b9b9] font-normal"
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        {/* CEO Profile Card (Farvez Hossen) with closing quote mark */}
        <div className="flex flex-col items-start lg:items-end self-end lg:self-center shrink-0">
          <div className="relative">
            <div className="bg-[#dfdfdf] h-[211px] w-[204px] overflow-hidden rounded-[20px] shadow-sm">
              <Image
                src="/ceo/florian-krumm-euZ2n8dGUcQ-unsplash 1.png"
                alt="Farvez Hossen"
                width={204}
                height={211}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-3 flex flex-col">
              <h3 className="font-['Poppins',sans-serif] text-[23px] font-medium text-[#2e3134]">
                Farvez Hossen
              </h3>
              <p className="mt-0.5 font-['Poppins',sans-serif] text-[16px] font-normal text-[#686868]">
                Co-Founder, Kodevio Limited
              </p>
            </div>
          </div>
          <div className="mt-4 self-end">
            <QuoteMark flip />
          </div>
        </div>
      </div>

      {/* Lower Area: 4 Platform Stats separated by vertical dividers */}
      <div
        ref={statsRef}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#e2e4e8] pt-12"
      >
        {/* Stat 1: 100% Upwork */}
        <div className="flex flex-col items-center text-center px-6 py-6 lg:border-r lg:border-[#e2e4e8]">
          <div className="h-[65px] flex items-center justify-center">
            <Image src="/ceo/Frame.svg" alt="Upwork" width={65} height={65} className="h-[55px] w-auto opacity-80" />
          </div>
          <h4 className="mt-4 font-['Poppins',sans-serif] text-[46px] sm:text-[52px] font-bold tracking-tight text-[#2d2f33]">
            {scoreUpwork}%
          </h4>
          <p className="mt-1 font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#686868]">
            Job Success Score on Upwork
          </p>
        </div>

        {/* Stat 2: 450+ Fiverr */}
        <div className="flex flex-col items-center text-center px-6 py-6 lg:border-r lg:border-[#e2e4e8]">
          <div className="h-[65px] flex items-center justify-center">
            <Image src="/ceo/Frame(1).svg" alt="Fiverr" width={65} height={65} className="h-[55px] w-auto opacity-80" />
          </div>
          <h4 className="mt-4 font-['Poppins',sans-serif] text-[46px] sm:text-[52px] font-bold tracking-tight text-[#2d2f33]">
            {reviewsFiverr}+
          </h4>
          <p className="mt-1 font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#686868]">
            5-Star Reviews on Fiverr
          </p>
        </div>

        {/* Stat 3: Top Rated */}
        <div className="flex flex-col items-center text-center px-6 py-6 lg:border-r lg:border-[#e2e4e8]">
          <div className="h-[65px] flex items-center justify-center">
            <Image src="/ceo/Frame(3).svg" alt="Top Rated" width={65} height={65} className="h-[55px] w-auto opacity-80" />
          </div>
          <h4 className="mt-4 font-['Poppins',sans-serif] text-[42px] sm:text-[50px] font-bold tracking-tight text-[#2d2f33]">
            Top Rated
          </h4>
          <p className="mt-1 font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#686868]">
            Seller Status Across Platforms
          </p>
        </div>

        {/* Stat 4: 5.0 Average Rating */}
        <div className="flex flex-col items-center text-center px-6 py-6">
          <div className="h-[65px] flex items-center justify-center">
            <Image src="/ceo/Frame(2).svg" alt="Rating" width={65} height={65} className="h-[55px] w-auto opacity-80" />
          </div>
          <h4 className="mt-4 font-['Poppins',sans-serif] text-[46px] sm:text-[52px] font-bold tracking-tight text-[#2d2f33]">
            {rating}
          </h4>
          <p className="mt-1 font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#686868]">
            Average Client Rating
          </p>
        </div>
      </div>
    </section>
  );
}
