export default function ToolCard({ shot, icon, title, desc }: {
  shot: string;
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="tool-card">
      <img className="shot" src={shot} alt={title} />
      <div className="tool-meta">
        <span className="ico"><img src={icon} alt="" /></span>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </article>
  );
}
