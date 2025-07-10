
import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";

const Index = () => {
  useEffect(() => {
    document.title = "Buy best Health Devices for Seniors | Caresanctum";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover smart health devices for seniors in India. Caresanctum helps NRI families stay connected to aging parents with remote care and monitoring solutions.');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Features />
      </main>
    </>
  );
};

export default Index;
