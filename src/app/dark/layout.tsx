import "@/../css/style.css";
import HeaderDark from "@/components/HeaderDark";
import Footer from "@/components/Footer";

export default function DarkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderDark />
      {children}
      <Footer />
    </>
  );
}
