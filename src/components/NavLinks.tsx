"use client";

import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { href: "/", label: "Home Page" },
  { href: "/feature", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Know Us" },
  { href: "/contact", label: "Contact" },
];

export function DesktopNavLinks() {
  const path = usePathname();

  return (
    <ul>
      {navLinks.map(({ href, label }) => (
        <li key={href} className={path === href ? "active" : ""}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function SidebarNavLinks() {
  const path = usePathname();

  return (
    <>
      {navLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={path === href ? "nav-item active" : "nav-item"}
        >
          {label}
        </a>
      ))}
    </>
  );
}
