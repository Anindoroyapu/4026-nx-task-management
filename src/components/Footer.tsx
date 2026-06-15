import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer>
      <div style={{ display: "flex", justifyContent: "space-between" }} className="container-wide">
        <FooterBrand />
        <FooterLinks />
      </div>
      <FooterBottom />
    </footer>
  );
}
