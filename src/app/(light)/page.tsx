"use client";

import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Capabilities from "@/components/home/Capabilities";
import Platform from "@/components/home/Platform";
import Environment from "@/components/home/Environment";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
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
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Capabilities />
      <Platform />
      <Environment />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
