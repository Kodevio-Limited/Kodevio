"use client";

import BottomDock from "@/components/bottom-dock";
import CeoSection from "@/components/ceo-section";
import CompaniesSection from "@/components/companies-section";
import HeroSection from "@/components/hero-section";
import HowWeWorkSection from "@/components/how-we-work";
import PricingSection from "@/components/pricing-section";
import SplashScreen from "@/components/splash-screen";
import { useEffect, useState } from "react";

export default function Home() {
  const [heroEntered, setHeroEntered] = useState(false);
  const [splashFinished, setSplashFinished] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When scrolled down past hero top (80px), vanish top nav and reveal bottom dock
      if (window.scrollY > 80) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!splashFinished && (
        <SplashScreen
          onTransitionStart={() => setHeroEntered(true)}
          onComplete={() => setSplashFinished(true)}
        />
      )}
      <main className="relative min-h-screen bg-[#070709] text-white">
        <HeroSection
          isEntered={heroEntered}
          isNavVisible={!scrolledPastHero}
        />
        <CompaniesSection />
        <CeoSection />
        <PricingSection />
        <HowWeWorkSection />
        <BottomDock visible={scrolledPastHero} />
      </main>
    </>
  );
}
