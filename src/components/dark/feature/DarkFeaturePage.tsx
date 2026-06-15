import DarkFeatureHero from "./DarkFeatureHero";
import DarkToolsSection from "./DarkToolsSection";
import DarkAutomationSection from "./DarkAutomationSection";
import DarkLogoArcSection from "./DarkLogoArcSection";
import DarkAdvancedSection from "./DarkAdvancedSection";
import DarkFeatureCtaSection from "./DarkFeatureCtaSection";

export default function DarkFeaturePage() {
  return (
    <>
      <div className="feature-page">
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
        <DarkFeatureHero />
        <DarkToolsSection />
        <DarkAutomationSection />
        <DarkLogoArcSection />
        <DarkAdvancedSection />
      </div>{" "}
      <DarkFeatureCtaSection />
    </>
  );
}
