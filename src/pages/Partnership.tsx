
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { CheckCircle } from "lucide-react";

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
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { submitForm, isSubmitting } = useFormSubmission();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitForm({
      form_type: "partnership",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      message: formData.message,
      source: "partnership_page"
    }, "https://hooks.zapier.com/hooks/catch/21963646/2q8vxf8/");

    if (result.success) {
      setIsSubmitted(true);
    }
  };

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
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <div className="bg-green-100 text-green-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                        <CheckCircle className="h-10 w-10" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">Thank You!</h3>
                      <p className="text-gray-600 text-center max-w-md">
                        Your partnership request has been submitted. Our team will contact you shortly to discuss opportunities.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)} 
                        variant="outline"
                        className="mt-4"
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                          <Input 
                            name="name" 
                            id="name"
                            placeholder="Name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="organization" className="text-sm font-medium text-gray-700">Organization</label>
                          <Input 
                            name="organization" 
                            id="organization"
                            placeholder="Organization" 
                            value={formData.organization}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <Input 
                          name="email" 
                          id="email"
                          type="email" 
                          placeholder="Email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                        <Input 
                          name="phone" 
                          id="phone"
                          type="tel" 
                          placeholder="Phone Number" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Interest</label>
                        <Textarea 
                          name="message" 
                          id="message"
                          placeholder="Tell us about your interest in partnership" 
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </form>
                  )}
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
