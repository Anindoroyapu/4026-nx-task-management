"use client";

type PageId = "home" | "features" | "pricing" | "about" | "contact";

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "home", label: "Home Page" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "Know Us" },
  { id: "contact", label: "Contact" },
];

const moonSvg = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5833 10.3987C15.5836 10.9324 14.4417 11.2351 13.2292 11.2351C9.29092 11.2351 6.09827 8.04245 6.09827 4.10407C6.09827 2.89158 6.40087 1.74976 6.93469 0.750031C3.38971 1.58085 0.75 4.76264 0.75 8.56095C0.75 12.9916 4.34175 16.5834 8.77242 16.5834C12.5707 16.5834 15.7525 13.9437 16.5833 10.3987Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function routeFor(id: PageId, isDark: boolean) {
  if (id === "home") return isDark ? "/dark" : "/";
  return isDark ? `/${id}-dark` : `/${id}`;
}

export default function Header({ active, isDark }: { active: PageId; isDark: boolean }) {
  const darkTarget = routeFor(active, true);
  const lightTarget = routeFor(active, false);

  return (
    <>
      <nav>
        <div className="main-nav container-wide">
          <img className="logo" src={isDark ? "/assets/imgTaxky.svg" : "/assets/taxky.png"} alt="Taxky" />
          <div className="nav-right">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className={item.id === active ? "active" : ""}>
                  <a href={routeFor(item.id, isDark)}>{item.label}</a>
                </li>
              ))}
            </ul>
            <button className="mode-toggle" type="button" onClick={() => { window.location.href = isDark ? lightTarget : darkTarget; }}>
              {isDark ? moonSvg : <img src="/assets/sun-icon.svg" alt="" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="flex justify-start w-full" style={{ backgroundColor: "black", width: "100%" }}>
        <div className="w3-sidebar w3-bar-block w3-border-right" style={{ display: "none", zIndex: 1000 }} id="mySidebar">
          <div className="flex flex-col gap-5 items-start p-5 main-nav">
            <button onClick={w3_close} className="w3-bar-item w3-large">Close &times;</button>
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={routeFor(item.id, isDark)} className={item.id === active ? "nav-item active" : ""}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mobile-header w3-white">
        <a className="pl-[10px] brand" href={isDark ? "/dark" : "/"} style={{ paddingLeft: "10px" }} aria-label="AppFlow home">
          <img className="h-[30px] logo" src="/assets/taxky.png" alt="Taxky" style={{ height: "30px", width: "auto" }} />
        </a>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="mode-toggle" type="button" onClick={() => { window.location.href = isDark ? lightTarget : darkTarget; }}>
            {moonSvg}
          </button>
          <button className="w3-button w3-xlarge" onClick={w3_open}>☰</button>
        </div>
      </div>
    </>
  );
}

function w3_open() {
  const el = document.getElementById("mySidebar");
  if (el) el.style.display = "block";
}

function w3_close() {
  const el = document.getElementById("mySidebar");
  if (el) el.style.display = "none";
}
