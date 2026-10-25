"use client";

import Image from "next/image";
import { useState } from "react";

const OFFERINGS = [
  {
    id: "app-dev",
    title: "App Development",
    description:
      "We design user-friendly experiences for iPhone, Android, Flutter, and React Native apps, so your product feels polished, easy to use, and built for growth.",
    image: "/what-we-do/raw_0.png",
    gradient: "from-[#f8f2fe] to-[#ce96ff]",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Our team integrates AI into product experiences where it creates real value simplifying workflows, improving decisions, and making products smarter, faster, and easier to use.",
    image: "/what-we-do/raw_1.png",
    gradient: "from-[#eff6ff] to-[#93c5fd]",
  },
  {
    id: "web-dev",
    title: "Web Engineering",
    description:
      "We engineer blazingly fast web applications, SaaS dashboards, and marketing websites built on modern Next.js and cloud architectures designed for uncompromised scale.",
    image: "/what-we-do/raw_2.png",
    gradient: "from-[#f0fdf4] to-[#86efac]",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "World-class interface design, design systems, and product experiences that stand out in crowded markets and captivate users at first glance.",
    image: "/what-we-do/raw_3.png",
    gradient: "from-[#fff7ed] to-[#fdba74]",
  },
];

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="services"
      aria-label="What We Do"
      className="relative w-full bg-[#0d0d0d] py-24 sm:py-32 overflow-hidden text-white"
    >
      <div className="mx-auto max-w-[1765px] px-6 sm:px-12">
        {/* Center Header */}
        <div className="flex flex-col items-center text-center max-w-[850px] mx-auto">
          {/* AI Sparkle Icon Badge */}
          <div className="flex size-[50px] items-center justify-center rounded-[8px] border-2 border-[#7974ee] p-2">
            <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#7974ee]" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
            </svg>
          </div>

          <h2 className="mt-8 font-['Poppins',sans-serif] text-[36px] sm:text-[48px] lg:text-[60px] font-medium leading-[1.3] text-white">
            Everything You Need to Design, Build, and Scale Digital Products
          </h2>
        </div>

        {/* Tab Selection Navigation */}
        <div className="mt-12 flex justify-center gap-3 flex-wrap">
          {OFFERINGS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-['Satoshi'] text-[17px] sm:text-[19px] font-medium transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? "bg-white text-black shadow-lg scale-105"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Active Offering Showcase Display */}
        <div className="mt-16 mx-auto max-w-[1200px] rounded-[28px] border border-white/10 bg-white/[0.03] p-8 sm:p-14 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Info Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h3 className="font-['Poppins',sans-serif] text-[38px] sm:text-[48px] lg:text-[54px] font-medium text-white leading-tight">
                {OFFERINGS[activeTab].title}
              </h3>

              <p className="mt-6 font-['Satoshi'] text-[20px] sm:text-[22px] leading-[1.5] text-[#f2f2f2]">
                {OFFERINGS[activeTab].description}
              </p>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex h-[59px] items-center justify-center gap-2 rounded-[57px] px-9 py-4 font-['Satoshi'] text-[20px] font-bold text-white shadow-[0px_4px_16px_rgba(104,97,238,0.35)] transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundImage:
                      "linear-gradient(166.67deg, rgb(154, 150, 255) 8.4213%, rgb(104, 97, 238) 47.735%, rgb(88, 81, 234) 87.048%)",
                  }}
                >
                  <span>See More</span>
                  <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                className={`relative w-full max-w-[500px] h-[440px] sm:h-[480px] rounded-[24px] overflow-hidden bg-gradient-to-b ${OFFERINGS[activeTab].gradient} p-6 shadow-2xl flex items-center justify-center`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={OFFERINGS[activeTab].image}
                    alt={OFFERINGS[activeTab].title}
                    fill
                    sizes="500px"
                    className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
