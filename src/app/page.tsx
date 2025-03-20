import { HeroSection } from "./pages/home/hero/HeroSection";
import { ServicesSection } from "./pages/home/services/ServicesSection";

export default function Home() {
  return (
    <div className="bg-fourth">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
