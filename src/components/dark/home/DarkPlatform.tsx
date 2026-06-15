"use client";

import { useState } from "react";

const tabs = ["Freelancer", "Startup Team", "Creative Agency", "Remote Team", "Enterprise Team"];

const features = [
  { icon: "/assets/imgTimeline.svg", title: "Timeline Scheduling", desc: "Interactive Gantt chart with milestones and dependencies.", shot: "/assets/Rectangle 272.png" },
  { icon: "/assets/imgDashboardSquare03.svg", title: "Custom Kanban", desc: "Task columns with avatars, priority labels, and drag-drop.", shot: "/assets/imgRectangle273.png" },
  { icon: "/assets/imgAddTeam.svg", title: "Team Capacity.", desc: "Visual workload bars for each team member and balance.", shot: "/assets/imgRectangle273.png" },
  { icon: "/assets/imgChartAverage.svg", title: "Integrated Analytics.", desc: "Line graphs, donut charts, and real-time performance data.", shot: "/assets/imgRectangle274.png" },
  { icon: "/assets/imgAlarmClock.svg", title: "Smart Time Tracking.", desc: "Digital timer with session history and timesheet export.", shot: "/assets/imgRectangle275.png" },
  { icon: "/assets/imgZap.svg", title: "Workflow Automation.", desc: "No-code rule builder: IF status = Done THEN notify PM.", shot: "/assets/imgRectangle276.png" },
];

export default function DarkPlatform() {
  const [activeTab, setActiveTab] = useState("Startup Team");

  return (
    <section className="platform section-pad container-wide" data-animate="fade-up">
      <div className="platform-head">
        <h2>One Powerful Platform for Faster, Smarter <span>Workflows</span></h2>
        <div className="segment-tabs">
          {tabs.map((tab) => (
            <span key={tab} className={activeTab === tab ? "on" : ""} onClick={() => setActiveTab(tab)}>{tab}</span>
          ))}
        </div>
      </div>
      <div className="feature-grid">
        {features.map((f) => (
          <article key={f.title}>
            <img className="icon" src={f.icon} alt={f.title} />
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
            <img className="shot" src={f.shot} alt={f.title} />
          </article>
        ))}
      </div>
    </section>
  );
}
