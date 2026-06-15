"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I try the platform for free?",
    answer: "Yes. You can start with the free trial to explore core task management, team collaboration, and workspace setup before choosing a paid plan.",
  },
  {
    question: "What happens when my trial ends?",
    answer: "When your trial ends, you can choose to upgrade to any of our paid plans to continue using the platform without interruption. If you do not upgrade, your account will remain inactive until a plan is selected.",
    defaultOpen: true,
  },
  {
    question: "Can I change plans later?",
    answer: "Yes. You can upgrade or switch plans whenever your team grows or your workflow changes. Billing is adjusted based on the plan you pick next.",
  },
  {
    question: "Do you offer discounts for annual plans?",
    answer: "Annual billing includes a discount compared to monthly billing, which is why the toggle shows the yearly plan with a lower effective rate.",
  },
  {
    question: "Is my data secure on the platform?",
    answer: "Yes. Your workspace data is protected with secure access controls, encrypted storage, and role-based permissions for your team.",
  },
  {
    question: "Do you offer support for teams?",
    answer: "Yes. Paid plans include team support options, and higher tiers unlock priority assistance and dedicated support coverage.",
  },
];

function FaqItem({ question, answer, defaultOpen }: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <article className={`item${open ? " open" : ""}`} onClick={() => setOpen((p) => !p)}>
      <h4>• {question}</h4>
      <img
        src={open ? "/assets/imgRemoveCircleHalfDot.svg" : "/assets/imgAddCircleHalfDot.svg"}
        alt={open ? "collapse" : "expand"}
      />
      <p>{answer}</p>
    </article>
  );
}

export default function PricingFaqSection() {
  return (
    <section className="faq">
      <div className="wrap-1480 faq-wrap">
        <div className="faq-left">
          <h2>Your <span>Questions</span> About Workflow Management, Answered</h2>
          <p>Explore helpful insights and solutions to streamline the way your team works.</p>
          <button className="btn dark" style={{ width: "fit-content" }}>Contact Us</button>
        </div>
        <div className="faq-right">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
