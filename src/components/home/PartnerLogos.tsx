const logos = [
  { src: "/assets/imgShopify1.svg", alt: "Shopify" },
  { src: "/assets/reddit-4 -1.svg", alt: "Reddit" },
  { src: "/assets/notion.svg", alt: "Notion" },
  { src: "/assets/figma-icon-1.svg", alt: "Figma" },
  { src: "/assets/tencent-meeting-1.svg", alt: "Tencent" },
  { src: "/assets/yelp-icon-1.svg", alt: "Yelp" },
  { src: "/assets/slack-new-logo-1.svg", alt: "Slack" },
  { src: "/assets/google-shopping 1.svg", alt: "Google shopping" },
  { src: "/assets/imgGoogleIcon11.svg", alt: "Google" },
  { src: "/assets/levis-1 1.svg", alt: "Levis" },
];

export default function PartnerLogos() {
  return (
    <div className="partner-logos">
      {logos.map(({ src, alt }) => (
        <div key={src}><img src={src} alt={alt} /></div>
      ))}
    </div>
  );
}
