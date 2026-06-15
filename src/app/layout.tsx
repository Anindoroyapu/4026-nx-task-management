import type { Metadata } from "next";
import "../../css/style-light.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Taxky - Task Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="page-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
