import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchHero from "@/components/search/SearchHero";
import SearchClientGains from "@/components/search/SearchClientGains";
import SearchChallenge from "@/components/search/SearchChallenge";
import SearchWhoWeAre from "@/components/search/SearchWhoWeAre";
import SearchPhilosophy from "@/components/search/SearchPhilosophy";
import SearchValues from "@/components/search/SearchValues";
import SearchMandates from "@/components/search/SearchMandates";
import SearchApproach from "@/components/search/SearchApproach";
import SearchTestimonials from "@/components/search/SearchTestimonials";
import SearchTrustedBrands from "@/components/search/SearchTrustedBrands";
import SearchMethodology from "@/components/search/SearchMethodology";
import SearchWhySophian from "@/components/search/SearchWhySophian";
import SearchGlobalReach from "@/components/search/SearchGlobalReach";
import SearchContact from "@/components/search/SearchContact";

export const metadata = {
  title: "Executive Search & Advisory | Sophian International",
  description:
    "We appoint exceptional executives at the world's most prestigious ultra-luxury hotels, resorts, and lifestyle brands across Asia and beyond.",
};

export default function ExecutiveSearchPage() {
  return (
    <main>
      <Navbar />
      <SearchHero />
      <SearchClientGains />
      <SearchChallenge />
      <SearchWhoWeAre />
      <SearchPhilosophy />
      <SearchValues />
      <SearchMandates />
      <SearchApproach />
      <SearchTestimonials />
      <SearchTrustedBrands />
      <SearchMethodology />
      <SearchWhySophian />
      <SearchGlobalReach />
      <SearchContact />
      <Footer />
    </main>
  );
}
