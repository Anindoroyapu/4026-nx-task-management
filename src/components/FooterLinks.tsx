type Link = { href?: string; label: string };

const linkGroups: { title: string; links: Link[] }[] = [
  {
    title: "Quick Links",
    links: [
      { href: "/", label: "Home Page" },
      { href: "/feature", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/about", label: "Know Us" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
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
  return (
    <div style={{ display: "flex", gap: "48px" }}>
      {linkGroups.map((group) => (
        <div key={group.title}>
          <h5>{group.title}</h5>
          <ul>
            {group.links.map((link) => (
              <li key={link.label}>
                {link.href ? <a href={link.href}>{link.label}</a> : link.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
