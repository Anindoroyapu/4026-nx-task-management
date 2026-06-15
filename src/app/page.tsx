"use client";

import { useEffect } from "react";

function handleSegmentTab(tab: HTMLElement) {
  const parent = tab.parentElement;
  if (!parent) return;
  parent.querySelectorAll("span").forEach((item) => item.classList.remove("on"));
  tab.classList.add("on");
}

function handleEnvButton(button: HTMLElement) {
  const parent = button.parentElement;
  if (!parent) return;
  parent.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
}

function handleFaqItem(item: HTMLElement) {
  const parent = item.parentElement;
  if (!parent) return;
  const openIcon = "/assets/imgRemoveCircleHalfDot.svg";
  const closedIcon = "/assets/imgAddCircleHalfDot.svg";

  parent.querySelectorAll(".faq-item").forEach((entry) => {
    entry.classList.remove("open");
    const icon = entry.querySelector("img");
    if (icon) {
      icon.src = closedIcon;
      icon.alt = "expand";
    }
  });

  item.classList.add("open");
  const activeIcon = item.querySelector("img");
  if (activeIcon) {
    activeIcon.src = openIcon;
    activeIcon.alt = "collapse";
  }
}

function setHomePricingMode(mode: string) {
  const isAnnual = mode === "annual";
  const toggleButtons = document.querySelectorAll(
    ".pricing .billing-toggle button",
  );
  const priceFields = document.querySelectorAll<HTMLElement>(".pricing-grid .price");

  toggleButtons.forEach((btn) => btn.classList.remove("active"));
  toggleButtons[isAnnual ? 1 : 0].classList.add("active");

  priceFields.forEach((price) => {
    if (price.classList.contains("custom")) {
      const label = isAnnual
        ? price.dataset.annualLabel
        : price.dataset.monthlyLabel;
      price.innerHTML =
        '<img src="/assets/imgGroup.svg" alt=""> /' + label;
      return;
    }
    const amount = isAnnual
      ? price.dataset.annualPrice
      : price.dataset.monthlyPrice;
    const period = isAnnual ? "year" : "month";
    price.innerHTML = "$" + amount + " <small>/" + period + "</small>";
  });
}

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    setHomePricingMode("annual");

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        className="hero container-wide"
        data-animate="fade-up"
        style={{
          background: "url(/assets/home-page.png)",
          backgroundSize: "contain",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="pill">
          <span className="icon-wrap">
            <img
              src="/assets/imgFluentTaskListSquareSparkle24Filled.svg"
              alt="task icon"
            />
          </span>
          Task management Solutions for Businesses.
        </div>
        <h1>
          Boost your productivity with intuitive task <span>management.</span>
        </h1>
        <p>
          Manage tasks, track progress, and collaborate with your team in one
          beautifully simple workspace designed for productivity.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-dark">Start free Trial</button>
          <button className="btn btn-light">Book a Demo</button>
        </div>

        <div className="partner-logos">
          <div><img src="/assets/imgShopify1.svg" alt="Shopify" /></div>
          <div><img src="/assets/reddit-4 -1.svg" alt="Reddit" /></div>
          <div><img src="/assets/notion.svg" alt="Notion" /></div>
          <div><img src="/assets/figma-icon-1.svg" alt="Figma" /></div>
          <div><img src="/assets/tencent-meeting-1.svg" alt="Tencent" /></div>
          <div><img src="/assets/yelp-icon-1.svg" alt="Yelp" /></div>
          <div><img src="/assets/slack-new-logo-1.svg" alt="Slack" /></div>
          <div>
            <img src="/assets/google-shopping 1.svg" alt="Google shopping" />
          </div>
          <div><img src="/assets/imgGoogleIcon11.svg" alt="Google" /></div>
          <div><img src="/assets/levis-1 1.svg" alt="Levis" /></div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="hero-preview">
            <img src="/assets/imgImage1.png" alt="Task dashboard preview" />
          </div>
          <img
            src="/assets/Rectangle-shadow.png"
            style={{ position: "absolute", bottom: "-100px", left: "0", width: "120%" }}
            alt="Everything Your Team Needs to"
          />
        </div>
      </section>

      <section className="capabilities section-pad container" data-animate="fade-up">
        <div className="section-title centered">
          <h2>Everything Your Team <br /> Needs to <span>Grow Efficiently</span></h2>
          <p>
            All the tools, services, and support your team needs to create
            powerful digital products and deliver better user experiences.
          </p>
        </div>

        <div className="cap-grid-wide">
          <article className="cap-card large">
            <div>
              <div>
                <img src="/assets/imgMaterialIconThemeFolderPdf.png" alt="pdf" />
              </div>
            </div>
            <h3>Visual Kanban Boards.</h3>
            <p>
              Organize and visualize your workflow with customizable Kanban
              columns.
            </p>
            <a href="#">
              Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" />
            </a>
          </article>
          <article className="cap-card large">
            <img src="/assets/task-list.png" alt="Task list card" />
            <h3>Task Lists &amp; Prioritization.</h3>
            <p>
              Create structured task lists with priorities, due dates, and
              assignees.
            </p>
            <a href="#" style={{ marginBottom: "20px" }}>
              Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" />
            </a>
          </article>
        </div>
        <div className="cap-grid">
          <article className="cap-card small">
            <img
              src="/assets/imgRectangle2711.png"
              alt="Timeline widget"
            />
            <h3>Unified Project Timelines.</h3>
            <p>
              Plan and track projects across an interactive timeline with
              dependencies.
            </p>
            <a href="#">
              Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" />
            </a>
          </article>
          <article className="cap-card small">
            <img src="/assets/imgCharts.png" alt="Analytics" />
            <h3>Analytics Dashboard.</h3>
            <p>
              Track tasks completed, team velocity, and time saved at a glance.
            </p>
            <a href="#">
              Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" />
            </a>
          </article>
          <article className="cap-card small">
            <img src="/assets/imgWoman.png" alt="Remote work" />
            <h3>Work from Anywhere.</h3>
            <p>
              Stay productive on the go with full mobile support and cloud sync.
            </p>
            <a href="#">
              Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" />
            </a>
          </article>
        </div>
      </section>

      <section className="platform section-pad container-wide" data-animate="fade-up">
        <div className="platform-head">
          <h2>
            One Powerful Platform for Faster, Smarter <span>Workflows</span>
          </h2>
          <div className="segment-tabs">
            <span onClick={(e) => handleSegmentTab(e.currentTarget)}>Freelancer</span>
            <span className="on" onClick={(e) => handleSegmentTab(e.currentTarget)}>Startup Team</span>
            <span onClick={(e) => handleSegmentTab(e.currentTarget)}>Creative Agency</span>
            <span onClick={(e) => handleSegmentTab(e.currentTarget)}>Remote Team</span>
            <span onClick={(e) => handleSegmentTab(e.currentTarget)}>Enterprise Team</span>
          </div>
        </div>
        <div className="feature-grid">
          <article>
            <img
              className="icon"
              src="/assets/imgTimeline-black.svg"
              alt="timeline"
            />
            <h4>Timeline Scheduling</h4>
            <p>Interactive Gantt chart with milestones and dependencies.</p>
            <img
              className="shot"
              src="/assets/imgRectangle27111.png"
              alt="timeline"
            />
          </article>
          <article>
            <img
              className="icon"
              src="/assets/imgDashboardSquare03-white.svg"
              alt="kanban"
            />
            <h4>Custom Kanban</h4>
            <p>Task columns with avatars, priority labels, and drag-drop.</p>
            <img className="shot" src="/assets/imgRectangle2712.png" alt="kanban" />
          </article>
          <article>
            <img className="icon" src="/assets/imgAddTeam-white.svg" alt="team" />
            <h4>Team Capacity.</h4>
            <p>Visual workload bars for each team member and balance.</p>
            <img className="shot" src="/assets/imgRectangle2713.png" alt="team" />
          </article>
          <article>
            <img
              className="icon"
              src="/assets/imgChartAverage-white.svg"
              alt="analytics"
            />
            <h4>Integrated Analytics.</h4>
            <p>Line graphs, donut charts, and real-time performance data.</p>
            <img
              className="shot"
              src="/assets/imgRectangle2714.png"
              alt="analytics"
            />
          </article>
          <article>
            <img
              className="icon"
              src="/assets/imgAlarmClock-white.svg"
              alt="timer"
            />
            <h4>Smart Time Tracking.</h4>
            <p>Digital timer with session history and timesheet export.</p>
            <img className="shot" src="/assets/imgRectangle2715.png" alt="timer" />
          </article>
          <article>
            <img className="icon" src="/assets/imgZap-white.svg" alt="automation" />
            <h4>Workflow Automation.</h4>
            <p>No-code rule builder: IF status = Done THEN notify PM.</p>
            <img
              className="shot"
              src="/assets/imgRectangle2716.png"
              alt="automation"
            />
          </article>
        </div>
      </section>

      <section
        className="environment section-pad"
        data-animate="fade-up"
        style={{ background: "url(/assets/section-bg.png)" }}
      >
        <div className="container-wide env-wrap">
          <div className="section-title centered">
            <h2>
              Flexible Environments Designed for <span>Every Specialist</span>
            </h2>
            <p>
              Tailored tools and workflows designed to support every role and
              expertise.
            </p>
          </div>
          <div className="env-body">
            <aside style={{ height: "100%", justifyContent: "center" }}>
              <div style={{ display: "grid", gap: "8px" }}>
                <button
                  className="active"
                  type="button"
                  onClick={(e) => handleEnvButton(e.currentTarget)}
                >
                  <img src="/assets/imgCodeFolder.svg" alt="" />Software
                  Engineering.
                </button>
                <button type="button" onClick={(e) => handleEnvButton(e.currentTarget)}>
                  <img src="/assets/imgPaintBoard.svg" alt="" />Product Design.
                </button>
                <button type="button" onClick={(e) => handleEnvButton(e.currentTarget)}>
                  <img src="/assets/imgPromotion.svg" alt="" />Marketing Ops.
                </button>
                <button type="button" onClick={(e) => handleEnvButton(e.currentTarget)}>
                  <img src="/assets/imgNewJob.svg" alt="" />Exclusive Leadership.
                </button>
              </div>
            </aside>
            <div className="env-card">
              <div className="env-title">
                <img src="/assets/imgSolarCodeSquareBold.svg" alt="" />Recent
                Activity.<span>• Jira • Slack • Aws</span>
              </div>
              <img
                src="/assets/imgRectangle271111.png"
                alt="Recent activity panel"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="pricing section-pad"
        data-animate="fade-up"
        style={{ background: "url(/assets/smart-bg.png)" }}
      >
        <div className="container">
          <div className="section-title centered">
            <h2>
              Smart Pricing Intelligence with Built-In
              <span>ROI Calculator</span>
            </h2>
            <p>
              Analyze pricing strategies and instantly measure the real return
              on your investment.
            </p>
          </div>
          <div className="billing-toggle">
            <button type="button" onClick={() => setHomePricingMode("monthly")}>
              Monthly
            </button>
            <button
              type="button"
              className="active"
              onClick={() => setHomePricingMode("annual")}
            >
              Annual <span>-20%</span>
            </button>
          </div>
          <div className="pricing-grid">
            <article className="card">
              <h3>Starter Package</h3>
              <p>Perfect for individuals and small teams getting started.</p>
              <div
                className="price"
                data-monthly-price="9.99"
                data-annual-price="95.88"
              >
                $95.88 <small>/year</small>
              </div>
              <button className="btn light">Get Started Today</button>
              <h4>Included Features:</h4>
              <ul>
                <li>Up to 10 projects</li>
                <li>Basic Kanban boards</li>
                <li>5GB secure storage</li>
                <li>Email support</li>
                <li>Basic task management</li>
                <li>Activity tracking</li>
              </ul>
            </article>
            <article className="card glow">
              <h3>Growth Package</h3>
              <p>Best for growing teams that need advanced collaboration.</p>
              <div
                className="price"
                data-monthly-price="29.99"
                data-annual-price="287.90"
              >
                $287.90 <small>/year</small>
              </div>
              <button className="btn light">Get Started Today</button>
              <h4>Included Features:</h4>
              <ul>
                <li>Unlimited projects</li>
                <li>Advanced analytics</li>
                <li>Workflow automation</li>
                <li>Priority support</li>
                <li>Team dashboards</li>
                <li>API access</li>
                <li>File sharing</li>
                <li>Integrations</li>
              </ul>
            </article>
            <article className="card">
              <h3>Business Package</h3>
              <p>Designed for teams managing complex workflows.</p>
              <div
                className="price"
                data-monthly-price="49.99"
                data-annual-price="479.90"
              >
                $479.90 <small>/year</small>
              </div>
              <button className="btn dark">Get Business Package</button>
              <h4>Included Features:</h4>
              <ul>
                <li>Everything in Growth</li>
                <li>Advanced reporting</li>
                <li>Custom workflows</li>
                <li>Team performance insights</li>
                <li>Integration with external tools</li>
                <li>Role</li>
                <li>Permission management</li>
                <li>Extended data storage</li>
              </ul>
            </article>
            <article className="card">
              <h3>Enterprise Package</h3>
              <p>Built for large organizations with advanced security needs.</p>
              <div
                className="price custom"
                data-monthly-label="Custom Pricing"
                data-annual-label="Custom Pricing"
              >
                <img src="/assets/imgGroup.svg" alt="" /> /Custom Pricing
              </div>
              <button className="btn light">Request a Quote</button>
              <h4>Included Features:</h4>
              <ul>
                <li>Everything in Business</li>
                <li>SSO &amp; SAML authentication</li>
                <li>Dedicated support manager</li>
                <li>Custom integrations</li>
                <li>SLA uptime guarantee</li>
                <li>Advanced security controls</li>
                <li>Audit logs</li>
                <li>Compliance tools</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="faq section-pad" data-animate="fade-up">
        <div className="container-wide faq-wrap">
          <div className="faq-left">
            <h2>
              Your <span>Questions</span> About Workflow Management, Answered
            </h2>
            <p>
              Explore helpful insights and solutions to streamline the way your
              team works.
            </p>
            <button className="btn btn-dark">Contact Us</button>
          </div>
          <div className="faq-right">
            <article className="faq-item" onClick={(e) => handleFaqItem(e.currentTarget)}>
              <h4>
                <span className="dot">•</span>Can I try the platform for free?
              </h4>
              <img src="/assets/imgAddCircleHalfDot.svg" alt="expand" />
              <p>
                Yes, you can start with a free trial to explore boards,
                timelines, and team collaboration before choosing any paid plan.
              </p>
            </article>
            <article className="faq-item open" onClick={(e) => handleFaqItem(e.currentTarget)}>
              <h4>
                <span className="dot">•</span>What happens when my trial ends?
              </h4>
              <img src="/assets/imgRemoveCircleHalfDot.svg" alt="collapse" />
              <p>
                When your trial ends, you can choose to upgrade to any of our
                paid plans to continue using the platform without interruption.
                If you don&apos;t upgrade, your account will remain inactive until a
                plan is selected.
              </p>
            </article>
            <article className="faq-item" onClick={(e) => handleFaqItem(e.currentTarget)}>
              <h4><span className="dot">•</span>Can I change plans later?</h4>
              <img src="/assets/imgAddCircleHalfDot.svg" alt="expand" />
              <p>
                Absolutely. You can upgrade or downgrade your plan any time, and
                your data stays safe during the switch.
              </p>
            </article>
            <article className="faq-item" onClick={(e) => handleFaqItem(e.currentTarget)}>
              <h4>
                <span className="dot">•</span>Do you offer discounts for annual
                plans?
              </h4>
              <img src="/assets/imgAddCircleHalfDot.svg" alt="expand" />
              <p>
                Yes, annual billing includes discounted pricing compared to
                monthly plans and helps teams reduce overall cost.
              </p>
            </article>
            <article className="faq-item" onClick={(e) => handleFaqItem(e.currentTarget)}>
              <h4>
                <span className="dot">•</span>Is my data secure on the platform?
              </h4>
              <img src="/assets/imgAddCircleHalfDot.svg" alt="expand" />
              <p>
                Your workspace is protected with encryption, access controls,
                and regular security updates to keep information secure.
              </p>
            </article>
            <article className="faq-item" onClick={(e) => handleFaqItem(e.currentTarget)}>
              <h4><span className="dot">•</span>Do you offer support for teams?</h4>
              <img src="/assets/imgAddCircleHalfDot.svg" alt="expand" />
              <p>
                Yes, team-focused support is available, including onboarding
                guidance and priority help based on your plan.
              </p>
            </article>
          </div>
        </div>
      </section>

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
    </>
  );
}
