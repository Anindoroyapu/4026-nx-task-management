const tools = [
  { shot: "/assets/imgRectangle27312.png", icon: "/assets/imgKeyframesMultiple.svg", title: "Visual Kanban Boards.", desc: "Drag-and-drop task management with customizable columns and swim lanes." },
  { shot: "/assets/imgRectangle27412.png", icon: "/assets/imgTimelineList.svg", title: "Smart Task Lists.", desc: "Structured lists with priorities, due dates, sub-tasks, and assignees." },
  { shot: "/assets/imgRectangle27512.png", icon: "/assets/imgTimeline.svg", title: "Project Timeline.", desc: "Interactive Gantt charts with dependencies and milestone tracking." },
  { shot: "/assets/imgRectangle27612.png", icon: "/assets/imgRadar01.svg", title: "Time Tracking.", desc: "Built-in timer with session history, reports, and automatic logging." },
  { shot: "/assets/imgRectangle27712.png", icon: "/assets/imgAddTeam02.svg", title: "Team Collaboration.", desc: "Plan and track projects across an interactive timeline with dependencies." },
  { shot: "/assets/imgRectangle27812.png", icon: "/assets/imgFlowchart01.svg", title: "Workflow Automation.", desc: "No-code rule builder to automate repetitive tasks and notifications." },
];

export default function DarkToolsSection() {
  return (
    <section className="tools bg-soft">
      <div className="section-head center">
        <h2>Experience Powerful Tools with <span>Beautiful Simplicity.</span></h2>
        <p>Smart features built to simplify workflows and help teams work more efficiently.</p>
      </div>
      <div className="tool-grid wrap-1480">
        {tools.map((t) => (
          <article className="tool-card" key={t.title}>
            <img className="shot" src={t.shot} alt={t.title} />
            <div className="tool-meta">
              <span className="ico"><img src={t.icon} alt="" /></span>
              <div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
