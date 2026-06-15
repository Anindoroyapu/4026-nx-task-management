import { ModeToggleSvgDark } from "./ModeToggleDark";

export default function MobileHeaderDark({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <div className="mobile-header w3-white">
      <a
        className="brand"
        href="/dark"
        style={{ paddingLeft: "10px" }}
        aria-label="AppFlow home"
      >
        <img
          className="logo"
          src="/assets/taxky.png"
          alt="Taxky"
          style={{ height: "30px", width: "auto" }}
        />
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <ModeToggleSvgDark />
        <button className="w3-button w3-xlarge" onClick={onMenuClick}>
          ☰
        </button>
      </div>
    </div>
  );
}
