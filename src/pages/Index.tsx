
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Sai Ram Pasupuleti",
    role: "Senior Software Engineer",
    image: "",
  },
  {
    name: "Sarang Dutta",
    role: "Software Engineer",
    image: "",
  },
  {
    name: "Rounak Lakhani",
    role: "Sales & Marketing",
    image: "",
  },
];

const Index = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send to dummy webhook for now
    fetch("https://webhook.example.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    }).then(() => {
      setFormSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setFormSubmitted(false);
        setContactForm({
          name: "",
          email: "",
          phone: "",
          pincode: "",
        });
      }, 3000);
    });
  };

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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Our Journey
              </h2>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                    Meet the Founders and Leadership Team: Chandrima Mehra, Arvind Karna & Dr. Shwet Sabnis
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    The journey of Care Sanctum is one rooted in a deep passion for redefining senior care in India. It all began with two visionaries—<strong>Chandrima Mehra</strong> and <strong>Arvind Karna</strong>—who were brought together by shared values and a commitment to making a difference in the lives of seniors.
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    <strong>What truly brought these two dynamic leaders together wasn't just their professional skills, but a deeply personal journey.</strong> Both Arvind and Chandrima, balancing demanding careers, found themselves living away from their hometowns, constantly worried about their aging parents. Their quest for reliable, tech-driven solutions to provide their parents with the best care ignited their passion to create a better future for seniors in India. This personal experience became the foundation for Care Sanctum.
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    <strong>Arvind Karna</strong>, an engineer and product visionary, is the driving force behind Care Sanctum's technological innovations. With an innate ability to identify customer pain points and transform them into practical solutions, Arvind's expertise lies in blending technology with empathy. This unique combination ensures that Care Sanctum's offerings not only meet the practical needs of seniors but also provide emotional support to families who want peace of mind.
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    <strong>Chandrima Mehra</strong>, a seasoned L&D professional and creative strategist, has been instrumental in shaping Care Sanctum's approach. With a career defined by a constant quest for innovation and a deep understanding of the value of empathy, Chandrima brings a fresh, creative perspective to senior care. Her ability to think beyond the traditional approach ensures that Care Sanctum remains at the forefront of industry trends and future-focused solutions.
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    But the story of Care Sanctum is incomplete without the key addition of <strong>Dr. Shwet Sabnis</strong>, a seasoned medical expert in geriatrics. Dr. Sabnis first heard about Care Sanctum's vision from Chandrima and Arvind and was immediately drawn to the mission. His passion for improving the quality of life for geriatric patients, combined with his expertise in addressing the unique health challenges of aging, made him the perfect fit to join the team. With his medical credentials, including M.B.B.S, M.D in Geriatrics, and a fellowship in Gastrointestinal Endoscopy, Dr. Sabnis is now the driving force behind Care Sanctum's medical innovation.
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    As the <strong>Chief Medical Officer</strong>, Dr. Sabnis spearheads the development of solutions that are not only innovative but also medically sound. His expertise in geriatrics ensures that Care Sanctum offers holistic care tailored to the specific needs of seniors, addressing their health concerns and improving their overall well-being. With Dr. Sabnis onboard, Care Sanctum's mission is further strengthened by the integration of cutting-edge medical advancements in senior care.
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    Together, <strong>Chandrima, Arvind, and Dr. Shwet Sabnis</strong> form the core leadership team at Care Sanctum. Their combined expertise—ranging from technology and product development to medical care and geriatrics—ensures that Care Sanctum is uniquely positioned to redefine the senior care landscape in India. Each leader brings their own passion and vision to the table, creating an environment where innovation, compassion, and quality of life converge.
                  </p>
                  
                  <p className="text-gray-600">
                    Care Sanctum is not just a company; it's a mission to empower families and improve the lives of seniors. With a leadership team dedicated to turning this vision into reality, Care Sanctum stands as a promise—a promise to ensure that every senior can live their golden years with independence, dignity, and joy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Talented professionals committed to our mission
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <Card
                  key={member.name}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="bg-gray-200 w-full aspect-square flex items-center justify-center">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full aspect-square object-cover"
                        />
                      ) : (
                        <span className="text-gray-400 text-5xl">👤</span>
                      )}
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
                    <div className="flex justify-center">
                      <Button 
                        onClick={() => window.open("https://forms.gle/s1mBQYRbPwb2Dbsy6", "_blank")}
                        className="px-8"
                      >
                        Join Community
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Contact Us
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:connect@caresanctum.com" className="text-secondary hover:underline">
                    connect@caresanctum.com
                  </a>
                </p>
                <p className="text-lg">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:8591350250" className="text-secondary hover:underline">
                    8591350250
                  </a>
                </p>
              </div>
              
              {!showContactForm ? (
                <Button 
                  onClick={() => setShowContactForm(true)}
                  className="px-8"
                >
                  Contact Us
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    {!formSubmitted ? (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <Input
                          placeholder="Name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          placeholder="Pincode"
                          name="pincode"
                          value={contactForm.pincode}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="flex space-x-4">
                          <Button type="submit" className="w-full">Submit</Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setShowContactForm(false)}
                            className="w-full"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-xl text-green-600 font-semibold">
                          Thank you! Our team will get back to you soon.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
