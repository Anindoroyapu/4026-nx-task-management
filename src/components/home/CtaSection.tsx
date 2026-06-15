export default function CtaSection() {
  return (
    <section className="cta-footer" data-animate="fade-up">
      <div
        className="cta-card"
        style={{
          background: "url(/assets/section-bg.png)",
          backgroundSize: "contain",
          backgroundBlendMode: "overlay",
        }}
      >
        <h2>Reclaim Your Team&apos;s Peak <span>Productivity</span></h2>
        <p>
          Empower your team with a centralized platform designed to connect
          people, simplify complex workflows, and help everyone stay focused,
          productive, and aligned.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-dark">Start free Trial</button>
          <button className="btn btn-light">Book a Demo</button>
        </div>
        <div className="mini-badge">
          <div className="avatars icons">
            <img src="/assets/imgSolarCodeFileBold1.svg" alt="" />
            <img src="/assets/imgMdiFileCad1.svg" alt="" />
            <img src="/assets/imgFluentTaskListSquareSparkle20Filled.svg" alt="" />
          </div>
          <h5>Good Morning, <span>Sayra ali!</span></h5>
          <p>You have 12 tasks due today</p>
        </div>
      </div>
    </section>
  );
}
