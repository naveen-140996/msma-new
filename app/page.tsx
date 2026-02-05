import Hero from "@/app/src/components/Hero"
import ServicesOverview from "./src/components/ServicesOverview";
import PerformanceSection from "./src/components/PerformanceSection";
import TechnologyStack from "./src/components/TechnologyStack";
import ProcessBlueprint from "./src/components/ProcessBlueprint";
import CoreCapabilities from "./src/components/CoreCapabilities";
import AboutUs from "./src/components/AboutUs";
import PerformanceShowcase from "./src/components/PerformanceShowcase";
import Testimonials from "./src/components/Testimonials";
export default function Home() {
  return (
<main className="min-h-screen">
    <Hero />
    {/* <ServicesOverview /> */}
    <AboutUs />
    <CoreCapabilities />
    <PerformanceShowcase />
    {/* <PerformanceSection /> */}
    <TechnologyStack />
    <ProcessBlueprint />
    <Testimonials />
</main>
  );
}
