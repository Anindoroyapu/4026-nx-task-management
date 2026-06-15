export default function ContactCtaSection() {
  return (
    <section className="cta-footer">
      <div className="cta-card container-1230">
        <h2>Reclaim Your Team&rsquo;s Peak <span>Productivity</span></h2>
        <p>Empower your team with a centralized platform designed to connect people, simplify complex workflows, and help everyone stay focused, productive, and aligned.</p>
        <div className="cta-actions">
          <button className="btn dark">Start free Trial</button>
          <button className="btn light">Book a Demo</button>
        </div>

        <aside className="float-card">
          <div className="stack">
            <span><img src="/assets/imgSolarCodeFileBold.svg" alt="" /></span>
            <span><img src="/assets/imgMdiFileCad.svg" alt="" /></span>
            <span><img src="/assets/imgFluentTaskListSquareSparkle20Filled.svg" alt="" /></span>
          </div>
          <h4>Good Morning, <em>Sayra ali!</em></h4>
          <p>You have 12 tasks due today</p>
        </aside>
      </div>
    </section>
  );
}
