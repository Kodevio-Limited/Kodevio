"use client";

import BottomDock from "@/components/bottom-dock";
import CeoSection from "@/components/ceo-section";
import ClientReviewSection from "@/components/client-review";
import CompaniesSection from "@/components/companies-section";
import DigitalProductsSection from "@/components/digital-products";
import HeroSection from "@/components/hero-section";
import HowWeWorkSection from "@/components/how-we-work";
import OtherBrandsSection from "@/components/other-brands";
import PricingSection from "@/components/pricing-section";
import SplashScreen from "@/components/splash-screen";
import WhatWeDoSection from "@/components/what-we-do";
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
      <main className="relative min-h-screen bg-white text-[#2d2f33] overflow-x-hidden">
        {/* Section 1: Hero Section */}
        <HeroSection
          isEntered={heroEntered}
          isNavVisible={!scrolledPastHero}
        />

        {/* Section 2: Company Logos */}
        <CompaniesSection />

        {/* Section 3: CEO & Platform Stats */}
        <CeoSection />

        {/* Section 4: See Pricing & Availability */}
        <PricingSection />

        {/* Section 5: How We Work (Folder Tabs) */}
        <HowWeWorkSection />

        {/* Section 6: Client Reviews (Video Testimonials) */}
        <ClientReviewSection />

        {/* Section 7: What We Do (Signature Contrast Dark Showcase) */}
        <WhatWeDoSection />

        {/* Section 8: Specialist Brands (KodeMount & KodeOrbit) */}
        <OtherBrandsSection />

        {/* Section 9: Digital Products (Case Studies Grid) */}
        <DigitalProductsSection />

        {/* Floating Bottom Navigation Dock */}
        <BottomDock visible={scrolledPastHero} />
      </main>
    </>
  );
}
