export default function CapCard({ img, title, desc, variant = "small" }: {
  img: string;
  title: string;
  desc: string;
  variant?: "large" | "small";
}) {
  return (
    <article className={`cap-card ${variant}`}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href="#">
        Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" />
      </a>
    </article>
  );
}
