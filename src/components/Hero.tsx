
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-left space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Revolutionizing Senior Care with Technology
            </h1>
            <div className="text-lg md:text-xl text-gray-600 animate-slide-up">
              <p>
                Welcome to Care Sanctum, where we bridge the gap between you and your parents through cutting-edge technology and compassionate care. Our mission is to lead the senior care revolution with a tech-first, responsive, and anticipatory approach, ensuring the safety, independence, and wellness of seniors while providing peace of mind to their families.
              </p>
              
              {isExpanded && (
                <>
                  <p className="mt-4">
                    We combine advanced technology with personalized care to address seniors' needs and offer a seamless experience. Our solutions empower seniors to lead enriched lives while staying connected with their loved ones. By anticipating challenges and delivering proactive care, we ensure the well-being of those who matter most, earning us the title of "Advanced 911 Service."
                  </p>
                  <p className="mt-4">
                    Driven by a dedicated team of doctors, care providers, and tech innovators, Care Sanctum is committed to making this vision a reality. We ensure that every senior feels safe, valued, and cherished, delivering care with both heart and innovation.
                  </p>
                </>
              )}
              
              <Button 
                variant="link" 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="mt-4 font-medium"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
              alt="Senior Care Technology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
