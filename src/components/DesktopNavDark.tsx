import { DesktopNavLinksDark } from "./NavLinksDark";
import { ModeToggleImgDark } from "./ModeToggleDark";

export default function DesktopNavDark() {
  return (
    <nav>
      <div className="main-nav container-wide">
        <img className="logo" src="/assets/imgTaxky.svg" alt="Taxky" />
        <div className="nav-right">
          <DesktopNavLinksDark />
          <ModeToggleImgDark />
        </div>
      </div>
    </nav>
  );
}
