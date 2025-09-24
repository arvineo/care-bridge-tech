
import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";
import QuickCheckOverview from "../components/QuickCheckOverview";
import QuickCheckCoreMuted from "../components/QuickCheckCoreMuted";
import QuickCheckCTASection from "../components/QuickCheckCTASection";
import WatchOnlyPlanHero from "../components/WatchOnlyPlanHero";

const Index = () => {
  useEffect(() => {
    document.title = "QuickCheck by CareSanctum | 30‑second welfare checks";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'QuickCheck offers 30‑second human‑verified welfare check‑ins for seniors. Just ₹7 per check. Peace of mind for busy families. NRI support coming soon.');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <WatchOnlyPlanHero />
        <Hero />
        <QuickCheckOverview />
        <QuickCheckCoreMuted />
        <StatsSection />
        <Features />
        <QuickCheckCTASection />
      </main>
    </>
  );
};

export default Index;
