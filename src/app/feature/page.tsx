import "@/../css/feature.css";
import FeatureHero from "@/components/feature/FeatureHero";
import ToolsSection from "@/components/feature/ToolsSection";
import AutomationSection from "@/components/feature/AutomationSection";
import LogoArcSection from "@/components/feature/LogoArcSection";
import AdvancedSection from "@/components/feature/AdvancedSection";
import FeatureCtaSection from "@/components/feature/FeatureCtaSection";

export default function FeaturePage() {
  return (
    <div className="feature-page">
      <img className="decor decor-top-left" src="/assets/imgVector.svg" alt="" />
      <img className="decor decor-top-right" src="/assets/imgVector.svg" alt="" />

      <FeatureHero />
      <ToolsSection />
      <AutomationSection />
      <LogoArcSection />
      <AdvancedSection />
      <FeatureCtaSection />
    </div>
  );
}
