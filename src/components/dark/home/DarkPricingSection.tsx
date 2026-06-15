"use client";

import { useState } from "react";
import DarkPricingCard from "./DarkPricingCard";

type Mode = "monthly" | "annual";

const plans = [
  {
    plan: "Starter Package",
    desc: "Perfect for individuals and small teams getting started.",
    monthly: "9.99",
    annual: "95.88",
    features: ["Up to 10 projects", "Basic Kanban boards", "5GB secure storage", "Email support", "Basic task management", "Activity tracking"],
    btnText: "Get Started Today",
    btnVariant: "light" as const,
  },
  {
    plan: "Growth Package",
    desc: "Best for growing teams that need advanced collaboration.",
    monthly: "29.99",
    annual: "287.90",
    features: ["Unlimited projects", "Advanced analytics", "Workflow automation", "Priority support", "Team dashboards", "API access", "File sharing", "Integrations"],
    btnText: "Get Started Today",
    btnVariant: "light" as const,
    glow: true,
  },
  {
    plan: "Business Package",
    desc: "Designed for teams managing complex workflows.",
    monthly: "49.99",
    annual: "479.90",
    features: ["Everything in Growth", "Advanced reporting", "Custom workflows", "Team performance insights", "Integration with external tools", "Role", "Permission management", "Extended data storage"],
    btnText: "Get Business Package",
    btnVariant: "dark" as const,
  },
  {
    plan: "Enterprise Package",
    desc: "Built for large organizations with advanced security needs.",
    isCustom: true,
    features: ["Everything in Business", "SSO & SAML authentication", "Dedicated support manager", "Custom integrations", "SLA uptime guarantee", "Advanced security controls", "Audit logs", "Compliance tools"],
    btnText: "Request a Quote",
    btnVariant: "light" as const,
  },
];

export default function DarkPricingSection() {
  const [mode, setMode] = useState<Mode>("annual");
  const isAnnual = mode === "annual";

  return (
    <section className="pricing section-pad" data-animate="fade-up">
      <div className="container-wide">
        <div className="section-title centered">
          <h2>Smart Pricing Intelligence with Built-In <span>ROI Calculator</span></h2>
          <p>Analyze pricing strategies and instantly measure the real return on your investment.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((p) => (
            <DarkPricingCard key={p.plan} {...p} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
}
