"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";

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
    features: ["Unlimited projects", "Advanced analytics", "Workflow automation", "Priority support", "Team dashboards", "API access", "File sharing"],
    btnText: "Get Started Today",
    btnVariant: "light" as const,
    glow: true,
  },
  {
    plan: "Business Package",
    desc: "Designed for teams managing complex workflows.",
    monthly: "49.99",
    annual: "479.90",
    features: ["Everything in Growth", "Advanced reporting", "Custom workflows", "Team performance insights", "Integration with external tools", "Role", "Permission management"],
    btnText: "Get Business Package",
    btnVariant: "dark" as const,
  },
  {
    plan: "Enterprise Package",
    desc: "Built for large organizations with advanced security needs.",
    isCustom: true,
    features: ["Everything in Business", "SSO & SAML authentication", "Dedicated support manager", "Custom integrations", "SLA uptime guarantee", "Advanced security controls", "Audit logs"],
    btnText: "Request a Quote",
    btnVariant: "light" as const,
  },
];

export default function PricingHero() {
  const [mode, setMode] = useState<Mode>("annual");
  const isAnnual = mode === "annual";

  return (
    <section className="hero wrap-1480">
      <div className="title-box">
        <h1>Modern, Scalable Pricing Designed for Growing Teams of <span>Every Size.</span></h1>
        <p>Transparent plans built to support startups, growing teams, and large organizations.</p>
      </div>

      <div className="billing-toggle">
        <button type="button" className={!isAnnual ? "active" : ""} onClick={() => setMode("monthly")}>Monthly</button>
        <button type="button" className={isAnnual ? "active" : ""} onClick={() => setMode("annual")}>Annual <span>-20%</span></button>
      </div>

      <div className="pricing-cards">
        {plans.map((p) => (
          <PricingCard key={p.plan} {...p} isAnnual={isAnnual} />
        ))}
      </div>
    </section>
  );
}
