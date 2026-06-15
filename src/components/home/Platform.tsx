"use client";

import { useState } from "react";
import FeatureCard from "./FeatureCard";

const tabs = ["Freelancer", "Startup Team", "Creative Agency", "Remote Team", "Enterprise Team"];

const features = [
  { icon: "/assets/imgTimeline-black.svg", title: "Timeline Scheduling", desc: "Interactive Gantt chart with milestones and dependencies.", shot: "/assets/imgRectangle27111.png" },
  { icon: "/assets/imgDashboardSquare03-white.svg", title: "Custom Kanban", desc: "Task columns with avatars, priority labels, and drag-drop.", shot: "/assets/imgRectangle2712.png" },
  { icon: "/assets/imgAddTeam-white.svg", title: "Team Capacity.", desc: "Visual workload bars for each team member and balance.", shot: "/assets/imgRectangle2713.png" },
  { icon: "/assets/imgChartAverage-white.svg", title: "Integrated Analytics.", desc: "Line graphs, donut charts, and real-time performance data.", shot: "/assets/imgRectangle2714.png" },
  { icon: "/assets/imgAlarmClock-white.svg", title: "Smart Time Tracking.", desc: "Digital timer with session history and timesheet export.", shot: "/assets/imgRectangle2715.png" },
  { icon: "/assets/imgZap-white.svg", title: "Workflow Automation.", desc: "No-code rule builder: IF status = Done THEN notify PM.", shot: "/assets/imgRectangle2716.png" },
];

export default function Platform() {
  const [activeTab, setActiveTab] = useState("Startup Team");

  return (
    <section className="platform section-pad container-wide" data-animate="fade-up">
      <div className="platform-head">
        <h2>
          One Powerful Platform for Faster, Smarter <span>Workflows</span>
        </h2>
        <div className="segment-tabs">
          {tabs.map((tab) => (
            <span
              key={tab}
              className={activeTab === tab ? "on" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="feature-grid">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
