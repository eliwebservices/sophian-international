import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrainingHero from "@/components/training/TrainingHero";
import TrainingChallenge from "@/components/training/TrainingChallenge";
import TrainingWhoWeAre from "@/components/training/TrainingWhoWeAre";
import TrainingImpact from "@/components/training/TrainingImpact";
import TrainingDifferentiators from "@/components/training/TrainingDifferentiators";
import TrainingPillars from "@/components/training/TrainingPillars";
import TrainingPrograms from "@/components/training/TrainingPrograms";
import TrainingSignature from "@/components/training/TrainingSignature";
import TrainingMethodology from "@/components/training/TrainingMethodology";
import TrainingCTA from "@/components/training/TrainingCTA";

export const metadata = {
  title: "Corporate Training | Sophian International",
  description:
    "Train your team for competence in the role. Develop their potential for leadership. Build the internal capability that defines a world-class hospitality organization.",
};

export default function CorporateTrainingPage() {
  return (
    <main>
      {/* <Navbar /> */}
      <TrainingHero />
      <TrainingChallenge />
      <TrainingWhoWeAre />
      <TrainingImpact />
      <TrainingDifferentiators />
      <TrainingPillars />
      <TrainingPrograms />
      <TrainingSignature />
      <TrainingMethodology />
      <TrainingCTA />
      {/* <Footer /> */}
    </main>
  );
}
