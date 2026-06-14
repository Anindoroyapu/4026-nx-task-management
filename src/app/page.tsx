"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden page-shell">
      <Header active="home" isDark={false} />

      <section className="text-center pt-28 hero container-wide" data-animate="fade-up" style={{ background: "url(/assets/home-page.png)", backgroundSize: "contain", backgroundBlendMode: "overlay" }}>
        <div className="mx-auto w-fit text-xs rounded-full inline-flex items-center gap-[10px] font-semibold px-[14px] py-[6px] pill">
          <span className="w-[16px] h-[16px] rounded-full inline-flex items-center justify-center icon-wrap"><img className="w-[12px] h-[12px]" src="/assets/imgFluentTaskListSquareSparkle24Filled.svg" alt="task icon" /></span>
          Task management Solutions for Businesses.
        </div>
        <h1 className="mt-6 max-w-[980px] mx-auto">Boost your productivity with intuitive task <span>management.</span></h1>
        <p className="mt-4 mx-auto max-w-[900px] text-2xl">Manage tasks, track progress, and collaborate with your team in one beautifully simple workspace designed for productivity.</p>
        <div className="mt-8 flex gap-2 justify-center hero-buttons">
          <button className="btn btn-dark">Start free Trial</button>
          <button className="btn btn-light">Book a Demo</button>
        </div>
        <div className="mt-10 mx-auto flex flex-wrap items-center justify-center gap-2 partner-logos">
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/imgShopify1.svg" alt="Shopify" /></div>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/reddit-4 -1.svg" alt="Reddit" /></div>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/notion.svg" alt="Notion" /></div>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/figma-icon-1.svg" alt="Figma" /></div>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/tencent-meeting-1.svg" alt="Tencent" /></div>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/yelp-icon-1.svg" alt="Yelp" /></div>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/slack-new-logo-1.svg" alt="Slack" /></div>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/google-shopping 1.svg" alt="Google shopping" /></div>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/imgGoogleIcon11.svg" alt="Google" /></div>
          <div className="h-[68px] w-[68px] rounded-full flex items-center justify-center"><img className="w-[40px] h-[40px] object-contain" src="/assets/levis-1 1.svg" alt="Levis" /></div>
        </div>
        <div className="relative" style={{ position: "relative" }}>
          <div className="mt-14 rounded-[20px] p-6 hero-preview">
            <img className="w-full rounded-[14px]" src="/assets/imgImage1.png" alt="Task dashboard preview" />
          </div>
          <img className="absolute" src="/assets/Rectangle-shadow.png" style={{ position: "absolute", bottom: "-100px", left: 0, width: "120%" }} alt="Everything Your Team Needs to" />
        </div>
      </section>

      <section className="py-28 capabilities section-pad container mx-auto" data-animate="fade-up">
        <div className="text-center section-title centered">
          <h2 className="max-w-[900px] mx-auto">Everything Your Team <br /> Needs to <span>Grow Efficiently</span></h2>
          <p className="mt-4 mx-auto max-w-[760px] text-xl">All the tools, services, and support your team needs to create powerful digital products and deliver better user experiences.</p>
        </div>
        <div className="mt-20 grid gap-4 cap-grid-wide">
          <article className="rounded-[20px] min-h-[560px] cap-card large">
            <div><div><img src="/assets/imgMaterialIconThemeFolderPdf.png" alt="pdf" /></div></div>
            <h3 className="text-[26px]">Visual Kanban Boards.</h3>
            <p className="text-base">Organize and visualize your workflow with customizable Kanban columns.</p>
            <a className="inline-flex gap-2 font-bold text-base items-center" href="#">Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
          </article>
          <article className="rounded-[20px] min-h-[560px] cap-card large">
            <img className="" src="/assets/task-list.png" alt="Task list card" />
            <h3 className="text-[26px]">Task Lists &amp; Prioritization.</h3>
            <p className="text-base">Create structured task lists with priorities, due dates, and assignees.</p>
            <a className="inline-flex gap-2 font-bold text-base items-center mb-5" href="#" style={{ marginBottom: "20px" }}>Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
          </article>
        </div>
        <div className="mt-4 grid gap-4 cap-grid">
          <article className="rounded-[20px] min-h-[560px] cap-card small">
            <img className="" src="/assets/imgRectangle2711.png" alt="Timeline widget" />
            <h3 className="text-[26px]">Unified Project Timelines.</h3>
            <p className="text-base">Plan and track projects across an interactive timeline with dependencies.</p>
            <a className="inline-flex gap-2 font-bold text-base items-center" href="#">Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
          </article>
          <article className="rounded-[20px] min-h-[560px] cap-card small">
            <img className="" src="/assets/imgCharts.png" alt="Analytics" />
            <h3 className="text-[26px]">Analytics Dashboard.</h3>
            <p className="text-base">Track tasks completed, team velocity, and time saved at a glance.</p>
            <a className="inline-flex gap-2 font-bold text-base items-center" href="#">Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
          </article>
          <article className="rounded-[20px] min-h-[560px] cap-card small">
            <img className="" src="/assets/imgWoman.png" alt="Remote work" />
            <h3 className="text-[26px]">Work from Anywhere.</h3>
            <p className="text-base">Stay productive on the go with full mobile support and cloud sync.</p>
            <a className="inline-flex gap-2 font-bold text-base items-center" href="#">Explore more <img src="/assets/imgArrowUpRight01.svg" alt="arrow" /></a>
          </article>
        </div>
      </section>

      <section className="py-28 platform section-pad container-wide" data-animate="fade-up">
        <div className="flex justify-between items-end gap-5 platform-head">
          <h2 className="max-w-[900px]">One Powerful Platform for Faster, Smarter <span>Workflows</span></h2>
          <div className="flex gap-[6px] rounded-full p-1 text-[13px] segment-tabs">
            <span className="rounded-full px-3 py-2 text-nowrap cursor-pointer select-none" onClick={(e) => { const p = e.currentTarget.parentElement; if (p) { p.querySelectorAll("span").forEach(i => i.classList.remove("on")); } e.currentTarget.classList.add("on"); }}>Freelancer</span>
            <span className="rounded-full px-3 py-2 text-nowrap cursor-pointer select-none on" onClick={(e) => { const p = e.currentTarget.parentElement; if (p) { p.querySelectorAll("span").forEach(i => i.classList.remove("on")); } e.currentTarget.classList.add("on"); }}>Startup Team</span>
            <span className="rounded-full px-3 py-2 text-nowrap cursor-pointer select-none" onClick={(e) => { const p = e.currentTarget.parentElement; if (p) { p.querySelectorAll("span").forEach(i => i.classList.remove("on")); } e.currentTarget.classList.add("on"); }}>Creative Agency</span>
            <span className="rounded-full px-3 py-2 text-nowrap cursor-pointer select-none" onClick={(e) => { const p = e.currentTarget.parentElement; if (p) { p.querySelectorAll("span").forEach(i => i.classList.remove("on")); } e.currentTarget.classList.add("on"); }}>Remote Team</span>
            <span className="rounded-full px-3 py-2 text-nowrap cursor-pointer select-none" onClick={(e) => { const p = e.currentTarget.parentElement; if (p) { p.querySelectorAll("span").forEach(i => i.classList.remove("on")); } e.currentTarget.classList.add("on"); }}>Enterprise Team</span>
          </div>
        </div>
        <div className="mt-8 grid gap-4 feature-grid">
          <article className="rounded-2xl p-5"><img className="w-8 h-8 opacity-95 icon" src="/assets/imgTimeline-black.svg" alt="timeline" /><h4 className="mt-3 text-[26px]">Timeline Scheduling</h4><p className="mt-1 text-base">Interactive Gantt chart with milestones and dependencies.</p><img className="mt-4 rounded-lg h-[206px] w-full object-cover shot" src="/assets/imgRectangle27111.png" alt="timeline" /></article>
          <article className="rounded-2xl p-5"><img className="w-8 h-8 opacity-95 icon" src="/assets/imgDashboardSquare03-white.svg" alt="kanban" /><h4 className="mt-3 text-[26px]">Custom Kanban</h4><p className="mt-1 text-base">Task columns with avatars, priority labels, and drag-drop.</p><img className="mt-4 rounded-lg h-[206px] w-full object-cover shot" src="/assets/imgRectangle2712.png" alt="kanban" /></article>
          <article className="rounded-2xl p-5"><img className="w-8 h-8 opacity-95 icon" src="/assets/imgAddTeam-white.svg" alt="team" /><h4 className="mt-3 text-[26px]">Team Capacity.</h4><p className="mt-1 text-base">Visual workload bars for each team member and balance.</p><img className="mt-4 rounded-lg h-[206px] w-full object-cover shot" src="/assets/imgRectangle2713.png" alt="team" /></article>
          <article className="rounded-2xl p-5"><img className="w-8 h-8 opacity-95 icon" src="/assets/imgChartAverage-white.svg" alt="analytics" /><h4 className="mt-3 text-[26px]">Integrated Analytics.</h4><p className="mt-1 text-base">Line graphs, donut charts, and real-time performance data.</p><img className="mt-4 rounded-lg h-[206px] w-full object-cover shot" src="/assets/imgRectangle2714.png" alt="analytics" /></article>
          <article className="rounded-2xl p-5"><img className="w-8 h-8 opacity-95 icon" src="/assets/imgAlarmClock-white.svg" alt="timer" /><h4 className="mt-3 text-[26px]">Smart Time Tracking.</h4><p className="mt-1 text-base">Digital timer with session history and timesheet export.</p><img className="mt-4 rounded-lg h-[206px] w-full object-cover shot" src="/assets/imgRectangle2715.png" alt="timer" /></article>
          <article className="rounded-2xl p-5"><img className="w-8 h-8 opacity-95 icon" src="/assets/imgZap-white.svg" alt="automation" /><h4 className="mt-3 text-[26px]">Workflow Automation.</h4><p className="mt-1 text-base">No-code rule builder: IF status = Done THEN notify PM.</p><img className="mt-4 rounded-lg h-[206px] w-full object-cover shot" src="/assets/imgRectangle2716.png" alt="automation" /></article>
        </div>
      </section>

      <section className="py-28 environment section-pad" data-animate="fade-up" style={{ background: "url(/assets/section-bg.png)" }}>
        <div className="container-wide relative env-wrap">
          <div className="text-center section-title centered">
            <h2 className="max-w-[900px] mx-auto">Flexible Environments Designed for <span>Every Specialist</span></h2>
            <p className="mt-4 mx-auto max-w-[760px] text-xl">Tailored tools and workflows designed to support every role and expertise.</p>
          </div>
          <div className="mt-10 grid gap-4 env-body">
            <aside className="rounded-2xl p-[14px] grid gap-2 self-stretch h-fit items-center h-full justify-center" style={{ height: "100%", justifyContent: "center" }}>
              <div className="grid gap-2">
                <button className="rounded-full text-left px-[6px] py-[5px] flex gap-2 items-center active" type="button" onClick={(e) => { const p = e.currentTarget.parentElement; if (p) { p.querySelectorAll("button").forEach(i => i.classList.remove("active")); } e.currentTarget.classList.add("active"); }}><img className="w-7 h-7 rounded-full p-1" src="/assets/imgCodeFolder.svg" alt="" />Software Engineering.</button>
                <button className="rounded-full text-left px-[6px] py-[5px] flex gap-2 items-center" type="button" onClick={(e) => { const p = e.currentTarget.parentElement; if (p) { p.querySelectorAll("button").forEach(i => i.classList.remove("active")); } e.currentTarget.classList.add("active"); }}><img className="w-7 h-7 rounded-full p-1" src="/assets/imgPaintBoard.svg" alt="" />Product Design.</button>
                <button className="rounded-full text-left px-[6px] py-[5px] flex gap-2 items-center" type="button" onClick={(e) => { const p = e.currentTarget.parentElement; if (p) { p.querySelectorAll("button").forEach(i => i.classList.remove("active")); } e.currentTarget.classList.add("active"); }}><img className="w-7 h-7 rounded-full p-1" src="/assets/imgPromotion.svg" alt="" />Marketing Ops.</button>
                <button className="rounded-full text-left px-[6px] py-[5px] flex gap-2 items-center" type="button" onClick={(e) => { const p = e.currentTarget.parentElement; if (p) { p.querySelectorAll("button").forEach(i => i.classList.remove("active")); } e.currentTarget.classList.add("active"); }}><img className="w-7 h-7 rounded-full p-1" src="/assets/imgNewJob.svg" alt="" />Exclusive Leadership.</button>
              </div>
            </aside>
            <div className="rounded-2xl p-[14px] env-card">
              <div className="flex items-center gap-[10px] mb-3 text-[38px] font-bold h-fit env-title"><img src="/assets/imgSolarCodeSquareBold.svg" alt="" />Recent Activity.<span className="ml-auto text-sm font-medium">&bull; Jira &bull; Slack &bull; Aws</span></div>
              <img src="/assets/imgRectangle271111.png" alt="Recent activity panel" className="w-full" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 pricing section-pad" data-animate="fade-up" style={{ background: "url(/assets/smart-bg.png)" }}>
        <div className="container mx-auto">
          <div className="text-center section-title centered">
            <h2 className="max-w-[900px] mx-auto">Smart Pricing Intelligence with Built-In <span>ROI Calculator</span></h2>
            <p className="mt-4 mx-auto max-w-[760px] text-xl">Analyze pricing strategies and instantly measure the real return on your investment.</p>
          </div>
          <div className="flex gap-2 p-1 rounded-full mt-8 mx-auto w-fit billing-toggle">
            <button className="border-0 bg-transparent font-bold rounded-full px-4 py-[10px] cursor-pointer text-sm" type="button" onClick={() => setHomePricingMode("monthly")}>Monthly</button>
            <button className="border-0 bg-transparent font-bold rounded-full px-4 py-[10px] cursor-pointer text-sm active inline-flex gap-2 items-center" type="button" onClick={() => setHomePricingMode("annual")}>Annual <span className="text-[10px] rounded-full px-[6px] py-[5px]">-20%</span></button>
          </div>
          <div className="mt-6 grid gap-4 pricing-grid">
            <article className="rounded-xl p-6 relative flex flex-col gap-4 min-h-[600px] overflow-hidden card">
              <h3 className="text-xl font-bold">Starter Package</h3>
              <p className="text-sm">Perfect for individuals and small teams getting started.</p>
              <div className="text-3xl font-extrabold price" data-monthly-price="9.99" data-annual-price="95.88">$95.88 <small className="text-sm font-normal">/year</small></div>
              <button className="w-full btn light">Get Started Today</button>
              <h4 className="text-lg font-bold">Included Features:</h4>
              <ul className="grid gap-2 text-sm [&>li]:py-[6px]">
                <li>Up to 10 projects</li>
                <li>Basic Kanban boards</li>
                <li>5GB secure storage</li>
                <li>Email support</li>
                <li>Basic task management</li>
                <li>Activity tracking</li>
              </ul>
            </article>
            <article className="rounded-xl p-6 relative flex flex-col gap-4 min-h-[600px] overflow-hidden card glow">
              <h3 className="text-xl font-bold">Growth Package</h3>
              <p className="text-sm">Best for growing teams that need advanced collaboration.</p>
              <div className="text-3xl font-extrabold price" data-monthly-price="29.99" data-annual-price="287.90">$287.90 <small className="text-sm font-normal">/year</small></div>
              <button className="w-full btn light">Get Started Today</button>
              <h4 className="text-lg font-bold">Included Features:</h4>
              <ul className="grid gap-2 text-sm [&>li]:py-[6px]">
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
            <article className="rounded-xl p-6 relative flex flex-col gap-4 min-h-[600px] overflow-hidden card">
              <h3 className="text-xl font-bold">Business Package</h3>
              <p className="text-sm">Designed for teams managing complex workflows.</p>
              <div className="text-3xl font-extrabold price" data-monthly-price="49.99" data-annual-price="479.90">$479.90 <small className="text-sm font-normal">/year</small></div>
              <button className="w-full btn dark">Get Business Package</button>
              <h4 className="text-lg font-bold">Included Features:</h4>
              <ul className="grid gap-2 text-sm [&>li]:py-[6px]">
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
            <article className="rounded-xl p-6 relative flex flex-col gap-4 min-h-[600px] overflow-hidden card">
              <h3 className="text-xl font-bold">Enterprise Package</h3>
              <p className="text-sm">Built for large organizations with advanced security needs.</p>
              <div className="flex items-center gap-[6px] text-sm price custom" data-monthly-label="Custom Pricing" data-annual-label="Custom Pricing"><img className="w-[38px] h-[38px]" src="/assets/imgGroup.svg" alt="" /> /Custom Pricing</div>
              <button className="w-full btn light">Request a Quote</button>
              <h4 className="text-lg font-bold">Included Features:</h4>
              <ul className="grid gap-2 text-sm [&>li]:py-[6px]">
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

      <section className="py-28 faq section-pad" data-animate="fade-up">
        <div className="container-wide grid gap-6 items-center faq-wrap">
          <div className="faq-left">
            <h2>Your <span>Questions</span> About Workflow Management, Answered</h2>
            <p className="mt-4 text-2xl">Explore helpful insights and solutions to streamline the way your team works.</p>
            <button className="mt-8 btn btn-dark">Contact Us</button>
          </div>
          <div className="grid gap-2 faq-right">
            <article className="rounded-xl p-[18px] relative cursor-pointer faq-item" onClick={(e) => setFaqItem(e.currentTarget)}><h4 className="text-2xl pr-10"><span className="mr-2 dot">&bull;</span>Can I try the platform for free?</h4><img className="w-6 h-6 absolute right-4 top-4" src="/assets/imgAddCircleHalfDot.svg" alt="expand" /><p className="mt-3 text-[15px]">Yes, you can start with a free trial to explore boards, timelines, and team collaboration before choosing any paid plan.</p></article>
            <article className="rounded-xl p-[18px] relative cursor-pointer faq-item open" onClick={(e) => setFaqItem(e.currentTarget)}><h4 className="text-2xl pr-10"><span className="mr-2 dot">&bull;</span>What happens when my trial ends?</h4><img className="w-6 h-6 absolute right-4 top-4" src="/assets/imgRemoveCircleHalfDot.svg" alt="collapse" /><p className="mt-3 text-[15px]">When your trial ends, you can choose to upgrade to any of our paid plans to continue using the platform without interruption. If you don&rsquo;t upgrade, your account will remain inactive until a plan is selected.</p></article>
            <article className="rounded-xl p-[18px] relative cursor-pointer faq-item" onClick={(e) => setFaqItem(e.currentTarget)}><h4 className="text-2xl pr-10"><span className="mr-2 dot">&bull;</span>Can I change plans later?</h4><img className="w-6 h-6 absolute right-4 top-4" src="/assets/imgAddCircleHalfDot.svg" alt="expand" /><p className="mt-3 text-[15px]">Absolutely. You can upgrade or downgrade your plan any time, and your data stays safe during the switch.</p></article>
            <article className="rounded-xl p-[18px] relative cursor-pointer faq-item" onClick={(e) => setFaqItem(e.currentTarget)}><h4 className="text-2xl pr-10"><span className="mr-2 dot">&bull;</span>Do you offer discounts for annual plans?</h4><img className="w-6 h-6 absolute right-4 top-4" src="/assets/imgAddCircleHalfDot.svg" alt="expand" /><p className="mt-3 text-[15px]">Yes, annual billing includes discounted pricing compared to monthly plans and helps teams reduce overall cost.</p></article>
            <article className="rounded-xl p-[18px] relative cursor-pointer faq-item" onClick={(e) => setFaqItem(e.currentTarget)}><h4 className="text-2xl pr-10"><span className="mr-2 dot">&bull;</span>Is my data secure on the platform?</h4><img className="w-6 h-6 absolute right-4 top-4" src="/assets/imgAddCircleHalfDot.svg" alt="expand" /><p className="mt-3 text-[15px]">Your workspace is protected with encryption, access controls, and regular security updates to keep information secure.</p></article>
            <article className="rounded-xl p-[18px] relative cursor-pointer faq-item" onClick={(e) => setFaqItem(e.currentTarget)}><h4 className="text-2xl pr-10"><span className="mr-2 dot">&bull;</span>Do you offer support for teams?</h4><img className="w-6 h-6 absolute right-4 top-4" src="/assets/imgAddCircleHalfDot.svg" alt="expand" /><p className="mt-3 text-[15px]">Yes, team-focused support is available, including onboarding guidance and priority help based on your plan.</p></article>
          </div>
        </div>
      </section>

      <section className="cta-footer" data-animate="fade-up">
        <div className="cta-card" style={{ background: "url(/assets/section-bg.png)", backgroundSize: "contain", backgroundBlendMode: "overlay" }}>
          <h2 className="text-5xl">Reclaim Your Team&rsquo;s Peak <span>Productivity</span></h2>
          <p className="mt-4 mx-auto max-w-[920px] text-base">Empower your team with a centralized platform designed to connect people, simplify complex workflows, and help everyone stay focused, productive, and aligned.</p>
          <div className="hero-buttons">
            <button className="btn btn-dark">Start free Trial</button>
            <button className="btn btn-light">Book a Demo</button>
          </div>
          <div className="absolute w-[180px] rounded-2xl px-5 py-[14px] text-left mini-badge">
            <div className="flex gap-2 pr-4 mini-icons"><img className="w-12 h-12 p-[10px] rounded-full -mr-4" src="/assets/imgSolarCodeFileBold1.svg" alt="" /><img className="w-12 h-12 p-[10px] rounded-full -mr-4" src="/assets/imgMdiFileCad1.svg" alt="" /><img className="w-12 h-12 p-[10px] rounded-full -mr-4" src="/assets/imgFluentTaskListSquareSparkle20Filled.svg" alt="" /></div>
            <h5 className="mt-3 text-base">Good Morning, <span>Sayra ali!</span></h5>
            <p className="mt-2 text-sm">You have 12 tasks due today</p>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

function setHomePricingMode(mode: string) {
  const isAnnual = mode === "annual";
  const toggleButtons = document.querySelectorAll(".pricing .billing-toggle button");
  const priceFields = document.querySelectorAll(".pricing-grid .price");
  toggleButtons.forEach((btn) => btn.classList.remove("active"));
  toggleButtons[isAnnual ? 1 : 0].classList.add("active");
  priceFields.forEach((price) => {
    if (price.classList.contains("custom")) {
      const label = isAnnual ? price.getAttribute("data-annual-label") : price.getAttribute("data-monthly-label");
      price.innerHTML = '<img src="/assets/imgGroup.svg" alt=""> /' + label;
      return;
    }
    const amount = isAnnual ? price.getAttribute("data-annual-price") : price.getAttribute("data-monthly-price");
    const period = isAnnual ? "year" : "month";
    price.innerHTML = "$" + amount + ' <small>/' + period + "</small>";
  });
}

function setFaqItem(item: HTMLElement) {
  const parent = item.parentElement;
  const openIcon = "/assets/imgRemoveCircleHalfDot.svg";
  const closedIcon = "/assets/imgAddCircleHalfDot.svg";
  parent?.querySelectorAll(".faq-item").forEach((entry) => {
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
