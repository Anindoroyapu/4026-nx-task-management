"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="feature-page">
      <img className="decor decor-top-left" src="/assets/imgVector.svg" alt="" />
      <img className="decor decor-top-right" src="/assets/imgVector.svg" alt="" />

      <Header active="features" isDark={false} />

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
            <img className="shot" src="/assets/imgRectangle27311.png" alt="Visual kanban" />
            <div className="tool-meta">
              <span className="ico"><img src="/assets/imgKeyframesMultiple.svg" alt="" /></span>
              <div>
                <h3>Visual Kanban Boards.</h3>
                <p>Drag-and-drop task management with customizable columns and swim lanes.</p>
              </div>
            </div>
          </article>
          <article className="tool-card">
            <img className="shot" src="/assets/imgRectangle27411.png" alt="Smart tasks" />
            <div className="tool-meta">
              <span className="ico"><img src="/assets/imgTimelineList.svg" alt="" /></span>
              <div>
                <h3>Smart Task Lists.</h3>
                <p>Structured lists with priorities, due dates, sub-tasks, and assignees.</p>
              </div>
            </div>
          </article>
          <article className="tool-card">
            <img className="shot" src="/assets/imgRectangle27511.png" alt="Project timeline" />
            <div className="tool-meta">
              <span className="ico"><img src="/assets/imgTimeline.svg" alt="" /></span>
              <div>
                <h3>Project Timeline.</h3>
                <p>Interactive Gantt charts with dependencies and milestone tracking.</p>
              </div>
            </div>
          </article>
          <article className="tool-card">
            <img className="shot" src="/assets/imgRectangle27611.png" alt="Time tracking" />
            <div className="tool-meta">
              <span className="ico"><img src="/assets/imgRadar01.svg" alt="" /></span>
              <div>
                <h3>Time Tracking.</h3>
                <p>Built-in timer with session history, reports, and automatic logging.</p>
              </div>
            </div>
          </article>
          <article className="tool-card">
            <img className="shot" src="/assets/imgRectangle27711.png" alt="Team collaboration" />
            <div className="tool-meta">
              <span className="ico"><img src="/assets/imgAddTeam02.svg" alt="" /></span>
              <div>
                <h3>Team Collaboration.</h3>
                <p>Plan and track projects across an interactive timeline with dependencies.</p>
              </div>
            </div>
          </article>
          <article className="tool-card">
            <img className="shot" src="/assets/imgRectangle27811.png" alt="Workflow automation" />
            <div className="tool-meta">
              <span className="ico"><img src="/assets/imgFlowchart01.svg" alt="" /></span>
              <div>
                <h3>Workflow Automation.</h3>
                <p>No-code rule builder to automate repetitive tasks and notifications.</p>
              </div>
            </div>
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
            <div className="rule">
              <img src="/assets/imgFluentFlashFlow20Filled.svg" alt="" />
              <div><small>IF</small><strong>Task status = Completed.</strong></div>
            </div>
            <div className="rule">
              <img src="/assets/imgFamiconsTimer.svg" alt="" />
              <div><small>THEN</small><strong>Notify project manager via Slack</strong></div>
            </div>
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
              <div className="avatars icons">
                <img src="/assets/imgSolarCodeFileBold.svg" alt="" />
                <img src="/assets/imgMdiFileCad.svg" alt="" />
                <img src="/assets/imgFluentTaskListSquareSparkle20Filled.svg" alt="" />
              </div>
              <div className="avatars pics">
                <img src="/assets/imgFrame2147229880.svg" alt="" />
                <img src="/assets/imgFrame2147229881.svg" alt="" />
                <img src="/assets/imgFrame2147229884.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="text-block">
            <h2>Collaborate in Real Time with Your Entire Team.</h2>
            <p>Stay connected, communicate faster, and move projects forward without delays.</p>
          </div>
        </div>

        <div className="row">
          <div className="text-block">
            <h2>Powerful Analytics & Actionable Insights.</h2>
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

      <section className="logo-arc" style={{ background: "url(/assets/section-bg.png)", backgroundSize: "contain", backgroundBlendMode: "overlay" }}>
        <div className="ring wrap-1480">
          <div className="bubble" style={{ "--x": "0%", "--y": "142px" } as React.CSSProperties}><img src="/assets/imgShopify1.svg" alt="" /></div>
          <div className="bubble" style={{ "--x": "88px", "--y": "98px" } as React.CSSProperties}><img src="/assets/reddit-4 -1.svg" alt="" /></div>
          <div className="bubble" style={{ "--x": "176px", "--y": "71px" } as React.CSSProperties}><img src="/assets/notion-2 1.svg" alt="" /></div>
          <div className="bubble" style={{ "--x": "264px", "--y": "48px" } as React.CSSProperties}><img src="/assets/figma-icon-1.svg" alt="" /></div>
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
            <article>
              <span><img src="/assets/imgSettingDone04.svg" alt="" /></span>
              <h3>AI Task Suggestions.</h3>
              <p>Get smart recommendations for task prioritization.</p>
            </article>
            <article>
              <span><img src="/assets/imgScreenAddToHome.svg" alt="" /></span>
              <h3>Priority Scoring.</h3>
              <p>Automatic scoring based on urgency and impact.</p>
            </article>
            <article>
              <span><img src="/assets/imgCalendar03.svg" alt="" /></span>
              <h3>Deadline Forecasting.</h3>
              <p>ML-powered predictions for realistic deadlines.</p>
            </article>
            <article>
              <span><img src="/assets/imgAlarmClock.svg" alt="" /></span>
              <h3>Focus Mode Timer.</h3>
              <p>Pomodoro-style timer with distraction blocking.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <div className="cta-card wrap-1230" style={{ background: "url(/assets/section-bg.png)", backgroundSize: "contain", backgroundBlendMode: "overlay" }}>
          <h2>Reclaim Your Team's Peak <span>Productivity</span></h2>
          <p>Empower your team with a centralized platform designed to connect people, simplify complex workflows, and help everyone stay focused, productive, and aligned.</p>
          <div className="btn-row">
            <button className="btn btn-dark">Start free Trial</button>
            <button className="btn btn-light">Book a Demo</button>
          </div>
          <aside className="mini-card">
            <div className="avatars icons">
              <img src="/assets/imgSolarCodeFileBold1.svg" alt="" />
              <img src="/assets/imgMdiFileCad1.svg" alt="" />
              <img src="/assets/imgFluentTaskListSquareSparkle20Filled.svg" alt="" />
            </div>
            <h4>Good Morning, <span>Sayra ali!</span></h4>
            <p>You have 12 tasks due today</p>
          </aside>
        </div>

        <Footer logoSrc="/assets/imgTaxky1.svg" containerClass="wrap-1480" socialSrc="/assets/imgGroup6.svg" />
      </section>
    </div>
  );
}
