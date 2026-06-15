const logos = [
  { src: "/assets/imgShopify1.svg", alt: "Shopify" },
  { src: "/assets/imgReddit41.svg", alt: "Reddit" },
  { src: "/assets/imgNotion21.svg", alt: "Notion" },
  { src: "/assets/imgFigmaIcon11.svg", alt: "Figma" },
  { src: "/assets/imgTencentMeeting11.svg", alt: "Tencent" },
  { src: "/assets/imgYelpIcon1.svg", alt: "Yelp" },
  { src: "/assets/imgSlackNewLogo11.svg", alt: "Slack" },
  { src: "/assets/imgGroup.svg", alt: "Google shopping" },
  { src: "/assets/imgGoogleIcon11.svg", alt: "Google" },
  { src: "/assets/imgLevis11.svg", alt: "Levis" },
];

export default function DarkPartnerLogos() {
  return (
    <div className="partner-logos">
      {logos.map(({ src, alt }) => (
        <div key={src}><img src={src} alt={alt} /></div>
      ))}
    </div>
  );
}
