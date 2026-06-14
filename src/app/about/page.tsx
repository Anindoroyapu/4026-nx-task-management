"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="about-page">
      <img className="decor decor-top-left" src="/assets/imgVector.svg" alt="" />
      <img className="decor decor-top-right" src="/assets/imgVector.svg" alt="" />

      <section className="top-section">
        <img className="arm arm-left" src="/assets/imgEllipse13.svg" alt="" />
        <img className="arm arm-right" src="/assets/imgEllipse15.svg" alt="" />
        {/* <img className="tick tick-left" src="/assets/imgGroup7.svg" alt="" />
        <img className="tick tick-right" src="/assets/imgGroup8.svg" alt="" /> */}

        <Header active="about" isDark={false} />

        <div className="hero container-1230">
          <h1>Building the Future of Work Management for <span>Modern Teams.</span></h1>
          <p>We help teams spend less time managing work and more time creating meaningful impact.</p>
        </div>

        <div className="values container-1480">
          <article className="value-block">
            <h2><span className="dot">•</span> Our Transform <span>Teams work.</span></h2>
            <div className="items">
              <div className="item">
                <div className="icon"><img src="/assets/imgFlow.svg" alt="" /></div>
                <div>
                  <h3>Simplify Workflows.</h3>
                  <p>Make complex tasks easy and intuitive for your team.</p>
                </div>
              </div>
              <div className="item">
                <div className="icon"><img src="/assets/imgAddTeam02.svg" alt="" /></div>
                <div>
                  <h3>Empower Teams.</h3>
                  <p>Give your team the tools and clarity to succeed.</p>
                </div>
              </div>
              <div className="item">
                <div className="icon"><img src="/assets/imgPackageRemove.svg" alt="" /></div>
                <div>
                  <h3>Remove Friction.</h3>
                  <p>Smooth out collaboration and boost productivity.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="value-block">
            <h2><span className="dot">•</span> Designing with <span>Creating impact.</span></h2>
            <div className="items">
              <div className="item">
                <div className="icon"><img src="/assets/imgBrush.svg" alt="" /></div>
                <div>
                  <h3>User-Centered Design.</h3>
                  <p>We create products that put users first, making every interaction simple and meaningful.</p>
                </div>
              </div>
              <div className="item">
                <div className="icon"><img src="/assets/imgIdea01.svg" alt="" /></div>
                <div>
                  <h3>Purpose-Driven Innovation.</h3>
                  <p>Every feature we build solves real problems and adds value.</p>
                </div>
              </div>
              <div className="item">
                <div className="icon"><img src="/assets/imgVirtualRealityVr01.svg" alt="" /></div>
                <div>
                  <h3>Seamless Experience.</h3>
                  <p>We ensure smooth, intuitive, and delightful experiences across all touchpoints.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="journey">
        <div className="container-1480">
          <h2>Our Journey of <span>Invention.</span></h2>
          <div className="timeline-shell">
            <img className="person" src="/assets/imgMediumShotManHoldingLaptop1.png" alt="Person with laptop" />
            <img className="glow" src="/assets/imgEllipse1.svg" alt="" />

            <div className="card c1"><h4>2022 <span>• Company Founded</span></h4><p>Two engineers came together in San Francisco with a vision to change how teams manage work. The foundation of innovation was laid.</p></div>
            <div className="card c2"><h4>2029 <span>• Industry Recognition</span></h4><p>Awarded best productivity platform by leading publications and recognized for impact and user experience.</p></div>
            <div className="card c3"><h4>2023 <span>• First Product Launch</span></h4><p>Released the first version with boards, timelines and collaboration. Teams quickly adopted it.</p></div>
            <div className="card c4"><h4>2028 <span>• Enterprise Solutions</span></h4><p>Introduced enterprise-grade security, scalability and compliance for larger organizations.</p></div>
            <div className="card c5"><h4>2024 <span>• 50,000 Teams Joined</span></h4><p>Rapid adoption across startups and enterprises accelerated global growth.</p></div>
            <div className="card c6"><h4>2027 <span>• Strategic Partnerships</span></h4><p>Partnered with major platforms to broaden integrations and connected workflows.</p></div>
            <div className="card c7"><h4>2025 <span>• Global Expansion</span></h4><p>Expanded operations globally and improved support in 120+ countries.</p></div>
            <div className="card c8"><h4>2026 <span>• New Product Features</span></h4><p>Launched AI-powered workflows and advanced analytics to drive measurable outcomes.</p></div>

            <img className="v v1" src="/assets/imgVector1.svg" alt="" />
            <img className="v v2" src="/assets/imgVector2.svg" alt="" />
            <img className="v v3" src="/assets/imgVector3.svg" alt="" />
            <img className="v v4" src="/assets/imgVector3.svg" alt="" />
            <img className="v v5" src="/assets/imgVector4.svg" alt="" />
            <img className="v v6" src="/assets/imgVector4.svg" alt="" />
            <img className="v v7" src="/assets/imgVector5.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="cta-wrap">
        <div className="cta-card container-1230">
          <h2>Reclaim Your Team&rsquo;s Peak <span>Productivity</span></h2>
          <p>Empower your team with a centralized platform designed to connect people, simplify complex workflows, and help everyone stay focused, productive, and aligned.</p>
          <div className="cta-actions">
            <button className="btn btn-dark">Start free Trial</button>
            <button className="btn btn-light">Book a Demo</button>
          </div>

          <aside className="floating">
            <div className="stack-icons">
              <span><img src="/assets/imgSolarCodeFileBold.svg" alt="" /></span>
              <span><img src="/assets/imgMdiFileCad.svg" alt="" /></span>
              <span><img src="/assets/imgFluentTaskListSquareSparkle20Filled.svg" alt="" /></span>
            </div>
            <h4>Good Morning, <em>Sayra ali!</em></h4>
            <p>You have 12 tasks due today</p>
          </aside>
        </div>

        <Footer logoSrc="/assets/imgTaxky1.svg" containerClass="container-1480" socialSrc="/assets/imgGroup2.svg" />
      </section>
    </main>
  )
}
