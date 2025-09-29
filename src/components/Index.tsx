import Footer from "@/layout/Footer";
import Header from "../layout/Header";
import AboutSection from "./sections/AboutSection";
import BlogsSection from "./sections/BlogsSection";
import HeroSection from "./sections/HeroSection";
import LatestWork from "./sections/LatestWork";
import ServicesSection from "./sections/ServicesSection";
import StatsSection from "./sections/StatsSection";
import TestimonialSection from "./sections/TestimonialSection";
import TheDreamSection from "./sections/TheDreamSection";
import VideoSection from "./sections/VideoSection";
import WorkProgressSection from "./sections/WorkProgressSection";

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
        <TestimonialSection />
        <VideoSection />
        <WorkProgressSection />
        <TheDreamSection />
        <BlogsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
