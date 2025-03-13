
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
            <div className="text-gray-600 animate-slide-up">
              <p className="text-base">Welcome to Care Sanctum, where technology meets compassionate care to keep you connected with your parents. We lead the senior care revolution with a tech-first, responsive approach, ensuring seniors' safety, independence, and wellness while giving families peace of mind.</p>
              
              {isExpanded && (
                <>
                  <p className="mt-4 text-base">
                    We combine advanced technology with personalized care to address seniors' needs and offer a seamless experience. Our solutions empower seniors to lead enriched lives while staying connected with their loved ones. By anticipating challenges and delivering proactive care, we ensure the well-being of those who matter most, earning us the title of "Advanced 911 Service."
                  </p>
                  <p className="mt-4 text-base">
                    Driven by a dedicated team of doctors, care providers, and tech innovators, Care Sanctum is committed to making this vision a reality. We ensure that every senior feels safe, valued, and cherished, delivering care with both heart and innovation.
                  </p>
                </>
              )}
              
              <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="mt-4 font-medium">
                {isExpanded ? "Read Less" : "Read More"}
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img alt="Senior Care Technology" className="w-full h-full object-cover" src="/lovable-uploads/6e367f26-4d44-4c31-b537-7010d8879134.jpg" />
          </div>
        </div>
      </div>

      {/* Founders Story Section */}
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Founders' Story</h2>
            <p className="text-gray-600">How CareSanctum was born from personal experience</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-700 mb-4">
              CareSanctum began when Chandrima struggled with caring for her elderly parents living in a different city. The constant worry and challenges of coordination led her to reimagine senior care.
            </p>
            <p className="text-gray-700 mb-4">
              Together with co-founder Arvind, who brought his technology expertise, they created a platform that addresses the unique needs of seniors and their families by bridging technology and compassionate care.
            </p>
            <p className="text-gray-700 mb-4">
              Dr. Shwet Sabnis joined the team, adding extensive medical expertise in geriatrics. His knowledge ensured that our solutions were not just technologically advanced but also medically sound for senior health and wellness.
            </p>
            <p className="text-gray-700">
              Today, CareSanctum is revolutionizing senior care by making it accessible, responsive, and personalized while giving families the peace of mind they deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
