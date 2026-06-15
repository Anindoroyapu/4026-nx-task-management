"use client";

export default function Header() {
  const openSidebar = () => {
    const el = document.getElementById("mySidebar");
    if (el) el.style.display = "block";
  };

  const closeSidebar = () => {
    const el = document.getElementById("mySidebar");
    if (el) el.style.display = "none";
  };

  return (
    <>
      <nav>
        <div className="main-nav container-wide">
          <img className="logo" src="/assets/taxky.png" alt="Taxky" />
          <div className="nav-right">
            <ul>
              <li className="active"><a href="/">Home Page</a></li>
              <li><a href="/feature">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/about">Know Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <button
              className="mode-toggle"
              type="button"
              onClick={() => window.location.href = '/index-dark.html'}
            >
              <img src="/assets/sun-icon.svg" alt="" />
            </button>
          </div>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <div
          className="w3-sidebar w3-bar-block w3-border-right"
          style={{ display: "none", zIndex: 1000 }}
          id="mySidebar"
        >
          <div
            className="main-nav"
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "start",
              justifyItems: "start",
            }}
          >
            <button onClick={closeSidebar} className="w3-bar-item w3-large">
              Close &times;
            </button>
            <a href="/" className="nav-item active">Home Page</a>
            <a href="/feature">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">Know Us</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="mobile-header w3-white">
        <a
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
        </a>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="mode-toggle"
            type="button"
            onClick={() => window.location.href = '/index-dark.html'}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5833 10.3987C15.5836 10.9324 14.4417 11.2351 13.2292 11.2351C9.29092 11.2351 6.09827 8.04245 6.09827 4.10407C6.09827 2.89158 6.40087 1.74976 6.93469 0.750031C3.38971 1.58085 0.75 4.76264 0.75 8.56095C0.75 12.9916 4.34175 16.5834 8.77242 16.5834C12.5707 16.5834 15.7525 13.9437 16.5833 10.3987Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="w3-button w3-xlarge" onClick={openSidebar}>☰</button>
        </div>
      </div>
    </>
  );
}
