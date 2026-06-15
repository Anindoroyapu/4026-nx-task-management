import { DesktopNavLinks } from "./NavLinks";
import { ModeToggleImg } from "./ModeToggle";

export default function DesktopNav() {
  return (
    <nav>
      <div className="main-nav container-wide">
        <img className="logo" src="/assets/taxky.png" alt="Taxky" />
        <div className="nav-right">
          <DesktopNavLinks />
          <ModeToggleImg />
        </div>
      </div>
    </nav>
  );
}
