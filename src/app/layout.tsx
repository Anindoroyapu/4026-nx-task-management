import type { Metadata } from "next";
import "./globals.css";
import "@/css/style.css";
import "@/css/style-light.css";
import "@/css/feature.css";
import "@/css/feature-dark.css";
import "@/css/pricing.css";
import "@/css/pricing-dark.css";
import "@/css/about.css";
import "@/css/about-dark.css";
import "@/css/contact.css";
import "@/css/contact-dark.css";

export const metadata: Metadata = {
  title: "Taxky - Task Management",
  description: "Task management platform for productive teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/5/w3.css"
          media="only screen and (max-width: 900px)"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
