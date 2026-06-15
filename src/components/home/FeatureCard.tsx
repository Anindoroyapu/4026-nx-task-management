export default function FeatureCard({ icon, title, desc, shot }: {
  icon: string;
  title: string;
  desc: string;
  shot: string;
}) {
  return (
    <article>
      <img className="icon" src={icon} alt={title} />
      <h4>{title}</h4>
      <p>{desc}</p>
      <img className="shot" src={shot} alt={title} />
    </article>
  );
}
