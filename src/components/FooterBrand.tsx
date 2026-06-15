const socialIcons = [
  "/assets/imgGroup.svg",
  "/assets/imgFamiconsLogoBehance.svg",
  "/assets/imgEntypoSocialLinkedinWithCircle.svg",
  "/assets/imgAntDesignInstagramFilled.svg",
  "/assets/imgFormkitTwitter.svg",
];

export default function FooterBrand() {
  return (
    <div>
      <img src="/assets/imgTaxky.svg" alt="Taxky" className="logo" />
      <h3>
        Is the modern task management platform for
        <span>productive teams.</span>
      </h3>
      <div className="socials">
        {socialIcons.map((src, i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>
    </div>
  );
}
