export default function PricingCard({ plan, desc, monthly, annual, isCustom, features, glow, btnText, btnVariant }: {
  plan: string;
  desc: string;
  monthly?: string;
  annual?: string;
  isCustom?: boolean;
  features: string[];
  glow?: boolean;
  btnText: string;
  btnVariant: "light" | "dark";
}) {
  return (
    <article className={`card${glow ? " glow" : ""}`}>
      <h3>{plan}</h3>
      <p>{desc}</p>
      {isCustom ? (
        <div className="price custom" data-monthly-label="Custom Pricing" data-annual-label="Custom Pricing">
          <img src="/assets/imgGroup.svg" alt="" /> /Custom Pricing
        </div>
      ) : (
        <div className="price" data-monthly-price={monthly} data-annual-price={annual}>
          ${annual} <small>/year</small>
        </div>
      )}
      <button className={`btn ${btnVariant}`}>{btnText}</button>
      <h4>Included Features:</h4>
      <ul>
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </article>
  );
}
