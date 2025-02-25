
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const partnershipTypes = [
  {
    title: "Healthcare Providers",
    description: "Partner with us to provide seamless senior care services.",
    benefits: [
      "Access to our technology platform",
      "Integration with our care network",
      "Joint marketing opportunities",
    ],
  },
  {
    title: "Investors",
    description: "Join our journey to revolutionize elder care through technology.",
    benefits: [
      "High-growth potential",
      "Social impact investment",
      "Tech-enabled scalability",
    ],
  },
  {
    title: "Senior Communities",
    description: "Enhance safety & well-being for your residents.",
    benefits: [
      "Smart monitoring solutions",
      "Emergency response integration",
      "Community wellness programs",
    ],
  },
];

const Partnership = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Partner With Us
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join us in revolutionizing senior care through innovation and
                collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {partnershipTypes.map((type) => (
                <Card key={type.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-600">
                          <span className="bg-secondary/10 rounded-full w-2 h-2 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                    Get in Touch
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Name" />
                      <Input placeholder="Organization" />
                    </div>
                    <Input type="email" placeholder="Email" />
                    <Input type="tel" placeholder="Phone Number" />
                    <Textarea placeholder="Tell us about your interest in partnership" />
                    <Button className="w-full">Submit</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Partnership;
