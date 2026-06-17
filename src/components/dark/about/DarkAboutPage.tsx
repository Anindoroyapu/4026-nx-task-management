"use client";

import { useEffect } from "react";
import DarkAboutHero from "./DarkAboutHero";
import DarkJourneySection from "./DarkJourneySection";
import DarkAboutCtaSection from "./DarkAboutCtaSection";

export default function DarkAboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="about-page">
        <img
          className="decor decor-top-left"
          src="/assets/imgVector.svg"
          alt=""
        />
        <img
          className="decor decor-top-right"
          src="/assets/imgVector.svg"
          alt=""
        />

        <section className="top-section">
          <img className="arm arm-left" src="/assets/imgEllipse13.svg" alt="" />
          <img
            className="arm arm-right"
            src="/assets/imgEllipse15.svg"
            alt=""
          />
          <DarkAboutHero />
        </section>

        <DarkJourneySection />
      </main>
      <DarkAboutCtaSection />
    </>
  );
}
