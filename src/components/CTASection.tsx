type Props = {
  cardClass?: string;
  footerLogoVariant?: "default" | "alt";
  footerSocialVariant?: "default" | "f1" | "p1" | "a1" | "c1";
  footerContainerClass?: string;
  isDark?: boolean;
  showBg?: boolean;
};

export default function CTASection({
  cardClass = "container-wide",
  footerLogoVariant,
  footerSocialVariant,
  footerContainerClass,
  isDark = true,
  showBg = true,
}: Props) {
  const bgStyle = showBg ? { background: "url(/assets/section-bg.png)", backgroundSize: "contain" as const, backgroundBlendMode: "overlay" as const } : {};

  const { default: Footer } = require("./Footer");

  return (
    <>
      <div className="cta-card" style={bgStyle}>
        <h2>Reclaim Your Team&rsquo;s Peak <span>Productivity</span></h2>
        <p>Empower your team with a centralized platform designed to connect people, simplify complex workflows, and help everyone stay focused, productive, and aligned.</p>
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
      <Footer
        isDark={isDark}
        logoVariant={footerLogoVariant}
        socialVariant={footerSocialVariant}
        containerClass={footerContainerClass}
      />
    </>
  );
}
