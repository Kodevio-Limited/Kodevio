"use client";

import Image from "next/image";

export default function OtherBrandsSection() {
  return (
    <section
      id="brands"
      aria-label="Specialist Brands"
      className="relative mx-auto w-full max-w-[1765px] px-6 py-20 sm:px-12 lg:py-28 bg-white"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-[700px] mx-auto">
        {/* Building Office Icon Badge */}
        <div className="flex size-[50px] items-center justify-center rounded-[8px] border-2 border-[#9a96ff] p-2">
          <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#9a96ff]" stroke="currentColor" strokeWidth="2">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>

        <h2 className="mt-8 font-['Poppins',sans-serif] text-[36px] sm:text-[48px] lg:text-[60px] font-medium leading-[1.3] text-[#2d2f33]">
          Specialist Brands Under One Roof
        </h2>
      </div>

      {/* Two Brands Showcase */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
        {/* Brand 1: KodeMount */}
        <div className="flex flex-col items-center text-center">
          <div className="relative size-[340px] sm:size-[440px] lg:size-[480px] flex items-center justify-center">
            <Image
              src="/other-brands/raw_2.png"
              alt="KodeMount Logo"
              fill
              sizes="480px"
              className="object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <h3 className="mt-6 font-['Poppins',sans-serif] text-[36px] sm:text-[45px] font-medium text-[#2d2f33]">
            KodeMount
          </h3>

          <p className="mt-4 max-w-[620px] font-['Satoshi'] text-[20px] sm:text-[24px] lg:text-[26px] font-normal leading-[1.4] text-[#686868]">
            Kodemount is the ultimate peak of reliable software engineering. We build rock-solid systems, platforms, and core architectures that integrate clean code—bringing all your technical resources together into one unshakeable, high-performance foundation.
          </p>

          <div className="mt-8">
            <a
              href="#kodemount"
              className="inline-flex h-[59px] items-center justify-center gap-2 rounded-[57px] px-9 py-4 font-['Satoshi'] text-[20px] font-bold text-white shadow-[0px_4px_16px_rgba(104,97,238,0.25)] transition-all duration-300 hover:scale-105"
              style={{
                backgroundImage:
                  "linear-gradient(170.25deg, rgb(154, 150, 255) 8.4213%, rgb(104, 97, 238) 47.735%, rgb(88, 81, 234) 87.048%)",
              }}
            >
              <span>View KodeMount</span>
              <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Brand 2: KodeOrbit */}
        <div className="flex flex-col items-center text-center">
          <div className="relative size-[340px] sm:size-[440px] lg:size-[480px] flex items-center justify-center">
            <Image
              src="/other-brands/raw_6.png"
              alt="KodeOrbit Logo"
              fill
              sizes="480px"
              className="object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <h3 className="mt-6 font-['Poppins',sans-serif] text-[36px] sm:text-[45px] font-medium text-[#2d2f33]">
            KodeOrbit
          </h3>

          <p className="mt-4 max-w-[620px] font-['Satoshi'] text-[20px] sm:text-[24px] lg:text-[26px] font-normal leading-[1.4] text-[#686868]">
            Kodeorbit is the central hub of a connected digital universe. We build high-velocity apps, plugins, and web solutions that revolve around clean code—bringing all your digital products together into one seamless, future-ready ecosystem.
          </p>

          <div className="mt-8">
            <a
              href="#kodeorbit"
              className="inline-flex h-[59px] items-center justify-center gap-2 rounded-[57px] px-9 py-4 font-['Satoshi'] text-[20px] font-bold text-white shadow-[0px_4px_16px_rgba(104,97,238,0.25)] transition-all duration-300 hover:scale-105"
              style={{
                backgroundImage:
                  "linear-gradient(169.79deg, rgb(154, 150, 255) 8.4213%, rgb(104, 97, 238) 47.735%, rgb(88, 81, 234) 87.048%)",
              }}
            >
              <span>View KodeOrbit</span>
              <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
