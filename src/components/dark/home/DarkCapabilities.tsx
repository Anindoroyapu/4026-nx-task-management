export default function DarkCapabilities() {
  return (
    <section className="capabilities section-pad container" data-animate="fade-up">
      <div className="section-title centered">
        <h2>Everything Your Team <br /> Needs to <span>Grow Efficiently</span></h2>
        <p>All the tools, services, and support your team needs to create powerful digital products and deliver better user experiences.</p>
      </div>
      <div className="cap-grid-wide">
        <article className="cap-card large">
          <div>
            <div>
              <img src="/assets/imgMaterialIconThemeFolderPdfw.png" alt="pdf" />
            </div>
          </div>
          <h3>Visual Kanban Boards.</h3>
          <p>Organize and visualize your workflow with customizable Kanban columns.</p>
          <a href="#">Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
        </article>
        <article className="cap-card large">
          <img src="/assets/imgRectangle27111112.png" alt="Task list card" />
          <h3>Task Lists &amp; Prioritization.</h3>
          <p>Create structured task lists with priorities, due dates, and assignees.</p>
          <a href="#" style={{ marginBottom: "20px" }}>Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
        </article>
      </div>
      <div className="cap-grid">
        <article className="cap-card small">
          <img src="/assets/imgRectangle271112.png" alt="Timeline widget" />
          <h3>Unified Project Timelines.</h3>
          <p>Plan and track projects across an interactive timeline with dependencies.</p>
          <a href="#">Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
        </article>
        <article className="cap-card small">
          <img src="/assets/imgCharts12.png" alt="Analytics" />
          <h3>Analytics Dashboard.</h3>
          <p>Track tasks completed, team velocity, and time saved at a glance.</p>
          <a href="#">Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
        </article>
        <article className="cap-card small">
          <img src="/assets/imgWoman12.png" alt="Remote work" />
          <h3>Work from Anywhere.</h3>
          <p>Stay productive on the go with full mobile support and cloud sync.</p>
          <a href="#">Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
        </article>
      </div>
    </section>
  );
}
