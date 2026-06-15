"use client";

import { useEffect } from "react";
import DarkHero from "./DarkHero";
import DarkCapabilities from "./DarkCapabilities";
import DarkPlatform from "./DarkPlatform";
import DarkEnvironment from "./DarkEnvironment";
import DarkPricingSection from "./DarkPricingSection";
import DarkFaqSection from "./DarkFaqSection";
import DarkCtaSection from "./DarkCtaSection";
import DarkPricingCtaSection from "../pricing/DarkPricingCtaSection";

export default function DarkHomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <DarkHero />
      <DarkCapabilities />
      <DarkPlatform />
      <DarkEnvironment />
      <DarkPricingSection />
      <DarkFaqSection />
      <DarkPricingCtaSection />
    </>
  );
}
