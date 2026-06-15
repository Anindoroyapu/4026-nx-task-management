export const navLinks = [
  { href: "/", label: "Home Page" },
  { href: "/feature", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Know Us" },
  { href: "/contact", label: "Contact" },
];

export function DesktopNavLinks() {
  return (
    <ul>
      {navLinks.map(({ href, label }) => (
        <li key={href} className={href === "/" ? "active" : ""}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  );
}

export function SidebarNavLinks() {
  return (
    <>
      {navLinks.map(({ href, label }) => (
        <a key={href} href={href} className={href === "/" ? "nav-item active" : "nav-item"}>
          {label}
        </a>
      ))}
    </>
  );
}
