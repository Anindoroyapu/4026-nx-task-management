export default function Footer() {
  return (
    <footer>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="container-wide"
      >
        <div>
          <div>
            <img src="/assets/imgTaxky.svg" alt="Taxky" className="logo" />
            <h3>
              Is the modern task management platform for
              <span>productive teams.</span>
            </h3>
            <div className="socials">
              <img src="/assets/imgGroup.svg" alt="" />
              <img src="/assets/imgFamiconsLogoBehance.svg" alt="" />
              <img src="/assets/imgEntypoSocialLinkedinWithCircle.svg" alt="" />
              <img src="/assets/imgAntDesignInstagramFilled.svg" alt="" />
              <img src="/assets/imgFormkitTwitter.svg" alt="" />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "48px" }}>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home Page</a></li>
              <li><a href="/feature">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/about">Know Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>API Integrate</li>
              <li>Product Design</li>
            </ul>
          </div>
          <div>
            <h5>Contact Info</h5>
            <ul>
              <li>Privacy</li>
              <li>Teams</li>
              <li>Security</li>
              <li>GDPR</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-wide footer-bottom">
        <p>© 2025 Office by @taxky. All rights reserved.</p>
        <p>Privacy Policy • Terms &amp; Condition • Help &amp; Support</p>
      </div>
    </footer>
  );
}
