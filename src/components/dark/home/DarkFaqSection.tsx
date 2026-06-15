"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I try the platform for free?",
    answer: "Yes, you can start with a free trial to explore boards, timelines, and team collaboration before choosing any paid plan.",
  },
  {
    question: "What happens when my trial ends?",
    answer: "When your trial ends, you can choose to upgrade to any of our paid plans to continue using the platform without interruption. If you don\u2019t upgrade, your account will remain inactive until a plan is selected.",
    defaultOpen: true,
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan any time, and your data stays safe during the switch.",
  },
  {
    question: "Do you offer discounts for annual plans?",
    answer: "Yes, annual billing includes discounted pricing compared to monthly plans and helps teams reduce overall cost.",
  },
  {
    question: "Is my data secure on the platform?",
    answer: "Your workspace is protected with encryption, access controls, and regular security updates to keep information secure.",
  },
  {
    question: "Do you offer support for teams?",
    answer: "Yes, team-focused support is available, including onboarding guidance and priority help based on your plan.",
  },
];

export default function DarkFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="faq section-pad" data-animate="fade-up">
      <div className="container-wide faq-wrap">
        <div className="faq-left">
          <h2>Your <span>Questions</span> About Workflow Management, Answered</h2>
          <p>Explore helpful insights and solutions to streamline the way your team works.</p>
          <button className="btn btn-dark">Contact Us</button>
        </div>
        <div className="faq-right">
          {faqs.map((f, i) => (
            <article key={f.question} className={`faq-item${openIndex === i ? " open" : ""}`} onClick={() => toggle(i)}>
              <h4><span className="dot">&bull;</span>{f.question}</h4>
              <img
                src={openIndex === i ? "/assets/imgRemoveCircleHalfDot.svg" : "/assets/imgAddCircleHalfDot.svg"}
                alt={openIndex === i ? "collapse" : "expand"}
              />
              <p>{f.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
