"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItem = { href?: string; label: string };

const lightQuickLinks = [
  { href: "/", label: "Home Page" },
  { href: "/feature", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Know Us" },
  { href: "/contact", label: "Contact Us" },
];

const darkQuickLinks = [
  { href: "/dark", label: "Home Page" },
  { href: "/dark/feature", label: "Features" },
  { href: "/dark/pricing", label: "Pricing" },
  { href: "/dark/about", label: "Know Us" },
  { href: "/dark/contact", label: "Contact Us" },
];

function getQuickLinks(path: string) {
  return path.startsWith("/dark") ? darkQuickLinks : lightQuickLinks;
}

const linkGroups: { title: string; links: LinkItem[] }[] = [
  {
    title: "Resources",
    links: [
      { label: "Documentation" },
      { label: "Help Center" },
      { label: "Community" },
      { label: "API Integrate" },
      { label: "Product Design" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      { label: "Privacy" },
      { label: "Teams" },
      { label: "Security" },
      { label: "GDPR" },
    ],
  },
];

export default function FooterLinks() {
  const path = usePathname();
  const quickLinks = getQuickLinks(path);

  const groups = [
    { title: "Quick Links", links: quickLinks },
    ...linkGroups,
  ];

  return (
    <div style={{ display: "flex", gap: "48px" }}>
      {groups.map((group) => (
        <div key={group.title}>
          <h5>{group.title}</h5>
          <ul>
            {group.links.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <Link href={link.href}>{link.label}</Link>
                ) : (
                  link.label
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
