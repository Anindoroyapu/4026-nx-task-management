const timeline = [
  { cls: "c1", year: "2022", label: "Company Founded", desc: "Two engineers came together in San Francisco with a vision to change how teams manage work. The foundation of innovation was laid." },
  { cls: "c2", year: "2029", label: "Industry Recognition", desc: "Awarded best productivity platform by leading publications and recognized for impact and user experience." },
  { cls: "c3", year: "2023", label: "First Product Launch", desc: "Released the first version with boards, timelines and collaboration. Teams quickly adopted it." },
  { cls: "c4", year: "2028", label: "Enterprise Solutions", desc: "Introduced enterprise-grade security, scalability and compliance for larger organizations." },
  { cls: "c5", year: "2024", label: "50,000 Teams Joined", desc: "Rapid adoption across startups and enterprises accelerated global growth." },
  { cls: "c6", year: "2027", label: "Strategic Partnerships", desc: "Partnered with major platforms to broaden integrations and connected workflows." },
  { cls: "c7", year: "2025", label: "Global Expansion", desc: "Expanded operations globally and improved support in 120+ countries." },
  { cls: "c8", year: "2026", label: "New Product Features", desc: "Launched AI-powered workflows and advanced analytics to drive measurable outcomes." },
];

export default function DarkJourneySection() {
  return (
    <section className="journey">
      <div className="container-1480">
        <h2>Our Journey of <span>Invention.</span></h2>
        <div className="timeline-shell">
          <img className="person" src="/assets/imgMediumShotManHoldingLaptop1.png" alt="Person with laptop" />
          <img className="glow hupe" src="/assets/imgEllipse1.svg" alt="" />

          {timeline.map((t) => (
            <div key={t.cls} className={`card ${t.cls}`}>
              <h4>{t.year} <span>• {t.label}</span></h4>
              <p>{t.desc}</p>
            </div>
          ))}

          <img className="v v1" src="/assets/imgVector11.svg" alt="" />
          <img className="v v2" src="/assets/imgVector17.svg" alt="" />
          <img className="v v3" src="/assets/imgVector13.svg" alt="" />
          <img className="v v4" src="/assets/imgVector13.svg" alt="" />
          <img className="v v5" src="/assets/imgVector16.svg" alt="" />
          <img className="v v6" src="/assets/imgVector16.svg" alt="" />
          <img className="v v7" src="/assets/imgVector14.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
