"use client";

import Image from "next/image";
import { useState } from "react";

export default function BottomDock() {
  const [activeTab, setActiveTab] = useState<"home" | "menu">("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile / Quick navigation drawer */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation drawer"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute bottom-28 left-1/2 -translate-x-1/2 w-[min(480px,calc(100%-32px))] rounded-[32px] border border-white/10 bg-[#121217]/95 p-6 shadow-2xl backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-[Satoshi] text-[18px] font-semibold text-white">
                Navigation
              </span>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setMenuOpen(false)}
                className="size-8 rounded-full bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                { label: "Home", href: "#hero" },
                { label: "Trusted Companies", href: "#companies" },
                { label: "Leadership & Impact", href: "#ceo" },
                { label: "Our Process", href: "#process" },
                { label: "Pricing & Plans", href: "#pricing" },
                { label: "Client Reviews", href: "#reviews" },
                { label: "What We Do", href: "#services" },
                { label: "Specialist Brands", href: "#brands" },
                { label: "Digital Products", href: "#products" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 font-[Satoshi] text-[16px] text-white/80 hover:bg-white/10 hover:text-white transition-all"
                  >
                    <span>{item.label}</span>
                    <span className="text-white/40">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Floating Bottom Nav Dock */}
      <aside
        aria-label="Floating dock"
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      >
        <div
          className="flex h-[64px] items-center gap-4 rounded-full border border-white/15 bg-[#121217]/80 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:shadow-[0_12px_40px_rgba(88,81,234,0.25)]"
        >
          {/* Home button */}
          <button
            type="button"
            onClick={() => {
              setActiveTab("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Scroll to home"
            className={`flex size-10 items-center justify-center rounded-full transition-all duration-200 ${
              activeTab === "home"
                ? "bg-[#5851ea] text-white shadow-[0_0_12px_rgba(88,81,234,0.6)]"
                : "text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Image
              src="/navbar/bottom/Home Icon.svg"
              alt="Home"
              width={20}
              height={20}
              className="size-5 object-contain"
            />
          </button>

          {/* Vertical separator (Vector 9) */}
          <div className="h-6 w-[1px] bg-white/15" />

          {/* Logo center */}
          <a
            href="#hero"
            aria-label="Kodevio home"
            className="flex items-center px-2 transition-transform duration-200 hover:scale-105"
          >
            <Image
              src="/navbar/bottom/Kodevio Logo.svg"
              alt="Kodevio"
              width={90}
              height={24}
              className="h-5 w-auto object-contain"
            />
          </a>

          {/* Vertical separator */}
          <div className="h-6 w-[1px] bg-white/15" />

          {/* Menu button */}
          <button
            type="button"
            onClick={() => {
              setActiveTab("menu");
              setMenuOpen((prev) => !prev);
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className={`flex size-10 items-center justify-center rounded-full transition-all duration-200 ${
              menuOpen
                ? "bg-[#5851ea] text-white shadow-[0_0_12px_rgba(88,81,234,0.6)]"
                : "text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Image
              src="/navbar/bottom/Menu Icon.svg"
              alt="Menu"
              width={20}
              height={20}
              className="size-5 object-contain"
            />
          </button>
        </div>
      </aside>
    </>
  );
}
