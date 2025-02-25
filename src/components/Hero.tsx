
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <img
            src="/lovable-uploads/1db71012-aaa3-4d8e-b3ee-5a955eadb071.png"
            alt="CareSanctum"
            className="h-24 md:h-32 mb-6 animate-slide-up"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Revolutionizing Senior Care with Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl animate-slide-up">
            Where compassionate care meets cutting-edge technology. We provide
            comprehensive senior care solutions that ensure safety, independence,
            and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
