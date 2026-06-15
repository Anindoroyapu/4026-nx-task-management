import "@/../css/about.css";
import AboutHero from "@/components/about/AboutHero";
import JourneySection from "@/components/about/JourneySection";
import AboutCtaSection from "@/components/about/AboutCtaSection";

export default function AboutPage() {
  return (
    <>
      <div className="about-page">
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

        <div className="top-section">
          <AboutHero />
        </div>

        <JourneySection />
      </div>
      <AboutCtaSection />
    </>
  );
}
