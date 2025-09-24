import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Phone, Shield, Zap, RotateCcw } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

const WatchOnlyPlanHero = () => {
  // Images for the carousel - including smartwatch mockups and happy customers
  const carouselImages = [
    {
      src: "/lovable-uploads/happy-kids-with-smartwatches.jpg",
      alt: "Happy children using CareSanctum smartwatches with their families"
    },
    {
      src: "/lovable-uploads/happy-kids-with-smartwatches-2.jpg",
      alt: "Children showing off their CareSanctum smartwatches"
    },
    // Note: Additional smartwatch and customer images will be added here
    // when they become available in the project
  ];

  return (
    <section className="relative bg-gradient-to-br from-background via-background to-accent/10 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Watch Only Plan
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg">
                Safety for your child or parent with a simple smartwatch plan
              </p>
            </div>

            {/* Key Features - 4 compact badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Live check-ins and SOS routing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-3 h-3 text-primary" />
                </div>
                <span>SIM included and managed by us</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <RotateCcw className="w-3 h-3 text-primary" />
                </div>
                <span>Device support and quick replacements</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-primary" />
                </div>
                <span>Upgrade-ready hardware and software</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-primary">
                ₹399/month
              </div>
              <p className="text-sm text-muted-foreground">
                Billed monthly. Security deposit applies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/watch-only">Get Watch Only Plan</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Talk to an expert
                </Link>
              </Button>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/50">
              <span>24x7 assistance</span>
              <span>•</span>
              <span>Quick replacements</span>
              <span>•</span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Right Content - Auto-switching Image Carousel */}
          <div className="space-y-8">
            {/* Auto-switching image carousel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl p-4 lg:p-6">
                <ImageCarousel 
                  images={carouselImages}
                  autoSwitchInterval={4000}
                  className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
                />
              </div>
            </div>

            {/* Trust indicator */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Trusted by families across India</h3>
              <p className="text-sm text-muted-foreground">
                Join thousands of families who trust CareSanctum for their loved ones' safety
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchOnlyPlanHero;