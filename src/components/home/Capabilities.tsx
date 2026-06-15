import CapCard from "./CapCard";

const largeCards = [
  {
    img: "/assets/imgMaterialIconThemeFolderPdf.png",
    title: "Visual Kanban Boards.",
    desc: "Organize and visualize your workflow with customizable Kanban columns.",
  },
  {
    img: "/assets/task-list.png",
    title: "Task Lists & Prioritization.",
    desc: "Create structured task lists with priorities, due dates, and assignees.",
  },
];

const smallCards = [
  {
    img: "/assets/imgRectangle2711.png",
    title: "Unified Project Timelines.",
    desc: "Plan and track projects across an interactive timeline with dependencies.",
  },
  {
    img: "/assets/imgCharts.png",
    title: "Analytics Dashboard.",
    desc: "Track tasks completed, team velocity, and time saved at a glance.",
  },
  {
    img: "/assets/imgWoman.png",
    title: "Work from Anywhere.",
    desc: "Stay productive on the go with full mobile support and cloud sync.",
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities section-pad container" data-animate="fade-up">
      <div className="section-title centered">
        <h2>Everything Your Team <br /> Needs to <span>Grow Efficiently</span></h2>
        <p>
          All the tools, services, and support your team needs to create
          powerful digital products and deliver better user experiences.
        </p>
      </div>

      <div className="cap-grid-wide">
        {largeCards.map((c) => (
          <CapCard key={c.title} {...c} variant="large" />
        ))}
      </div>
      <div className="cap-grid">
        {smallCards.map((c) => (
          <CapCard key={c.title} {...c} variant="small" />
        ))}
      </div>
    </section>
  );
}
