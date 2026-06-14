"use client"

import { useEffect } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactDarkPage() {
  useEffect(() => {
    const form = document.getElementById("contactForm") as HTMLFormElement | null
    const submitFrame = document.getElementById("contactSubmitFrame") as HTMLIFrameElement | null
    const modal = document.getElementById("thanksModal")
    const closeBtn = document.getElementById("closeThanksModal")
    let isSubmitting = false

    if (!form || !submitFrame || !modal || !closeBtn) return

    const handleSubmit = () => {
      isSubmitting = true
    }

    const handleLoad = () => {
      if (!isSubmitting) return
      isSubmitting = false
      modal.classList.add("open")
      modal.setAttribute("aria-hidden", "false")
      form.reset()
    }

    const handleClose = () => {
      modal.classList.remove("open")
      modal.setAttribute("aria-hidden", "true")
    }

    const handleModalClick = (event: MouseEvent) => {
      if (event.target === modal) {
        modal.classList.remove("open")
        modal.setAttribute("aria-hidden", "true")
      }
    }

    form.addEventListener("submit", handleSubmit)
    submitFrame.addEventListener("load", handleLoad)
    closeBtn.addEventListener("click", handleClose)
    modal.addEventListener("click", handleModalClick)

    return () => {
      form.removeEventListener("submit", handleSubmit)
      submitFrame.removeEventListener("load", handleLoad)
      closeBtn.removeEventListener("click", handleClose)
      modal.removeEventListener("click", handleModalClick)
    }
  }, [])

  return (
    <div className="dark-mode">
      <main className="contact-page">
        <img className="vector v-left" src="/assets/imgVector.svg" alt="" />
        <img className="vector v-right" src="/assets/imgVector.svg" alt="" />

        <section className="head-wrap">
          <img className="hand hand-left" src="/assets/imgEllipse16.svg" alt="" />
          <img className="hand hand-right" src="/assets/imgEllipse15.svg" alt="" />
          <img className="badge b-left" src="/assets/imgGroup9.svg" alt="" />
          <img className="badge b-right" src="/assets/imgGroup8.svg" alt="" />

          <Header active="contact" isDark={true} />

          <div className="hero container-1230">
            <h1>We&rsquo;re Here to Help You <span>Success.</span></h1>
            <p>Have questions or need support? Reach out and our team will make sure your tasks stay on track.</p>

            <div className="support-cards">
              <article className="support">
                <div className="top">
                  <div className="icon"><img src="/assets/imgDiscountTag01.svg" alt="" /></div>
                  <div>
                    <h3>Sales.</h3>
                    <p>Talk to our sales team about plans and pricing.</p>
                  </div>
                </div>
                <div className="mail">&bull; sales@office.com <img src="/assets/imgCopy.svg" alt="" /></div>
              </article>

              <article className="support">
                <div className="top">
                  <div className="icon"><img src="/assets/imgQuestion.svg" alt="" /></div>
                  <div>
                    <h3>Support.</h3>
                    <p>Get help with your account or technical issues.</p>
                  </div>
                </div>
                <div className="mail">&bull; support@office.com <img src="/assets/imgCopy.svg" alt="" /></div>
              </article>

              <article className="support">
                <div className="top">
                  <div className="icon"><img src="/assets/imgAgreement02.svg" alt="" /></div>
                  <div>
                    <h3>Partnerships.</h3>
                    <p>Explore integration and partnership opportunities.</p>
                  </div>
                </div>
                <div className="mail">&bull; partners@office.com <img src="/assets/imgCopy.svg" alt="" /></div>
              </article>
            </div>
          </div>
        </section>

        <section className="middle container-1480">
          <div className="office-card panel">
            <h2>&bull; Our all Office <span>Location.</span></h2>
            <div className="office-list">
              <div className="office-item">
                <div className="icon"><img src="/assets/imgOffice.svg" alt="" /></div>
                <div><h3>San Francisco.</h3><p>100 Market St, Suite 400,United States.</p></div>
              </div>
              <div className="office-item">
                <div className="icon"><img src="/assets/imgBuilding05.svg" alt="" /></div>
                <div><h3>London.</h3><p>25 Old Broad St, 5th Floor, United Kingdom.</p></div>
              </div>
              <div className="office-item">
                <div className="icon"><img src="/assets/imgNewOffice.svg" alt="" /></div>
                <div><h3>Singapore.</h3><p>1 Raffles Place, Tower 2, Singapore.</p></div>
              </div>
            </div>
          </div>

          <div className="message-card panel">
            <h2>&bull; Send us a <span>Message.</span></h2>
            <form className="form-box" id="contactForm" action="https://formsubmit.co/info@tasktemplate.com" method="post" target="contactSubmitFrame">
              <input type="hidden" name="_subject" value="New Contact Request from Taxky Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="/contact-dark" />
              <div className="grid-two">
                <div>
                  <label style={{ display: "flex" }}>Full Name<span>*</span></label>
                  <input type="text" name="full_name" placeholder="Enter your full name" required />
                </div>
                <div>
                  <label style={{ display: "flex" }}>Email ID<span>*</span></label>
                  <input type="email" name="email" placeholder="Enter your email address" required />
                </div>
                <div>
                  <label style={{ display: "flex" }}>Company Name</label>
                  <input type="text" name="company_name" placeholder="Enter your company name" />
                </div>
                <div>
                  <label style={{ display: "flex" }}>What&rsquo;s your Department<span>*</span></label>
                  <input type="text" name="department" placeholder="Enter your department" required />
                </div>
              </div>
              <label>Project Details<span>*</span><textarea rows={4} name="project_details" placeholder="Write your project idea" required></textarea></label>
              <div className="form-actions">
                <button className="attach" type="button">Attach <span><img src="/assets/imgFluentDocumentDataLink16Regular.svg" alt="" /></span></button>
                <button className="submit" type="submit">Submit Request <img src="/assets/imgGroup2.svg" alt="" /></button>
              </div>
            </form>
            <iframe name="contactSubmitFrame" id="contactSubmitFrame" style={{ display: "none" }}></iframe>
          </div>
        </section>

        <div className="thanks-modal" id="thanksModal" aria-hidden="true">
          <div className="thanks-modal-card" role="dialog" aria-modal="true" aria-labelledby="thanksTitle">
            <h3 id="thanksTitle">Thank You!</h3>
            <p>Your message has been sent successfully. Our team will contact you shortly.</p>
            <button type="button" id="closeThanksModal" className="btn dark">Close</button>
          </div>
        </div>

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

          <Footer logoSrc="/assets/imgTaxky1.svg" containerClass="container-1480" socialSrc="/assets/imgGroup3.svg" />
        </section>
      </main>
    </div>
  )
}
