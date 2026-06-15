import AdvancedCard from "./AdvancedCard";

const cards = [
  { icon: "/assets/imgSettingDone04.svg", title: "AI Task Suggestions.", desc: "Get smart recommendations for task prioritization." },
  { icon: "/assets/imgScreenAddToHome.svg", title: "Priority Scoring.", desc: "Automatic scoring based on urgency and impact." },
  { icon: "/assets/imgCalendar03.svg", title: "Deadline Forecasting.", desc: "ML-powered predictions for realistic deadlines." },
  { icon: "/assets/imgAlarmClock.svg", title: "Focus Mode Timer.", desc: "Pomodoro-style timer with distraction blocking." },
];

export default function AdvancedSection() {
  return (
    <section className="advanced">
      <div className="wrap-1480 advanced-row">
        <div className="text-block">
          <h2>Advanced Productivity Tools for High-<span>Performing Teams.</span></h2>
          <p>Equip your team with powerful tools designed to improve focus, efficiency, and collaboration.</p>
        </div>
        <div className="advanced-grid">
          {cards.map((c) => (
            <AdvancedCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
