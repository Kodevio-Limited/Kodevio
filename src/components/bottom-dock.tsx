"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Brands", href: "#brands", hasSubmenu: true },
  { label: "Products", href: "#products", hasSubmenu: true },
  { label: "Services", href: "#services", hasSubmenu: false },
  { label: "Company", href: "#ceo", hasSubmenu: true },
];

export default function BottomDock({
  visible = true,
}: {
  visible?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside
      aria-label="Floating navigation dock"
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-28 opacity-0 pointer-events-none"
      }`}
    >
      {/* Expanded Popup Menu (Figma node 369:1461, 512px x 660px, radius 55px) */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-[min(512px,calc(100vw-32px))] rounded-[55px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-[#eeeeee] animate-fadeIn"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-4">
            <span className="font-['Satoshi'] text-[20px] font-medium text-[#989898]">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex size-9 items-center justify-center rounded-full bg-[#f4f4f4] text-[#666] hover:bg-[#e8e8e8] transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between font-['Satoshi'] text-[28px] sm:text-[31px] font-medium text-black transition-colors hover:text-[#6861ee]"
              >
                <span>{item.label}</span>
                {item.hasSubmenu && (
                  <svg viewBox="0 0 24 24" fill="none" className="size-6 -rotate-90 text-black">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="mt-12">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex h-[59px] w-full items-center justify-center gap-2 rounded-[57px] font-['Satoshi'] text-[20px] font-bold text-white shadow-[0px_4px_16px_rgba(104,97,238,0.25)] transition-transform hover:scale-[1.02]"
              style={{
                backgroundImage:
                  "linear-gradient(167.63deg, rgb(154, 150, 255) 8.4213%, rgb(104, 97, 238) 47.735%, rgb(88, 81, 234) 87.048%)",
              }}
            >
              <span>Get Started</span>
              <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Floating Pill Dock (Figma node 369:1446, 464px x 75px, radius 154px, bg #0d0d0d) */}
      <div className="flex h-[75px] w-[min(464px,calc(100vw-32px))] items-center justify-between rounded-[154px] bg-[#0d0d0d] px-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md">
        {/* Left: Purple Kodevio Mark Logo */}
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/brand/logo_raw.png"
            alt="Kodevio"
            width={34}
            height={42}
            unoptimized
            className="h-[38px] w-auto object-contain [filter:brightness(0)_invert(36%)_sepia(96%)_saturate(4200%)_hue-rotate(233deg)_brightness(102%)_contrast(101%)]"
          />
        </a>

        {/* Center: Home Button Capsule */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 rounded-[43px] bg-[#1e1e1e] px-5 py-2.5 text-white transition-all hover:bg-[#282828] active:scale-95 cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-5 text-white" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="font-['Satoshi'] text-[19px] font-medium leading-[1.4]">
            Home
          </span>
        </button>

        {/* Right: Divider & Menu Button */}
        <div className="flex items-center gap-4">
          <div className="h-7 w-[1px] bg-white/20" />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2.5 text-white transition-colors hover:text-white/80 active:scale-95 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-5 text-white" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
            </svg>
            <span className="font-['Satoshi'] text-[19px] font-medium leading-[1.4]">
              Menu
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
