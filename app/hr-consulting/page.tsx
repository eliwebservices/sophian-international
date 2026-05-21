import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultingHero from "@/components/consulting/ConsultingHero";
import ConsultingProblem from "@/components/consulting/ConsultingProblem";
import ConsultingSolutions from "@/components/consulting/ConsultingSolutions";
import ConsultingMethodology from "@/components/consulting/ConsultingMethodology";
import ConsultingInvestment from "@/components/consulting/ConsultingInvestment";
import ConsultingAdvisor from "@/components/consulting/ConsultingAdvisor";
import ConsultingNextStep from "@/components/consulting/ConsultingNextStep";
import ConsultingAbout from "@/components/consulting/ConsultingAbout";

export const metadata = {
  title: "HR Consulting | Sophian International",
  description:
    "We transform people challenges into your greatest competitive advantage in the world of exceptional service.",
};

export default function HRConsultingPage() {
  return (
    <main>
      {/* <Navbar /> */}
      <ConsultingHero />
      <ConsultingProblem />
      <ConsultingSolutions />
      <ConsultingMethodology />
      <ConsultingInvestment />
      <ConsultingAdvisor />
      <ConsultingNextStep />
      <ConsultingAbout />
      {/* <Footer /> */}
    </main>
  );
}
