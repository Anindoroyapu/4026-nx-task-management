"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dark", label: "Home Page" },
  { href: "/dark/feature", label: "Features" },
  { href: "/dark/pricing", label: "Pricing" },
  { href: "/dark/about", label: "Know Us" },
  { href: "/dark/contact", label: "Contact" },
];

export function DesktopNavLinksDark() {
  const path = usePathname();

  return (
    <ul>
      {links.map(({ href, label }) => (
        <li key={href} className={path === href ? "active" : ""}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function SidebarNavLinksDark() {
  const path = usePathname();

  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={path === href ? "nav-item active" : "nav-item"}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
