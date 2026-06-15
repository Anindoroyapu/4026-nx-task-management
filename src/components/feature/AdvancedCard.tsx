export default function AdvancedCard({ icon, title, desc }: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <article>
      <span><img src={icon} alt="" /></span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}
