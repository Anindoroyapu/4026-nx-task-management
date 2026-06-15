const bubbles = [
  { src: "/assets/imgShopify1.svg", x: "0%", y: "142px" },
  { src: "/assets/imgReddit41.svg", x: "88px", y: "98px" },
  { src: "/assets/imgNotion21.svg", x: "176px", y: "71px" },
  { src: "/assets/imgFigmaIcon11.svg", x: "264px", y: "48px" },
  { src: "/assets/imgTencentMeeting11.svg", x: "352px", y: "29px" },
  { src: "/assets/imgDiscord61.svg", x: "440px", y: "0px", central: true },
  { src: "/assets/imgYelpIcon1.svg", x: "560px", y: "29px" },
  { src: "/assets/imgSlackNewLogo11.svg", x: "648px", y: "48px" },
  { src: "/assets/imgGroup5.svg", x: "736px", y: "71px" },
  { src: "/assets/imgGoogleIcon11.svg", x: "824px", y: "98px" },
  { src: "/assets/imgLevis11.svg", x: "912px", y: "142px" },
];

export default function DarkLogoArcSection() {
  return (
    <section className="logo-arc">
      <div className="ring wrap-1480">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className={`bubble${b.central ? " central" : ""}`}
            style={{ "--x": b.x, "--y": b.y } as React.CSSProperties}
          >
            <img src={b.src} alt="" />
          </div>
        ))}
      </div>
      <h2>Powerful <span>Productivity</span></h2>
      <p>Built to simplify work and help teams achieve better results.</p>
      <img className="dot-left" src="/assets/imgEllipse11.svg" alt="" />
      <img className="dot-right" src="/assets/imgEllipse12.svg" alt="" />
    </section>
  );
}
