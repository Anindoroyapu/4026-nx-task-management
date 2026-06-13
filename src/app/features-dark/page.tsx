"use client";

export default function FeaturesDarkPage() {
  function w3_open() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) sidebar.style.display = "block";
  }

  function w3_close() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) sidebar.style.display = "none";
  }

  return (
    <div className="dark-mode">
      <div className="feature-page">
        <img className="decor decor-top-left" src="/assets/imgVector.svg" alt="" />
        <img className="decor decor-top-right" src="/assets/imgVector.svg" alt="" />

        <nav>
          <div className="main-nav container-wide">
            <img className="logo" src="/assets/imgTaxky.svg" alt="Taxky" />
            <div className="nav-right">
              <ul>
                <li><a href="/dark">Home Page</a></li>
                <li className="active">
                  <a href="/features-dark">Features</a>
                </li>
                <li><a href="/pricing-dark">Pricing</a></li>
                <li><a href="/about-dark">Know Us</a></li>
                <li><a href="/contact-dark">Contact</a></li>
              </ul>
              <button className="mode-toggle" type="button" onClick={() => (window.location.href = "/features")}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5833 10.3987C15.5836 10.9324 14.4417 11.2351 13.2292 11.2351C9.29092 11.2351 6.09827 8.04245 6.09827 4.10407C6.09827 2.89158 6.40087 1.74976 6.93469 0.750031C3.38971 1.58085 0.75 4.76264 0.75 8.56095C0.75 12.9916 4.34175 16.5834 8.77242 16.5834C12.5707 16.5834 15.7525 13.9437 16.5833 10.3987Z"
                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <div style={{ display: "flex", justifyContent: "start", backgroundColor: "black", width: "100%" }}>
          <div className="w3-sidebar w3-bar-block w3-border-right" style={{ display: "none", zIndex: 1000 }} id="mySidebar">
            <div className="main-nav"
              style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "start", justifyItems: "start" }}>
              <button onClick={w3_close} className="w3-bar-item w3-large">Close &times;</button>
              <a href="/dark" className="nav-item active">Home Page</a>
              <a href="/features-dark">Features</a>
              <a href="/pricing-dark">Pricing</a>
              <a href="/about-dark">Know Us</a>
              <a href="/contact-dark">Contact</a>
            </div>
          </div>
        </div>

        <div className="mobile-header w3-white">
          <a className="brand" href="/" style={{ paddingLeft: "10px" }} aria-label="AppFlow home">
            <img className="logo" src="/assets/taxky.png" alt="Taxky" style={{ height: "30px", width: "auto" }} />
          </a>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button className="mode-toggle" type="button" onClick={() => (window.location.href = "/dark")}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5833 10.3987C15.5836 10.9324 14.4417 11.2351 13.2292 11.2351C9.29092 11.2351 6.09827 8.04245 6.09827 4.10407C6.09827 2.89158 6.40087 1.74976 6.93469 0.750031C3.38971 1.58085 0.75 4.76264 0.75 8.56095C0.75 12.9916 4.34175 16.5834 8.77242 16.5834C12.5707 16.5834 15.7525 13.9437 16.5833 10.3987Z"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            <button className="w3-button w3-xlarge" onClick={w3_open}>&#9776;</button>
          </div>
        </div>

        <section className="hero wrap-1230">
          <div className="glass-panel">
            <h1>Everything you need to manage projects, teams, <span>and workflows.</span></h1>
            <p>Organize tasks, automate workflows, track performance, and collaborate with your team in one intelligent workspace.</p>
            <div className="btn-row">
              <button className="btn btn-dark">Start free Trial</button>
              <button className="btn btn-light">View Product Demo</button>
            </div>
          </div>
          <img className="blur-orb orb-left" src="/assets/imgEllipse13.svg" alt="" />
          <img className="blur-orb orb-right" src="/assets/imgEllipse14.svg" alt="" />
        </section>

        <section className="tools bg-soft">
          <div className="section-head center">
            <h2>Experience Powerful Tools with <span>Beautiful Simplicity.</span></h2>
            <p>Smart features built to simplify workflows and help teams work more efficiently.</p>
          </div>
          <div className="tool-grid wrap-1480">
            <article className="tool-card">
              <img className="shot" src="/assets/imgRectangle27312.png" alt="Visual kanban" />
              <div className="tool-meta"><span className="ico"><img src="/assets/imgKeyframesMultiple.svg" alt="" /></span><div><h3>Visual Kanban Boards.</h3><p>Drag-and-drop task management with customizable columns and swim lanes.</p></div></div>
            </article>
            <article className="tool-card">
              <img className="shot" src="/assets/imgRectangle27412.png" alt="Smart tasks" />
              <div className="tool-meta"><span className="ico"><img src="/assets/imgTimelineList.svg" alt="" /></span><div><h3>Smart Task Lists.</h3><p>Structured lists with priorities, due dates, sub-tasks, and assignees.</p></div></div>
            </article>
            <article className="tool-card">
              <img className="shot" src="/assets/imgRectangle27512.png" alt="Project timeline" />
              <div className="tool-meta"><span className="ico"><img src="/assets/imgTimeline.svg" alt="" /></span><div><h3>Project Timeline.</h3><p>Interactive Gantt charts with dependencies and milestone tracking.</p></div></div>
            </article>
            <article className="tool-card">
              <img className="shot" src="/assets/imgRectangle27612.png" alt="Time tracking" />
              <div className="tool-meta"><span className="ico"><img src="/assets/imgRadar01.svg" alt="" /></span><div><h3>Time Tracking.</h3><p>Built-in timer with session history, reports, and automatic logging.</p></div></div>
            </article>
            <article className="tool-card">
              <img className="shot" src="/assets/imgRectangle27712.png" alt="Team collaboration" />
              <div className="tool-meta"><span className="ico"><img src="/assets/imgAddTeam02.svg" alt="" /></span><div><h3>Team Collaboration.</h3><p>Plan and track projects across an interactive timeline with dependencies.</p></div></div>
            </article>
            <article className="tool-card">
              <img className="shot" src="/assets/imgRectangle27812.png" alt="Workflow automation" />
              <div className="tool-meta"><span className="ico"><img src="/assets/imgFlowchart01.svg" alt="" /></span><div><h3>Workflow Automation.</h3><p>No-code rule builder to automate repetitive tasks and notifications.</p></div></div>
            </article>
          </div>
        </section>

        <section className="automation wrap-1480">
          <div className="row">
            <div className="text-block">
              <h2>Smarter Automation for Faster Workflows</h2>
              <p>Build powerful automated systems that handle repetitive work no coding required.</p>
            </div>
            <div className="flow-card">
              <div className="rule"><img src="/assets/imgFluentFlashFlow20Filled.svg" alt="" /><div><small>IF</small><strong>Task status = Completed.</strong></div></div>
              <div className="rule"><img src="/assets/imgFamiconsTimer.svg" alt="" /><div><small>THEN</small><strong>Notify project manager via Slack</strong></div></div>
            </div>
          </div>

          <div className="row row-reverse">
            <div className="stacked-card">
              <div className="left-stack">
                <h4>Task status = Completed.</h4>
                <div className="msg"><span>1</span>Anna commented on Dashboard.</div>
                <div className="msg"><span>2</span>David attached mockup.fig</div>
                <div className="msg"><span>3</span>Lina moved task to In Progress</div>
              </div>
              <div className="right-stack">
                <h4>Live Presence</h4>
                <div className="avatars icons"><img src="/assets/imgSolarCodeFileBold.svg" alt="" /><img src="/assets/imgMdiFileCad.svg" alt="" /><img src="/assets/imgFluentTaskListSquareSparkle20Filled.svg" alt="" /></div>
                <div className="avatars pics"><img src="/assets/imgFrame2147229880.svg" alt="" /><img src="/assets/imgFrame2147229881.svg" alt="" /><img src="/assets/imgFrame2147229884.svg" alt="" /></div>
              </div>
            </div>
            <div className="text-block">
              <h2>Collaborate in Real Time with Your Entire Team.</h2>
              <p>Stay connected, communicate faster, and move projects forward without delays.</p>
            </div>
          </div>

          <div className="row">
            <div className="text-block">
              <h2>Powerful Analytics &amp; Actionable Insights.</h2>
              <p>Turn your data into clear insights that help your team make smarter decisions.</p>
            </div>
            <div className="bar-card">
              <div className="bars">
                <span className="b p" style={{ height: "44%" }}></span><span className="b y" style={{ height: "20%" }}></span>
                <span className="b p" style={{ height: "100%" }}></span><span className="b y" style={{ height: "74%" }}></span>
                <span className="b p" style={{ height: "44%" }}></span><span className="b y" style={{ height: "30%" }}></span>
                <span className="b p" style={{ height: "64%" }}></span><span className="b y" style={{ height: "23%" }}></span>
                <span className="b p" style={{ height: "61%" }}></span><span className="b y" style={{ height: "20%" }}></span>
                <span className="b p" style={{ height: "44%" }}></span><span className="b y" style={{ height: "20%" }}></span>
                <span className="b p" style={{ height: "100%" }}></span><span className="b y" style={{ height: "74%" }}></span>
                <span className="b p" style={{ height: "61%" }}></span><span className="b y" style={{ height: "20%" }}></span>
                <span className="b p" style={{ height: "44%" }}></span><span className="b y" style={{ height: "20%" }}></span>
                <span className="b p" style={{ height: "100%" }}></span><span className="b y" style={{ height: "74%" }}></span>
                <span className="b p" style={{ height: "44%" }}></span><span className="b y" style={{ height: "30%" }}></span>
                <span className="b p" style={{ height: "64%" }}></span><span className="b y" style={{ height: "23%" }}></span>
                <span className="b p" style={{ height: "61%" }}></span><span className="b y" style={{ height: "20%" }}></span>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-arc">
          <div className="ring wrap-1480">
            <div className="bubble" style={{ "--x": "0%", "--y": "142px" } as React.CSSProperties}><img src="/assets/imgShopify1.svg" alt="" /></div>
            <div className="bubble" style={{ "--x": "88px", "--y": "98px" } as React.CSSProperties}><img src="/assets/imgReddit41.svg" alt="" /></div>
            <div className="bubble" style={{ "--x": "176px", "--y": "71px" } as React.CSSProperties}><img src="/assets/imgNotion21.svg" alt="" /></div>
            <div className="bubble" style={{ "--x": "264px", "--y": "48px" } as React.CSSProperties}><img src="/assets/imgFigmaIcon11.svg" alt="" /></div>
            <div className="bubble" style={{ "--x": "352px", "--y": "29px" } as React.CSSProperties}><img src="/assets/imgTencentMeeting11.svg" alt="" /></div>
            <div className="bubble central" style={{ "--x": "440px", "--y": "0px" } as React.CSSProperties}><img src="/assets/imgDiscord61.svg" alt="" /></div>
            <div className="bubble" style={{ "--x": "560px", "--y": "29px" } as React.CSSProperties}><img src="/assets/imgYelpIcon1.svg" alt="" /></div>
            <div className="bubble" style={{ "--x": "648px", "--y": "48px" } as React.CSSProperties}><img src="/assets/imgSlackNewLogo11.svg" alt="" /></div>
            <div className="bubble" style={{ "--x": "736px", "--y": "71px" } as React.CSSProperties}><img src="/assets/imgGroup5.svg" alt="" /></div>
            <div className="bubble" style={{ "--x": "824px", "--y": "98px" } as React.CSSProperties}><img src="/assets/imgGoogleIcon11.svg" alt="" /></div>
            <div className="bubble" style={{ "--x": "912px", "--y": "142px" } as React.CSSProperties}><img src="/assets/imgLevis11.svg" alt="" /></div>
          </div>
          <h2>Powerful <span>Productivity</span></h2>
          <p>Built to simplify work and help teams achieve better results.</p>
          <img className="dot-left" src="/assets/imgEllipse11.svg" alt="" />
          <img className="dot-right" src="/assets/imgEllipse12.svg" alt="" />
        </section>

        <section className="advanced">
          <div className="wrap-1480 advanced-row">
            <div className="text-block">
              <h2>Advanced Productivity Tools for High-<span>Performing Teams.</span></h2>
              <p>Equip your team with powerful tools designed to improve focus, efficiency, and collaboration.</p>
            </div>
            <div className="advanced-grid">
              <article><span><img src="/assets/imgSettingDone04.svg" alt="" /></span><h3>AI Task Suggestions.</h3><p>Get smart recommendations for task prioritization.</p></article>
              <article><span><img src="/assets/imgScreenAddToHome.svg" alt="" /></span><h3>Priority Scoring.</h3><p>Automatic scoring based on urgency and impact.</p></article>
              <article><span><img src="/assets/imgCalendar03.svg" alt="" /></span><h3>Deadline Forecasting.</h3><p>ML-powered predictions for realistic deadlines.</p></article>
              <article><span><img src="/assets/imgAlarmClock.svg" alt="" /></span><h3>Focus Mode Timer.</h3><p>Pomodoro-style timer with distraction blocking.</p></article>
            </div>
          </div>
        </section>

        <section className="cta-footer">
          <div className="cta-card wrap-1230">
            <h2>Reclaim Your Team&rsquo;s Peak <span>Productivity</span></h2>
            <p>Empower your team with a centralized platform designed to connect people, simplify complex workflows, and help everyone stay focused, productive, and aligned.</p>
            <div className="btn-row">
              <button className="btn btn-dark">Start free Trial</button>
              <button className="btn btn-light">Book a Demo</button>
            </div>
            <aside className="mini-card">
              <div className="avatars icons"><img src="/assets/imgSolarCodeFileBold1.svg" alt="" /><img src="/assets/imgMdiFileCad1.svg" alt="" /><img src="/assets/imgFluentTaskListSquareSparkle20Filled.svg" alt="" /></div>
              <h4>Good Morning, <span>Sayra ali!</span></h4>
              <p>You have 12 tasks due today</p>
            </aside>
          </div>

          <footer>
            <div className="wrap-1480 footer-grid">
              <div className="brand-col">
                <img className="logo" src="/assets/imgTaxky1.svg" alt="Taxky" />
                <h3>Is the modern task management platform for <span>productive teams.</span></h3>
                <div className="socials">
                  <img src="/assets/imgGroup6.svg" alt="" />
                  <img src="/assets/imgFamiconsLogoBehance.svg" alt="" />
                  <img src="/assets/imgEntypoSocialLinkedinWithCircle.svg" alt="" />
                  <img src="/assets/imgAntDesignInstagramFilled.svg" alt="" />
                  <img src="/assets/imgFormkitTwitter.svg" alt="" />
                </div>
              </div>
              <div><h5>Quick Links</h5><ul><li><a href="/dark">Home Page</a></li><li><a href="/features-dark">Features</a></li><li><a href="/pricing">Pricing</a></li><li><a href="/about">Know Us</a></li><li><a href="/contact">Contact Us</a></li></ul></div>
              <div><h5>Resources</h5><ul><li>Documentation</li><li>Help Center</li><li>Community</li><li>API Integrate</li><li>Product Design</li></ul></div>
              <div><h5>Contact Info</h5><ul><li>Privacy</li><li>Teams</li><li>Security</li><li>GDPR</li></ul></div>
            </div>
            <div className="wrap-1480 footer-bottom">
              <p>&copy; 2025 Office by @taxky. All rights reserved.</p>
              <p>Privacy Policy &bull; Terms &amp; Condition &bull; Help &amp; Support</p>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
