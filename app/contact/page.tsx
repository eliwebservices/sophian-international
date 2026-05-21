import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactPathways from "@/components/contact/ContactPathways";
import ContactPosition from "@/components/contact/ContactPosition";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactNextSteps from "@/components/contact/ContactNextSteps";
import ContactDiscovery from "@/components/contact/ContactDiscovery";
import ContactCredibility from "@/components/contact/ContactCredibility";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata = {
  title: "Contact | Sophian International",
  description:
    "The right conversation, at the right moment. Begin a confidential dialogue with Sophian International.",
};

export default function ContactPage() {
  return (
    <main>
      {/* <Navbar /> */}
      <ContactHero />
      <ContactPathways />
      <ContactPosition />
      <ContactDetails />
      <ContactForm />
      <ContactNextSteps />
      <ContactDiscovery />
      <ContactCredibility />
      <ContactFAQ />
      {/* <Footer /> */}
    </main>
  );
}
