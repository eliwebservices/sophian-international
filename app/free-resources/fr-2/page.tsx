import ResourcesHero from "@/components/freeResources/FrHero";
import ResourcesPacks from "@/components/freeResources/FrPacks";
import ResourcesDiagnostic from "@/components/freeResources/FrDiagnostics";
import ResourcesLibrary from "@/components/freeResources/FrLibrary";
import ResourcesRequest from "@/components/freeResources/FrRequest";
import ResourcesFAQ from "@/components/freeResources/FrFAQ";

export default function FreeResourcesPage() {
  return (
    <main>
      <ResourcesHero />
      <ResourcesPacks />
      <ResourcesDiagnostic />
      <ResourcesLibrary />
      <ResourcesRequest />
      <ResourcesFAQ />
    </main>
  );
}