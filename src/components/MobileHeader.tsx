import { ModeToggleIcon } from "./ModeToggle";

export default function MobileHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="mobile-header w3-white">
      <a className="brand" href="/" style={{ paddingLeft: "10px" }} aria-label="AppFlow home">
        <img className="logo" src="/assets/taxky.png" alt="Taxky" style={{ height: "30px", width: "auto" }} />
      </a>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="mode-toggle"
          type="button"
          onClick={() => window.location.href = '/index-dark.html'}
          aria-label="Toggle dark mode"
        >
          <ModeToggleIcon />
        </button>
        <button className="w3-button w3-xlarge" onClick={onMenuClick}>☰</button>
      </div>
    </div>
  );
}
