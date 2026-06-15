"use client";

import { useState } from "react";

const envButtons = [
  { icon: "/assets/imgCodeFolder.svg", label: "Software Engineering." },
  { icon: "/assets/imgPaintBoard.svg", label: "Product Design." },
  { icon: "/assets/imgPromotion.svg", label: "Marketing Ops." },
  { icon: "/assets/imgNewJob.svg", label: "Exclusive Leadership." },
];

export default function Environment() {
  const [active, setActive] = useState("Software Engineering.");

  return (
    <section
      className="environment section-pad"
      data-animate="fade-up"
      style={{ background: "url(/assets/section-bg.png)" }}
    >
      <div className="container-wide env-wrap">
        <div className="section-title centered">
          <h2>
            Flexible Environments Designed for <span>Every Specialist</span>
          </h2>
          <p>
            Tailored tools and workflows designed to support every role and expertise.
          </p>
        </div>
        <div className="env-body">
          <aside style={{ height: "100%", justifyContent: "center" }}>
            <div style={{ display: "grid", gap: "8px" }}>
              {envButtons.map(({ icon, label }) => (
                <button
                  key={label}
                  type="button"
                  className={active === label ? "active" : ""}
                  onClick={() => setActive(label)}
                >
                  <img src={icon} alt="" />{label}
                </button>
              ))}
            </div>
          </aside>
          <div className="env-card">
            <div className="env-title">
              <img src="/assets/imgSolarCodeSquareBold.svg" alt="" />Recent
              Activity.<span>• Jira • Slack • Aws</span>
            </div>
            <img
              src="/assets/imgRectangle271111.png"
              alt="Recent activity panel"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
