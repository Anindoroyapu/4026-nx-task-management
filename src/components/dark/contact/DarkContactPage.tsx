"use client";

import { useEffect } from "react";
import DarkContactHero from "./DarkContactHero";
import DarkOfficeSection from "./DarkOfficeSection";
import DarkMessageForm from "./DarkMessageForm";
import DarkContactCtaSection from "./DarkContactCtaSection";

export default function DarkContactPage() {
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
    <main className="contact-page">
      <img className="vector v-left" src="/assets/imgVector.svg" alt="" />
      <img className="vector v-right" src="/assets/imgVector.svg" alt="" />

      <section className="head-wrap">
        <img className="hand hand-left" src="/assets/imgEllipse16.svg" alt="" />
        <img
          className="hand hand-right"
          src="/assets/imgEllipse15.svg"
          alt=""
        />
        <img className="badge b-left" src="/assets/imgGroup9.svg" alt="" />
        <img className="badge b-right" src="/assets/imgGroup8.svg" alt="" />
        <DarkContactHero />
      </section>

      <section className="middle container-1480">
        <DarkOfficeSection />
        <DarkMessageForm />
      </section>

      <DarkContactCtaSection />
    </main>
  );
}
