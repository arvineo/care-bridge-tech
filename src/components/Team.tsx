
import { Card, CardContent } from "./ui/card";
import { Linkedin } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const teamMembers = [
  {
    name: "Chandrima Mehra",
    role: "Cofounder & CEO",
    image: "/lovable-uploads/c0e8a5eb-8a7c-47cd-8539-e8c485e65196.png",
    linkedin: "#",
  },
  {
    name: "Arvind Karna",
    role: "Cofounder, Product & Technology",
    image: "/lovable-uploads/65bc6a87-0813-4dce-be19-c35df23cf73f.png",
    linkedin: "#",
  },
  {
    name: "Dr. Shwet Sabnis",
    role: "Medical Innovations, M.B.B.S, M.D Geriatrics, FGIE",
    image: "/lovable-uploads/69165008-873b-4a06-900c-83f10a11d07d.png",
    linkedin: "#",
  },
];

const Team = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals committed to revolutionizing senior care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-primary text-lg">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Founders Story Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Founders' Story</h2>
              <p className="text-gray-600">How CareSanctum was born from personal experience</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">
                Behind CareSanctum, India's pioneering tech-first senior care solution, is the heartfelt story of three visionaries—Chandrima Mehra, Arvind Karna, and Dr. Shwet V. Sabnis—bound by shared values and a deep-seated passion for reimagining senior living.
              </p>
              
              {isExpanded && (
                <>
                  <p className="text-gray-700 mb-4">
                    Arvind, an engineer by profession and a product visionary, possesses an innate ability to identify customer pain points and transform them into impactful solutions. His expertise in blending technology with empathy makes him the cornerstone of CareSanctum's innovative approach.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Chandrima, a seasoned L&D veteran with a flair for art and literature, is a powerhouse of creativity and strategic thought. Her career has been defined by a constant quest to explore new methodologies, embrace cutting-edge technologies, and push boundaries in her domain. Her leadership drives the vision and expansion of CareSanctum, ensuring it remains at the forefront of innovation in eldercare.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Dr. Shwet V. Sabnis, M.B.B.S, M.D Geriatrics, joined CareSanctum after an insightful discussion with Chandrima and Arvind, realizing the immense potential of a tech-driven approach to senior care. As Chief Medical Advisor, he spearheads medical innovation and research for the preemptive response system. With a strong lineage in the medical field, his expertise ensures that CareSanctum's healthcare solutions are robust, proactive, and aligned with the highest standards of geriatric care.
                  </p>
                  <p className="text-gray-700 mb-4">
                    What truly unites these three dynamic leaders is a shared mission to create a safety net for seniors—one that is proactive, intelligent, and deeply compassionate. CareSanctum is more than just a venture for them; it's a personal commitment to improving the lives of seniors and bringing peace of mind to their families.
                  </p>
                  <p className="text-gray-700">
                    Together, Chandrima, Arvind, and Dr. Shwet are working relentlessly to shape a tech-first initiative, a revolution in the senior care space. Their mission is to harness technology to enhance health monitoring and simplify eldercare, especially for children living in different cities away from their parents. With their complementary strengths and unwavering dedication, they are positioning CareSanctum as India's most trusted eldercare solution, where technology meets humanity to create a future where every senior feels safe, cared for, and valued.
                  </p>
                </>
              )}
              
              <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="mt-4 font-medium">
                {isExpanded ? "Read Less" : "Read More"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
