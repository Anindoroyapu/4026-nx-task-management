import { ModeToggleIcon } from "./ModeToggle";
import Link from "next/link";

export default function MobileHeader({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <div className="mobile-header w3-white">
      <Link
        className="brand"
        href="/"
        style={{ paddingLeft: "10px" }}
        aria-label="AppFlow home"
      >
        <img
          className="logo"
          src="/assets/taxky.png"
          alt="Taxky"
          style={{ height: "30px", width: "auto" }}
        />
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="mode-toggle"
          type="button"
          onClick={() => (window.location.href = "/index-dark.html")}
          aria-label="Toggle dark mode"
        >
          <ModeToggleIcon />
        </button>
        <button className="w3-button w3-xlarge" onClick={onMenuClick}>
          ☰
        </button>
      </div>
    </div>
  );
}
