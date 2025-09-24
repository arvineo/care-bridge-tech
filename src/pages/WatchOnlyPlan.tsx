import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

const WatchOnlyPlan = () => {
  useEffect(() => {
    document.title = "Watch Only Plan | CareSanctum - Smartwatch Safety Plan";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Watch Only Plan by CareSanctum - A simple, managed smartwatch plan with SIM, support, and upgrades included. Get peace of mind without the hassle of ownership.');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Watch Only Plan
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              A simple, managed smartwatch plan with SIM, support, and upgrades included. 
              Get peace of mind without the hassle of ownership.
            </p>

            <div className="pt-8">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">Get started</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold">SIM Included</h3>
                <p className="text-muted-foreground">Managed connectivity with no setup hassle</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-lg font-semibold">Full Support</h3>
                <p className="text-muted-foreground">24x7 assistance and quick replacements</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold">Always Updated</h3>
                <p className="text-muted-foreground">Upgrade-ready hardware and software</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WatchOnlyPlan;