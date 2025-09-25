import Header from "../layout/Header";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import LatestWork from "./sections/LatestWork";
import ServicesSection from "./sections/ServicesSection";
import StatsSection from "./sections/StatsSection";

const Index = () => {
  return (
    <div>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LatestWork />
        <StatsSection />
      </main>
    </div>
  );
};

export default Index;
