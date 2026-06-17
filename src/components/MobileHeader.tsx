"use client";

import { ModeToggleIcon } from "./ModeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

function getDarkTarget(path: string) {
  if (path === "/dark" || path.startsWith("/dark/")) {
    return path;
  }
  return "/dark" + (path === "/" ? "" : path);
}

export default function MobileHeader({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  const path = usePathname();

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
          onClick={() => (window.location.href = getDarkTarget(path))}
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
