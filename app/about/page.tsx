import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutCoreValues from "@/components/about/AboutCoreValues";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutFounder from "@/components/about/AboutFounder";
import AboutFounderWords from "@/components/about/AboutFounderWords";
import AboutConnect from "@/components/about/AboutConnect";

export const metadata = {
  title: "About Us | Sophian International",
  description:
    "At Sophian International, we are on a purpose to help individuals and organizations discover and embrace their inner calling in hospitality.",
};

export default function AboutPage() {
  return (
    <main>
      {/* <Navbar /> */}
      <AboutHero />
      <AboutWhatWeDo />
      <AboutPhilosophy />
      <AboutVisionMission />
      <AboutCoreValues />
      <AboutWhoWeAre />
      <AboutFounder />
      <AboutFounderWords />
      <AboutConnect />
      {/* <Footer /> */}
    </main>
  );
}
