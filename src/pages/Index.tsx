
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Send, Mail, Phone } from "lucide-react";
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
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);

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
                  
                  {isJourneyExpanded ? (
                    <>
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
                      
                      <p className="text-gray-600 mb-4">
                        Care Sanctum is not just a company; it's a mission to empower families and improve the lives of seniors. With a leadership team dedicated to turning this vision into reality, Care Sanctum stands as a promise—a promise to ensure that every senior can live their golden years with independence, dignity, and joy.
                      </p>
                    </>
                  ) : null}
                  
                  <div className="text-center mt-6">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsJourneyExpanded(!isJourneyExpanded)}
                      className="px-8"
                    >
                      {isJourneyExpanded ? "Read Less" : "Read More"}
                    </Button>
                  </div>
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Contact Us
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Email Us</h3>
                      <a 
                        href="mailto:shivaashi@caresanctum.com" 
                        className="text-secondary hover:underline"
                      >
                        shivaashi@caresanctum.com
                      </a>
                      <p className="text-gray-500 mt-2 text-sm">
                        We'll respond to your inquiry within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
                      <a 
                        href="tel:8591350250" 
                        className="text-secondary hover:underline"
                      >
                        +91 859 135 0250
                      </a>
                      <p className="text-gray-500 mt-2 text-sm">
                        Available Monday-Friday, 9am-6pm IST
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      onClick={() => setShowContactForm(true)}
                      className="w-full"
                      variant="outline"
                    >
                      Send Us a Message
                    </Button>
                  </div>
                </div>
                
                <div>
                  {showContactForm ? (
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        {!formSubmitted ? (
                          <>
                            <h3 className="text-xl font-semibold text-primary mb-6">Get in Touch</h3>
                            <form onSubmit={handleContactSubmit} className="space-y-4">
                              <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                <Input
                                  id="name"
                                  placeholder="Your name"
                                  name="name"
                                  value={contactForm.name}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="Your email address"
                                  name="email"
                                  value={contactForm.email}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                                <Input
                                  id="phone"
                                  type="tel"
                                  placeholder="Your phone number"
                                  name="phone"
                                  value={contactForm.phone}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="pincode" className="text-sm font-medium text-gray-700">Pincode</label>
                                <Input
                                  id="pincode"
                                  placeholder="Your pincode"
                                  name="pincode"
                                  value={contactForm.pincode}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="flex space-x-4 pt-2">
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
                          </>
                        ) : (
                          <div className="text-center py-12">
                            <div className="bg-green-100 text-green-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">
                              Thank You!
                            </h3>
                            <p className="text-gray-600">
                              Your message has been received. Our team will get back to you shortly.
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="shadow-md bg-gradient-to-r from-purple-50 to-white">
                      <CardContent className="p-8">
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-primary mb-4">We'd Love to Hear from You</h3>
                          <p className="text-gray-600 mb-6">
                            Whether you have questions about our services, need assistance
                            with care options, or want to join our mission, we're here to help.
                          </p>
                          <img 
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500"
                            alt="Contact Care Sanctum"
                            className="rounded-lg mx-auto shadow-md mb-6"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
