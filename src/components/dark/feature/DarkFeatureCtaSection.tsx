import Image from "next/image";

export default function DarkFeatureCtaSection() {
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
          <button className="btn btn-dark">Start free Trial</button>
          <button className="btn btn-light">Book a Demo</button>
        </div>
        <aside className="mini-card">
          <div className="avatars icons">
            <Image
              src="/assets/imgSolarCodeFileBold1.svg"
              alt=""
              width={40}
              height={40}
              sizes="100%"
            />
            <Image
              src="/assets/imgMdiFileCad1.svg"
              alt=""
              width={40}
              height={40}
              sizes="100%"
            />
            <Image
              src="/assets/imgFluentTaskListSquareSparkle20Filled.svg"
              alt=""
              width={40}
              height={40}
              sizes="100%"
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
