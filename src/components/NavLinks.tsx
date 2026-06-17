"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const lightLinks = [
  { href: "/", label: "Home Page" },
  { href: "/feature", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Know Us" },
  { href: "/contact", label: "Contact" },
];

const darkLinks = [
  { href: "/dark", label: "Home Page" },
  { href: "/dark/feature", label: "Features" },
  { href: "/dark/pricing", label: "Pricing" },
  { href: "/dark/about", label: "Know Us" },
  { href: "/dark/contact", label: "Contact" },
];

function getLinks(path: string) {
  return path.startsWith("/dark") ? darkLinks : lightLinks;
}

export function DesktopNavLinks() {
  const path = usePathname();
  const links = getLinks(path);

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

export function SidebarNavLinks() {
  const path = usePathname();
  const links = getLinks(path);

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
