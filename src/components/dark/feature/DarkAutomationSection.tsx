export default function DarkAutomationSection() {
  return (
    <section className="automation wrap-1480">
      <div className="row">
        <div className="text-block">
          <h2>Smarter Automation for Faster Workflows</h2>
          <p>
            Build powerful automated systems that handle repetitive work no
            coding required.
          </p>
        </div>
        <div className="flow-card">
          <div className="rule">
            <img src="/assets/imgFluentFlashFlow20Filled.svg" alt="" />
            <div>
              <small>IF</small>
              <strong>Task status = Completed.</strong>
            </div>
          </div>
          <div className="rule">
            <img src="/assets/imgFamiconsTimer.svg" alt="" />
            <div>
              <small>THEN</small>
              <strong>Notify project manager via Slack</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-reverse">
        <div className="stacked-card">
          <div className="left-stack">
            <h4>Task status = Completed.</h4>
            <div className="msg">
              <span>1</span>Anna commented on Dashboard.
            </div>
            <div className="msg">
              <span>2</span>David attached mockup.fig
            </div>
            <div className="msg">
              <span>3</span>Lina moved task to In Progress
            </div>
          </div>
          <div className="right-stack">
            <h4>Live Presence</h4>
            <div className="avatars icons">
              <img src="/assets/imgSolarCodeFileBold.svg" alt="" />
              <img src="/assets/imgMdiFileCad.svg" alt="" />
              <img
                src="/assets/imgFluentTaskListSquareSparkle20Filled.svg"
                alt=""
              />
            </div>
            <div className="avatars pics">
              <img src="../../../../assets/imgFrame2147229880.png" alt="" />
              <img src="/assets/imgFrame2147229881.svg" alt="" />
              <img src="/assets/imgFrame2147229884.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="text-block">
          <h2>Collaborate in Real Time with Your Entire Team.</h2>
          <p>
            Stay connected, communicate faster, and move projects forward
            without delays.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="text-block">
          <h2>Powerful Analytics &amp; Actionable Insights.</h2>
          <p>
            Turn your data into clear insights that help your team make smarter
            decisions.
          </p>
        </div>
        <div className="bar-card">
          <div className="bars">
            {[
              44, 20, 100, 74, 44, 30, 64, 23, 61, 20, 44, 20, 100, 74, 61, 20,
              44, 20, 100, 74, 61, 20, 44, 20, 100, 74, 44, 30, 64, 23, 61, 20,
              44, 20, 100, 74, 44, 30, 64, 23, 61, 20, 44, 20, 100, 74, 44, 30,
              64, 23, 61, 20,
            ].map((h, i) => (
              <span
                key={i}
                className={`b ${i % 2 === 0 ? "p" : "y"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
