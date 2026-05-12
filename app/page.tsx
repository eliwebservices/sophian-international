import Navbar from "@/components/Navbar";
import HomeHero from "@/components/home/HomeHero";
import HomeStakes from "@/components/home/HomeStakes";
import HomeAssessment from "@/components/home/HomeAssessment";
import HomeFounder from "@/components/home/HomeFounder";
import HomeServices from "@/components/home/HomeServices";
import HomeImageStrip from "@/components/home/HomeImageStrip";
import HomeProof from "@/components/home/HomeProof";
import HomePlan from "@/components/home/HomePlan";
import HomeExplanation from "@/components/home/HomeExplanation";
import HomeContact from "@/components/home/HomeContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <HomeHero />
      <HomeStakes />
      <HomeFounder />
      <HomeServices />
      <HomeImageStrip />
      <HomeProof />
      <HomeAssessment />
      <HomePlan />
      <HomeExplanation />
      <HomeContact />
      <Footer />
    </main>
  );
}
