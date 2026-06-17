"use client";
import { usePathname } from "next/navigation";

function getToggleTarget(path: string) {
  if (path === "/dark" || path.startsWith("/dark/")) {
    const rest = path.replace("/dark", "") || "/";
    return rest;
  }
  return "/dark" + (path === "/" ? "" : path);
}

export function ModeToggleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M16.5833 10.3987C15.5836 10.9324 14.4417 11.2351 13.2292 11.2351C9.29092 11.2351 6.09827 8.04245 6.09827 4.10407C6.09827 2.89158 6.40087 1.74976 6.93469 0.750031C3.38971 1.58085 0.75 4.76264 0.75 8.56095C0.75 12.9916 4.34175 16.5834 8.77242 16.5834C12.5707 16.5834 15.7525 13.9437 16.5833 10.3987Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ModeToggleImg() {
  const path = usePathname();

  return (
    <button
      className="mode-toggle"
      type="button"
      onClick={() => { window.location.href = getToggleTarget(path); }}
      aria-label="Toggle dark mode"
    >
      <img src="/assets/sun-icon.svg" alt="" />
    </button>
  );
}

export function ModeToggleSvg() {
  const path = usePathname();

  return (
    <button
      className="mode-toggle"
      type="button"
      onClick={() => {
        window.location.href = getToggleTarget(path);
      }}
      aria-label="Toggle dark mode"
    >
      <ModeToggleIcon />
    </button>
  );
}
