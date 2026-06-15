import { SidebarNavLinks } from "./NavLinks";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div style={{ display: "flex", justifyContent: "start", backgroundColor: "black", width: "100%" }}>
      <div
        className="w3-sidebar w3-bar-block w3-border-right"
        style={{ display: open ? "block" : "none", zIndex: 1000 }}
      >
        <div
          className="main-nav"
          style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "start" }}
        >
          <button onClick={onClose} className="w3-bar-item w3-large">
            Close &times;
          </button>
          <SidebarNavLinks />
        </div>
      </div>
    </div>
  );
}
