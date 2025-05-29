
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-left space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Revolutionizing Senior Care with Technology
            </h1>
            <div className="text-gray-600 animate-slide-up">
              <p className="text-base">Welcome to Care Sanctum, where technology meets compassionate care to keep you connected with your parents. We lead the senior care revolution with a tech-first, responsive approach, ensuring seniors' safety, independence, and wellness while giving families peace of mind.</p>
              
              <p className="mt-4 text-base">
                We combine advanced technology with personalized care to address seniors' needs and offer a seamless experience. Our solutions empower seniors to lead enriched lives while staying connected with their loved ones. By anticipating challenges and delivering proactive care, we ensure the well-being of those who matter most, earning us the title of "Advanced 911 Service."
              </p>
              <p className="mt-4 text-base">
                Driven by a dedicated team of doctors, care providers, and tech innovators, Care Sanctum is committed to making this vision a reality. We ensure that every senior feels safe, valued, and cherished, delivering care with both heart and innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Book a Free Consultation Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/content">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img alt="Senior Care Technology" className="w-full h-full object-cover" src="/lovable-uploads/6e367f26-4d44-4c31-b537-7010d8879134.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
