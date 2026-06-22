export default function DarkPricingCtaSection() {
  return (
    <section className="cta-footer">
      <div
        className="cta-card wrap-1230"
        style={{ backgroundColor: "#0f1030" }}
      >
        <h2>
          Reclaim Your Team&rsquo;s Peak <span>Productivity</span>
        </h2>
        <p>
          Empower your team with a centralized platform designed to connect
          people, simplify complex workflows, and help everyone stay focused,
          productive, and aligned.
        </p>
        <div className="btn-row">
          <button className="btn dark">Start free Trial</button>
          <button className="btn light">Book a Demo</button>
        </div>
        <aside className="mini-card">
          <div className="icons">
            <img src="/assets/imgSolarCodeFileBold.svg" alt="" />
            <img src="/assets/imgMdiFileCad.svg" alt="" />
            <img
              src="/assets/imgFluentTaskListSquareSparkle20Filled.svg"
              alt=""
            />
          </div>
          <h4>
            Good Morning, <span>Sayra ali!</span>
          </h4>
          <p>You have 12 tasks due today</p>
        </aside>
      </div>
    </section>
  );
}
