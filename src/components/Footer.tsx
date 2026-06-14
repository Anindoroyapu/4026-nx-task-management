type Props = {
  logoSrc?: string;
  containerClass?: string;
  socialSrc?: string;
  isDark?: boolean;
  children?: React.ReactNode;
};

export default function Footer({
  logoSrc = "/assets/imgTaxky.svg",
  containerClass = "container-wide",
  socialSrc = "/assets/imgGroup.svg",
}: Props) {
  return (
    <footer>
      <div className={`flex justify-between ${containerClass}`}>
        <div>
          <img src={logoSrc} alt="Taxky" className="logo" />
          <h3>Is the modern task management platform for <span>productive teams.</span></h3>
          <div className="socials">
            <img src={socialSrc} alt="" />
            <img src="/assets/imgFamiconsLogoBehance.svg" alt="" />
            <img src="/assets/imgEntypoSocialLinkedinWithCircle.svg" alt="" />
            <img src="/assets/imgAntDesignInstagramFilled.svg" alt="" />
            <img src="/assets/imgFormkitTwitter.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-12">
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home Page</a></li>
              <li><a href="/features">Features</a></li>
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
      <div className={`${containerClass} footer-bottom`}>
        <p>&copy; 2025 Office by @taxky. All rights reserved.</p>
        <p>Privacy Policy &bull; Terms &amp; Condition &bull; Help &amp; Support</p>
      </div>
    </footer>
  );
}
