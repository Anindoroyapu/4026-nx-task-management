"use client";

import { useRef, useState } from "react";

export default function MessageForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const isSubmitting = useRef(false);

  const handleSubmit = () => {
    isSubmitting.current = true;
  };

  const handleFrameLoad = () => {
    if (!isSubmitting.current) return;
    isSubmitting.current = false;
    setModalOpen(true);
    formRef.current?.reset();
  };

  return (
    <>
      <div className="message-card panel">
        <h2>• Send us a <span>Message.</span></h2>
        <form
          className="form-box"
          ref={formRef}
          action="https://formsubmit.co/anindoroy112@gmail.com"
          method="post"
          target="contactSubmitFrame"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New Contact Request from Taxky Website" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="contact.html" />
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
              <label style={{ display: "flex" }}>What&apos;s your Department<span>*</span></label>
              <input type="text" name="department" placeholder="Enter your department" required />
            </div>
          </div>
          <label>
            Project Details<span>*</span>
            <textarea rows={4} name="project_details" placeholder="Write your project idea" required></textarea>
          </label>
          <div className="form-actions">
            <button className="attach" type="button">
              Attach <span><img src="/assets/imgFluentDocumentDataLink16Regular.svg" alt="" /></span>
            </button>
            <button className="submit" type="submit">
              Submit Request <img src="/assets/imgGroup2.svg" alt="" />
            </button>
          </div>
        </form>
        <iframe
          ref={frameRef}
          name="contactSubmitFrame"
          id="contactSubmitFrame"
          onLoad={handleFrameLoad}
          style={{ display: "none" }}
        />
      </div>

      <div className={`thanks-modal${modalOpen ? " open" : ""}`} aria-hidden={!modalOpen}>
        <div className="thanks-modal-card" role="dialog" aria-modal="true" aria-labelledby="thanksTitle">
          <h3 id="thanksTitle">Thank You!</h3>
          <p>Your message has been sent successfully. Our team will contact you shortly.</p>
          <button type="button" className="btn dark" onClick={() => setModalOpen(false)}>Close</button>
        </div>
      </div>
    </>
  );
}
