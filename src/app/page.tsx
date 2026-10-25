"use client";

import BottomDock from "@/components/bottom-dock";
import HeroSection from "@/components/hero-section";
import SplashScreen from "@/components/splash-screen";
import { useState } from "react";

export default function Home() {
  const [heroEntered, setHeroEntered] = useState(false);
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <>
      {!splashFinished && (
        <SplashScreen
          onTransitionStart={() => setHeroEntered(true)}
          onComplete={() => setSplashFinished(true)}
        />
      )}
      <main className="relative min-h-screen overflow-hidden bg-[#070709] text-white">
        <HeroSection isEntered={heroEntered} />
        <BottomDock />
      </main>
    </>
  );
}
