import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Send, Mail, Phone, Tag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

const teamMembers = [{
  name: "Sai Ram Pasupuleti",
  role: "Senior Software Engineer",
  image: ""
}, {
  name: "Sarang Dutta",
  role: "Software Engineer",
  image: "/lovable-uploads/4496320f-0d11-4572-9131-e251d52f705c.png"
}, {
  name: "Rounak Lakhani",
  role: "Sales & Marketing",
  image: "/lovable-uploads/7275f6a7-2f45-48a3-b6b0-0f5f29d1ca7c.png"
}];

const Index = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    referral: "",
    message: ""
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use the IFTTT webhook URL
      const response = await fetch("https://maker.ifttt.com/trigger/Form fill from caresanctum website/json/with/key/3Kzll6v5NOWEhpdn_KVVq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactForm)
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        toast({
          title: "Request Submitted",
          description: "We've received your request and will get back to you soon.",
        });
        
        setTimeout(() => {
          setShowContactForm(false);
          setFormSubmitted(false);
          setContactForm({
            name: "",
            email: "",
            phone: "",
            city: "",
            pincode: "",
            referral: "",
            message: ""
          });
        }, 3000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to submit",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <>
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
                  
                  {isJourneyExpanded ? <>
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
                    </> : null}
                  
                  <div className="text-center mt-6">
                    <Button variant="outline" onClick={() => setIsJourneyExpanded(!isJourneyExpanded)} className="px-8">
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
              {teamMembers.map(member => <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="bg-gray-200 w-full aspect-square flex items-center justify-center">
                      {member.image ? <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" /> : <span className="text-gray-400 text-5xl">👤</span>}
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-semibold text-primary text-lg">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mt-1">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                      <div className="text-center md:text-left space-y-6">
                        <h2 className="text-3xl font-bold text-primary">
                          Join Our Free Community!
                        </h2>
                        <p className="text-gray-600">
                          Get expert tips and tricks for healthy aging. Stay updated
                          with insights on elder care.
                        </p>
                        <div className="flex justify-center md:justify-start">
                          <Button 
                            onClick={() => window.open("https://chat.whatsapp.com/IMVCZjM0rVJCkmR4cs3nl4", "_blank")} 
                            className="px-8"
                          >
                            Join Community
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-purple-100 flex items-center justify-center">
                      <img alt="Seniors community" className="object-cover w-full h-full" src="/lovable-uploads/d9984abb-90eb-4bfe-b1ca-59c06e8deba5.jpg" />
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
                      <a href="mailto:shivaashi@caresanctum.com" className="text-secondary hover:underline">
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
                      <a href="tel:8591350250" className="text-secondary hover:underline">
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
                      Show your interest
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  {showContactForm ? <Card className="shadow-md">
                      <CardContent className="p-6">
                        {!formSubmitted ? <>
                            <h3 className="text-xl font-semibold text-primary mb-6">Get in Touch</h3>
                            <form onSubmit={handleContactSubmit} className="space-y-4">
                              <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                <Input id="name" placeholder="Your name" name="name" value={contactForm.name} onChange={handleInputChange} required />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <Input id="email" type="email" placeholder="Your email address" name="email" value={contactForm.email} onChange={handleInputChange} required />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                                <Input id="phone" type="tel" placeholder="Your phone number" name="phone" value={contactForm.phone} onChange={handleInputChange} required />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
                                <Input id="city" placeholder="Your city" name="city" value={contactForm.city} onChange={handleInputChange} required />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="pincode" className="text-sm font-medium text-gray-700">Pin Code</label>
                                <Input id="pincode" placeholder="Enter your 6-digit pin code" name="pincode" maxLength={6} pattern="[0-9]{6}" value={contactForm.pincode} onChange={handleInputChange} required />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="referral" className="text-sm font-medium text-gray-700">
                                  Referral Code <span className="text-gray-400 text-xs">(optional)</span>
                                </label>
                                <div className="relative">
                                  <Input 
                                    id="referral" 
                                    placeholder="Enter referral code if you have one" 
                                    name="referral" 
                                    value={contactForm.referral} 
                                    onChange={handleInputChange}
                                    className="pl-9"
                                  />
                                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary h-4 w-4" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <Textarea 
                                  id="message" 
                                  placeholder="How can we help you?" 
                                  name="message" 
                                  value={contactForm.message} 
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div className="flex space-x-4 pt-2">
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                  {isSubmitting ? "Submitting..." : "Request Callback"}
                                </Button>
                                <Button type="button" variant="outline" onClick={() => setShowContactForm(false)} className="w-full">
                                  Cancel
                                </Button>
                              </div>
                            </form>
                          </> : <div className="text-center py-12">
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
                          </div>}
                      </CardContent>
                    </Card> : <Card className="shadow-md bg-gradient-to-r from-purple-50 to-white">
                      <CardContent className="p-8">
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-primary mb-4">We'd Love to Hear from You</h3>
                          <p className="text-gray-600 mb-6">
                            Whether you have questions about our services, need assistance
                            with care options, or want to join our mission, we're here to help.
                          </p>
                          
                        </div>
                      </CardContent>
                    </Card>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>;
};
export default Index;
