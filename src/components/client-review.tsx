"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Stephen Hawkin",
    role: "CEO @ Oracle",
    image: "/client-reviews/raw_0.jpeg",
    company: "Oracle",
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Product Lead @ Stripe",
    image: "/client-reviews/raw_3.jpeg",
    company: "Stripe",
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Head of Design @ Linear",
    image: "/client-reviews/raw_6.jpeg",
    company: "Linear",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder @ Veloce",
    image: "/client-reviews/raw_7.jpeg",
    company: "Veloce",
  },
  {
    id: 5,
    name: "Sarah Chen",
    role: "VP Engineering @ Figma",
    image: "/client-reviews/raw_9.jpeg",
    company: "Figma",
  },
];

export default function ClientReviewSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -480, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 480, behavior: "smooth" });
    }
  };

  return (
    <section
      id="reviews"
      aria-label="Client Reviews"
      className="relative mx-auto w-full max-w-[1920px] px-6 py-20 sm:px-12 lg:py-28 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1765px]">
        {/* Header with profile icon */}
        <div className="flex flex-col items-start gap-8">
          <div className="flex size-[50px] items-center justify-center rounded-[8px] border-2 border-[#9a96ff] p-2">
            <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#9a96ff]" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="font-['Poppins',sans-serif] text-[36px] sm:text-[48px] lg:text-[60px] font-medium leading-[1.3] text-[#2d2f33]">
            Hear what our customers are saying
          </h2>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={sliderRef}
          className="mt-12 flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-none snap-x snap-mandatory"
        >
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative shrink-0 snap-start w-[340px] sm:w-[420px] lg:w-[454px] h-[580px] sm:h-[657px] rounded-[18px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-[#eeeefd] group cursor-pointer"
            >
              {/* Customer Photo */}
              <Image
                src={review.image}
                alt={review.name}
                fill
                sizes="454px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex size-[90px] sm:size-[110px] items-center justify-center rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="white" className="size-10 sm:size-12 translate-x-1">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              {/* Bottom Scrim with Name, Title, and Brand */}
              <div className="absolute inset-x-0 bottom-0 p-8 pt-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
                <div className="flex flex-col gap-1.5">
                  {/* Figma Company Logo Lockup */}
                  <div className="flex items-center gap-2 mb-1.5 opacity-90">
                    <div className="size-7 relative shrink-0">
                      <Image src="/client-reviews/svg_3.svg" alt="Company Logo" fill className="object-contain" />
                    </div>
                    <div className="h-4 w-24 relative shrink-0">
                      <Image src="/client-reviews/svg_2.svg" alt="Company" fill className="object-contain" />
                    </div>
                  </div>

                  <h3 className="font-['Satoshi'] text-[24px] sm:text-[28px] font-bold text-white leading-tight">
                    {review.name}
                  </h3>
                  <p className="font-['Satoshi'] text-[18px] sm:text-[21px] font-medium text-[#f2f2f2]">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="flex size-[64px] sm:size-[72px] items-center justify-center rounded-full bg-[#f1f1f1] text-[#2d2f33] transition-all duration-200 hover:bg-[#e4e4e4] active:scale-95 cursor-pointer shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-7" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="flex size-[64px] sm:size-[72px] items-center justify-center rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(167.63deg, rgb(154, 150, 255) 8.4213%, rgb(104, 97, 238) 47.735%, rgb(88, 81, 234) 87.048%)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-7" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
