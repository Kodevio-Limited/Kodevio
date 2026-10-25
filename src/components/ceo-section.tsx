"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const QUOTE_WORDS = [
  "Great", "software", "isn't", "measured", "by", "lines", "of", "code",
  "it's", "measured", "by", "the", "growth", "it", "unlocks.",
  "At", "Kodevio", "we", "blend", "intuitive", "UX", "with", "ultra", "fast", "engineering",
  "and", "custom", "AI.", "Every", "detail", "is", "built", "to", "elevate", "your", "brand.",
  "You", "bring", "the", "vision;", "we’ll", "engineer", "the", "reality."
];

function LaurelIcon() {
  return (
    <svg viewBox="0 0 124 65" fill="none" className="h-16 w-auto" aria-hidden="true">
      <path
        d="M20 56C12 42 10 24 20 8M104 56C112 42 114 24 104 8"
        stroke="#6861ee"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="62" cy="32" r="14" fill="#6861ee" fillOpacity="0.12" stroke="#6861ee" strokeWidth="1.5" />
      <path d="M56 32L60 36L68 28" stroke="#6861ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CeoSection() {
  const containerRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Progressive scroll bolding state (0 to 1)
  const [scrollProgress, setScrollProgress] = useState(0);

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
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate stats when visible
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;

    const duration = 2000; // 2 seconds as requested
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
      className="relative mx-auto w-full max-w-[1749px] px-6 py-24 sm:px-12 lg:py-32"
    >
      {/* Upper Area: Progressive Scroll-Bolding Quote + CEO Profile */}
      <div ref={quoteRef} className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Quote text with scroll-driven bolding from "Great" to "reality" */}
        <div className="lg:col-span-8">
          <p className="font-[Satoshi] text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-normal leading-[1.32] tracking-tight">
            {QUOTE_WORDS.map((word, i) => {
              const wordThreshold = i / (QUOTE_WORDS.length - 1);
              const isBolder = scrollProgress >= wordThreshold;

              return (
                <span
                  key={i}
                  className={`inline-block mr-[0.28em] transition-all duration-200 ${
                    isBolder
                      ? "text-white font-semibold opacity-100 scale-[1.01]"
                      : "text-white/30 font-normal opacity-40"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>

        {/* CEO Profile Card (Farvez Hossen) */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
          <div className="flex flex-col items-start rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
            <div className="relative h-[220px] w-[206px] overflow-hidden rounded-[18px]">
              <Image
                src="/ceo/florian-krumm-euZ2n8dGUcQ-unsplash 1.png"
                alt="Farvez Hossen"
                fill
                sizes="206px"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <h3 className="font-[Satoshi] text-[22px] font-bold text-white">
                Farvez Hossen
              </h3>
              <p className="mt-1 font-[Satoshi] text-[15px] font-normal text-white/60">
                Co-Founder, Kodevio Limited
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Area: 4 Platform Stats with Animated Counters */}
      <div
        ref={statsRef}
        className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10 pt-16"
      >
        {/* Stat 1: 100% Upwork */}
        <div className="flex flex-col items-center text-center">
          <LaurelIcon />
          <h4 className="mt-4 font-[Satoshi] text-[48px] sm:text-[56px] font-bold tracking-tight text-white">
            {scoreUpwork}%
          </h4>
          <p className="mt-2 font-[Satoshi] text-[16px] text-white/60">
            Job Success Score on Upwork
          </p>
        </div>

        {/* Stat 2: 450+ Fiverr */}
        <div className="flex flex-col items-center text-center">
          <LaurelIcon />
          <h4 className="mt-4 font-[Satoshi] text-[48px] sm:text-[56px] font-bold tracking-tight text-white">
            {reviewsFiverr}+
          </h4>
          <p className="mt-2 font-[Satoshi] text-[16px] text-white/60">
            5-Star Reviews on Fiverr
          </p>
        </div>

        {/* Stat 3: Top Rated */}
        <div className="flex flex-col items-center text-center">
          <LaurelIcon />
          <h4 className="mt-4 font-[Satoshi] text-[44px] sm:text-[52px] font-bold tracking-tight text-white">
            Top Rated
          </h4>
          <p className="mt-2 font-[Satoshi] text-[16px] text-white/60">
            Seller Status Across Platforms
          </p>
        </div>

        {/* Stat 4: 5.0 Average Rating */}
        <div className="flex flex-col items-center text-center">
          <LaurelIcon />
          <h4 className="mt-4 font-[Satoshi] text-[48px] sm:text-[56px] font-bold tracking-tight text-white">
            {rating}
          </h4>
          <p className="mt-2 font-[Satoshi] text-[16px] text-white/60">
            Average Client Rating
          </p>
        </div>
      </div>
    </section>
  );
}
