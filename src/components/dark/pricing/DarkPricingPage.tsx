"use client";

import DarkPricingHero from "./DarkPricingHero";
import DarkInsightsSection from "./DarkInsightsSection";
import DarkPricingFaqSection from "./DarkPricingFaqSection";
import DarkPricingCtaSection from "./DarkPricingCtaSection";

export default function DarkPricingPage() {
  return (
    <>
      <div className="pricing-page">
        <img className="decor d1" src="/assets/imgVector.svg" alt="" />
        <img className="decor d2" src="/assets/imgVector.svg" alt="" />
        <DarkPricingHero />
        <DarkInsightsSection />
        <DarkPricingFaqSection />
      </div>
      <DarkPricingCtaSection />
    </>
  );
}
