import "@/../css/style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DarkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
