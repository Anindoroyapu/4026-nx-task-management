import "../../../css/style-light.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LightLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
