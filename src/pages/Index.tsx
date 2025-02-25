
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const foundersStory = {
  title: "Our Journey",
  content: `CareSanctum was born from a deeply personal experience. Our founders, Chandrima Mehra and Arvind Karna, witnessed firsthand the challenges of providing quality care for aging parents while managing their careers. This experience led them to envision a technology-driven solution that would revolutionize senior care.

  Together with Dr. Shwet Sabnis, they built CareSanctum to bridge the gap between traditional caregiving and modern technology. Their mission is to empower seniors to live independently while providing families with peace of mind through innovative care solutions.`,
  vision: "To transform senior care through technology, making it more accessible, reliable, and personalized for every family.",
};

const extendedTeam = [
  {
    name: "Dr. Sarah Patel",
    role: "Head of Medical Operations",
    image: "/lovable-uploads/c0e8a5eb-8a7c-47cd-8539-e8c485e65196.png",
  },
  {
    name: "Raj Kumar",
    role: "Tech Innovation Lead",
    image: "/lovable-uploads/65bc6a87-0813-4dce-be19-c35df23cf73f.png",
  },
  {
    name: "Priya Singh",
    role: "Care Coordination Manager",
    image: "/lovable-uploads/69165008-873b-4a06-900c-83f10a11d07d.png",
  },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Team />

        {/* Founders Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                {foundersStory.title}
              </h2>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-gray-600 whitespace-pre-line mb-6">
                    {foundersStory.content}
                  </p>
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <p className="text-primary font-semibold">Our Vision</p>
                    <p className="text-gray-600 mt-2">{foundersStory.vision}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Extended Team Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Leadership Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the experts driving innovation in senior care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {extendedTeam.map((member) => (
                <Card
                  key={member.name}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover"
                    />
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
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold text-primary">
                      Join Our Free Community!
                    </h2>
                    <p className="text-gray-600">
                      Get expert tips and tricks for healthy aging. Stay updated
                      with insights on elder care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                      <Input placeholder="Enter your email" type="email" />
                      <Button>
                        Join Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
