"use client";

import { useState } from "react";
import DesktopNav from "./DesktopNav";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <DesktopNav />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <MobileHeader onMenuClick={() => setSidebarOpen(true)} />
    </>
  );
}
