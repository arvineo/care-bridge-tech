
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import HowItWorksModal from "./HowItWorksModal";

const Hero = () => {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/30 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Peace of Mind in 30 Seconds – QuickCheck for Your Loved Ones
            </h1>
            <p className="text-sm text-muted-foreground">Where Tech Meets Compassionate Care</p>
            <p className="text-gray-600 text-base">
              When they can’t reach you, we step in to ensure they’re safe — so you can focus on what matters without the worry.
            </p>

            <div className="bg-primary/10 rounded-lg p-3 mb-4 text-center">
              <p className="text-sm font-medium text-primary">🎉 Limited Time: Get your first QuickCheck FREE!</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.lucitang.QuickCheck" target="_blank" rel="noopener noreferrer">
                  Get QuickCheck Trial Pack @ INR 50 Only
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => setShowHowItWorks(true)}
              >
                How It Works
              </Button>
            </div>
          </div>

          <div className="relative h-[420px] rounded-lg overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 gap-3 h-full">
              {/* App mockup */}
              <div className="flex items-center justify-center bg-background p-4">
                <div className="w-56 h-[360px] rounded-[2rem] border shadow-lg bg-white relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-6 bg-muted/40" />
                  <div className="p-4 pt-8">
                    <div className="text-xs text-muted-foreground mb-1">QuickCheck</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-medium">Active check-in alert</span>
                    </div>
                    <div className="rounded-xl border bg-gradient-to-br from-secondary/30 to-accent/20 p-4">
                      <div className="font-semibold text-primary mb-1">Welfare Check</div>
                      <p className="text-xs text-gray-600">We’re verifying their well‑being. You’ll get an update within 30 seconds.</p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      <button className="rounded-md border bg-background px-3 py-2">Remind me</button>
                      <button className="rounded-md bg-primary text-primary-foreground px-3 py-2">View status</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emotional photo */}
              <img
                alt="Family welfare check in progress"
                className="w-full h-full object-cover"
                src="/lovable-uploads/6e367f26-4d44-4c31-b537-7010d8879134.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <HowItWorksModal 
        open={showHowItWorks} 
        onOpenChange={setShowHowItWorks} 
      />
    </div>
  );
};

export default Hero;
