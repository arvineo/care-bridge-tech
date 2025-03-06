
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Tag, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const locations = [
  { city: "Mumbai", status: "Current" },
  { city: "Goa", status: "Upcoming" },
  { city: "Bengaluru", status: "Upcoming" },
  { city: "Hyderabad", status: "Upcoming" },
  { city: "Delhi NCR", status: "Upcoming" },
  { city: "Kolkata", status: "Upcoming" },
  { city: "Chennai", status: "Upcoming" },
  { city: "Pune", status: "Upcoming" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    referral: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://maker.ifttt.com/trigger/Form fill from caresanctum website/json/with/key/3Kzll6v5NOWEhpdn_KVVq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Request Submitted",
          description: "We've received your request and will get back to you soon.",
        });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Failed to submit",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
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
                Contact Us
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get in touch with us for any queries or assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Show Your Interest
                  </h2>
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <div className="bg-green-100 text-green-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                        <CheckCircle className="h-10 w-10" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">Thank You!</h3>
                      <p className="text-gray-600 text-center max-w-md">
                        Your request has been submitted. Our team will contact you shortly.
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
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          value={formData.name}
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
                          value={formData.email}
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
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
                        <Input 
                          id="city" 
                          type="text" 
                          placeholder="Your city" 
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="pincode" className="text-sm font-medium text-gray-700">Pin Code</label>
                        <Input 
                          id="pincode" 
                          type="text" 
                          placeholder="Enter your 6-digit pin code" 
                          maxLength={6}
                          pattern="[0-9]{6}"
                          className="font-medium tracking-wider"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="referral" className="text-sm font-medium text-gray-700">
                          Referral Code <span className="text-gray-400 text-xs">(optional)</span>
                        </label>
                        <div className="relative">
                          <Input 
                            id="referral" 
                            type="text" 
                            placeholder="Enter referral code if you have one"
                            className="pl-9"
                            value={formData.referral}
                            onChange={handleInputChange}
                          />
                          <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary h-4 w-4" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <Textarea 
                          id="message" 
                          placeholder="How can we help you?" 
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Request Callback"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800" 
                    alt="Contact us" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">Email</h3>
                          <a
                            href="mailto:shivaashi@caresanctum.com"
                            className="text-secondary hover:underline"
                          >
                            shivaashi@caresanctum.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">Phone</h3>
                          <a
                            href="tel:8591350250"
                            className="text-secondary hover:underline"
                          >
                            +91 859 135 0250
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-6">
                    Our Locations
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {locations.map((location) => (
                      <div
                        key={location.city}
                        className="flex items-center space-x-2"
                      >
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>
                          {location.city}
                          {location.status === "Current" && (
                            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
