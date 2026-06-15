"use client";

import { useState } from "react";
import DesktopNavDark from "./DesktopNavDark";
import SidebarDark from "./SidebarDark";
import MobileHeaderDark from "./MobileHeaderDark";

export default function HeaderDark() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <DesktopNavDark />
      <SidebarDark open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <MobileHeaderDark onMenuClick={() => setSidebarOpen(true)} />
    </>
  );
}
