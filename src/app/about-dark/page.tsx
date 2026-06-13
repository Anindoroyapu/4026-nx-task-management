"use client"

export default function AboutDarkPage() {
  function w3_open() {
    document.getElementById("mySidebar")!.style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar")!.style.display = "none";
  }

  return (
    <div className="dark-mode">
      <main className="about-page">
        <img className="decor decor-top-left" src="/assets/imgVector.svg" alt="" />
        <img className="decor decor-top-right" src="/assets/imgVector.svg" alt="" />

        <section className="top-section">
          <img className="arm arm-left" src="/assets/imgEllipse13.svg" alt="" />
          <img className="arm arm-right" src="/assets/imgEllipse15.svg" alt="" />
          {/* <img className="tick tick-left" src="/assets/imgGroup7.svg" alt="" /> */}
          {/* <img className="tick tick-right" src="/assets/imgGroup8.svg" alt="" /> */}

          <nav>
            <div className="main-nav container-wide">
              <img className="logo" src="/assets/imgTaxky.svg" alt="Taxky" />
              <div className="nav-right">
                <ul>
                  <li><a href="/dark">Home Page</a></li>
                  <li><a href="/features-dark">Features</a></li>
                  <li><a href="/pricing-dark">Pricing</a></li>
                  <li className="active"><a href="/about-dark">Know Us</a></li>
                  <li><a href="/contact-dark">Contact</a></li>
                </ul>
                <button className="mode-toggle" type="button" onClick={() => window.location.href = '/about'}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5833 10.3987C15.5836 10.9324 14.4417 11.2351 13.2292 11.2351C9.29092 11.2351 6.09827 8.04245 6.09827 4.10407C6.09827 2.89158 6.40087 1.74976 6.93469 0.750031C3.38971 1.58085 0.75 4.76264 0.75 8.56095C0.75 12.9916 4.34175 16.5834 8.77242 16.5834C12.5707 16.5834 15.7525 13.9437 16.5833 10.3987Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          <div style={{ display: "flex", justifyContent: "start", backgroundColor: "black", width: "100%" }}>
            <div className="w3-sidebar w3-bar-block w3-border-right" style={{ display: "none", zIndex: 1000 }} id="mySidebar">
              <div className="main-nav" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "start", justifyItems: "start" }}>
                <button onClick={w3_close} className="w3-bar-item w3-large">Close ×</button>
                <a href="/" className="nav-item active">Home Page</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/about">Know Us</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>

          <div className="mobile-header w3-white">
            <a className="brand" href="/" style={{ paddingLeft: "10px" }} aria-label="AppFlow home">
              <img className="logo" src="/assets/taxky.png" alt="Taxky" style={{ height: "30px", width: "auto" }} />
            </a>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button className="mode-toggle" type="button" onClick={() => window.location.href = '/dark'}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5833 10.3987C15.5836 10.9324 14.4417 11.2351 13.2292 11.2351C9.29092 11.2351 6.09827 8.04245 6.09827 4.10407C6.09827 2.89158 6.40087 1.74976 6.93469 0.750031C3.38971 1.58085 0.75 4.76264 0.75 8.56095C0.75 12.9916 4.34175 16.5834 8.77242 16.5834C12.5707 16.5834 15.7525 13.9437 16.5833 10.3987Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="w3-button w3-xlarge" onClick={w3_open}>☰</button>
            </div>
          </div>

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
              <img className="glow hupe" src="/assets/imgEllipse1.svg" alt="" />

              <div className="card c1"><h4>2022 <span>• Company Founded</span></h4><p>Two engineers came together in San Francisco with a vision to change how teams manage work. The foundation of innovation was laid.</p></div>
              <div className="card c2"><h4>2029 <span>• Industry Recognition</span></h4><p>Awarded best productivity platform by leading publications and recognized for impact and user experience.</p></div>
              <div className="card c3"><h4>2023 <span>• First Product Launch</span></h4><p>Released the first version with boards, timelines and collaboration. Teams quickly adopted it.</p></div>
              <div className="card c4"><h4>2028 <span>• Enterprise Solutions</span></h4><p>Introduced enterprise-grade security, scalability and compliance for larger organizations.</p></div>
              <div className="card c5"><h4>2024 <span>• 50,000 Teams Joined</span></h4><p>Rapid adoption across startups and enterprises accelerated global growth.</p></div>
              <div className="card c6"><h4>2027 <span>• Strategic Partnerships</span></h4><p>Partnered with major platforms to broaden integrations and connected workflows.</p></div>
              <div className="card c7"><h4>2025 <span>• Global Expansion</span></h4><p>Expanded operations globally and improved support in 120+ countries.</p></div>
              <div className="card c8"><h4>2026 <span>• New Product Features</span></h4><p>Launched AI-powered workflows and advanced analytics to drive measurable outcomes.</p></div>

              <img className="v v1" src="/assets/imgVector11.svg" alt="" />
              <img className="v v2" src="/assets/imgVector17.svg" alt="" />
              <img className="v v3" src="/assets/imgVector13.svg" alt="" />
              <img className="v v4" src="/assets/imgVector13.svg" alt="" />
              <img className="v v5" src="/assets/imgVector16.svg" alt="" />
              <img className="v v6" src="/assets/imgVector16.svg" alt="" />
              <img className="v v7" src="/assets/imgVector14.svg" alt="" />
              {/* <img className="v v8" src="/assets/imgVector17.svg" alt="" /> */}
              {/* <img className="v v5" src="/assets/imgVector17.svg" alt="" /> */}
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

          <footer>
            <div className="footer-grid container-1480">
              <div className="left">
                <img className="logo" src="/assets/imgTaxky1.svg" alt="Taxky" />
                <h3>Is the modern task management platform for <span>productive teams.</span></h3>
                <div className="socials">
                  <span><img src="/assets/imgGroup2.svg" alt="" /></span>
                  <span><img src="/assets/imgFamiconsLogoBehance.svg" alt="" /></span>
                  <span className="active"><img src="/assets/imgEntypoSocialLinkedinWithCircle.svg" alt="" /></span>
                  <span><img src="/assets/imgAntDesignInstagramFilled.svg" alt="" /></span>
                  <span><img src="/assets/imgFormkitTwitter.svg" alt="" /></span>
                </div>
              </div>
              <div>
                <h4>Quick Links</h4>
                <ul><li><a href="/dark">Home Page</a></li><li><a href="/features-dark">Features</a></li><li><a href="/pricing-dark">Pricing</a></li><li><a href="/about-dark">Know Us</a></li><li><a href="/contact">Contact Us</a></li></ul>
              </div>
              <div>
                <h4>Resources</h4>
                <ul><li>Documentation</li><li>Help Center</li><li>Community</li><li>API Integrate</li><li>Product Design</li></ul>
              </div>
              <div>
                <h4>Contact Info</h4>
                <ul><li>Privacy</li><li>Teams</li><li>Security</li><li>GDPR</li></ul>
              </div>
            </div>
            <div className="footer-bottom container-1480">
              <p>© 2025 Office by @taxky. All rights reserved.</p>
              <div><span>Privacy Policy</span><span>Terms & Condition</span><span>Help & Support</span></div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}
