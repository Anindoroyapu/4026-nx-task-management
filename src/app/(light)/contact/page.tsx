import "@/../css/contact.css";
import ContactHero from "@/components/contact/ContactHero";
import OfficeSection from "@/components/contact/OfficeSection";
import MessageForm from "@/components/contact/MessageForm";
import ContactCtaSection from "@/components/contact/ContactCtaSection";

export default function ContactPage() {
  return (
    <>
      <main className="contact-page">
        <img className="vector v-left" src="/assets/imgVector.svg" alt="" />
        <img className="vector v-right" src="/assets/imgVector.svg" alt="" />
        <ContactHero />
        <section className="middle container-1480">
          <OfficeSection />
          <MessageForm />
        </section>
      </main>
      <ContactCtaSection />
    </>
  );
}
