import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesProblem from "@/components/resources/ResourcesProblem";
import ResourcesStakes from "@/components/resources/ResourcesStakes";
import ResourcesGuide from "@/components/resources/ResourcesGuide";
import ResourcesPlan from "@/components/resources/ResourcesPlan";
import ResourcesSteps from "@/components/resources/ResourcesSteps";
import ResourcesGains from "@/components/resources/ResourcesGains";
import ResourcesRequest from "@/components/resources/ResourcesRequest";
import ResourcesBoundaries from "@/components/resources/ResourcesBoundaries";

export const metadata = {
  title: "Free Career Clarity Support | Sophian International",
  description:
    "Feeling stuck in your hospitality career? Share your situation and receive one free clarity check — career direction, resume structure, and answers to your most important questions.",
};

export default function FreeResourcesPage() {
  return (
    <main>
      <Navbar />
      <ResourcesHero />
      <ResourcesProblem />
      <ResourcesStakes />
      <ResourcesGuide />
      <ResourcesPlan />
      <ResourcesSteps />
      <ResourcesGains />
      <ResourcesRequest />
      <ResourcesBoundaries />
      <Footer />
    </main>
  );
}
