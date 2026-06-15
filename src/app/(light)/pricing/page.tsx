import "@/../css/pricing.css";
import PricingHero from "@/components/pricing/PricingHero";
import InsightsSection from "@/components/pricing/InsightsSection";
import PricingFaqSection from "@/components/pricing/PricingFaqSection";
import PricingCtaSection from "@/components/pricing/PricingCtaSection";

export default function PricingPage() {
  return (
    <>
      <div className="pricing-page">
        <img className="decor d1" src="/assets/imgVector.svg" alt="" />
        <img className="decor d2" src="/assets/imgVector.svg" alt="" />
        <PricingHero />
        <InsightsSection />
        <PricingFaqSection />
      </div>
      <PricingCtaSection />
    </>
  );
}
