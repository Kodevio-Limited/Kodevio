"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SplashScreenProps {
  onTransitionStart?: () => void;
  onComplete?: () => void;
  durationMs?: number;
}

const HANDOFF_MS = 1060; // logo reaches mid-screen in brand purple
const HARD_FALLBACK_MS = 4000; // absolute safety net — never trap the user

export default function SplashScreen({
  onTransitionStart,
  onComplete,
  durationMs = 1600,
}: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Callbacks live in refs so a parent re-render can never restart the timers
  // (that bug left the splash on screen forever).
  const transitionRef = useRef(onTransitionStart);
  const completeRef = useRef(onComplete);
  useEffect(() => {
    transitionRef.current = onTransitionStart;
  }, [onTransitionStart]);
  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  const finishedRef = useRef(false);

  useEffect(() => {
    // Lock scrolling behind the splash and always restore it on unmount.
    const root = document.documentElement;
    const body = document.body;
    const prevRootOverflow = root.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const finish = () => {
      if (finishedRef.current) return; // idempotent: run exactly once
      finishedRef.current = true;
      setIsFinished(true);
      completeRef.current?.();
    };

    // 1. Logo smoothly slides up from the bottom towards 75% screen height.
    // 2. While sliding, the color transitions from white to official Kodevio brand purple.
    // 3. At 1060ms: As the logo arrives at 75% height in full Kodevio purple,
    //    trigger the Hero section to physically slide in through the very bottom.
    const handoffTimer = setTimeout(() => {
      setIsExiting(true);
      transitionRef.current?.();
    }, HANDOFF_MS);

    // 4. Splash cleanly unmounts at 1600ms as the Hero section completes its slide-up.
    const finishTimer = setTimeout(finish, durationMs);

    // 5. Hard fallback: even if an asset/font/animation hangs, the site moves on.
    const fallbackTimer = setTimeout(() => {
      setIsExiting(true);
      transitionRef.current?.();
      finish();
    }, HARD_FALLBACK_MS);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearTimeout(handoffTimer);
        clearTimeout(finishTimer);
        setIsExiting(true);
        transitionRef.current?.();
        setTimeout(finish, 150);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(handoffTimer);
      clearTimeout(finishTimer);
      clearTimeout(fallbackTimer);
      window.removeEventListener("keydown", handleKeyDown);
      // Unlock the page when the splash ends (or unmounts).
      root.style.overflow = prevRootOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [durationMs]);

  if (isFinished) return null;

  return (
    <div
      aria-label="Loading Kodevio experience"
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#040406] transition-opacity duration-600 ease-out ${
        isExiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* 100% Edge-to-edge cinematic Earth/Space video backdrop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.75] contrast-[1.25] saturate-[1.15]"
        src="/splash/splash-video.mp4"
      />

      {/* Deep, crisp obsidian vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(4,4,6,0.65)_60%,rgba(4,4,6,0.98)_100%)]" />

      {/* Central Stage: Logo slides continuously from bottom to ~75% screen height with color transformation */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <div className="animate-smooth-slide-up relative flex flex-col items-center justify-center select-none">
          {/* Base Layer: Crisp pure white logo while emerging from the bottom */}
          <Image
            src="/brand/logo_raw.png"
            alt="Kodevio"
            width={520}
            height={122}
            priority
            className="h-[84px] w-auto sm:h-[106px] md:h-[126px] lg:h-[142px] object-contain select-none drop-shadow-[0_4px_30px_rgba(255,255,255,0.4)]"
          />

          {/* Color Layer: Official Kodevio purple branding smoothly infusing as it rises to 75% height */}
          <Image
            src="/brand/logo_purple.png"
            alt=""
            width={520}
            height={122}
            priority
            aria-hidden="true"
            className="animate-purple-color-infusion absolute inset-0 h-[84px] w-auto sm:h-[106px] md:h-[126px] lg:h-[142px] object-contain select-none drop-shadow-[0_4px_35px_rgba(104,97,238,0.85)]"
          />
        </div>
      </div>
    </div>
  );
}
