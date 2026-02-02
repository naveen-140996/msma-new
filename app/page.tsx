import Hero from "@/app/src/components/Hero"
import ServicesOverview from "./src/components/ServicesOverview";
import PerformanceSection from "./src/components/PerformanceSection";
import TechnologyStack from "./src/components/TechnologyStack";
import ProcessBlueprint from "./src/components/ProcessBlueprint";
export default function Home() {
  return (
<main className="min-h-screen">
    <Hero />
    <ServicesOverview />
    <PerformanceSection />
    <TechnologyStack />
    <ProcessBlueprint />
</main>
  );
}
